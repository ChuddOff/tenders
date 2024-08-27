import { PrismaAdapter } from "@auth/prisma-adapter";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import { type Adapter } from "next-auth/adapters";

import { db } from "@/server/db";
import type { Role } from "@prisma/client";

import CredentialsProvider from "next-auth/providers/credentials";
import { LoginSchema } from "@/validators/zod";
import { z } from "zod";

import bcrypt from "bcryptjs";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      role: Role;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
    signOut: "/login",
    error: "/login",
  },
  session: { strategy: "jwt" },
  callbacks: {
    jwt: async ({ token }) => {
      const dbUser = await db.user.findFirst({
        where: { id: token.sub },
      });

      return {
        sub: token.sub,
        ...dbUser,
      };
    },
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.sub,
          role: token.role,
        },
      };
    },
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("No credentials provided");
        }

        try {
          LoginSchema.parse(credentials);
        } catch (error) {
          if (error instanceof z.ZodError) {
            throw new Error(error.errors[0]!.message);
          }
        }

        const user = await db.user
          .findUnique({
            where: {
              email: credentials?.email,
            },
          })
          .catch((error) => {
            if (error instanceof PrismaClientKnownRequestError) {
              throw new Error("Ошибка сервера");
            }
          });

        if (!user) {
          throw new Error("Неверные данные");
        }

        // means user trying login to discord account
        if (!user.password) {
          throw new Error("Неверные данные");
        }

        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const passwordMatch = await bcrypt.compare(
          credentials.password,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          user.password,
        );

        if (!passwordMatch) {
          throw new Error("Неверный пароль");
        }

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, ...payload } = user;

        return payload;
      },
    }),
  ],
  adapter: PrismaAdapter(db) as Adapter,
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);

import { db } from "@/server/db";
import { type NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { RegisterSchema } from "@/validators/zod";
import type { registerPayload } from "@/utils/auth";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export async function POST(req: NextRequest) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const body: registerPayload = await req.json();

  try {
    RegisterSchema.parse(body);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: error.errors[0]!.message,
        },
        {
          status: 401,
        },
      );
    }
  }

  const userExist = await db.user
    .findUnique({
      where: {
        email: body.email,
      },
    })
    .catch((error) => {
      if (error instanceof PrismaClientKnownRequestError) {
        return NextResponse.json(
          {
            error: "Ощибка сервера",
          },
          {
            status: 401,
          },
        );
      }
    });

  if (userExist) {
    return NextResponse.json(
      {
        error: "Аккаунт с таким email уже существует",
      },
      {
        status: 401,
      },
    );
  }

  const hashedPassword = await bcrypt.hash(body.password, 10);

  await db.user.create({
    data: {
      name: body.username,
      email: body.email,
      password: hashedPassword,
    },
  });

  return NextResponse.json({ error: null });
}

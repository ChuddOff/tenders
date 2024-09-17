import { z } from "zod";

import { adminProcedure, createTRPCRouter, publicProcedure } from "../trpc";
import { ContentValidator } from "@/validators/zod";

export const blogRouter = createTRPCRouter({
  getLatestPosts: publicProcedure
    .input(z.object({ limit: z.number(), cursor: z.number() }))
    .query(async ({ input, ctx }) => {
      const posts = await ctx.db.post.findMany({
        orderBy: {
          createdAt: "desc",
        },
        take: input.limit,
        skip: (input.cursor - 1) * input.limit,
      });

      if (!posts) {
        return {
          posts: [],
        };
      }

      return {
        posts,
      };
    }),

  getTotalPostsNum: publicProcedure
    .input(z.object({ pagesLimit: z.number() }))
    .query(async ({ ctx, input }) => {
      const postsCount = await ctx.db.post.count();

      return Math.ceil(postsCount / input.pagesLimit);
    }),

  getPost: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      return await ctx.db.post.findUnique({
        where: {
          id: input.id,
        },
      });
    }),

  createPost: adminProcedure
    .input(
      z.object({
        title: z.string().min(1, "Название не может быть пустым"),
        smallDesc: z.string().min(1, "Описание поста не может быть пустым"),
        perviewSrc: z.string().min(1, "Картинка поста не может быть путой"),
        content: ContentValidator,
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.post.create({
        data: {
          title: input.title,
          smallDesc: input.smallDesc,
          perviewImage: input.perviewSrc,
          content: input.content,
        },
      });
    }),
});

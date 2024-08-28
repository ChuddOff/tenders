import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";
import { ContentValidator } from "@/validators/zod";

export const blogRouter = createTRPCRouter({
  getLatestPosts: publicProcedure
    .input(z.object({ limit: z.number(), cursor: z.number() }))
    .mutation(async ({ input, ctx }) => {
      console.log(input.cursor, input.limit);
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

  createPost: publicProcedure // TODO: replace it with protected procedure
    .input(z.object({ title: z.string(), content: ContentValidator }))
    .mutation(async ({ input, ctx }) => {
      return await ctx.db.post.create({
        data: {
          title: input.title,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          content: input.content,
        },
      });
    }),
});

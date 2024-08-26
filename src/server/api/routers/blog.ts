import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";
import { ContentValidator } from "@/validators/zod";

export const blogRouter = createTRPCRouter({
  getLatestPosts: publicProcedure
    .input(z.object({ limit: z.number(), cursor: z.string().nullish() }))
    .query(async ({ input, ctx }) => {
      const currentCursor = Number(input.cursor) ?? undefined;

      const posts = await ctx.db.post.findMany({
        orderBy: {
          createdAt: "desc",
        },
        take: input.limit,
        skip: currentCursor ? input.limit * currentCursor - 1 : 0,
      });

      if (!posts) {
        return {
          items: [],
          nextCursor: undefined,
        };
      }

      return {
        posts,
        nextCursor: currentCursor ? currentCursor + 1 : undefined,
      };
    }),

  createPost: publicProcedure // TODO: replace it
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

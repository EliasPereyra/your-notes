import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { notes } from "~/db/schema";
import { eq } from "drizzle-orm";

export const noteRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        title: z.string().min(1),
        description: z.string(),
        topicId: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      await ctx.db.insert(notes).values({
        title: input.title,
        description: input.description,
        topicId: input.topicId,
      });
    }),
  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.delete(notes).where(eq(notes.id, input.id));
    }),
});

import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const usersRouter = createTRPCRouter({
  getTotal: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.user.count();
  }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany();
  }),
  getUser: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.user.findUnique({
        where: {
          id: input.id,
        },
      });
    }),
  updateUser: publicProcedure
    .input(
      z.object({
        id: z.string(),
        admin: z.boolean(),
      })
    )
    .mutation(({ ctx, input: { id, admin } }) => {
      return ctx.prisma.user.update({
        where: {
          id,
        },
        data: {
          admin,
        },
      });
    }),
});

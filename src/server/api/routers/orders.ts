import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const ordersRouter = createTRPCRouter({
  getTotal: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.order.count();
  }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.order.findMany();
  }),
  getOrder: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.order.findUnique({
        where: {
          id: input.id,
        },
      });
    }),
  getCarts: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.cart.findMany();
  }),
  createOrder: publicProcedure
    .input(
      z.object({
        email: z.string({ required_error: "Invalid email" }),
        name: z.string({ required_error: "Invalid name" }),
        address: z.string({ required_error: "Invalid address" }),
        city: z.string({ required_error: "Invalid city" }),
        number: z.string({ required_error: "Invalid phone number" }),
        delivery: z.string({ required_error: "Invalid delivery" }),
        orders: z.array(
          z.object({
            id: z.string(),
            image: z.string(),
            price: z.string(),
            quantity: z.number(),
            title: z.string(),
          })
        ),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.order.create({
        data: {
          email: input.email,
          name: input.name,
          address: input.address,
          city: input.city,
          number: input.number,
          delivery: input.delivery,
          orders: {
            create: input.orders,
          },
        },
      });
    }),
  updateOrder: publicProcedure
    .input(
      z.object({
        id: z.string(),
        email: z.string({ required_error: "Invalid email" }),
        name: z.string({ required_error: "Invalid name" }),
        address: z.string({ required_error: "Invalid address" }),
        city: z.string({ required_error: "Invalid city" }),
        number: z.string({ required_error: "Invalid phone number" }),
        delivery: z.string({ required_error: "Invalid delivery" }),
        orders: z.array(
          z.object({
            id: z.string(),
            image: z.string(),
            price: z.string(),
            quantity: z.number(),
            title: z.string(),
          })
        ),
      })
    )
    .mutation(
      ({
        ctx,
        input: { id, email, name, address, city, number, delivery, orders },
      }) => {
        return ctx.prisma.order.update({
          where: {
            id,
          },
          data: {
            email,
            name,
            address,
            city,
            number,
            delivery,
            orders: {
              create: orders,
            },
          },
        });
      }
    ),
  deleteOrder: publicProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.prisma.order.delete({
      where: {
        id: input,
      },
    });
  }),
});

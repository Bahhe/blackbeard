import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const productsRouter = createTRPCRouter({
  getTotal: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.computer.count();
  }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.computer.findMany();
  }),
  getProduct: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.computer.findUnique({
        where: {
          id: input.id,
        },
      });
    }),
  createProduct: publicProcedure
    .input(
      z.object({
        title: z.string({ required_error: "Invalid title" }),
        image: z.string({ required_error: "Invalid image" }),
        description: z.string({ required_error: "Invalid description" }),
        price: z.string({ required_error: "Invalid price" }),
        cpu: z.string({ required_error: "Invalid cpu" }),
        gpu: z.string({ required_error: "Invalid gpu" }),
        ram: z.string({ required_error: "Invalid ram" }),
        storage: z.string({ required_error: "Invalid storage" }),
        display: z.string({ required_error: "Invalid display" }),
        category: z.string({ required_error: "Invalid category" }),
        brand: z.string({ required_error: "Invalid brand" }),
        section: z.string({ required_error: "Invalid section" }),
        stock: z.string({ required_error: "Invalid stock" }),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.computer.create({
        data: {
          title: input.title,
          image: input.image,
          description: input.description,
          price: input.price,
          cpu: input.cpu,
          gpu: input.gpu,
          ram: input.ram,
          storage: input.storage,
          display: input.display,
          category: input.category,
          brand: input.brand,
          section: input.section,
          stock: input.stock,
        },
      });
    }),
  updateProduct: publicProcedure
    .input(
      z.object({
        id: z.string(),
        title: z.string({ required_error: "Invalid title" }),
        image: z.string({ required_error: "Invalid image" }),
        description: z.string({ required_error: "Invalid description" }),
        price: z.string({ required_error: "Invalid price" }),
        cpu: z.string({ required_error: "Invalid cpu" }),
        gpu: z.string({ required_error: "Invalid gpu" }),
        ram: z.string({ required_error: "Invalid ram" }),
        storage: z.string({ required_error: "Invalid storage" }),
        display: z.string({ required_error: "Invalid display" }),
        category: z.string({ required_error: "Invalid category" }),
        brand: z.string({ required_error: "Invalid brand" }),
        section: z.string({ required_error: "Invalid section" }),
        stock: z.string({ required_error: "Invalid stock" }),
      })
    )
    .mutation(
      ({
        ctx,
        input: {
          id,
          title,
          image,
          description,
          price,
          cpu,
          gpu,
          ram,
          storage,
          display,
          category,
          brand,
          section,
          stock,
        },
      }) => {
        return ctx.prisma.computer.update({
          where: {
            id,
          },
          data: {
            title,
            image,
            description,
            price,
            cpu,
            gpu,
            ram,
            storage,
            display,
            category,
            brand,
            section,
            stock,
          },
        });
      }
    ),
  deleteProduct: publicProcedure
    .input(z.string())
    .mutation(({ ctx, input }) => {
      return ctx.prisma.computer.delete({
        where: {
          id: input,
        },
      });
    }),
});

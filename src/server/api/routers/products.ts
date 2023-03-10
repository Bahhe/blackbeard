import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const productsRouter = createTRPCRouter({
  paginatedProducts: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).default(10),
        cursor: z.string().nullish(),
        search: z.string().optional(),
        category: z.string(),
        filter: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { cursor, limit, search, category, filter } = input;
      const products = await ctx.prisma.computer.findMany({
        take: limit + 1,
        where: {
          title: {
            contains: search,
            mode: "insensitive",
          },
          category: {
            contains: category,
          },
        },
        orderBy: [
          {
            createdAt:
              filter === "date-newest"
                ? "desc"
                : input.filter === "date-oldest"
                ? "asc"
                : "desc",
          },
          {
            price:
              filter === "price-low-to-high"
                ? "asc"
                : input.filter === "price-high-to-low"
                ? "desc"
                : "desc",
          },
        ],
        cursor: cursor ? { id: cursor } : undefined,
      });
      let nextCursor: typeof cursor | undefined = undefined;

      if (products.length > limit) {
        const nextItem = products.pop() as (typeof products)[number];
        nextCursor = nextItem.id;
      }
      return {
        products,
        nextCursor,
      };
    }),
  getTotal: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.computer.count();
  }),
  getAll: publicProcedure
    .input(
      z.object({
        search: z.string().optional(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.computer.findMany({
        where: {
          title: {
            contains: input.search,
            mode: "insensitive",
          },
        },
      });
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
        price: z.number({ required_error: "Invalid price" }),
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
        price: z.number({ required_error: "Invalid price" }),
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

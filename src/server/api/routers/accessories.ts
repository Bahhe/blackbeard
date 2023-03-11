import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const accessoriesRouter = createTRPCRouter({
  paginatedAccessories: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).default(10),
        cursor: z.string().nullish(),
        search: z.string().optional(),
        filter: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { cursor, limit } = input;
      const accessories = await ctx.prisma.accessory.findMany({
        take: limit + 1,
        where: {
          title: {
            contains: input.search,
            mode: "insensitive",
          },
        },
        orderBy: {
          price:
            input.filter === "price-low-to-high"
              ? "asc"
              : input.filter === "price-high-to-low"
              ? "desc"
              : "desc",
        },
        cursor: cursor ? { id: cursor } : undefined,
      });
      let nextCursor: typeof cursor | undefined = undefined;

      if (accessories.length > limit) {
        const nextItem = accessories.pop() as (typeof accessories)[number];
        nextCursor = nextItem.id;
      }
      return {
        accessories,
        nextCursor,
      };
    }),
  getTotal: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.accessory.count();
  }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.accessory.findMany();
  }),
  getProduct: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.accessory.findUnique({
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
        category: z.string({ required_error: "Invalid category" }),
        brand: z.string({ required_error: "Invalid brand" }),
        section: z.string({ required_error: "Invalid section" }),
        stock: z.string({ required_error: "Invalid stock" }),
        discount: z.string({ required_error: "Invalid discount" }).optional(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.accessory.create({
        data: {
          title: input.title,
          image: input.image,
          description: input.description,
          price: input.price,
          category: input.category,
          brand: input.brand,
          section: input.section,
          stock: input.stock,
          discount: input.discount,
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
        category: z.string({ required_error: "Invalid category" }),
        brand: z.string({ required_error: "Invalid brand" }),
        section: z.string({ required_error: "Invalid section" }),
        stock: z.string({ required_error: "Invalid stock" }),
        discount: z.string({ required_error: "Invalid discount" }).optional(),
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
          category,
          brand,
          section,
          stock,
          discount,
        },
      }) => {
        return ctx.prisma.accessory.update({
          where: {
            id,
          },
          data: {
            title,
            image,
            description,
            price,
            category,
            brand,
            section,
            stock,
            discount,
          },
        });
      }
    ),
  deleteProduct: publicProcedure
    .input(z.string())
    .mutation(({ ctx, input }) => {
      return ctx.prisma.accessory.delete({
        where: {
          id: input,
        },
      });
    }),
});

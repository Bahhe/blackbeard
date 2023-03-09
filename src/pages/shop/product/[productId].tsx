import { createProxySSGHelpers } from "@trpc/react-query/ssg";
import {
  type GetStaticPaths,
  type GetStaticPropsContext,
  type InferGetStaticPropsType,
} from "next";
import Product from "~/sections/shop/product/Product";
import { appRouter } from "~/server/api/root";
import { createInnerTRPCContext } from "~/server/api/trpc";
import { api } from "~/utils/api";
import superjson from "superjson";
import { prisma } from "~/server/db";

export async function getStaticProps(
  context: GetStaticPropsContext<{ productId: string }>
) {
  const ssg = createProxySSGHelpers({
    router: appRouter,
    ctx: createInnerTRPCContext({ session: null }),
    transformer: superjson, // optional - adds superjson serialization
  });
  const id = context.params?.productId as string;
  // prefetch `post.byId`
  await ssg.products.getProduct.prefetch({ id });
  return {
    props: {
      trpcState: ssg.dehydrate(),
      id,
    },
    revalidate: 60,
  };
}
export const getStaticPaths: GetStaticPaths = async () => {
  const products = await prisma.computer.findMany({
    select: {
      id: true,
    },
  });
  return {
    paths: products.map((product) => ({
      params: {
        productId: product.id,
      },
    })),
    // https://nextjs.org/docs/api-reference/data-fetching/get-static-paths#fallback-blocking
    fallback: "blocking",
  };
};

export default function SingleProduct(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { id } = props;
  const { data: product } = api.products.getProduct.useQuery({
    id: id,
  });
  if (!product) return <p>loading product...</p>;
  return <Product product={product} />;
}

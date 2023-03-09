import { createProxySSGHelpers } from "@trpc/react-query/ssg";
import {
  type InferGetStaticPropsType,
  type GetStaticPaths,
  type GetStaticPropsContext,
} from "next";
import Product from "~/sections/shop/accessory/Product";
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

  await ssg.accessories.getProduct.prefetch({ id });
  return {
    props: {
      trpcState: ssg.dehydrate(),
      id,
    },
    revalidate: 60,
  };
}
export const getStaticPaths: GetStaticPaths = async () => {
  const accessories = await prisma.accessory.findMany({
    select: {
      id: true,
    },
  });

  return {
    paths: accessories.map((accessory) => ({
      params: {
        productId: accessory.id,
      },
    })),
    fallback: "blocking",
  };
};

export default function SingleProduct(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { id } = props;
  const { data: product } = api.accessories.getProduct.useQuery({
    id: id,
  });
  if (!product) return <p>loading product...</p>;
  return <Product product={product} />;
}

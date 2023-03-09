import Head from "next/head";
import type { NextPage } from "next";
import { api } from "~/utils/api";
import LandingSection from "~/sections/showcase/LandingSection";
import SecondSection from "~/sections/newArrivals/SecondSection";
import Categories from "~/sections/categories/Categories";
import Discover from "~/sections/discover/Discover";
import LaptopsSwiper from "~/sections/laptops/LaptopsSwiper";
import AccessoriesSwiper from "~/sections/accessories/AccessoriesSwiper";
import Marketing from "~/sections/marketing/Marketing";
import { createProxySSGHelpers } from "@trpc/react-query/ssg";
import { createInnerTRPCContext } from "~/server/api/trpc";
import { appRouter } from "~/server/api/root";
import superjson from "superjson";

const Home: NextPage = () => {
  const { data: accessories } = api.accessories.getAll.useQuery();
  const { data: products } = api.products.getAll.useQuery({});
  return (
    <>
      <Head>
        <title>BlackBeardt | Home</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <LandingSection products={products} />
        <SecondSection products={products} />
        <Categories />
        <Discover products={products} />
        <LaptopsSwiper products={products} />
        <AccessoriesSwiper accessories={accessories} />
        <Marketing />
      </main>
    </>
  );
};

export async function getStaticProps() {
  const ssg = createProxySSGHelpers({
    router: appRouter,
    ctx: createInnerTRPCContext({ session: null }),
    transformer: superjson,
  });
  await ssg.products.getAll.prefetch({});
  await ssg.accessories.getAll.prefetch();

  return {
    props: {
      trpcState: ssg.dehydrate(),
    },
  };
}

export default Home;

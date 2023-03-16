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
import { motion } from "framer-motion";

const Home: NextPage = () => {
  const { data: accessories } = api.accessories.getAll.useQuery();
  const { data: products } = api.products.getAll.useQuery({});
  return (
    <>
      <Head>
        <title>BlackBeardt | Home</title>
        <meta
          name="description"
          content="
        Blackbeard is your go-to shop destination for laptops and accessories. Whether you're in the market for a sleek new laptop or need to stock up on accessories like chargers, cases, and external hard drives, Blackbeard has you covered. Our collection features the latest models from top brands like Dell, HP, and Apple, ensuring you have access to the most cutting-edge technology on the market. Our user-friendly interface makes it easy to navigate and find exactly what you're looking for, and our secure checkout process ensures your personal information is always protected. With fast and reliable shipping and a commitment to top-notch customer service, Blackbeard is the ultimate destination for all your laptop and accessory needs.
        "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <LandingSection products={products} />
        <motion.div
          initial={{ y: 500 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ ease: "easeOut", delay: 0.1 }}
        >
          <SecondSection products={products} />
        </motion.div>
        <motion.div
          initial={{ y: 500 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ ease: "easeOut", delay: 0.1 }}
        >
          <Categories />
        </motion.div>
        <motion.div
          initial={{ y: 500 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ ease: "easeOut", delay: 0.1 }}
        >
          <LaptopsSwiper products={products} />
        </motion.div>
        <motion.div
          initial={{ y: 500 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ ease: "easeOut", delay: 0.1 }}
        >
          <AccessoriesSwiper accessories={accessories} />
        </motion.div>
        <motion.div
          initial={{ y: 500 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ ease: "easeOut", delay: 0.1 }}
        >
          <Discover products={products} accessories={accessories} />
        </motion.div>
        <motion.div
          initial={{ y: 500 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ ease: "easeOut", delay: 0.1 }}
        >
          <Marketing />
        </motion.div>
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

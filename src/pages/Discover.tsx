import { createProxySSGHelpers } from "@trpc/react-query/ssg";
import SectionTitle from "~/components/SectionTitle";
import { createInnerTRPCContext } from "~/server/api/trpc";
import { api } from "~/utils/api";
import DiscoverProduct from "./DiscoverProduct";
import superjson from "superjson";
import { appRouter } from "~/server/api/root";

const Discover = () => {
  const { data: product } = api.products.getAll.useQuery({});

  return (
    <section className="marquee h-[500px]">
      <SectionTitle name="discover" />
      <div className="track">
        <div className="content flex min-w-max gap-10">
          {!product
            ? "loading products..."
            : product.map((product) => (
                <DiscoverProduct key={product.id} product={product} />
              ))}
        </div>
      </div>
    </section>
  );
};

export async function getStaticProps() {
  const ssg = createProxySSGHelpers({
    router: appRouter,
    ctx: createInnerTRPCContext({ session: null }),
    transformer: superjson,
  });

  await ssg.products.getAll.fetch({});
  return {
    props: {
      trpcState: ssg.dehydrate(),
    },
    revalidate: 60,
  };
}

export default Discover;

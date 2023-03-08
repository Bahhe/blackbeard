import { createProxySSGHelpers } from "@trpc/react-query/ssg";
import { useContext, useEffect, useState } from "react";
import { appRouter } from "~/server/api/root";
import { createInnerTRPCContext } from "~/server/api/trpc";
import { api } from "~/utils/api";
import { SearchContext } from "./Navigation";
import Product from "./Product";
import superjson from "superjson";

function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const scrolled = (winScroll / height) * 100;
    setScrollPosition(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
}

export default function ShopProducts() {
  const { search, filter } = useContext(SearchContext);
  const scrollPosition = useScrollPosition();

  const { data, hasNextPage, fetchNextPage, isFetching } =
    api.accessories.paginatedAccessories.useInfiniteQuery(
      {
        limit: 8,
        search: search,
        filter: filter,
      },
      { getNextPageParam: (lastPage) => lastPage.nextCursor }
    );

  const products = data?.pages.flatMap((page) => page.accessories) ?? [];
  useEffect(() => {
    if (scrollPosition > 90 && hasNextPage && !isFetching && !search) {
      // eslint-disable-next-line
      fetchNextPage();
    }
  }, [scrollPosition, hasNextPage, isFetching, fetchNextPage, search]);

  return (
    <div className="mb-96 flex flex-wrap justify-center gap-10">
      {!products
        ? "loading products..."
        : products.map((product, index) => (
            <Product key={index} product={product} />
          ))}
    </div>
  );
}

export async function getStaticProps() {
  const ssg = createProxySSGHelpers({
    router: appRouter,
    ctx: createInnerTRPCContext({ session: null }),
    transformer: superjson,
  });

  await ssg.accessories.getAll.fetch();
  return {
    props: {
      trpcState: ssg.dehydrate(),
    },
    revalidate: 60,
  };
}

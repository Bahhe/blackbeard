import { useContext, useEffect, useState } from "react";
import { api } from "~/utils/api";
import { SearchContext } from "./Navigation";
import Product from "./Product";

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
  const { search, category, filter } = useContext(SearchContext);
  const scrollPosition = useScrollPosition();

  const { data, hasNextPage, fetchNextPage, isFetching } =
    api.products.paginatedProducts.useInfiniteQuery(
      {
        limit: 8,
        search: search,
        category: category === "all" ? "" : category,
        filter: filter,
      },
      { getNextPageParam: (lastPage) => lastPage.nextCursor }
    );

  const products = data?.pages.flatMap((page) => page.products) ?? [];
  useEffect(() => {
    if (
      scrollPosition > 90 &&
      hasNextPage &&
      !isFetching &&
      !search &&
      !category
    ) {
      // eslint-disable-next-line
      fetchNextPage();
    }
  }, [
    scrollPosition,
    hasNextPage,
    isFetching,
    fetchNextPage,
    search,
    category,
  ]);

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

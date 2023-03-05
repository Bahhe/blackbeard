import { useEffect, useState } from "react";
import { api } from "~/utils/api";
import Product from "./Product";

function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const scrolled = (winScroll / height) * 80;
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
  const scrollPosition = useScrollPosition();

  const { data, hasNextPage, fetchNextPage, isFetching } =
    api.products.paginatedProducts.useInfiniteQuery(
      {
        limit: 8,
      },
      { getNextPageParam: (lastPage) => lastPage.nextCursor }
    );

  const products = data?.pages.flatMap((page) => page.products) ?? [];
  useEffect(() => {
    if (scrollPosition > 50 && hasNextPage && !isFetching) {
      // eslint-disable-next-line
      fetchNextPage();
    }
  }, [scrollPosition, hasNextPage, isFetching, fetchNextPage]);

  return (
    <div className="mb-96 flex flex-wrap justify-center gap-10">
      {!products
        ? "loading products..."
        : products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
    </div>
  );
}

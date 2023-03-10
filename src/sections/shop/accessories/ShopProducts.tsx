import {
  type FetchNextPageOptions,
  type UseInfiniteQueryResult,
} from "@tanstack/react-query";
import { TfiDownload } from "react-icons/tfi";
import { type Accessory } from "types";
import Product from "./Product";

export default function ShopProducts({
  products,
  hasNextPage,
  fetchNextPage,
  isFetching,
}: {
  products: Accessory[];
  hasNextPage: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions
  ) => Promise<UseInfiniteQueryResult>;
  isFetching: boolean;
}) {
  return (
    <div className="mb-96 flex flex-col justify-center">
      <div className="flex flex-wrap justify-center gap-10">
        {!products
          ? "loading products..."
          : products.map((product, index) => (
              <Product key={index} product={product} />
            ))}
      </div>
      <div className="flex justify-center">
        {hasNextPage && !isFetching && (
          <button
            onClick={() => fetchNextPage()}
            className="mt-16 flex items-center gap-2 rounded border py-2 px-4 capitalize shadow"
          >
            <TfiDownload className="text-lg" />
            load next page
          </button>
        )}
      </div>
    </div>
  );
}

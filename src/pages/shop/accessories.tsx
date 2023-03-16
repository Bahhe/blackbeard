import { BsSearch } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import { filters } from "~/utils/data";
import { useState } from "react";
import type { ChangeEvent } from "react";
import ShopProducts from "~/sections/shop/accessories/ShopProducts";
import { api } from "~/utils/api";

export default function Shop() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const handleFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

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

  return (
    <main className="mx-auto flex w-5/6 flex-col">
      <section>
        <div className="flex flex-col items-center justify-center gap-10 py-20 lg:flex-row">
          <div className="flex items-center rounded-lg border py-2 px-4 shadow-lg">
            <FiFilter className="text-2xl text-gray-700" />
            <select
              value={filter}
              onChange={handleFilter}
              name="cars"
              id="cars"
              className="bg-white outline-none"
            >
              {filters.map((option, index) => (
                <option value={option} key={index}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center rounded-lg border py-2 px-4 shadow-lg">
            <input
              type="text"
              placeholder="search products..."
              className="p-2 outline-none"
              value={search}
              onChange={handleSearch}
            />
            <BsSearch className="text-2xl text-gray-700" />
          </div>
        </div>
        <ShopProducts
          products={products}
          isFetching={isFetching}
          hasNextPage={hasNextPage as boolean}
          fetchNextPage={fetchNextPage}
        />
      </section>
    </main>
  );
}

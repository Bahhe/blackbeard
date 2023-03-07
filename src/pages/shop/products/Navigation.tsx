import { BsSearch } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
import { categories, filters } from "./data";
import { createContext, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import ShopProducts from "./ShopProducts";

export const SearchContext = createContext({
  search: "",
  category: "",
  filter: "",
});

export default function Navigation() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [filter, setFilter] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const handleCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };
  const handleFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchValue(search);
  };

  return (
    <SearchContext.Provider
      value={{ search: searchValue, category: category, filter: filter }}
    >
      <div className="flex items-center justify-center gap-10 py-20">
        <div className="flex items-center rounded-lg border py-2 px-4 shadow-lg">
          <BiCategory className="text-2xl text-gray-700" />
          <select
            value={category}
            onChange={handleCategory}
            name="cars"
            id="cars"
            className="bg-white outline-none"
          >
            {categories.map((option, index) => (
              <option value={option} key={index}>
                {option}
              </option>
            ))}
          </select>
        </div>
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
        <form
          onSubmit={handleSubmit}
          className="flex items-center rounded-lg border py-2 px-4 shadow-lg"
        >
          <input
            type="text"
            placeholder="search products..."
            className="p-2 outline-none"
            value={search}
            onChange={handleSearch}
          />
          <BsSearch className="text-2xl text-gray-700" />
        </form>
      </div>
      <ShopProducts />
    </SearchContext.Provider>
  );
}

import { BsSearch } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
import { categories, filters } from "./data";

export default function Navigation() {
  return (
    <div className="flex items-center justify-center gap-10 py-20">
      <div className="flex items-center rounded-lg border py-2 px-4 shadow-lg">
        <BiCategory className="text-2xl text-gray-700" />
        <select name="cars" id="cars" className="bg-white outline-none">
          <option selected disabled>
            Category
          </option>
          {categories.map((option, index) => (
            <option value={option} key={index}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center rounded-lg border py-2 px-4 shadow-lg">
        <FiFilter className="text-2xl text-gray-700" />
        <select name="cars" id="cars" className="bg-white outline-none">
          <option selected disabled>
            filter
          </option>
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
        />
        <BsSearch className="text-2xl text-gray-700" />
      </div>
    </div>
  );
}

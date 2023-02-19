import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoMdPerson } from "react-icons/io";

const iconsStyle = "hover:text-blue-700 cursor-pointer duration-500";

const Cart = () => {
  return (
    <div className="hidden flex items-center gap-4 text-4xl py-2 px-4 shadow-lg rounded-lg fixed left-1/2 -translate-x-1/2 bottom-10 border hover:-translate-y-2 duration-500 bg-white z-10">
      <IoMdPerson className={iconsStyle} />
      <div className="relative after:content-['0'] after:absolute after:w-5 after:h-5 after:bg-red-500 after:text-sm after:flex after:flex-col after:items-center after:justify-center after:rounded-full after:text-white after:top-0 after:right-0 after:translate-x-1">
        <HiOutlineShoppingBag className={iconsStyle} />
      </div>
    </div>
  );
};
export default Cart;

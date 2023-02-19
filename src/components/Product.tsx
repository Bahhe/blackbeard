import prestige from "/public/prestige.webp";
import Image from "next/image";
import { BsLaptop } from "react-icons/bs";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

const Product = () => {
  return (
    <section>
      <div className="mx-auto w-4/6 rounded-2xl border bg-gray-200 shadow-lg duration-75 hover:scale-[1.01]">
        <div className="flex items-center justify-center">
          <div className="relative h-5/6 w-5/6 p-5">
            <FaArrowCircleRight className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer text-4xl text-blue-700 hover:scale-105" />
            <FaArrowCircleLeft className="absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer text-4xl text-blue-700 hover:scale-105" />
            <Image
              src={prestige}
              width={898}
              height={585}
              alt="laptop"
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="rounded-2xl border bg-white">
          <div className="flex items-center justify-between p-5">
            <BsLaptop className="text-3xl" />
            <h3 className="text-2xl font-bold capitalize">hp spectre 360</h3>
            <p className="text-lg uppercase">1999 da</p>
          </div>
          <div>
            <p className="mx-auto w-4/6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              perferendis in quidem impedit recusandae, natus nesciunt nihil
              dolore sed velit.
            </p>
          </div>
          <div className="flex items-center justify-center gap-3 py-5">
            <button className="w-32 rounded bg-blue-700 py-2 font-extrabold text-white shadow-lg duration-500 hover:bg-white hover:text-black">
              buy
            </button>
            <button className="w-32 rounded py-2 font-extrabold shadow-lg duration-500 hover:bg-blue-700 hover:text-white">
              add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Product;

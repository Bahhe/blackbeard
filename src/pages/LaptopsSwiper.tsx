import { BsLaptop } from "react-icons/bs";
import LaptopsProducts from "./laptopsProducts";

const LaptopsSwiper = () => {
  return (
    <section className="pt-20">
      <div className="mx-auto w-5/6">
        <div className="flex items-center justify-start">
          <div className="relative my-5 flex items-center rounded-full border shadow-xl">
            <div className="absolute top-1/2 left-0 flex aspect-square h-full -translate-y-1/2 items-center justify-center rounded-full border bg-blue-700 font-bold text-white">
              <BsLaptop className="text-2xl" />
            </div>
            <h5 className="py-3 px-20 text-2xl font-bold capitalize">
              laptops
            </h5>
          </div>
        </div>
        <LaptopsProducts />
      </div>
    </section>
  );
};
export default LaptopsSwiper;

import { BsLaptop } from "react-icons/bs";
import ProductSwiper from "./ProductSwiper";

const LaptopsSwiper = () => {
  return (
    <section className="pt-20">
      <div className="w-5/6 mx-auto">
        <div className="flex items-center">
          <div className="my-5 border flex items-center rounded-full relative shadow-xl">
            <div className="border h-full aspect-square font-bold rounded-full bg-blue-700 text-white absolute top-1/2 left-0 -translate-y-1/2 flex items-center justify-center">
              <BsLaptop className="text-2xl" />
            </div>
            <h5 className="py-3 px-20 text-2xl font-bold capitalize">
              laptops
            </h5>
          </div>
        </div>
        <ProductSwiper />
      </div>
    </section>
  );
};
export default LaptopsSwiper;

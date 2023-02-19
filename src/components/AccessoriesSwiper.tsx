import ProductSwiper from "./ProductSwiper";
import { ImHeadphones } from "react-icons/im";
import AccessoriesProducts from "./AccessoriesProducts";

const AccessoriesSwiper = () => {
  return (
    <section className="pt-20">
      <div className="w-5/6 mx-auto">
        <div className="flex items-center justify-end">
          <div className="my-5 border flex items-center rounded-full relative shadow-xl">
            <div className="border h-full aspect-square font-bold rounded-full bg-blue-700 text-white absolute top-1/2 right-0 -translate-y-1/2 flex items-center justify-center">
              <ImHeadphones className="text-2xl" />
            </div>
            <h5 className="py-3 px-20 text-2xl font-bold capitalize">
              accessories
            </h5>
          </div>
        </div>
        <AccessoriesProducts />
      </div>
    </section>
  );
};
export default AccessoriesSwiper;

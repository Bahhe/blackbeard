import { BsHeadphones } from "react-icons/bs";
import type { Accessory } from "types";
import AccessoriesProducts from "./AccessoriesProducts";

const AccessoriesSwiper = ({ accessories }: { accessories?: Accessory[] }) => {
  return (
    <section className="pt-20">
      <div className="mx-auto w-5/6">
        <div className="flex items-center justify-end">
          <div className="relative my-5 flex items-center rounded-full border shadow-xl">
            <div className="absolute top-1/2 right-0 flex aspect-square h-full -translate-y-1/2 items-center justify-center rounded-full border bg-blue-700 font-bold text-white">
              <BsHeadphones className="text-2xl" />
            </div>
            <h5 className="py-3 px-20 text-2xl font-bold capitalize">
              accessories
            </h5>
          </div>
        </div>
        <AccessoriesProducts accessories={accessories} />
      </div>
    </section>
  );
};
export default AccessoriesSwiper;

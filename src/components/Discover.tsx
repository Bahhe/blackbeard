import Image from "next/image";
import SectionTitle from "./SectionTitle";
import prestige from "/public/prestige.webp";
import { BsLaptop } from "react-icons/bs";

const productStyle = "border rounded-2xl shadow-xl relative";

const Discover = () => {
  return (
    <section className="">
      <div className="mx-auto w-4/6">
        <SectionTitle name="discover" />
        <div className="flex items-center gap-10">
          <div className={productStyle}>
            <Image
              src={prestige}
              width={898}
              height={595}
              alt="product"
              className="p-10"
            />
            <BsLaptop className="absolute top-5 left-5 text-2xl" />
            <span className="absolute top-5 right-5 rounded bg-red-500 py-1 px-4 font-bold text-white">
              20%
            </span>
          </div>
          <div className={productStyle}>
            <Image
              src={prestige}
              width={898}
              height={595}
              alt="product"
              className="p-10"
            />
            <BsLaptop className="absolute top-5 left-5 text-2xl" />
            <span className="absolute top-5 right-5 rounded bg-red-500 py-1 px-4 font-bold text-white">
              20%
            </span>
          </div>
          <div className={productStyle}>
            <Image
              src={prestige}
              width={898}
              height={595}
              alt="product"
              className="p-10"
            />
            <BsLaptop className="absolute top-5 left-5 text-2xl" />
            <span className="absolute top-5 right-5 rounded bg-red-500 py-1 px-4 font-bold text-white">
              20%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;

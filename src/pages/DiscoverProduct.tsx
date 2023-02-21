import Image from "next/image";
import { BsLaptop } from "react-icons/bs";
import type { Product } from "types";

type ProductProps = {
  product: Product;
};

export default function DiscoverProduct({ product: { image } }: ProductProps) {
  return (
    <div className="relative rounded-2xl border shadow-xl">
      <Image
        src={image}
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
  );
}

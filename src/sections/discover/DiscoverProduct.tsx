import Image from "next/image";
import Link from "next/link";
import { BsLaptop } from "react-icons/bs";
import type { Accessory, Product } from "types";

type ProductProps = {
  product: Product | Accessory;
};

export default function DiscoverProduct({
  product: { image, id },
}: ProductProps) {
  return (
    <Link
      href={`/shop/product/${id}`}
      className="relative flex h-64 w-96 cursor-pointer items-center justify-center rounded-2xl border shadow-xl duration-200 hover:scale-105"
    >
      <Image
        src={image}
        width={500}
        height={500}
        alt="product"
        className="h-5/6 w-auto"
      />
      <BsLaptop className="absolute top-3 left-3 text-2xl" />
      <span className="absolute top-3 right-3 rounded bg-red-500 py-1 px-2 text-sm font-bold text-white">
        20%
      </span>
    </Link>
  );
}

import Image from "next/image";
import Link from "next/link";
import { BsLaptop } from "react-icons/bs";
import type { Product } from "types";

type ProductProps = {
  product: Product;
};

export default function DiscoverProduct({
  product: { image, id },
}: ProductProps) {
  return (
    <Link
      href={`/shop/product/${id}`}
      className="relative flex cursor-pointer items-center justify-center rounded-2xl border shadow-xl duration-200 hover:scale-105"
    >
      <Image
        src={image}
        width={298}
        height={195}
        alt="product"
        className="h-auto w-auto p-5"
      />
      <BsLaptop className="absolute top-5 left-5 text-2xl" />
      <span className="absolute top-5 right-5 rounded bg-red-500 py-1 px-4 font-bold text-white">
        20%
      </span>
    </Link>
  );
}

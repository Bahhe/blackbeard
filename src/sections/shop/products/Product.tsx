import Image from "next/image";
import type { Product } from "types";
import { AiOutlineStar } from "react-icons/ai";
import Link from "next/link";

type ProductProps = {
  product: Product;
};

export default function Product({
  product: { id, image, title, price },
}: ProductProps) {
  return (
    <div>
      <Link
        href={`/shop/product/${id}`}
        className="flex h-64 w-96 cursor-pointer flex-col items-center justify-center rounded-3xl border duration-500 hover:scale-105"
      >
        <Image
          src={image}
          width={300}
          height={100}
          alt="laptop"
          className="h-5/6 w-auto"
        />
      </Link>
      <div className="mt-3 flex flex-col items-center gap-4">
        <h6 className="text-xl font-bold capitalize">{title}</h6>
        <div className="flex items-center justify-center">
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
        <p>{price} da</p>
      </div>
    </div>
  );
}

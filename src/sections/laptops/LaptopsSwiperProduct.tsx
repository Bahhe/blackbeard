import Image from "next/image";
import Link from "next/link";
import { AiOutlineStar } from "react-icons/ai";
import type { Product } from "types";

type ProductProps = {
  product: Product;
};

export default function LaptopsSwiperProduct({
  product: { id, image, title, price },
}: ProductProps) {
  return (
    <div className="mx-5">
      <Link
        href={`/shop/product/${id}`}
        className="flex h-52 w-80 flex-col items-center justify-center rounded-3xl border"
      >
        <Image
          src={image}
          width={898}
          height={595}
          alt="laptop"
          className="h-5/6 w-auto"
        />
      </Link>
      <div className="mt-3 flex flex-col items-center gap-4">
        <Link
          href={`/shop/product/${id}`}
          className="text-xl font-bold capitalize"
        >
          {title}
        </Link>
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

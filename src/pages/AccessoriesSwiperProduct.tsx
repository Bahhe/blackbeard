import Image from "next/image";
import Link from "next/link";
import { AiOutlineStar } from "react-icons/ai";
import type { Accessory } from "types";

type ProductProps = {
  accessory: Accessory;
};

export default function AccessoriesSwiperProduct({
  accessory: { image, title, price, id },
}: ProductProps) {
  return (
    <div className="mx-5">
      <Link
        href={`/shop/accessory/${id}`}
        className="flex aspect-square flex-col items-center justify-center rounded-3xl border"
      >
        <Image
          src={image}
          width={898}
          height={595}
          alt="laptop"
          className="h-auto w-auto"
        />
      </Link>
      <div className="mt-3 flex flex-col items-center gap-4">
        <Link
          href={`/shop/accessory/${id}`}
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

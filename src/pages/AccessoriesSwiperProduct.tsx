import Image from "next/image";
import { AiOutlineStar } from "react-icons/ai";
import type { Product } from "types";

type ProductProps = {
  product: Product;
};

export default function AccessoriesSwiperProduct({
  product: { image, title, price },
}: ProductProps) {
  return (
    <div className="mx-5">
      <div className="flex aspect-square flex-col items-center justify-center rounded-3xl border">
        <Image src={image} width={898} height={595} alt="laptop" />
      </div>
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

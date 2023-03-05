import Image from "next/image";
import type { Product } from "types";

type ProductProps = {
  product: Product;
};

export default function LandingSectionSwiperProduct({ product }: ProductProps) {
  const { title, description, image } = product;

  return (
    <div className="flex items-center">
      <div className="flex-1">
        <div className="w-5/6 pl-16">
          <h1 className="mb-5 text-4xl font-extrabold capitalize">{title}</h1>
          <p className="capitalize">{description}</p>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex h-96 w-5/6 items-center justify-center">
          <Image
            src={image}
            width={898}
            height={585}
            alt="laptop"
            className="w-5/6"
          />
        </div>
      </div>
    </div>
  );
}

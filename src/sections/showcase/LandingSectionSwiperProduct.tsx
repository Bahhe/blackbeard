import Image from "next/image";
import Link from "next/link";
import type { Product } from "types";

type ProductProps = {
  product: Product;
};

export default function LandingSectionSwiperProduct({
  product: { id, title, description, image },
}: ProductProps) {
  return (
    <div className="flex flex-col-reverse items-center lg:flex-row">
      <div className="flex flex-1">
        <Link
          href={`shop/product/${id}`}
          className="text-center lg:w-5/6 lg:pl-16 lg:text-start"
        >
          <h1 className="mb-5 text-4xl font-extrabold capitalize">{title}</h1>
          <p className="capitalize">{description}</p>
        </Link>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <Link
          href={`shop/product/${id}`}
          className="flex h-96 w-5/6 items-center justify-center"
        >
          <Image
            src={image}
            width={898}
            height={585}
            alt="laptop"
            className="h-5/6 w-auto"
          />
        </Link>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { ChangeEvent } from "react";
import { BsBag } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";
import { useDispatch } from "react-redux";
import type { Product } from "types";
import { addToCart, orderNow } from "~/redux/cartSlice";

type ProductProps = {
  product: Product;
};

export default function Product({
  product: {
    id,
    image,
    title,
    price,
    description,
    cpu,
    gpu,
    ram,
    display,
    storage,
  },
}: ProductProps) {
  const [quantity, setQuantity] = useState(1);
  const handleQuantity = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setQuantity(value);
  };
  const dispatch = useDispatch();

  return (
    <section className="mx-auto my-32 w-5/6">
      <div className="mx-auto flex w-5/6 flex-col items-center justify-center lg:flex-row">
        <div className="flex-1">
          <div className="flex h-[300px] items-center justify-center lg:h-[500px] lg:w-[600px]">
            <Image
              src={image}
              width={500}
              height={200}
              alt="product"
              className="h-auto w-5/6 lg:h-5/6 lg:w-auto"
            />
          </div>
        </div>
        <div className="flex-1 p-5">
          <h1 className="text-4xl font-bold capitalize">{title}</h1>
          <p className="my-10 max-w-xl">{description}</p>
          <h2 className="my-5 text-xl font-bold capitalize">specs:</h2>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center">
              <h3 className="mr-5 font-bold capitalize">cpu:</h3>
              <p>{cpu}</p>
            </li>
            <li className="flex items-center">
              <h3 className="mr-5 font-bold capitalize">ram:</h3>
              <p>{ram}</p>
            </li>
            <li className="flex items-center">
              <h3 className="mr-5 font-bold capitalize">storage:</h3>
              <p>{storage}</p>
            </li>
            <li className="flex items-center">
              <h3 className="mr-5 font-bold capitalize">display:</h3>
              <p>{display}</p>
            </li>
            <li className="flex items-center">
              <h3 className="mr-5 font-bold capitalize">gpu:</h3>
              <p>{gpu}</p>
            </li>
          </ul>
          <div className="my-5 text-xl uppercase text-red-500">
            <p>{price} da</p>
          </div>
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <input
              type="number"
              value={quantity}
              onChange={handleQuantity}
              className="m-5 border text-center"
            />
            <div className="flex flex-col items-center gap-4 lg:flex-row">
              <button
                onClick={() => {
                  dispatch(
                    addToCart({ id, title, image, price, quantity: quantity })
                  );
                }}
                className="flex items-center gap-2 border py-2 px-4 capitalize shadow-lg duration-75 hover:scale-105"
              >
                <BsBag />
                <p>add to cart</p>
              </button>
              <Link
                onClick={() => {
                  dispatch(
                    orderNow({ id, title, image, price, quantity: quantity })
                  );
                }}
                href="/cart"
                className="flex items-center gap-2 border py-2 px-4 capitalize shadow-lg duration-75 hover:scale-105"
              >
                <MdAttachMoney />
                <p>order now</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

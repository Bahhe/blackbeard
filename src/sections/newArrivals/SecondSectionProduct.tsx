import Image from "next/image";
import { BsLaptop } from "react-icons/bs";
import type { Product } from "types";
import { useDispatch } from "react-redux";
import { addToCart, orderNow } from "~/redux/cartSlice";
import Link from "next/link";

type ProductProps = {
  product: Product;
};

export default function SecondSectionProduct({ product }: ProductProps) {
  const { id, title, description, image, price, discount } = product;
  const dispatch = useDispatch();
  return (
    <section className="flex-1">
      <div className="mx-auto my-5 h-[500px] w-[300px] rounded-2xl border bg-gray-200 shadow-lg lg:w-[400px]">
        <Link
          href={`/shop/product/${id}`}
          className="relative flex h-1/2 items-center justify-center"
        >
          <Image
            src={image}
            width={598}
            height={285}
            alt="laptop"
            className="h-auto w-5/6 cursor-pointer lg:h-5/6 lg:w-auto"
          />
          {discount && (
            <span className="absolute top-3 right-3 rounded bg-red-500 py-1 px-2 text-sm font-bold text-white">
              -{discount}%
            </span>
          )}
        </Link>
        <div className="relative flex h-1/2 flex-col justify-between rounded-2xl border bg-white">
          <div className="flex items-center p-5">
            <BsLaptop className="absolute top-5 left-5 hidden text-3xl lg:flex" />
            <h3 className="w-32 truncate text-lg font-bold capitalize lg:ml-16 lg:w-40">
              {title}
            </h3>
            <p className="absolute top-5 right-5 text-end text-lg">
              {price} da
            </p>
          </div>
          <div className="my-2 h-20">
            <p className="mx-auto w-4/6 line-clamp-4">{description}</p>
          </div>
          <div className="flex justify-center gap-3 py-5">
            <Link
              onClick={() => {
                dispatch(orderNow({ id, title, image, price, quantity: 0 }));
              }}
              href="/cart"
              className="w-32 rounded bg-blue-700 py-2 text-center font-extrabold text-white shadow-lg duration-500 hover:bg-white hover:text-black"
            >
              buy
            </Link>
            <button
              onClick={() => {
                dispatch(addToCart({ id, title, image, price, quantity: 0 }));
              }}
              className="w-32 rounded py-2 font-extrabold shadow-lg duration-500 hover:bg-blue-700 hover:text-white"
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

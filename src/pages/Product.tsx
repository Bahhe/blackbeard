import Image from "next/image";
import { BsLaptop } from "react-icons/bs";
import type { Product } from "types";
import { useDispatch } from "react-redux";
import { addToCart } from "~/redux/cartSlice";

type ProductProps = {
  product: Product;
};

export default function Product({ product }: ProductProps) {
  const { id, title, description, image, price } = product;
  const dispatch = useDispatch();
  return (
    <section className="flex-1">
      <div className="mx-auto my-5 h-[500px] w-[400px] rounded-2xl border bg-gray-200 shadow-lg">
        <div className="flex h-1/2 items-center justify-center">
          <Image
            src={image}
            width={598}
            height={285}
            alt="laptop"
            className="w-4/6 cursor-pointer"
          />
        </div>
        <div className="relative flex h-1/2 flex-col justify-between rounded-2xl border bg-white">
          <div className="flex items-center p-5">
            <BsLaptop className="absolute top-5 left-5 flex text-3xl" />
            <h3 className="ml-16 text-lg font-bold capitalize">{title}</h3>
            <p className="absolute top-5 right-5 text-end text-lg">
              {price} da
            </p>
          </div>
          <div className="my-2 h-20">
            <p className="mx-auto w-4/6">{description}</p>
          </div>
          <div className="flex justify-center gap-3 py-5">
            <button className="w-32 rounded bg-blue-700 py-2 font-extrabold text-white shadow-lg duration-500 hover:bg-white hover:text-black">
              buy
            </button>
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

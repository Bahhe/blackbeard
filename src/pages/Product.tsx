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
    <section className="flex-1 p-10">
      <div className="mx-auto w-4/6 rounded-2xl border bg-gray-200 shadow-lg">
        <div className="flex items-center justify-center">
          <div className="relative h-5/6 w-5/6 p-5">
            <Image
              src={image}
              width={898}
              height={585}
              alt="laptop"
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="rounded-2xl border bg-white">
          <div className="flex items-center justify-between p-5">
            <BsLaptop className="text-3xl" />
            <h3 className="text-2xl font-bold capitalize">{title}</h3>
            <p className="text-lg uppercase">{price} da</p>
          </div>
          <div>
            <p className="mx-auto w-4/6">{description}</p>
          </div>
          <div className="flex items-center justify-center gap-3 py-5">
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

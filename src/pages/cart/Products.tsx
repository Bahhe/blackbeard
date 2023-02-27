import Image from "next/image";
import type { CartProduct } from "types";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "~/redux/cartSlice";
import { useDispatch } from "react-redux";

type CartProps = {
  item: CartProduct;
};

export default function Products({
  item: { id, title, image, price, quantity },
}: CartProps) {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex items-center rounded-lg border p-5">
        <Image src={image} width={150} height={90} alt="product" />
        <h1 className="mx-5 w-60 truncate text-2xl font-bold capitalize">
          {title}
        </h1>
        <p className="mx-5 w-28">{price} da</p>
        <div className="mx-5 flex w-52 items-center justify-center gap-5">
          <div className="flex items-center">
            <button
              onClick={() => dispatch(decrementQuantity(id))}
              className="mx-1 h-9 w-9 border"
            >
              -
            </button>
            <p className="mx-1 flex h-9 w-9 items-center justify-center border">
              {quantity}
            </p>
            <button
              onClick={() => dispatch(incrementQuantity(id))}
              className="mx-1 h-9 w-9 border"
            >
              +
            </button>
          </div>
          <button
            onClick={() => dispatch(removeItem(id))}
            className="rounded-lg bg-red-500 py-2 px-4 text-center text-white"
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
}

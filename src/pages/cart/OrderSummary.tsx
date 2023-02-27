import Link from "next/link";
import { useSelector } from "react-redux";
import type { RootState } from "types";

export default function OrderSummary() {
  const cart = useSelector((state: RootState) => state.cart);

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += +item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  return (
    <section>
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between gap-20">
          <h3 className="capitalize">order summary :</h3>
          <p className="text-md text-gray-500">{getTotal().totalPrice} da</p>
        </div>
        <div className="flex items-center justify-between gap-20">
          <h3 className="capitalize">additional services :</h3>
          <p className="text-md text-gray-500">500 da</p>
        </div>
        <div className="flex items-center justify-between gap-20">
          <h3 className="capitalize">order total :</h3>
          <p className="text-md text-gray-500">
            {getTotal().totalPrice + 500} da
          </p>
        </div>
        <Link
          href="checkout"
          className="mx-5 my-5 rounded bg-red-500 py-2 px-4 text-center capitalize text-white"
        >
          checkout
        </Link>
      </div>
    </section>
  );
}

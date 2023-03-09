import { useSelector } from "react-redux";
import type { RootState } from "types";
import OrderSummary from "~/sections/cart/OrderSummary";
import Products from "~/sections/cart/Products";

export default function Cart() {
  const cart = useSelector((state: RootState) => state.cart);
  return (
    <>
      <h1 className="mt-10 text-center text-4xl font-bold capitalize">
        cart items
      </h1>
      <div className="mx-auto my-40 flex w-5/6 justify-center gap-10">
        <div className="flex flex-col gap-5 rounded-lg border p-10">
          {cart?.map((item) => (
            <Products key={item.id} item={item} />
          ))}
        </div>
        <div className="place-self-start rounded-lg border p-10">
          <OrderSummary />
        </div>
      </div>
    </>
  );
}

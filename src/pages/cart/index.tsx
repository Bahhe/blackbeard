import OrderSummary from "./OrderSummary";
import Products from "./Products";

export default function Cart() {
  return (
    <>
      <h1 className="mt-10 text-center text-4xl font-bold capitalize">
        cart items
      </h1>
      <div className="mx-auto my-40 flex w-5/6 justify-center gap-10">
        <div className="flex flex-col gap-5 rounded-lg border p-10">
          <Products />
          <Products />
          <Products />
          <Products />
        </div>
        <div className="place-self-start rounded-lg border p-10">
          <OrderSummary />
        </div>
      </div>
    </>
  );
}

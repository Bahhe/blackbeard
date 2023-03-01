import Image from "next/image";
import type { Order } from "types";
import { api } from "~/utils/api";

type OrderProps = {
  order: Order;
};

export default function Order({
  order: { id, name, email, number, address, city },
}: OrderProps) {
  const infoStyle = "my-1 p-5 border rounded";
  const headingStyle = "capitalize font-bold";
  const paragraphStyle = "pl-1 text-gray-800";

  const { data: carts } = api.orders.getCarts.useQuery();
  return (
    <div className="flex items-center gap-5 rounded border p-5 shadow-lg">
      <div>
        <div className={infoStyle}>
          <h3 className={headingStyle}>name:</h3>
          <p className={paragraphStyle}>{name}</p>
        </div>
        <div className={infoStyle}>
          <h3 className={headingStyle}>email:</h3>
          <p className={paragraphStyle}>{email}</p>
        </div>
        <div className={infoStyle}>
          <h3 className={headingStyle}>phone number:</h3>
          <p className={paragraphStyle}>{number}</p>
        </div>
        <div className={infoStyle}>
          <h3 className={headingStyle}>address:</h3>
          <p className={paragraphStyle}>{address}</p>
        </div>
        <div className={infoStyle}>
          <h3 className={headingStyle}>city:</h3>
          <p className={paragraphStyle}>{city}</p>
        </div>
      </div>
      <div className="flex flex-col gap-5 p-5">
        {!carts
          ? "loading carts.."
          : carts
              .filter((cart) => cart.orderId === id)
              .map((cart) => (
                <div key={cart.cartId} className="flex items-center border p-5">
                  <Image
                    src={cart.image}
                    width={100}
                    height={50}
                    alt="product"
                  />
                  <div>
                    <h4 className="font-bold capitalize">{cart.title}</h4>
                    <div className="flex items-center justify-between text-sm">
                      <p>{cart.price} da</p>
                      <p>{cart.quantity}</p>
                    </div>
                  </div>
                </div>
              ))}
      </div>
    </div>
  );
}

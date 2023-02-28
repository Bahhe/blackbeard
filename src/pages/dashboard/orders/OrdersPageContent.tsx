import { api } from "~/utils/api";
import Order from "./Order";

export default function OrdersPageContent() {
  const { data: orders } = api.orders.getAll.useQuery();
  console.log(orders);
  return (
    <section className="flex justify-center">
      <div className="flex flex-col justify-center rounded-lg p-10 shadow-lg">
        {!orders
          ? "loading orders.."
          : orders.map((order) => <Order key={order.id} order={order} />)}
      </div>
    </section>
  );
}

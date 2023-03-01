import { useRouter } from "next/router";
import AdminHeader from "~/components/AdminHeader";
import { api } from "~/utils/api";
import Order from "./Order";

export default function OrderPage() {
  const router = useRouter();
  const { orderId } = router.query;
  const { data: order } = api.orders.getOrder.useQuery({
    id: orderId as string,
  });
  if (!order) return <p>loading order...</p>;
  return (
    <>
      <AdminHeader />
      <section className="flex items-center justify-center">
        <Order order={order} />
      </section>
    </>
  );
}

import { useRouter } from "next/router";
import AdminHeader from "~/components/AdminHeader";
import { api } from "~/utils/api";
import type { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import Order from "~/sections/dashboard/orders/order/Order";

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
export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session || session.user.email !== process.env.ADMIN_EMAIL) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

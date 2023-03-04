import AdminHeader from "~/components/AdminHeader";
import OrdersPageContent from "./OrdersPageContent";
import PageTitle from "./PageTitle";
import type { NextPageContext } from "next";
import { getSession } from "next-auth/react";

export default function Orders() {
  return (
    <section>
      <AdminHeader />
      <PageTitle title="orders" />
      <OrdersPageContent />
    </section>
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

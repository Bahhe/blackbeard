import AdminHeader from "~/components/AdminHeader";
import OrdersPageContent from "./OrdersPageContent";
import PageTitle from "./PageTitle";

export default function Orders() {
  return (
    <section>
      <AdminHeader />
      <PageTitle title="orders" />
      <OrdersPageContent />
    </section>
  );
}

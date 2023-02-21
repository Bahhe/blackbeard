import AdminHeader from "~/components/AdminHeader";
import PageTitle from "./PageTitle";
import ProductsPageContent from "./ProductsPageContent";

export default function Products() {
  return (
    <section>
      <AdminHeader />
      <PageTitle title="products" />
      <ProductsPageContent />
    </section>
  );
}

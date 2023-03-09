import AdminHeader from "~/components/AdminHeader";
import type { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import PageTitle from "~/components/PageTitle";
import ProductsPageContent from "~/sections/dashboard/products/ProductsPageContent";

export default function Products() {
  return (
    <section>
      <AdminHeader />
      <PageTitle title="products" />
      <ProductsPageContent />
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

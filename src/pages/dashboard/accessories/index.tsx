import AdminHeader from "~/components/AdminHeader";
import PageTitle from "./PageTitle";
import ProductsPageContent from "./ProductsPageContent";
import type { NextPageContext } from "next";
import { getSession } from "next-auth/react";

export default function Products() {
  return (
    <section>
      <AdminHeader />
      <PageTitle title="accessories" />
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

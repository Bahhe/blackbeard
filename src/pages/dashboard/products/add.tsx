import AdminHeader from "~/components/AdminHeader";
import type { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import PageTitle from "~/components/PageTitle";
import AddProductForm from "~/sections/dashboard/products/add/AddProductForm";

export default function Add() {
  return (
    <>
      <AdminHeader />
      <PageTitle title="add product" />
      <AddProductForm />
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

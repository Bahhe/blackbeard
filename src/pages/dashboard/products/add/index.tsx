import AdminHeader from "~/components/AdminHeader";
import PageTitle from "../PageTitle";
import AddProductForm from "./AddProductForm";
import type { NextPageContext } from "next";
import { getSession } from "next-auth/react";

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

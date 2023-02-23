import AdminHeader from "~/components/AdminHeader";
import PageTitle from "../PageTitle";
import AddProductForm from "./AddProductForm";

export default function Add() {
  return (
    <>
      <AdminHeader />
      <PageTitle title="add product" />
      <AddProductForm />
    </>
  );
}

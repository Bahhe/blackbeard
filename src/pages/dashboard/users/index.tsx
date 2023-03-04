import AdminHeader from "~/components/AdminHeader";
import PageTitle from "./PageTitle";
import UsersPageContent from "./UsersPageContent";
import type { NextPageContext } from "next";
import { getSession } from "next-auth/react";

export default function Users() {
  return (
    <section>
      <AdminHeader />
      <PageTitle title="users" />
      <UsersPageContent />
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

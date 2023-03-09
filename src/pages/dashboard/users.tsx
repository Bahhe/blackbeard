import AdminHeader from "~/components/AdminHeader";
import type { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import PageTitle from "~/components/PageTitle";
import UsersPageContent from "~/sections/dashboard/users/UsersPageContent";

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

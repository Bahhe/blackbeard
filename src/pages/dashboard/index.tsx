import type { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import AdminHeader from "~/components/AdminHeader";
import DashboardContent from "./DashboardContent";

export default function Dashboard() {
  return (
    <main>
      <AdminHeader />
      <DashboardContent />
    </main>
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

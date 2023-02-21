import AdminHeader from "~/components/AdminHeader";
import PageTitle from "./PageTitle";
import UsersPageContent from "./UsersPageContent";

export default function Users() {
  return (
    <section>
      <AdminHeader />
      <PageTitle title="users" />
      <UsersPageContent />
    </section>
  );
}

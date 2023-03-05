import { api } from "~/utils/api";
import User from "./User";

export default function UsersPageContent() {
  const { data: users } = api.users.getAll.useQuery();
  return (
    <section className="flex justify-center">
      <div className="flex flex-col justify-center gap-5 rounded-lg p-10 shadow-lg">
        {!users
          ? "loading users"
          : users.map((user) => <User key={user.id} user={user} />)}
      </div>
    </section>
  );
}

import Link from "next/link";
import { CgNotes } from "react-icons/cg";
import type { Order } from "types";
import { api } from "~/utils/api";
export type OrderProps = {
  order: Order;
};

export default function Order({ order: { id, name, email } }: OrderProps) {
  const utils = api.useContext();
  const { mutate: deleteOrder } = api.orders.deleteOrder.useMutation({
    async onSuccess() {
      await utils.orders.getAll.invalidate();
    },
  });
  return (
    <div className="flex max-h-96 items-center gap-5">
      <CgNotes className="text-7xl text-blue-700" />
      <h2 className="w-32 truncate font-semibold capitalize">{name}</h2>
      <p className="w-56 truncate ">{email}</p>
      <div className="flex items-center gap-5">
        <Link
          href={`/dashboard/orders/${id}`}
          className="rounded-lg bg-green-500 px-4 py-2 text-white shadow-lg hover:scale-105"
        >
          check
        </Link>
        <button
          onClick={() => deleteOrder(id)}
          className="rounded-lg bg-red-500 px-4 py-2 text-white shadow-lg hover:scale-105"
        >
          delete
        </button>
      </div>
    </div>
  );
}

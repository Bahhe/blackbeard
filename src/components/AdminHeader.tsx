import { AiOutlineLogout } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { MdAddBox, MdInventory, MdPeople } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { CgNotes, CgWebsite } from "react-icons/cg";
import Link from "next/link";
import { api } from "~/utils/api";
import { signOut } from "next-auth/react";

export default function AdminHeader() {
  const { data: ordersCount } = api.orders.getTotal.useQuery();
  return (
    <main className="flex justify-center">
      <nav className="my-10 flex items-center justify-center rounded-xl bg-blue-700 py-2 px-4 text-white">
        <ul className="flex items-center gap-9 text-5xl">
          <li className="text-7xl">
            <Link href="#">
              <BsFillPersonFill />
            </Link>
          </li>
          <li onClick={() => void signOut()} className="cursor-pointer">
            <AiOutlineLogout />
          </li>
          <li>
            <Link href="/dashboard">
              <RxDashboard />
            </Link>
          </li>
          <li>
            <Link href="/dashboard/users">
              <MdPeople />
            </Link>
          </li>
          <li>
            <Link href="/">
              <CgWebsite />
            </Link>
          </li>
          <li>
            <Link href="/dashboard/orders">
              <div className="relative">
                <CgNotes />
                <div className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-center text-sm text-white">
                  {ordersCount || 0}
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/products">
              <MdInventory />
            </Link>
          </li>
          <li className="text-7xl">
            <Link href="/dashboard/products/add">
              <MdAddBox />
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}

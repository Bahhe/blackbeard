import Link from "next/link";
import { BsFillPersonFill, BsHeadphones, BsLaptop } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { api } from "~/utils/api";
import ChartSection from "./ChartSection";

export default function DashboardContent() {
  const boxStyle = "flex items-center gap-5 rounded-xl p-9 shadow-lg";
  const iconStyle = "text-7xl text-blue-700";
  const titleStyle = "text-2xl capitalize";
  const quantityStyle = "text-lg text-red-500";

  const { data: totalProducts } = api.products.getTotal.useQuery();
  const { data: totalAccessories } = api.accessories.getTotal.useQuery();
  const { data: totalOrders } = api.orders.getTotal.useQuery();
  const { data: totalUsers } = api.users.getTotal.useQuery();

  return (
    <section className="flex justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-10">
          <Link className={boxStyle} href="/dashboard/products">
            <BsLaptop className={iconStyle} />
            <div>
              <h1 className={titleStyle}>laptops</h1>
              <p className={quantityStyle}>{totalProducts || "0"}</p>
            </div>
          </Link>
          <Link className={boxStyle} href="/dashboard/accessories">
            <BsHeadphones className={iconStyle} />
            <div>
              <h1 className={titleStyle}>accessories</h1>
              <p className={quantityStyle}>{totalAccessories || "0"}</p>
            </div>
          </Link>
          <Link href="/dashboard/users" className={boxStyle}>
            <BsFillPersonFill className={iconStyle} />
            <div>
              <h1 className={titleStyle}>users</h1>
              <p className={quantityStyle}>{totalUsers || 0}</p>
            </div>
          </Link>
          <Link href="dashboard/orders" className={boxStyle}>
            <CgNotes className={iconStyle} />
            <div>
              <h1 className={titleStyle}>orders</h1>
              <p className={quantityStyle}>{totalOrders || "0"}</p>
            </div>
          </Link>
        </div>
        <div className="my-20 w-full rounded-lg shadow-lg">
          <ChartSection />
        </div>
      </div>
    </section>
  );
}

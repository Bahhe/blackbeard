import { BiSupport } from "react-icons/bi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";

const items = [
  {
    icon: <BiSupport />,
    text: "online support",
  },
  {
    icon: <FaRegMoneyBillAlt />,
    text: "free shipping in orders over 5000 da",
  },
  {
    icon: <MdLocalShipping />,
    text: "58 states shipping",
  },
];

export default function Marketing() {
  return (
    <section className="my-20">
      <div className="w-3/6 mx-auto flex items-center justify-center gap-16">
        {items.map((item, index) => (
          <div
            key={index}
            className="border p-14 aspect-square flex flex-col items-center justify-center gap-14"
          >
            <div className="text-6xl">{item.icon}</div>
            <div>
              <p className="text-2xl capitalize font-extrabold">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

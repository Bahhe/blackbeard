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
    <section className="mt-40 mb-52">
      <div className="mx-auto flex w-3/6 items-center justify-center gap-16">
        {items.map((item, index) => (
          <div
            key={index}
            className="group relative flex aspect-square cursor-pointer flex-col items-center justify-center gap-14 p-10"
          >
            <div className="text-6xl">{item.icon}</div>
            <div>
              <p className="text-center capitalize">{item.text}</p>
            </div>
            <span className="absolute top-0 right-0 h-[30%] w-[30%] border-t border-r border-black duration-300 group-hover:-top-3 group-hover:-right-3"></span>
            <span className="absolute top-0 left-0 h-[30%] w-[30%] border-t border-l border-black duration-300 group-hover:-top-3 group-hover:-left-3"></span>
            <span className="absolute bottom-0 right-0 h-[30%] w-[30%] border-b border-r border-black duration-300 group-hover:-bottom-3 group-hover:-right-3"></span>
            <span className="absolute bottom-0 left-0 h-[30%] w-[30%] border-b border-l border-black duration-300 group-hover:-bottom-3 group-hover:-left-3"></span>
          </div>
        ))}
      </div>
    </section>
  );
}

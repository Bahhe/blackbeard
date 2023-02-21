import Image from "next/image";
import { MdPerson } from "react-icons/md";
import prestige from "/public/prestige.webp";

export default function ProductsPageContent() {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col justify-center rounded-lg p-10 shadow-lg">
        <div className="flex max-h-96 items-center gap-5">
          <Image src={prestige} width={100} height={50} alt="product" />
          <h2 className="font-semibold capitalize">Lorem ipsum dolor sit.</h2>
          <p className="capitalize text-red-500">18999 da</p>
          <div className="flex items-center gap-5">
            <button className="rounded-lg bg-green-500 px-4 py-2 text-white shadow-lg hover:scale-105">
              edit
            </button>
            <button className="rounded-lg bg-red-500 px-4 py-2 text-white shadow-lg hover:scale-105">
              delete
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

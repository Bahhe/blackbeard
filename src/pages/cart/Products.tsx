import Image from "next/image";
import prestige from "/public/prestige.webp";

export default function Products() {
  return (
    <div>
      <div className="flex items-center rounded-lg border p-5">
        <Image src={prestige} width={150} height={90} alt="product" />
        <h1 className="mx-5 w-60 truncate text-2xl font-bold capitalize">
          msi prestige 14 evo
        </h1>
        <p className="mx-5 w-28">140000 da</p>
        <div className="mx-5 flex w-52 items-center justify-center gap-5">
          <input
            type="number"
            defaultValue={1}
            className="w-4/6 rounded-lg border text-center"
          />
          <button className="rounded-lg bg-red-500 py-2 px-4 text-center text-white">
            delete
          </button>
        </div>
      </div>
    </div>
  );
}

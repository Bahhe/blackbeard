import Image from "next/image";
import { BsBag } from "react-icons/bs";
import prestige from "/public/prestige.webp";
import { MdAttachMoney } from "react-icons/md";

export default function Product() {
  return (
    <section className="mx-auto my-32 w-5/6">
      <div className="mx-auto flex w-5/6 items-center justify-center">
        <div className="flex-1">
          <div className="flex items-center justify-center">
            <Image src={prestige} width={500} height={200} alt="product" />
          </div>
        </div>
        <div className="flex-1 p-5">
          <h1 className="text-4xl font-bold capitalize">msi prestige 14 evo</h1>
          <p className="my-10 max-w-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
            dolore dignissimos autem labore ratione tenetur illo quis fuga esse
            maxime!
          </p>
          <h2 className="my-5 text-xl font-bold capitalize">specs:</h2>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center">
              <h3 className="mr-5 font-bold capitalize">cpu:</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li className="flex items-center">
              <h3 className="mr-5 font-bold capitalize">ram:</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li className="flex items-center">
              <h3 className="mr-5 font-bold capitalize">storage:</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li className="flex items-center">
              <h3 className="mr-5 font-bold capitalize">display:</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li className="flex items-center">
              <h3 className="mr-5 font-bold capitalize">gpu:</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
          <div className="my-5 text-xl uppercase text-red-500">
            <p>10000 da</p>
          </div>
          <div className="flex items-center justify-between">
            <input type="number" value={1} className="border text-center" />
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 border py-2 px-4 capitalize shadow-lg duration-75 hover:scale-105">
                <BsBag />
                <p>add to cart</p>
              </button>
              <button className="flex items-center gap-2 border py-2 px-4 capitalize shadow-lg duration-75 hover:scale-105">
                <MdAttachMoney />
                <p>order now</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

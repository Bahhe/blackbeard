import Image from "next/image";
import Link from "next/link";
import type { Accessory } from "types";
import { api } from "~/utils/api";

type ProductProps = {
  product: Accessory;
};

export default function Product({
  product: { id, image, title, price },
}: ProductProps) {
  const utils = api.useContext();
  const { mutate: deleteProduct } = api.accessories.deleteProduct.useMutation({
    async onSuccess() {
      await utils.accessories.invalidate();
    },
  });

  return (
    <div className="flex max-h-96 items-center gap-8">
      <Image src={image} width={50} height={50} alt="product" />
      <h2 className="w-40 truncate font-semibold capitalize">{title}</h2>
      <p className="w-32 capitalize text-red-500">{price} da</p>
      <div className="flex items-center gap-5">
        <Link
          href={`/dashboard/accessories/${id}`}
          className="w-20 rounded-lg bg-green-500 px-4 py-2 text-center text-white shadow-lg hover:scale-105"
        >
          edit
        </Link>
        <button
          onClick={() => deleteProduct(id)}
          className="hadow-lg w-20 rounded-lg bg-red-500 px-4 py-2 text-center text-white hover:scale-105"
        >
          delete
        </button>
      </div>
    </div>
  );
}

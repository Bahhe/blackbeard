import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo.png";
import { BsSearch } from "react-icons/bs";
import { useRouter } from "next/router";
import { adminRoutes } from "./Footer";
import { api } from "~/utils/api";
import { useState } from "react";

const linkStyle =
  "border-b border-white hover:border-black ease-in-out duration-1000 outline-none relative text-sm";

export default function Header() {
  const [search, setSearch] = useState("");
  const { data: products } = api.products.getAll.useQuery({ search: search });

  const { asPath } = useRouter();
  if (adminRoutes.test(asPath)) {
    return <></>;
  }
  return (
    <header className="flex w-full items-center justify-evenly">
      <nav className="flex flex-1 items-center justify-evenly font-bold capitalize">
        <Link href="/about" className={linkStyle}>
          about
        </Link>
        <Link href="/" className={linkStyle}>
          home
        </Link>
        <div className="group text-sm">
          shop now
          <div className="absolute hidden rounded-lg p-5 shadow-lg group-hover:block">
            <Link href="/shop/products" className={`block py-1 ${linkStyle}`}>
              laptops
            </Link>
            <Link
              href="/shop/accessories"
              className={`block py-1 ${linkStyle}`}
            >
              accessories
            </Link>
          </div>
        </div>
      </nav>
      <section className="flex flex-1 items-center justify-center">
        <Link href="/">
          <Image
            src={logo}
            width={100}
            height={100}
            alt="logo"
            className="h-auto w-16 py-2 duration-500 hover:scale-105 lg:w-auto"
          />
        </Link>
      </section>
      <form className="relative hidden flex-1 items-center justify-center lg:flex">
        <div className="flex items-center rounded-lg border px-2 duration-300 ease-out hover:scale-105 hover:shadow-lg">
          <input
            type="text"
            placeholder="Search Products..."
            className="p-3 text-sm text-gray-700 outline-none "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <BsSearch className="mx-2" />
        </div>
        {search && (
          <div className="absolute bottom-0 h-72 w-72 translate-y-full overflow-y-auto rounded-lg border bg-white p-5 shadow-lg">
            {!products
              ? "loading products..."
              : products.map((product, index) => (
                  <Link
                    href={`/shop/product/${product.id}`}
                    className="my-2 flex items-center gap-2 rounded border p-2"
                    key={index}
                  >
                    <Image
                      src={product.image}
                      width={50}
                      height={50}
                      alt="product"
                    />
                    <div>
                      <h1 className="w-36 truncate">{product.title}</h1>
                      <p className="w-32 truncate text-xs text-gray-700">
                        {product.description}
                      </p>
                    </div>
                  </Link>
                ))}
          </div>
        )}
      </form>
    </header>
  );
}

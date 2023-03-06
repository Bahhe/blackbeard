import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo.png";
import { BsSearch } from "react-icons/bs";
import { useRouter } from "next/router";
import { adminRoutes } from "./Footer";

const linkStyle =
  "border-b-2 border-white hover:border-black ease-in-out duration-1000 outline-none";

export default function Header() {
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
        <Link href="/shop" className={linkStyle}>
          shop now
        </Link>
      </nav>
      <section className="flex flex-1 items-center justify-center">
        <Link href="/">
          <Image
            src={logo}
            width={100}
            height={100}
            alt="logo"
            className="h-auto w-auto py-2 duration-500 hover:scale-105"
          />
        </Link>
      </section>
      <form className="flex flex-1 items-center justify-center">
        <div className="flex items-center rounded-lg border px-2 shadow-lg duration-500 hover:scale-105">
          <input
            type="text"
            placeholder="Search Products..."
            className="p-3 text-sm text-gray-700 outline-none "
          />
          <BsSearch className="mx-2" />
        </div>
      </form>
    </header>
  );
}

import Link from "next/link";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoMdPerson } from "react-icons/io";
import { useSelector } from "react-redux";
import type { RootState } from "types";
import { signIn, signOut, useSession } from "next-auth/react";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineLogout } from "react-icons/ai";
import { allowedEmails } from "~/utils/allowedEmails";

const iconsStyle = "hover:text-blue-700 cursor-pointer duration-500";

const Cart = () => {
  const { data: sessionData } = useSession();
  const cart = useSelector((state: RootState) => state.cart);
  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  return (
    <div className="fixed left-1/2 bottom-10 z-10 flex -translate-x-1/2 items-center gap-4 rounded-lg border bg-white py-2 px-4 text-4xl shadow-lg duration-500 hover:-translate-y-2">
      {sessionData ? (
        allowedEmails.includes(sessionData.user.email as string) && (
          <Link href="dashboard" className="">
            <RxDashboard className={iconsStyle} />
          </Link>
        )
      ) : (
        <></>
      )}
      <button
        title={sessionData ? "Sign out" : "Sign in"}
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? (
          <AiOutlineLogout />
        ) : (
          <IoMdPerson className={iconsStyle} />
        )}
      </button>

      <Link href="cart" className="relative">
        <span className="absolute  top-0 right-0 flex h-5 w-5 translate-x-1 flex-col items-center justify-center rounded-full bg-red-500 text-sm text-white">
          {getTotalQuantity() || 0}
        </span>
        <HiOutlineShoppingBag className={iconsStyle} />
      </Link>
    </div>
  );
};
export default Cart;

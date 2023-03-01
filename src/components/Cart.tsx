import Link from "next/link";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoMdPerson } from "react-icons/io";
import { useSelector } from "react-redux";
import type { RootState } from "types";
import { signIn, signOut, useSession } from "next-auth/react";

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
      <button
        title={sessionData ? "Sign out" : "Sign in"}
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        <IoMdPerson className={iconsStyle} />
      </button>
      <Link href="cart" className="relative">
        <HiOutlineShoppingBag className={iconsStyle} />
        <span className="absolute  top-0 right-0 flex h-5 w-5 translate-x-1 flex-col items-center justify-center rounded-full bg-red-500 text-sm text-white">
          {getTotalQuantity() || 0}
        </span>
      </Link>
    </div>
  );
};
export default Cart;

// const AuthShowcase: React.FC = () => {
//   const { data: sessionData } = useSession();

// const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//   undefined, // no input
//   { enabled: sessionData?.user !== undefined },
// );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {/* {secretMessage && <span> - {secretMessage}</span>} */}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// };

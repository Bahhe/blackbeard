import type { inferRouterOutputs } from "@trpc/server";
import type { AppRouter } from "./src/server/api/root";

type RouterOutputs = inferRouterOutputs<AppRouter>;
type allProductsOutputs = RouterOutputs["products"]["getAll"];
type allOrdersOutputs = RouterOutputs["orders"]["getAll"];
type allUsersOutputs = RouterOutputs["users"]["getAll"];

export type Product = allProductsOutputs[number];
export type Order = allOrdersOutputs[number];
export type User = allUsersOutputs[number];

export type CartProduct = {
  id: string;
  title: string;
  image: string;
  price: string;
  quantity: number;
};

export type RootState = {
  cart: CartProduct[];
};

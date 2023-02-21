import type { inferRouterOutputs } from "@trpc/server";
import type { AppRouter } from "./src/server/api/root";

type RouterOutputs = inferRouterOutputs<AppRouter>;
type allProductsOutputs = RouterOutputs["products"]["getAll"];

export type Product = allProductsOutputs[number];

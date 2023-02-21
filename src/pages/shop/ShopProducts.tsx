import { api } from "~/utils/api";
import Product from "./Product";

export default function ShopProducts() {
  const { data: products } = api.products.getAll.useQuery();
  return (
    <section className="mb-20 flex flex-wrap justify-center gap-10">
      {!products
        ? "loading products..."
        : products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
    </section>
  );
}

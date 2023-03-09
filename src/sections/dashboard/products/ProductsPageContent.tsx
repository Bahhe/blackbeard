import { api } from "~/utils/api";
import Product from "./Product";

export default function ProductsPageContent() {
  const { data: products } = api.products.getAll.useQuery({});
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center gap-5 rounded-lg p-10 shadow-lg">
        {!products
          ? "loading products..."
          : products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
}

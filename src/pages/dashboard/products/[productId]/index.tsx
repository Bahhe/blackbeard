import { useRouter } from "next/router";
import { api } from "~/utils/api";
import Product from "./Product";

export default function EditProduct() {
  const router = useRouter();
  const { productId } = router.query;
  const { data: product } = api.products.getProduct.useQuery({
    id: productId as string,
  });
  if (!product) return <p>loading product...</p>;
  return <Product product={product} />;
}

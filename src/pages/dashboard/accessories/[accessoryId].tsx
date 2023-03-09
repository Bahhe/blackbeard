import { useRouter } from "next/router";
import { api } from "~/utils/api";
import type { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import Product from "~/sections/dashboard/accessories/product/Product";

export default function EditProduct() {
  const router = useRouter();
  const { accessoryId } = router.query;
  const { data: product } = api.accessories.getProduct.useQuery({
    id: accessoryId as string,
  });
  if (!product) return <p>loading product...</p>;
  return <Product product={product} />;
}
export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session || session.user.email !== process.env.ADMIN_EMAIL) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

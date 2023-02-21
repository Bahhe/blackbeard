import SectionTitle from "~/components/SectionTitle";
import { api } from "~/utils/api";
import DiscoverProduct from "./DiscoverProduct";

const Discover = () => {
  const { data: product } = api.products.getAll.useQuery();

  return (
    <section className="">
      <div className="mx-auto w-4/6">
        <SectionTitle name="discover" />
        <div className="flex items-center gap-10">
          {!product
            ? "loading products..."
            : product.map((product) => (
                <DiscoverProduct key={product.id} product={product} />
              ))}
        </div>
      </div>
    </section>
  );
};

export default Discover;

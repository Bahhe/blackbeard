import SectionTitle from "~/components/SectionTitle";
import { api } from "~/utils/api";
import DiscoverProduct from "./DiscoverProduct";

const Discover = () => {
  const { data: product } = api.products.getAll.useQuery({});

  return (
    <section className="marquee h-[500px]">
      <SectionTitle name="discover" />
      <div className="track">
        <div className="content flex min-w-max gap-10">
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

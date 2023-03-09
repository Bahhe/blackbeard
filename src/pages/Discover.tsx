import SectionTitle from "~/components/SectionTitle";
import DiscoverProduct from "./DiscoverProduct";
import type { Product } from "types";

const Discover = ({ products }: { products?: Product[] }) => {
  return (
    <section className="marquee h-[500px]">
      <SectionTitle name="discover" />
      <div className="track">
        <div className="content flex min-w-max gap-10">
          {!products
            ? "loading products..."
            : products.map((product) => (
                <DiscoverProduct key={product.id} product={product} />
              ))}
        </div>
      </div>
    </section>
  );
};

export default Discover;

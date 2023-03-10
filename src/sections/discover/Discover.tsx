import SectionTitle from "~/components/SectionTitle";
import DiscoverProduct from "./DiscoverProduct";
import type { Accessory, Product } from "types";

const Discover = ({
  products,
  accessories,
}: {
  products?: Product[];
  accessories?: Accessory[];
}) => {
  const items = [...(products as Product[]), ...(accessories as Accessory[])];
  console.log(items);
  return (
    <section className="marquee">
      <SectionTitle name="discover" />
      <div className="track">
        <div className="content flex gap-10">
          {!items
            ? "loading products..."
            : items.map((product) => (
                <DiscoverProduct key={product.id} product={product} />
              ))}
        </div>
      </div>
    </section>
  );
};

export default Discover;

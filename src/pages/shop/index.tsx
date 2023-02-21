import Navigation from "./Navigation";
import ShopProducts from "./ShopProducts";

export default function Shop() {
  return (
    <main className="mx-auto flex w-4/6 flex-col">
      <section>
        <Navigation />
        <ShopProducts />
      </section>
    </main>
  );
}

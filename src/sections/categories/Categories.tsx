import Image from "next/image";
import prestige from "/public/prestige.webp";
import headphone from "/public/headphone.png";
import SectionTitle from "~/components/SectionTitle";
import Link from "next/link";

const productStyle = "flex items-center";
const categoryNameStyle = "text-2xl rotate-90 font-extrabold";
const imageStyle = "hover:scale-105 duration-500 cursor-pointer";

const Categories = () => {
  return (
    <section className="mx-auto w-4/6">
      <div>
        <SectionTitle name="choose a category" />
        <div className="flex items-center justify-center gap-10">
          <Link href="/shop/products" className={productStyle}>
            <h4 className={categoryNameStyle}>laptops</h4>
            <div>
              <Image
                src={prestige}
                width={300}
                height={300}
                alt="laptops"
                className={imageStyle}
              />
            </div>
          </Link>
          <Link href="/shop/accessories" className={productStyle}>
            <h4 className={categoryNameStyle}>accessories</h4>
            <div>
              <Image
                src={headphone}
                width={300}
                height={300}
                alt="categories"
                className={imageStyle}
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Categories;

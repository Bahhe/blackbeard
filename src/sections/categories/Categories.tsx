import Image from "next/image";
import prestige from "/public/prestige.webp";
import headphone from "/public/headphone.png";
import SectionTitle from "~/components/SectionTitle";
import Link from "next/link";

const productStyle = "flex items-center";
const categoryNameStyle =
  "text-2xl rotate-90 font-extrabold capitalize w-1/2 lg:w-auto text-center";
const imageStyle = "hover:scale-105 duration-500 cursor-pointer";

const Categories = () => {
  return (
    <section className="mx-auto lg:w-4/6">
      <div>
        <SectionTitle name="choose a category" />
        <div className="flex flex-col items-center justify-center gap-10 lg:flex-row">
          <Link href="/shop/products" className={productStyle}>
            <h4 className={categoryNameStyle}>laptops</h4>
            <div className="w-1/2 lg:w-auto">
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
            <div className="w-1/2 lg:w-auto">
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

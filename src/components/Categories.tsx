import Image from "next/image";
import prestige from "/public/prestige.webp";
import SectionTitle from "./SectionTitle";

const productStyle = "flex items-center";
const categoryNameStyle = "text-2xl rotate-90 font-extrabold";
const imageStyle = "hover:scale-105 duration-500 cursor-pointer";

const Categories = () => {
  return (
    <section className="mx-auto w-4/6">
      <div>
        <SectionTitle name="choose a category" />
        <div className="flex items-center justify-center gap-10">
          <div className={productStyle}>
            <h4 className={categoryNameStyle}>laptops</h4>
            <div>
              <Image
                src={prestige}
                width={898}
                height={585}
                alt="laptops"
                className={imageStyle}
              />
            </div>
          </div>
          <div className={productStyle}>
            <h4 className={categoryNameStyle}>accessories</h4>
            <div>
              <Image
                src={prestige}
                width={898}
                height={585}
                alt="categories"
                className={imageStyle}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Categories;

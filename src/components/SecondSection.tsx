import Product from "./Product";

const sectionTitleStyle = "text-5xl text-center uppercase font-extrabold py-10";
const sectionProductStyle = "felx flex-1 flex-col items-center justify-center";

const SecondSection = () => {
  return (
    <section className="mt-28">
      <div className="mx-auto flex w-4/6 items-center justify-evenly">
        <div className={sectionProductStyle}>
          <h2 className={sectionTitleStyle}>new arivals</h2>
          <Product />
        </div>
        <div className={sectionProductStyle}>
          <Product />
          <h2 className={sectionTitleStyle}>best selling</h2>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;

import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

const sections = [
  {
    title: "information",
    links: ["about us", "terms of use", "site map"],
  },
  {
    title: "footer links",
    links: ["home page", "shop section", "my account", "contact us"],
  },
  {
    title: "our services",
    links: ["laptops", "accessories", "maintenance"],
  },
  {
    title: "contact info",
    links: ["555-555-555", "example@example.com", "123 main street algeria"],
  },
];

export default function Footer() {
  return (
    <footer>
      <h6 className="text-center text-4xl font-extrabold">BlackBeardt</h6>
      <div className="flex justify-center w-5/6 mx-auto py-20 gap-16">
        {sections.map((section, index) => (
          <section key={index}>
            <h6 className="text-xl font-bold">{section.title}</h6>
            <ul className="font-thin pl-2">
              {section.links.map((link, index) => (
                <li key={index}>{link}</li>
              ))}
            </ul>
          </section>
        ))}
        <section>
          <h6 className="text-3xl font-bold capitalize">
            subscribe to our newsletter
          </h6>
          <p className="font-thin text-gray-700">
            sign up for BlackBeardt newsletter
          </p>
          <div className="my-5">
            <input
              type="email"
              className="border p-3 rounded-lg shadow-xl mx-2"
              placeholder="example@gmail.com"
            />
            <button className="bg-blue-700 rounded-lg shadow-xl p-3 text-white cursor-pointer">
              subscribe
            </button>
          </div>
          <h6 className="text-2xl font-bold capitalize">connect with us</h6>
          <div className="flex items-center text-4xl gap-3 mt-3 text-blue-700">
            <FaFacebookSquare />
            <FaInstagramSquare />
          </div>
        </section>
      </div>
      <footer className="text-sm font-thin text-gray-700 py-10 text-center">
        BlackBeardt © 2023 Store. All Rights Reserved. Designed by
        BahaEddine.Com
      </footer>
    </footer>
  );
}

import { useRouter } from "next/router";
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

export const adminRoutes = /\/dashboard*/;

export default function Footer() {
  const { asPath } = useRouter();
  if (adminRoutes.test(asPath)) {
    return <></>;
  }
  return (
    <footer>
      <h6 className="text-center text-4xl font-extrabold">BlackBeardt</h6>
      <div className="mx-auto flex w-5/6 justify-center gap-16 py-20">
        {sections.map((section, index) => (
          <section key={index}>
            <h6 className="text-xl font-bold">{section.title}</h6>
            <ul className="pl-2 font-thin">
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
              className="mx-2 rounded-lg border p-3 shadow-xl"
              placeholder="example@gmail.com"
            />
            <button className="cursor-pointer rounded-lg bg-blue-700 p-3 text-white shadow-xl">
              subscribe
            </button>
          </div>
          <h6 className="text-2xl font-bold capitalize">connect with us</h6>
          <div className="mt-3 flex items-center gap-3 text-4xl text-blue-700">
            <FaFacebookSquare />
            <FaInstagramSquare />
          </div>
        </section>
      </div>
      <footer className="py-10 text-center text-sm font-thin text-gray-700">
        BlackBeardt © 2023 Store. All Rights Reserved. Designed by
        BahaEddine.Com
      </footer>
    </footer>
  );
}

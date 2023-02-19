import Image from "next/image";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import prestige from "/public/prestige.webp";

const LandingSection = () => {
  return (
    <section className="mt-32">
      <div className="relative mx-auto flex w-4/6 items-center py-28">
        <div className="flex-1">
          <div className="w-5/6 pl-16">
            <h1 className="mb-5 text-4xl font-extrabold capitalize">
              msi prestige 14 evo
            </h1>
            <p className="capitalize">
              the only powerful msi prestige gaming pc you need to play every
              game you wish it comes with a intel core i9 12th generation and
              32gb ram and 2tb nvme ssd
            </p>
          </div>
        </div>
        <div className="flex-1">
          <div className="w-5/6">
            <Image src={prestige} width={898} height={585} alt="laptop" />
          </div>
        </div>
        <FaArrowCircleLeft className="absolute left-0 -translate-x-1/2 cursor-pointer text-5xl text-blue-700 hover:scale-105" />
        <FaArrowCircleRight className="absolute right-0 translate-x-1/2 cursor-pointer text-5xl text-blue-700 hover:scale-105" />
      </div>
    </section>
  );
};

export default LandingSection;

import Image from "next/image";
import cover from "/public/swiperCoverOne.png";
import product from "/public/prestige.webp";
import { AiOutlineStar } from "react-icons/ai";
import { FaArrowAltCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const ProductSwiper = () => {
  return (
    <section>
      <div className="mx-auto flex items-center rounded-2xl border shadow-xl">
        <div className="mt-10 ml-10 mb-10 self-start overflow-hidden rounded-3xl border shadow-xl">
          <Image
            src={cover}
            width={817}
            height={1024}
            alt="cover"
            className="object-cover"
          />
        </div>
        <div className="relative flex items-center gap-4 p-10">
          <FaArrowCircleLeft className="absolute top-1/2 left-0 -translate-y-1/2 text-4xl" />
          <FaArrowAltCircleRight className="absolute top-1/2 right-0 -translate-y-1/2 text-4xl" />
          <div>
            <div className="flex aspect-square flex-col items-center justify-center rounded-3xl border">
              <Image src={product} width={898} height={595} alt="laptop" />
            </div>
            <div className="mt-3 flex flex-col items-center gap-4">
              <h6 className="text-xl font-bold capitalize">hp spectre x360</h6>
              <div className="flex items-center justify-center">
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </div>
              <p>1888 da</p>
            </div>
          </div>
          <div>
            <div className="flex aspect-square flex-col items-center justify-center rounded-3xl border">
              <Image src={product} width={898} height={595} alt="laptop" />
            </div>
            <div className="mt-3 flex flex-col items-center gap-4">
              <h6 className="text-xl font-bold capitalize">hp spectre x360</h6>
              <div className="flex items-center justify-center">
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </div>
              <p>1888 da</p>
            </div>
          </div>
          <div>
            <div className="flex aspect-square flex-col items-center justify-center rounded-3xl border">
              <Image src={product} width={898} height={595} alt="laptop" />
            </div>
            <div className="mt-3 flex flex-col items-center gap-4">
              <h6 className="text-xl font-bold capitalize">hp spectre x360</h6>
              <div className="flex items-center justify-center">
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </div>
              <p>1888 da</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSwiper;

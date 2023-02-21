import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import Image from "next/image";
import cover from "/public/swiperCoverOne.png";
import { FaArrowAltCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import LaptopsSwiperProduct from "./LaptopsSwiperProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import { api } from "~/utils/api";

const ProductSwiper = () => {
  const { data: products } = api.products.getAll.useQuery();
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
        <div className="relative flex w-4/6 items-center gap-4 p-10">
          <FaArrowCircleLeft className="image-laptops-swiper-button-prev absolute top-1/2 left-0 -translate-y-1/2 text-4xl" />
          <FaArrowAltCircleRight className="image-laptops-swiper-button-next absolute top-1/2 right-0 -translate-y-1/2 text-4xl" />
          <Swiper
            slidesPerView={3}
            navigation={{
              nextEl: ".image-laptops-swiper-button-next",
              prevEl: ".image-laptops-swiper-button-prev",
              disabledClass: "swiper-button-disabled",
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {!products
              ? "loading products..."
              : products.map((product) => (
                  <SwiperSlide key={product.id}>
                    <LaptopsSwiperProduct product={product} />
                  </SwiperSlide>
                ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProductSwiper;

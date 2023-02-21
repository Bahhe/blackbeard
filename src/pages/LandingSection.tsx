import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

import LandingSectionSwiperProduct from "./LandingSectionSwiperProduct";
import { api } from "~/utils/api";

const LandingSection = () => {
  const { data: products } = api.products.getAll.useQuery();
  return (
    <section className="mt-32">
      <div className="relative mx-auto flex w-4/6 items-center py-28">
        <Swiper
          navigation={{
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev",
            disabledClass: "swiper-button-disabled",
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {!products
            ? "loading products..."
            : products?.map((product) => (
                <SwiperSlide key={product.id}>
                  <LandingSectionSwiperProduct product={product} />
                </SwiperSlide>
              ))}
        </Swiper>
        <FaArrowCircleLeft className="image-swiper-button-prev absolute left-0 z-10 -translate-x-1/2 cursor-pointer text-5xl text-blue-700 hover:scale-105" />
        <FaArrowCircleRight className="image-swiper-button-next absolute right-0 z-10 translate-x-1/2 cursor-pointer text-5xl text-blue-700 hover:scale-105" />
      </div>
    </section>
  );
};

export default LandingSection;

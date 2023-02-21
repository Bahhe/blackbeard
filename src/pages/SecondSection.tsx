import Product from "./Product";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import { api } from "~/utils/api";

const SecondSection = () => {
  const { data: products } = api.products.getAll.useQuery();
  return (
    <section className="mt-20">
      <div className="">
        <div className="relative mx-auto w-5/6">
          <h2 className="py-10 text-center text-5xl font-extrabold uppercase">
            new arivals
          </h2>
          <Swiper
            slidesPerView={2}
            navigation={{
              nextEl: ".image-second-swiper-button-next",
              prevEl: ".image-second-swiper-button-prev",
              disabledClass: "swiper-button-disabled",
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {!products
              ? "loading product..."
              : products.map((product) => (
                  <SwiperSlide key={product.id}>
                    <Product key={product.id} product={product} />
                  </SwiperSlide>
                ))}
          </Swiper>
          <FaArrowCircleRight className="image-second-swiper-button-next absolute right-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer text-4xl text-blue-700 hover:scale-105" />
          <FaArrowCircleLeft className="image-second-swiper-button-prev absolute left-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer text-4xl text-blue-700 hover:scale-105" />
        </div>
      </div>
    </section>
  );
};

export default SecondSection;

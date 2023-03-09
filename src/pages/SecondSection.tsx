import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper";
import type { Product } from "types";
import SecondSectionProduct from "./SecondSectionProduct";

const SecondSection = ({ products }: { products?: Product[] }) => {
  return (
    <section className="mt-20">
      <div className="">
        <div className="mx-auto w-5/6">
          <h2 className="pb-40 text-center text-5xl font-extrabold uppercase">
            new arivals
          </h2>
          <div className="flex">
            <Swiper
              slidesPerView={3}
              navigation={{
                nextEl: ".image-second-swiper-button-next",
                prevEl: ".image-second-swiper-button-prev",
                disabledClass: "swiper-button-disabled",
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              modules={[Navigation, Autoplay]}
              className="mySwiper relative flex-1"
            >
              {!products
                ? "loading product..."
                : products
                    .map((product) => (
                      <SwiperSlide key={product.id}>
                        <SecondSectionProduct
                          key={product.id}
                          product={product}
                        />
                      </SwiperSlide>
                    ))
                    .reverse()}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;

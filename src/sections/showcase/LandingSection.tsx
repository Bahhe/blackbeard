import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import LandingSectionSwiperProduct from "./LandingSectionSwiperProduct";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import type { Product } from "types";

const LandingSection = ({ products }: { products?: Product[] }) => {
  return (
    <section className="mt-32">
      <div className="group relative mx-auto flex w-4/6 items-center py-28">
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
            : products
                ?.map((product) => (
                  <SwiperSlide key={product.id}>
                    <LandingSectionSwiperProduct product={product} />
                  </SwiperSlide>
                ))
                .reverse()}
        </Swiper>
        <MdArrowBackIos className="image-swiper-button-prev absolute left-0 z-10 -translate-x-1/2 cursor-pointer text-5xl opacity-0  duration-700 hover:scale-105 group-hover:opacity-100" />
        <MdArrowForwardIos className="image-swiper-button-next absolute right-0 z-10 translate-x-1/2 cursor-pointer text-5xl opacity-0 duration-700 hover:scale-105 group-hover:opacity-100" />
      </div>
    </section>
  );
};

export default LandingSection;

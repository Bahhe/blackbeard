import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import Image from "next/image";
import cover from "/public/laptopsCover.png";
import LaptopsSwiperProduct from "./LaptopsSwiperProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import { api } from "~/utils/api";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const LaptopsProducts = () => {
  const { data: products } = api.products.getAll.useQuery({});
  return (
    <section>
      <div className="mx-auto flex items-center rounded-2xl border shadow-xl">
        <div className="mt-10 ml-10 mb-10 self-start overflow-hidden rounded-3xl border shadow-xl">
          <Image
            src={cover}
            width={317}
            height={424}
            alt="cover"
            className="h-auto w-auto object-cover"
          />
        </div>
        <div className="relative mx-auto flex w-4/6 items-center gap-4 p-10">
          <MdArrowBackIos className="image-laptops-swiper-button-prev absolute top-1/2 -left-5 -translate-y-1/2 cursor-pointer text-4xl" />
          <MdArrowForwardIos className="image-laptops-swiper-button-next absolute top-1/2 -right-5 -translate-y-1/2 cursor-pointer text-4xl" />
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
              : products
                  .map((product) => (
                    <SwiperSlide key={product.id}>
                      <LaptopsSwiperProduct product={product} />
                    </SwiperSlide>
                  ))
                  .reverse()}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default LaptopsProducts;

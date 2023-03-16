import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Image from "next/image";
import cover from "/public/laptopsCover.png";
import LaptopsSwiperProduct from "./LaptopsSwiperProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { type Product } from "types";

const LaptopsProducts = ({ products }: { products?: Product[] }) => {
  return (
    <section>
      <div className="mx-auto flex items-center rounded-2xl border shadow-xl">
        <div className="mt-10 ml-10 mb-10 hidden self-start overflow-hidden rounded-3xl border shadow-lg lg:block">
          <Image src={cover} width={380} alt="cover" className="object-cover" />
        </div>
        <div className="relative mx-auto flex w-4/6 items-center gap-4 py-2 lg:p-10 lg:py-0">
          <MdArrowBackIos className="image-laptops-swiper-button-prev absolute top-1/2 -left-9 -translate-y-1/2 cursor-pointer text-4xl lg:-left-5" />
          <MdArrowForwardIos className="image-laptops-swiper-button-next absolute top-1/2 -right-9 -translate-y-1/2 cursor-pointer text-4xl lg:-right-5" />
          <Swiper
            slidesPerView={1}
            breakpoints={{
              1024: {
                slidesPerView: 2,
              },
              1536: {
                slidesPerView: 3,
              },
            }}
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

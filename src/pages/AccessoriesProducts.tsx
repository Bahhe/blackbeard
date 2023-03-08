import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import Image from "next/image";
import cover from "/public/accessoriesCover.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { api } from "~/utils/api";
import AccessoriesSwiperProduct from "./AccessoriesSwiperProduct";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { createProxySSGHelpers } from "@trpc/react-query/ssg";
import { appRouter } from "~/server/api/root";
import { createInnerTRPCContext } from "~/server/api/trpc";
import superjson from "superjson";

const AccessoriesProducts = () => {
  const { data: accessories } = api.accessories.getAll.useQuery();
  return (
    <section>
      <div className="mx-auto flex items-center rounded-2xl border shadow-xl">
        <div className="relative mx-auto flex w-4/6 items-center gap-4 p-10">
          <MdArrowBackIos className="image-accessories-swiper-button-prev absolute top-1/2 -left-5 -translate-y-1/2 cursor-pointer text-4xl" />
          <MdArrowForwardIos className="image-accessories-swiper-button-next absolute top-1/2 -right-5 -translate-y-1/2 cursor-pointer text-4xl" />
          <Swiper
            slidesPerView={3}
            navigation={{
              nextEl: ".image-accessories-swiper-button-next",
              prevEl: ".image-accessories-swiper-button-prev",
              disabledClass: "swiper-button-disabled",
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {!accessories
              ? "loading products..."
              : accessories
                  .map((accessory) => (
                    <SwiperSlide key={accessory.id}>
                      <AccessoriesSwiperProduct accessory={accessory} />
                    </SwiperSlide>
                  ))
                  .reverse()}
          </Swiper>
        </div>
        <div className="mt-10 mr-10 mb-10 self-start overflow-hidden rounded-3xl border shadow-xl">
          <Image
            src={cover}
            width={317}
            height={424}
            alt="cover"
            className="h-auto w-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export async function getStaticProps() {
  const ssg = createProxySSGHelpers({
    router: appRouter,
    ctx: createInnerTRPCContext({ session: null }),
    transformer: superjson,
  });

  await ssg.accessories.getAll.fetch();
  return {
    props: {
      trpcState: ssg.dehydrate(),
    },
    revalidate: 60,
  };
}

export default AccessoriesProducts;

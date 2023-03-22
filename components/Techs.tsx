import ReactIcon from "@/public/icons/techs/react.svg"
import TypeScript from "@/public/icons/techs/typescript.svg"
import NextIcon from "@/public/icons/techs/next.svg"
import SassIcon from "@/public/icons/techs/sass.svg"
import TailwindcssIcon from "@/public/icons/techs/tailwindcss.svg"
import VueIcon from "@/public/icons/techs/vue.svg"
import VercelIcon from "@/public/icons/techs/vercel.svg"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper"

import "swiper/css"
import "swiper/css/autoplay"

export default function Techs() {
  return (
    <div className="relative -top-[15px] bg-white py-1">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={3}
        speed={4000}
        simulateTouch={false}
        allowTouchMove={false}
        loop
        className="TechsSlider"
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <TailwindcssIcon className="w-[33px] md:w-[50px]" />
        </SwiperSlide>
        <SwiperSlide>
          <NextIcon className="w-[33px] md:w-[50px]" />
        </SwiperSlide>
        <SwiperSlide>
          <TypeScript className="w-[33px] md:w-[50px]" />
        </SwiperSlide>
        <SwiperSlide>
          <ReactIcon className="w-[33px] md:w-[50px]" />
        </SwiperSlide>
        <SwiperSlide>
          <SassIcon className="w-[33px] md:w-[50px]" />
        </SwiperSlide>
        <SwiperSlide>
          <VueIcon className="w-[33px] md:w-[50px]" />
        </SwiperSlide>
        <SwiperSlide>
          <VercelIcon className="w-[33px] md:w-[50px]" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

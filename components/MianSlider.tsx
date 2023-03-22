import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFlip, Pagination } from "swiper"
import { Item } from "@/common/types"
import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/effect-flip"
import Link from "next/link"
import Image from "next/image"
import * as AspectRatio from "@radix-ui/react-aspect-ratio"

interface Props {
  items: Item[]
}

export default function MainSlider({ items }: Props) {
  return (
    <div className="p-[44px] md:py-[80px]">
      <Swiper
        className="mb-[25px] md:max-w-[800px]"
        effect="flip"
        modules={[Autoplay, Pagination, EffectFlip]}
        pagination={{
          el: ".swiper-pagination",
          type: "bullets",
        }}
        spaceBetween={10}
        slidesPerView={1}
        speed={800}
        autoplay={{
          delay: 2000,
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} className="overflow-hidden">
            <Link
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="relative"
            >
              <div className="w-full overflow-hidden rounded-md shadow-[0_2px_10px] shadow-blackA7">
                <AspectRatio.Root ratio={16 / 9}>
                  <Image
                    src={item.imgUrl}
                    alt={item.imgName}
                    fill
                    sizes="fill"
                  />
                </AspectRatio.Root>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-pagination"></div>
    </div>
  )
}

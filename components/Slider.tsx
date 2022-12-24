import { Item } from '../common/types'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Grid, Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/autoplay'

interface Props {
  items?: Item[]
}

export default function Slider({ items }: Props) {
  if (!items)
    return (
      <div
        className="flex justify-center
      items-center h-full"
      >
        <div className="loader-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    )

  return (
    <div className="flex items-center h-full">
      <svg
        className="hidden md:block cursor-pointer"
        id="button-prev"
        xmlns="http://www.w3.org/2000/svg"
        width="39"
        height="75"
        viewBox="0 0 39 75"
        fill="none"
      >
        <path
          className="stroke-primaryText"
          d="M34.7612 3.50998L6.77956 31.4917C3.47497 34.7962 3.47497 40.2037 6.77956 43.5083L34.7612 71.49"
          strokeWidth="7"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="relative flex flex-col justify-center items-center h-full w-full md:w-[93%]">
        <Swiper
          className="h-4/5 2xl:h-5/6 w-full sm:w-5/6 sm:mx-5 px-1 select-none"
          grid={{
            rows: 2,
            fill: 'row',
          }}
          modules={[Grid, Navigation, Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={3}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
          }}
          navigation={{
            nextEl: '#button-next',
            prevEl: '#button-prev',
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 15,
              grid: {
                rows: 2,
                fill: 'row',
              },
            },

            576: {
              slidesPerView: 1,
              spaceBetween: 20,
              grid: {
                rows: 2,
                fill: 'row',
              },
            },

            768: {
              slidesPerView: 2,
              grid: {
                rows: 2,
                fill: 'row',
              },
            },

            1024: {
              slidesPerView: 3,
              grid: {
                rows: 2,
                fill: 'row',
              },
            },
          }}
        >
          {items.map((item) => (
            <SwiperSlide
              style={{ height: 'calc((95% - 30px) / 2)' }}
              className="relative p-2.5 border border-secondaryText rounded-2xl"
              key={Math.random()}
            >
              <a
                className="absolute top-0 left-0 bottom-0 right-0 z-10"
                href={item.link}
                target="_blank"
                rel="noreferrer"
              />
              <div className="h-3/4 relative w-full mb-3">
                <Image
                  src={item.imgUrl}
                  fill
                  sizes="100vw"
                  alt="asdf"
                  className="rounded-2xl"
                />
              </div>
              <h3 className="self-start whitespace-nowrap text-ellipsis w-full overflow-hidden text-primaryText text-xl sm:text-3xl">
                {item.title}
              </h3>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-pagination" />
      </div>

      <svg
        className="hidden md:block cursor-pointer"
        id="button-next"
        xmlns="http://www.w3.org/2000/svg"
        width="39"
        height="75"
        viewBox="0 0 39 75"
        fill="none"
      >
        <path
          className="stroke-primaryText"
          d="M4.23877 71.49L32.2204 43.5083C35.525 40.2038 35.525 34.7963 32.2204 31.4917L4.23877 3.51001"
          strokeWidth="7"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

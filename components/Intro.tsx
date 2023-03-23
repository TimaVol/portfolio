import Image from "next/image"
import boyImg from "@/public/images/boy.png"

interface Props {
  name: string
  position: string
  about: string
}

export default function Intro({ name, position, about }: Props) {
  return (
    <div className="bg-lightGradient bg-cover py-[32px] dark:bg-darkGradient md:pb-[62px]">
      <div className="container flex flex-col items-center justify-between md:flex-row">
        <div className="mb-[47px] flex h-max w-max items-center rounded-[6px] bg-gray py-[9px] px-[17px] transition-all dark:bg-black md:mr-8 md:mb-0 md:flex-col">
          <Image
            src={boyImg}
            alt="ava"
            className="mr-[29px] max-w-[83px] rounded-[7px] border border-black transition-all dark:border-white md:mr-0 md:max-w-[263px]"
          />
          <div className="family-gowun_batang text-black transition-all dark:text-white md:text-center">
            <h3>{name}</h3>
            <h5>{position}</h5>
          </div>
        </div>

        <p className="max-w-[1050px] font-bold leading-[20px] text-black transition-all dark:text-white sm:leading-snug">
          {about}
        </p>
      </div>
    </div>
  )
}

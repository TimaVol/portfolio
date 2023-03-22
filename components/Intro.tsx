import Image from "next/image"
import boyImg from "@/public/images/boy.png"

export default function Intro() {
  return (
    <div className="bg-mainGradient bg-cover py-[32px] md:pb-[62px]">
      <div className="container flex flex-col items-center justify-between md:flex-row">
        <div className="mb-[47px] flex h-max w-max items-center rounded-[6px] bg-gray py-[9px] px-[17px] md:mr-8 md:mb-0 md:flex-col">
          <Image
            src={boyImg}
            alt="ava"
            className="mr-[29px] max-w-[83px] md:mr-0 md:max-w-[263px]"
          />
          <div className="family-gowun_batang text-black md:text-center">
            <h3>Tima Voloshuk</h3>
            <h5>Frontend Developer</h5>
          </div>
        </div>

        <p className="max-w-[1050px] font-bold leading-[20px] text-white sm:leading-snug">
          Meticulous web developer with 1.8 years of front-end experience, who
          can build you modern web applications with fast and powerful tech, my
          priority is learning your needs and choosing the most fitted tools for
          implementing your requirements. If you have an application that is
          already at some stage that you want to improve or redo I have
          experience in working with already existing code.
        </p>
      </div>
    </div>
  )
}

import Image from "next/image"
import boyImg from "@/public/images/boy.png"

export default function Intro() {
  return (
    <div className="bg-mainGradient bg-cover py-[32px]">
      <div className="container">
        <div className="mb-[47px] flex items-center rounded-[6px] bg-gray py-[9px] px-[17px]">
          <Image src={boyImg} alt="ava" className="mr-[29px] max-w-[83px]" />
          <div className="family-gowun_batang text-black">
            <h3>Tima Voloshuk</h3>
            <h5>Frontend Developer</h5>
          </div>
        </div>

        <p className="font-bold leading-[18px] text-white">
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

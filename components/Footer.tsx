import Telegram from "@/public/icons/telegram.svg"
import Linkedin from "@/public/icons/linkedin.svg"
import Email from "@/public/icons/email.svg"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white py-[10px] text-black dark:bg-black dark:text-white">
      <div className="container flex">
        <Link
          href="https://telegram.me/tima_vol"
          target="_blank"
          rel="noreferrer"
        >
          <Telegram className="mr-[17px] w-[27px] md:mr-[23px] md:w-[45px]" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/tima-voloshuk-44b0ab1b3/"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin className="mr-[17px] w-[27px] md:mr-[23px] md:w-[45px]" />
        </Link>
        <Link
          href="mailto:tima.voloshuk@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <Email className="w-[27px] md:w-[45px]" />
        </Link>
      </div>
    </footer>
  )
}

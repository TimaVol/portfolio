import Telegram from "@/public/icons/telegram.svg"
import Linkedin from "@/public/icons/linkedin.svg"
import Email from "@/public/icons/email.svg"
import Link from "next/link"

interface Props {
  github: string
}

export default function Footer({ github }: Props) {
  return (
    <footer className="bg-white py-[10px] text-black transition-all dark:bg-black dark:text-white">
      <div className="container flex items-center justify-between">
        <div className="flex">
          <Link
            href="https://telegram.me/tima_vol"
            target="_blank"
            rel="noreferrer"
          >
            <Telegram className="mr-[17px] w-[27px] transition-all hover:text-accentDark dark:hover:text-accentLight md:mr-[23px] md:w-[45px]" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/tima-voloshuk-44b0ab1b3/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="mr-[17px] w-[27px] transition-all hover:text-accentDark dark:hover:text-accentLight md:mr-[23px] md:w-[45px]" />
          </Link>
          <Link
            href="mailto:tima.voloshuk@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <Email className="w-[27px] transition-all hover:text-accentDark dark:hover:text-accentLight md:w-[45px]" />
          </Link>
        </div>
        <Link
          href="https://github.com/TimaVol?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="font-medium transition-all hover:text-accentDark dark:hover:text-accentLight"
        >
          {github}
        </Link>
      </div>
    </footer>
  )
}

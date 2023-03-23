import Sun from "@/public/icons/sun.svg"
import Moon from "@/public/icons/moon.svg"
import { useEffect, useState } from "react"

interface Props {
  langHandler: () => void
  lang: string
  title: string
}

export default function Header({ langHandler, lang, title }: Props) {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    modeHandler()
  }, [])

  const modeHandler = () => {
    const html = document.querySelector("html")
    html?.classList.toggle("dark")

    setIsDarkMode(html?.classList.contains("dark") || false)
  }

  return (
    <header className="py-[12px] text-black transition-all dark:bg-black dark:text-white">
      <div className="container flex items-center justify-between">
        <h5 className="font-bold">{title}</h5>
        <div className="flex items-center">
          <p
            className="mr-[21px] cursor-pointer font-bold uppercase"
            onClick={langHandler}
          >
            {lang}
          </p>
          <div
            className="cursor-pointer rounded-[6px] border border-black bg-white p-[5px] text-black transition-all dark:border-white dark:bg-black dark:text-white"
            onClick={modeHandler}
          >
            {isDarkMode ? (
              <Sun className="w-[16px] md:w-[20px]" />
            ) : (
              <Moon className="w-[16px] md:w-[20px]" />
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

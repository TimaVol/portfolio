import Sun from "@/public/icons/sun.svg"
import Moon from "@/public/icons/moon.svg"
import { useEffect, useState } from "react"

export default function Header() {
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
        <h5 className="font-bold">My portfolio site...</h5>
        <div className="flex items-center">
          <p className="mr-[21px] cursor-pointer font-bold">EN</p>
          <div
            className="cursor-pointer rounded-[6px]  border border-black bg-white p-[5px] text-black transition-all dark:border-white dark:bg-black dark:text-white"
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

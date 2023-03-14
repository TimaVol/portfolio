import "@/styles/globals.scss"
import type { AppProps } from "next/app"
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp

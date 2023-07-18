import "@/styles/globals.scss"
import { appWithTranslation } from "next-i18next"
import type { AppProps } from "next/app"
import { Inter, Montserrat } from "next/font/google"
import Head from "next/head"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
})

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Tima Voloshuk</title>
        <link rel={"icon"} href="/favicon/favicon.ico" />
        <meta name="title" content={"Tima Voloshuk"} />
        <meta
          name="description"
          content={
            "Frontend developer with over 2 years of commercial experience."
          }
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.femomo.space/" />
        <meta property="og:title" content={"Tima Voloshuk"} />
        <meta
          property="og:description"
          content={
            "Frontend developer with over 2 years of commercial experience."
          }
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/TimaVol/portfolio/main/public/images/sitePreview.png"
        />
      </Head>

      <div>
        <style jsx global>{`
          html {
            font-family: ${inter.style.fontFamily};
          }

          .family-montserrat {
            font-family: ${montserrat.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default appWithTranslation(MyApp)

import { collection, getDocs } from "firebase/firestore"
import { GetServerSideProps } from "next"
import { db } from "@/common/firebase"
import { Item } from "@/common/types"
import Header from "@/components/Header"
import Intro from "@/components/Intro"
import Techs from "@/components/Techs"
import MainSlider from "@/components/MianSlider"
import Footer from "@/components/Footer"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import Script from "next/script"

interface HomeProps {
  items: Item[]
}

export default function Home({ items }: HomeProps) {
  const { t } = useTranslation("common")
  const router = useRouter()
  const langHandler = (newLocale: string) => {
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: newLocale })
  }
  const changeTo = router.locale === "en" ? "ukr" : "en"

  return (
    <>
      <Script
        src={
          "https://www.googletagmanager.com/gtag/js?id=" +
          process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
        }
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        `}
      </Script>
      <Header
        lang={changeTo}
        title={t("header.title")}
        langHandler={() => langHandler(changeTo)}
      />
      <Intro
        name={t("intro.name")}
        position={t("intro.position")}
        about={t("intro.about")}
      />
      <Techs />
      <MainSlider items={items} />
      <Footer github={t("footer.github")} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  )

  const querySnapshot = await getDocs(collection(db, "items"))

  let items: Item[] = []

  querySnapshot.forEach((doc) => {
    items.push({
      id: doc.id,
      title: doc.data().title,
      link: doc.data().link,
      imgUrl: doc.data().imgUrl,
      imgName: doc.data().imgName,
    })
  })

  return {
    props: {
      items: items.length != 0 && items,
      ...(await serverSideTranslations(context.locale ?? "en", ["common"])),
    },
  }
}

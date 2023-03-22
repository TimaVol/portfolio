import { collection, getDocs } from "firebase/firestore"
import { GetServerSideProps } from "next"
import { db } from "@/common/firebase"
import { Item } from "@/common/types"
import Header from "@/components/Header"
import Intro from "@/components/Intro"
import Techs from "@/components/Techs"
import MainSlider from "@/components/MianSlider"
import Footer from "@/components/Footer"

interface HomeProps {
  items: Item[]
}

export default function Home({ items }: HomeProps) {
  return (
    <>
      <Header />
      <Intro />
      <Techs />
      <MainSlider items={items} />
      <Footer />
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
    },
  }
}

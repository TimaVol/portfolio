import { collection, getDocs } from "firebase/firestore";
import { GetServerSideProps } from "next";
import { db } from "../common/firebase";
import { Item } from "../common/types";
import Dashboard from "../components/Dashboard";
import Social from "../components/Social";

interface HomeProps {
  items: Item[];
}

export default function Home({ items }: HomeProps) {
  return (
    <>
      <Social />
      <Dashboard items={items} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const querySnapshot = await getDocs(collection(db, "items"));

  let items: Item[] = [];

  querySnapshot.forEach((doc) => {
    items.push({
      id: doc.id,
      title: doc.data().title,
      link: doc.data().link,
      imgUrl: doc.data().imgUrl,
      imgName: doc.data().imgName,
    });
  });

  return {
    props: {
      items: items.length != 0 && items,
    },
  };
};

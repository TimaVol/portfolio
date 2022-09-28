import { collection, getDocs } from "firebase/firestore";
import { GetServerSideProps } from "next";
import { db } from "../common/firebase";
import Dashboard from "../components/Dashboard";
import Social from "../components/Social";

interface HomeProps {
  items: [];
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

  // const querySnapshot = await getDocs(collection(db, "items"));

  let items: object[] = [
    {
      id: 1,
      title: "title",
      link: "string",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-1659474087146.appspot.com/o/1ebec3f0-fcba-419f-9288-bdb6be23d0f4.png?alt=media&token=0f75c266-504b-433c-ab98-65c5ee43d5a4",
    },
    {
      id: 2,
      title: "title",
      link: "string",

      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-1659474087146.appspot.com/o/1ebec3f0-fcba-419f-9288-bdb6be23d0f4.png?alt=media&token=0f75c266-504b-433c-ab98-65c5ee43d5a4",
    },
    {
      id: 3,
      title: "title",
      link: "string",

      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-1659474087146.appspot.com/o/1ebec3f0-fcba-419f-9288-bdb6be23d0f4.png?alt=media&token=0f75c266-504b-433c-ab98-65c5ee43d5a4",
    },
    {
      id: 4,
      title: "title",
      link: "string",

      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-1659474087146.appspot.com/o/1ebec3f0-fcba-419f-9288-bdb6be23d0f4.png?alt=media&token=0f75c266-504b-433c-ab98-65c5ee43d5a4",
    },
    {
      id: 5,
      title: "title",
      link: "string",

      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-1659474087146.appspot.com/o/1ebec3f0-fcba-419f-9288-bdb6be23d0f4.png?alt=media&token=0f75c266-504b-433c-ab98-65c5ee43d5a4",
    },
  ];

  // querySnapshot.forEach((doc) => {
  //   items.push({ id: doc.id, ...doc.data() });
  // });

  return {
    props: {
      items,
    },
  };
};

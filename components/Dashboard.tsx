import Image from "next/image";
import styles from "../styles/components/Dashboard.module.scss";

interface DashboardProps {
  items: {
    id: number;
    title: string;
    link: string;
    imgUrl: string;
  }[];
}

export default function Dashboard({ items }: DashboardProps) {
  return (
    <div className={styles.dashboard}>
      {items.map((item) => (
        <a
          href={item.link}
          target={"_blank"}
          rel="noreferrer"
          className={styles.item}
          key={item.id}
        >
          <h4>{item.title}</h4>
          <div className={styles.img}>
            <Image src={item.imgUrl} alt="" layout="fill" />
          </div>
        </a>
      ))}
    </div>
  );
}

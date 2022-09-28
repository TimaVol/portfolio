import Image from "next/image";
import React from "react";
import styles from "../styles/components/Dashboard.module.scss";

interface DashboardProps {
  items: {
    id: number;
    title: string;
    link: string;
    imgUrl: string;
  }[];
  deleteFunc?: () => void;
}

export default function Dashboard({ items, deleteFunc }: DashboardProps) {
  return (
    <div className={styles.dashboard}>
      {items.map((item) => (
        <div key={item.id} className={styles.item}>
          <a href={item.link} target={"_blank"} rel="noreferrer">
            <h4>{item.title}</h4>
            <div className={styles.img}>
              <Image src={item.imgUrl} alt="" layout="fill" />
            </div>
          </a>
          {deleteFunc && (
            <button onClick={deleteFunc} className={styles.deleteBtn}>
              delete
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

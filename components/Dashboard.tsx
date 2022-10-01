import { deleteDoc, doc, getDoc } from "firebase/firestore";
import Image from "next/image";
import React from "react";
import { db, storage } from "../common/firebase";
import styles from "../styles/components/Dashboard.module.scss";
import { deleteObject, ref } from "firebase/storage";
import { Item } from "../common/types";

interface DashboardProps {
  items?: Item[];
  deleteFunc?: boolean;
}

export default function Dashboard({ items, deleteFunc }: DashboardProps) {
  const deleteItemHandler = async (id: string) => {
    console.log(id);

    try {
      const item = (await getDoc(doc(db, "items", id))).data();
      const imgName = item?.imgName;

      const imgRef = ref(storage, imgName);

      await deleteObject(imgRef)
        .then(() => {
          console.log("File deleted successfully");
        })
        .catch((error) => {
          throw new Error(error);
        });

      const deletedItem = await deleteDoc(doc(db, "items", id));
    } catch (error) {
      throw new Error(`${error}`);
    }
  };
  return (
    <div className={styles.dashboard}>
      {items?.map((item) => (
        <div key={item.id} className={styles.item}>
          <a href={item.link} target={"_blank"} rel="noreferrer">
            <h4>{item.title}</h4>
            <div className={styles.img}>
              <Image src={item.imgUrl} alt="" layout="fill" />
            </div>
          </a>
          {deleteFunc && (
            <button
              onClick={() => deleteItemHandler(item.id)}
              className={styles.deleteBtn}
            >
              delete
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

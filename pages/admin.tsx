import { signOut } from "firebase/auth";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useRouter } from "next/router";
import path from "path";
import React, { FormEvent, useEffect, useState } from "react";
import { UniqString } from "../common";
import { auth, db, storage } from "../common/firebase";
import { Item } from "../common/types";
import Dashboard from "../components/Dashboard";
import Form from "../components/Form";
import Modal from "../components/Modal";
import styles from "../styles/admin.module.scss";

export default function Admin() {
  const router = useRouter();
  const [uid, setUid] = useState<string | null>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemTitle, setItemTitle] = useState<string>();
  const [itemLink, setItemLink] = useState<string>();
  const [itemImg, setItemImg] = useState<FileList | null>();
  const [items, setItems] = useState<Item[]>();

  useEffect(() => {
    if (!localStorage.getItem("uid")) {
      router.push("/auth");
    }

    setUid(localStorage.getItem("uid"));

    const fetchData = async () => {
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

      setItems(items);
    };

    fetchData();
  }, [router, uid]);

  const modalCloseHandler = () => setIsModalOpen(!isModalOpen);

  const addItemHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsModalOpen(false);

    if (itemImg) {
      const file = itemImg[0];
      const fileExtension = path.extname(file.name);
      const fileType = file.type;
      const fileUniqName = UniqString + fileExtension;

      try {
        const imgRef = ref(storage, fileUniqName);

        await uploadBytes(imgRef, file, {
          contentType: fileType,
        }).then((snapshot) => {
          console.log("Uploaded a blob or file!");
        });

        const imgUrl = await getDownloadURL(imgRef);

        const newItem = {
          title: itemTitle,
          link: itemLink,
          imgUrl: imgUrl,
          imgName: fileUniqName,
        };

        const docRef = await addDoc(collection(db, "items"), newItem);
      } catch (error) {
        throw new Error(`${error}`);
      }
    } else {
      throw new Error("dont have a file");
    }
  };

  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        console.log("// Sign-out successful.");

        localStorage.removeItem("uid");

        router.push("/auth");
      })
      .catch((error) => {
        console.log("// An error happened.");
      });
  };

  if (!uid) return "not allowed";

  return (
    <>
      <button className={styles.addItem} onClick={modalCloseHandler}>
        add item
      </button>

      <button className={styles.logout} onClick={logoutHandler}>
        logout
      </button>

      <Modal isOpen={isModalOpen} closeHandler={modalCloseHandler}>
        <Form submitHandler={(e) => addItemHandler(e)} submitLable="add item">
          <>
            <input
              onChange={(e) => {
                e.preventDefault();
                setItemTitle(e.target.value);
              }}
              type="text"
              placeholder="title"
              required
            />
            <input
              onChange={(e) => setItemLink(e.target.value)}
              type="text"
              placeholder="link"
              required
            />
            <input
              onChange={(e) => setItemImg(e.target.files)}
              type="file"
              required
            />
          </>
        </Form>
      </Modal>

      <Dashboard items={items} deleteFunc />
    </>
  );
}

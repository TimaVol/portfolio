import { useRouter } from "next/router";
import React, {
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import { randomString } from "../../common";
import Dashboard from "../../components/Dashboard";
import Form from "../../components/Form";
import Modal from "../../components/Modal";
import styles from "../../styles/auth/admin.module.scss";

const staticItems = [
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

export default function Admin() {
  const router = useRouter();
  const [uid, setUid] = useState<string | null>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemTitle, setItemTitle] = useState<string>();
  const [itemLink, setItemLink] = useState<string>();
  const [itemImg, setItemImg] = useState<FileList | null>();

  useEffect(() => {
    if (!localStorage.getItem("uid")) {
      router.push("/auth");
    }

    setUid(localStorage.getItem("uid"));
  }, [router, uid]);

  const modalCloseHandler = () => setIsModalOpen(!isModalOpen);

  const addItemHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      itemTitle,
      itemLink,
      itemImg,
    });
    setIsModalOpen(false);
  };

  if (!uid) return "not allowed";

  return (
    <>
      <button className={styles.addItem} onClick={modalCloseHandler}>
        add item
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

      <Dashboard items={staticItems} deleteFunc={() => console.log("delete")} />
    </>
  );
}

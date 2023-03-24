import { signOut } from "firebase/auth"
import { addDoc, collection, getDocs } from "firebase/firestore"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { useRouter } from "next/router"
import path from "path"
import React, { FormEvent, useEffect, useState } from "react"
import { UniqString } from "@/common"
import { auth, db, storage } from "@/common/firebase"
import { Item } from "@/common/types"
import Dashboard from "@/components/Dashboard"
import Modal from "@/components/Modal"
import * as Form from "@radix-ui/react-form"

export default function Admin() {
  const router = useRouter()
  const [uid, setUid] = useState<string | null>()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [itemTitle, setItemTitle] = useState<string>()
  const [itemLink, setItemLink] = useState<string>()
  const [itemImg, setItemImg] = useState<FileList | null>()
  const [items, setItems] = useState<Item[]>()

  const fetchData = async () => {
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

    setItems(items)
  }

  useEffect(() => {
    if (!localStorage.getItem("uid")) {
      router.push("/auth")
    }

    setUid(localStorage.getItem("uid"))

    fetchData()
  }, [router, uid])

  const modalCloseHandler = () => setIsModalOpen(!isModalOpen)

  const addItemHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsModalOpen(false)

    if (itemImg) {
      const file = itemImg[0]
      const fileExtension = path.extname(file.name)
      const fileType = file.type
      const fileUniqName = UniqString + fileExtension

      try {
        const imgRef = ref(storage, fileUniqName)

        await uploadBytes(imgRef, file, {
          contentType: fileType,
        }).then((snapshot) => {
          console.log("Uploaded a blob or file!")
        })

        const imgUrl = await getDownloadURL(imgRef)

        const newItem = {
          title: itemTitle,
          link: itemLink,
          imgUrl: imgUrl,
          imgName: fileUniqName,
        }

        const docRef = await addDoc(collection(db, "items"), newItem)
        fetchData()
      } catch (error) {
        throw new Error(`${error}`)
      }
    } else {
      throw new Error("dont have a file")
    }
  }

  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        console.log("// Sign-out successful.")

        localStorage.removeItem("uid")

        router.push("/auth")
      })
      .catch((error) => {
        console.log("// An error happened.")
      })
  }

  if (!uid) return "not allowed"

  return (
    <>
      <button
        className="absolute top-0 left-0 rounded bg-blue-500 py-2 px-4 font-bold text-white transition-all hover:bg-blue-700"
        onClick={modalCloseHandler}
      >
        add item
      </button>

      <button
        className="absolute top-0 left-1/2 -translate-x-1/2 rounded bg-blue-500 py-2 px-4 font-bold text-white transition-all hover:bg-blue-700"
        onClick={() => router.push("/")}
      >
        Home
      </button>

      <button
        className="absolute top-0 right-0 rounded bg-blue-500 py-2 px-4 font-bold text-white transition-all hover:bg-blue-700"
        onClick={logoutHandler}
      >
        logout
      </button>

      <Modal
        isOpen={isModalOpen}
        closeHandler={modalCloseHandler}
        className="bg-darkPurple"
      >
        <Form.Root className="w-[260px]" onSubmit={(e) => addItemHandler(e)}>
          <Form.Field className="mb-[10px] grid" name="title">
            <div className="flex items-baseline justify-between">
              <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
                Title
              </Form.Label>
              <Form.Message
                className="text-[13px] text-white opacity-[0.8]"
                match="valueMissing"
              >
                Please enter title
              </Form.Message>
              <Form.Message
                className="text-[13px] text-white opacity-[0.8]"
                match="typeMismatch"
              >
                Please provide a valid title
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input
                onChange={(e) => {
                  e.preventDefault()
                  setItemTitle(e.target.value)
                }}
                className="selection:color-white box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded-[4px] bg-blackA5 px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] shadow-blackA9 outline-none selection:bg-blackA9 hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
                type="text"
                required
              />
            </Form.Control>
          </Form.Field>
          <Form.Field className="mb-[10px] grid" name="link">
            <div className="flex items-baseline justify-between">
              <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
                Link
              </Form.Label>
              <Form.Message
                className="text-[13px] text-white opacity-[0.8]"
                match="valueMissing"
              >
                Please enter a link
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input
                onChange={(e) => setItemLink(e.target.value)}
                className="selection:color-white box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded-[4px] bg-blackA5 px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] shadow-blackA9 outline-none selection:bg-blackA9 hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
                type="url"
                required
              />
            </Form.Control>
          </Form.Field>
          <Form.Field className="mb-[10px] grid" name="image">
            <div className="flex items-baseline justify-between">
              <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
                Image
              </Form.Label>
              <Form.Message
                className="text-[13px] text-white opacity-[0.8]"
                match="valueMissing"
              >
                Please put an image
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input
                onChange={(e) => setItemImg(e.target.files)}
                className="selection:color-white box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded-[4px] bg-blackA5 py-[8px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] shadow-blackA9 outline-none selection:bg-blackA9 hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
                type="file"
                required
              />
            </Form.Control>
          </Form.Field>
          <Form.Submit asChild>
            <button className="mt-[10px] box-border inline-flex h-[35px] w-full items-center justify-center rounded-[4px] bg-white px-[15px] font-bold leading-none text-violet11 shadow-[0_2px_10px] shadow-blackA7 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
              Post project
            </button>
          </Form.Submit>
        </Form.Root>
      </Modal>

      <Dashboard
        items={items}
        deleteFunc
        getItemsFunc={fetchData}
        className="my-[60px]"
      />
    </>
  )
}

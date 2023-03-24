import { deleteDoc, doc, getDoc } from "firebase/firestore"
import Image from "next/image"
import React from "react"
import { db, storage } from "../common/firebase"
import { deleteObject, ref } from "firebase/storage"
import { Item } from "../common/types"
import * as AspectRatio from "@radix-ui/react-aspect-ratio"
interface Props {
  items?: Item[]
  deleteFunc?: boolean
  getItemsFunc?: () => void
  className?: string
}

export default function Dashboard({
  items,
  deleteFunc,
  getItemsFunc,
  className,
}: Props) {
  const deleteItemHandler = async (id: string) => {
    try {
      const item = (await getDoc(doc(db, "items", id))).data()
      const imgName = item?.imgName

      const imgRef = ref(storage, imgName)

      await deleteObject(imgRef)
        .then(() => {
          console.log("File deleted successfully")
        })
        .catch((error) => {
          throw new Error(error)
        })

      await deleteDoc(doc(db, "items", id))
      getItemsFunc && getItemsFunc()
    } catch (error) {
      throw new Error(`${error}`)
    }
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="loader-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )

  return (
    <div
      className={`container grid grid-cols-1 justify-items-center gap-[15px] md:grid-cols-3 md:gap-[30px] ${className}`}
    >
      {items?.map((item) => (
        <div key={item.id} className="rounded-lg bg-yellow-200 p-4">
          <a href={item.link} target={"_blank"} rel="noreferrer">
            <h4 className="mb-3">{item.title}</h4>
            <div className="w-[400px] overflow-hidden rounded-md shadow-[0_2px_10px] shadow-blackA7">
              <AspectRatio.Root ratio={18 / 10}>
                <Image
                  className="h-full w-full object-cover"
                  src={item.imgUrl}
                  alt="item img"
                  fill
                  sizes="fill"
                  priority
                />
              </AspectRatio.Root>
            </div>
          </a>
          {deleteFunc && (
            <button
              onClick={() => deleteItemHandler(item.id)}
              className="mt-[20px] rounded-md border border-red-700 bg-gray px-5 py-2 text-lg font-medium text-red-700 transition-all hover:bg-red-700 hover:text-gray"
            >
              delete
            </button>
          )}
        </div>
      ))}
    </div>
  )
}

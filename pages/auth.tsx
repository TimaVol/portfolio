import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/common/firebase"
import { useRouter } from "next/router"
import { FormEvent, useEffect, useState } from "react"
import * as Form from "@radix-ui/react-form"

export default function Auth() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  useEffect(() => {
    if (localStorage.getItem("uid")) {
      router.push("/admin")
    }
  }, [router])

  const siginHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        localStorage.setItem("uid", "true")

        router.push("/admin")
      })
      .catch((error) => {
        throw new Error(
          ` errorCode: ${error.code}, errorMessage: ${error.message}`
        )
      })
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Form.Root className="w-[260px]" onSubmit={siginHandler}>
        <Form.Field className="mb-[10px] grid" name="email">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
              Email
            </Form.Label>
            <Form.Message
              className="text-[13px] text-white opacity-[0.8]"
              match="valueMissing"
            >
              Please enter your email
            </Form.Message>
            <Form.Message
              className="text-[13px] text-white opacity-[0.8]"
              match="typeMismatch"
            >
              Please provide a valid email
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="selection:color-white box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded-[4px] bg-blackA5 px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] shadow-blackA9 outline-none selection:bg-blackA9 hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
              type="email"
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="mb-[10px] grid" name="password">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
              Password
            </Form.Label>
            <Form.Message
              className="text-[13px] text-white opacity-[0.8]"
              match="valueMissing"
            >
              Please enter a password
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="selection:color-white box-border inline-flex w-full resize-none appearance-none items-center justify-center rounded-[4px] bg-blackA5 p-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] shadow-blackA9 outline-none selection:bg-blackA9 hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <button className="mt-[10px] box-border inline-flex h-[35px] w-full items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none text-violet11 shadow-[0_2px_10px] shadow-blackA7 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
            log in
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  )
}

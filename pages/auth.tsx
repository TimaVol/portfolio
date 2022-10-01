import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../common/firebase";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import Form from "../components/Form";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("uid")) {
      router.push("/admin");
    }
  }, [router]);

  const siginHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        localStorage.setItem("uid", "true");

        router.push("/admin");
      })
      .catch((error) => {
        throw new Error(
          ` errorCode: ${error.code}, errorMessage: ${error.message}`
        );
      });
  };

  return (
    <>
      <Form submitHandler={siginHandler} submitLable={"login"}>
        <>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name=""
            id="email"
            required
          />

          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name=""
            id="password"
            required
          />
        </>
      </Form>
    </>
  );
}

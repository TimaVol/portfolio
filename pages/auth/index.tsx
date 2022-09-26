import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../common/firebase";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("uid")) {
      router.push("/auth/admin");
    }
  }, [router]);

  const siginHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        localStorage.setItem("uid", user.uid);

        router.push("/auth/admin");

        console.log({ user }, { userCredential });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.error({ errorCode }, { errorMessage });
      });
  };

  return (
    <div>
      <form onSubmit={(e) => siginHandle(e)}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name=""
          id="email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name=""
          id="password"
        />
        <input type="submit" value="login" />
      </form>
    </div>
  );
}

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../common/firebase";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

export default function Auth() {
  const router = useRouter();

  const siginHandle = () => {
    signInWithEmailAndPassword(auth, "test@gmail.com", "12345678")
      .then((userCredential) => {
        const user = userCredential.user;

        localStorage.setItem("uid", user.uid);

        router.push("/auth/admin");

        console.log({ user }, { userCredential });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <>
      Auth
      <Button variant="contained" color="primary" onClick={siginHandle}>
        test
      </Button>
    </>
  );
}

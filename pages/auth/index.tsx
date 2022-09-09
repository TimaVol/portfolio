import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../common/firebase";
import Button from "@mui/material/Button";

export default function Auth() {
  const siginHandle = () => {
    signInWithEmailAndPassword(auth, "test@gmail.com", "12345678")
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
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

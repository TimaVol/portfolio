import type { NextPage } from "next";
import Button from "@mui/material/Button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../common/firebase";

const Home: NextPage = () => {
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
    <div>
      <Button variant="contained" color="primary" onClick={siginHandle}>
        test
      </Button>
    </div>
  );
};

export default Home;

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../common/firebase";
import { useRouter } from "next/router";
import { Button, Stack } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("uid")) {
      router.push("/auth/admin");
    }
  }, [router]);

  const siginHandle = () => {
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
    <Form
      className="w-50 mt-5 m-auto"
      onSubmit={(e) => {
        e.preventDefault();
        siginHandle();
        console.log("submit");
      }}
    >
      <Stack>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Stack>
    </Form>
  );
}

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Admin() {
  const router = useRouter();
  const [uid, setUid] = useState<string | null>();

  useEffect(() => {
    if (!localStorage.getItem("uid")) {
      router.push("/auth");
    }

    setUid(localStorage.getItem("uid"));
  }, [router, uid]);

  return <>{uid ? "admin" : "not allowed"}</>;
}

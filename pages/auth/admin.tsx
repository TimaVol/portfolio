import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Dashboard from "../../components/Dashboard";

const staticItems = [
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 2 },
  { id: 3 },
];

export default function Admin() {
  const router = useRouter();
  const [uid, setUid] = useState<string | null>();

  useEffect(() => {
    if (!localStorage.getItem("uid")) {
      router.push("/auth");
    }

    setUid(localStorage.getItem("uid"));
  }, [router, uid]);

  if (!uid) return "not allowed";

  return <Dashboard items={staticItems} />;
}

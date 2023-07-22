"use client";
import { useEffect } from "react";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import firebaseApp from "@/firebase/config";
const auth = getAuth(firebaseApp);

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  useEffect(() => {
    if (auth.currentUser === null) {
      router.push("/signin");
    }
  });

  return <>{children}</>;
}

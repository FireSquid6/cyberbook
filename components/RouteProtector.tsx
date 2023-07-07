"use client";
import { useRouter } from "next/navigation";
import { getAuth } from "firebase/auth";
import firebaseApp from "@/firebase/config";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const auth = getAuth(firebaseApp);

export interface RouteProtectorProps {
  redirectPath: string;
  enforce: "signed-in" | "signed-out";
}

export default async function RouteProtector({
  redirectPath,
  enforce = "signed-in",
}: RouteProtectorProps) {
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) return;
    if (error) return;

    console.log(user);

    const userExists = user !== null && user !== undefined;
    if (
      (enforce === "signed-in" && !userExists) ||
      (enforce === "signed-out" && userExists)
    ) {
      router.push(redirectPath);
    }
  }, [user, loading, error]);

  return <></>;
}

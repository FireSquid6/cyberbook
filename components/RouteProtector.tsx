"use client";
import { useRouter } from "next/navigation";
import { getAuth } from "firebase/auth";
import firebaseApp from "@/firebase/config";
import { useEffect } from "react";

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
  useEffect(() => {
    const effect = async () => {
      await auth.updateCurrentUser(auth.currentUser);
      const userExists = auth.currentUser !== null;

      if (
        (enforce === "signed-in" && !userExists) ||
        (enforce === "signed-out" && userExists)
      ) {
        try {
          router.push(redirectPath);
        } catch (error) {
          console.error(error);
        }
      }
    };

    effect();
  }, []);

  return <></>;
}

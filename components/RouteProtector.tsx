"use client";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { getAuth } from "firebase/auth";
import firebaseApp from "@/firebase/config";

const auth = getAuth(firebaseApp);

export interface RouteProtectorProps {
  redirectPath: string;
  enforce: "signed-in" | "signed-out";
}

export default function RouteProtector({
  redirectPath,
  enforce = "signed-in",
}: RouteProtectorProps) {
  useEffect(() => {
    const userExists = auth.currentUser !== null;

    if (
      (enforce === "signed-in" && !userExists) ||
      (enforce === "signed-out" && userExists)
    ) {
      console.log("Redirecting...");
      redirect(redirectPath);
    }
  }, [auth.currentUser, redirectPath, enforce]);

  return <></>;
}

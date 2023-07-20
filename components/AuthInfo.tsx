"use client";
import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import firebaseApp from "@/firebase/config";
const auth = getAuth(firebaseApp);

export default function AuthInfo() {
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserEmail(user.email || "");
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div>
      <p>Hello, {userEmail}</p>
    </div>
  );
}

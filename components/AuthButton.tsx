"use client";
import { BiLogOut, BiLogIn } from "react-icons/bi";
import { getAuth, User } from "firebase/auth";
import firebaseApp from "@/firebase/config";
import { useState, useEffect } from "react";
const auth = getAuth(firebaseApp);

export default function AuthButton() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    setUser(auth.currentUser);
  }, [auth.currentUser]);

  return (
    <div className="flex-none">
      <button className="btn btn-square btn-ghost">
        {auth.currentUser ? (
          <BiLogOut className="inline-block w-5 h-5 stroke-current" />
        ) : (
          <BiLogIn className="inline-block w-5 h-5 stroke-current" />
        )}
      </button>
    </div>
  );
}

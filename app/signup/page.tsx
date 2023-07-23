"use client";
import { FormEvent, useState } from "react";
import { signUp } from "@/firebase/auth";
import { useRouter } from "next/navigation";
import { setDoc, doc, getFirestore } from "firebase/firestore";
import firebaseApp from "@/firebase/config";
const db = getFirestore(firebaseApp);

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleForm = async (event: FormEvent) => {
    event.preventDefault();
    const { result, error } = await signUp(email, password);

    if (result?.user) {
      await setDoc(doc(db, `users/${result.user.uid}`), {
        usename: username,
      });
    }

    if (error) {
      router.push("/signup");
    }

    console.log(result);
    return router.push("/dashboard");
  };

  return (
    <div>
      <h1 className="text-3xl text-center">Sign Up</h1>
      <form
        onSubmit={handleForm}
        className="flex flex-col justify-center align-center"
      >
        <input
          onChange={(e) => setUsername(e.target.value)}
          required
          type="text"
          name="username"
          id="username"
          className="input-default"
          placeholder="username"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          required
          type="email"
          name="email"
          id="email"
          className="input-default"
          placeholder="example@mail.com"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          required
          type="password"
          name="password"
          id="password"
          className="input-default"
          placeholder="password"
        />
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
      <h5 className="text-center my-4">
        <a
          href="/signin"
          className="text-secondary hover:text-secondary-focus transition-all"
        >
          I already have an account
        </a>
      </h5>
    </div>
  );
}

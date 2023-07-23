"use client";
import { useState, FormEvent } from "react";
import { signIn } from "@/firebase/auth";
import { useRouter } from "next/navigation";
import { getAuth } from "firebase/auth";
import firebaseApp from "@/firebase/config";

const auth = getAuth(firebaseApp);

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleForm = async (event: FormEvent) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);
    console.log(auth.currentUser);

    if (error) {
      return error;
    }

    // else successful
    console.log(result);
    return router.push("/dashboard");
  };
  return (
    <div>
      <h1 className="text-3xl text-center">Sign in</h1>
      <form
        onSubmit={handleForm}
        className="flex flex-col justify-center align-center"
      >
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
          Sign In
        </button>
      </form>
      <h5 className="text-center my-4">
        <a
          href="/signup"
          className="text-secondary hover:text-secondary-focus transition-all"
        >
          I don't have an account
        </a>
      </h5>
    </div>
  );
}

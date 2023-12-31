"use client";
import { BiLogOut, BiLogIn } from "react-icons/bi";
import { getAuth } from "firebase/auth";
import firebaseApp from "@/firebase/config";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
const auth = getAuth(firebaseApp);

export default function AuthButton() {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  const buttonClicked = () => {
    auth.signOut();
    router.push("/signin");
  };

  return (
    <div className="flex-none">
      {user && !loading && !error ? (
        <p className="w-0 opacity-0 sm:opacity-100 transition-all sm:w-auto">
          Hello, {user.email}
        </p>
      ) : (
        <></>
      )}
      <button className="btn btn-square btn-ghost" onClick={buttonClicked}>
        {user && !loading && !error ? (
          <BiLogOut className="inline-block w-5 h-5 stroke-current" />
        ) : (
          <BiLogIn className="inline-block w-5 h-5 stroke-current" />
        )}
      </button>
    </div>
  );
}

"use client";
import { BiLogOut, BiLogIn } from "react-icons/bi";
import { getAuth } from "firebase/auth";
import firebaseApp from "@/firebase/config";
import { useRouter } from "next/navigation";
const auth = getAuth(firebaseApp);

export default function AuthButton() {
  const router = useRouter();

  const buttonClicked = async () => {
    await auth.updateCurrentUser(auth.currentUser);
    if (auth.currentUser !== null) {
      auth.signOut();
    }

    router.push("/signin");
  };

  return (
    <div className="flex-none">
      <button className="btn btn-square btn-ghost" onClick={buttonClicked}>
        {auth.currentUser ? (
          <BiLogOut className="inline-block w-5 h-5 stroke-current" />
        ) : (
          <BiLogIn className="inline-block w-5 h-5 stroke-current" />
        )}
      </button>
    </div>
  );
}

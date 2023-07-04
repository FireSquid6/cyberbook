"use client";
import { signOutFromClient } from "@/lib/client/sign-out";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const onClick = () => {
    signOutFromClient().then(() => {
      router.refresh();
    });
  };

  return <button onClick={onClick}>Logout</button>;
}

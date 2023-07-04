"use client";
import { signOutFromClient } from "@/lib/sign-out-from-client";

export default function LogoutButton() {
  return (
    <button
      className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
      onClick={signOutFromClient}
    >
      Logout
    </button>
  );
}

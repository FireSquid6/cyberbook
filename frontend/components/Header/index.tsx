import { getUser } from "@/lib/server/get-user";
import Link from "next/link";
import LogoutButton from "../LogoutButton";

export default async function Header() {
  const user = await getUser();

  return (
    <nav>
      <div>
        <div>
          {user ? (
            <div>
              <LogoutButton />
            </div>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>
      </div>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/">Home</Link>
    </nav>
  );
}

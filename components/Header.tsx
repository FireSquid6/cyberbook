import Link from "next/link";
import AuthButton from "./AuthButton";
import AuthInfo from "./AuthInfo";

export default async function Header() {
  return (
    <header className="navbar bg-base-200">
      <div className="flex-1">
        <Link href="/dashboard" className="btn btn-ghost normal-case text-xl">
          Cyberbook
        </Link>
      </div>
      <AuthInfo />
      <AuthButton />
    </header>
  );
}

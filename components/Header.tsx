import Link from "next/link";
import Image from "next/image";
import AuthButton from "./AuthButton";

export default async function Header() {
  return (
    <header className="navbar sticky top-0 bg-base-200">
      <div className="flex-1">
        <Link href="/dashboard" className="btn btn-ghost normal-case text-xl">
          <Image src="/icon.png" alt="icon" width={50} height={50} />
          Cyberbook
        </Link>
      </div>
      <AuthButton />
    </header>
  );
}

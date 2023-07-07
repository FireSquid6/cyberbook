import Link from "next/link";

export default async function Header() {
  return (
    <nav>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/">Home</Link>
      <Link href="/signin">Sign In</Link>
    </nav>
  );
}
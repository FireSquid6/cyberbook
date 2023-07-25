import Link from "next/link";

export default function Hero() {
  return (
    <div className="m-0 w-full text-center">
      <h1 className="py-6 text-3xl font-bold">
        Take notes with the tactility of the pen and the utility of the
        keyboard.
      </h1>
      <Link href="/dashboard" className="btn btn-primary">
        Get Started
      </Link>
    </div>
  );
}

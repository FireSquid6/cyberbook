import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full h-24 bg-neutral absolute bottom-0 flex flex-row justify-center align-middle">
      <div className="flex flex-row m-auto justify-around">
        <Link href="https://firesquid.co" target="_blank" className="m-4">
          made by firesquid
        </Link>
        <Link
          href="https://github.com/firesquid6/cyberbook"
          target="_blank"
          className="m-4"
        >
          contribute on github
        </Link>
      </div>
    </div>
  );
}

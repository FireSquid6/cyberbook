import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer footer-center p-4 bg-base-200 z-50 text-base-content">
      <div>
        <p>
          Copyright © 2023 - All right reserved by{" "}
          <Link target="_blank" href="https://firesquid.co">
            Jonathan Deiss
          </Link>
        </p>
        <Link href="https://github.com/firesquid6/cyberbook">
          Contributors Welcome
        </Link>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { FaPen, FaSearch } from "react-icons/fa";

export default function DashboardMenu() {
  return (
    <ul className="menu menu-horizontal bg-base-200 rounded-box">
      <li>
        <Link
          href="/dashboard/write"
          className="text-accent hover:text-accent focus:text-accent"
        >
          <FaPen />
        </Link>
      </li>
      <li>
        <Link
          href="/dashboard/search"
          className="text-accent hover:text-accent focus:text-accent"
        >
          <FaSearch />
        </Link>
      </li>
    </ul>
  );
}

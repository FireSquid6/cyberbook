import { FaPen, FaSearch } from "react-icons/fa";
import { useState } from "react";

export enum SELECTED_ITEM {
  WRITE,
  SEARCH,
}

interface DashboardMenuProps {
  selectedItem: SELECTED_ITEM;
  setSelectedItem: (item: SELECTED_ITEM) => void;
}

export default function DashboardMenu({
  selectedItem,
  setSelectedItem,
}: DashboardMenuProps) {
  return (
    <ul className="menu menu-horizontal bg-base-200 rounded-box">
      <li>
        <button
          className={
            selectedItem === SELECTED_ITEM.WRITE
              ? "text-accent hover:text-accent focus:text-accent"
              : ""
          }
          onClick={() => setSelectedItem(SELECTED_ITEM.WRITE)}
        >
          <FaPen />
        </button>
      </li>
      <li>
        <button
          className={
            selectedItem === SELECTED_ITEM.SEARCH
              ? "text-accent hover:text-accent focus:text-accent"
              : ""
          }
          onClick={() => setSelectedItem(SELECTED_ITEM.SEARCH)}
        >
          <FaSearch />
        </button>
      </li>
    </ul>
  );
}

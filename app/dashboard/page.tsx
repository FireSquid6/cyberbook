"use client";
import { useState } from "react";
import { getAuth } from "firebase/auth";
import firebaseApp from "@/firebase/config";
import DashboardMenu, { SELECTED_ITEM } from "@/components/DashboardMenu";
const auth = getAuth(firebaseApp);

export default async function Dashboard() {
  const [selectedMenu, setSelectedMenu] = useState(SELECTED_ITEM.WRITE);

  return (
    <>
      <div className="flex align-center justify-center">
        <DashboardMenu
          selectedItem={selectedMenu}
          setSelectedItem={() => console.log("it bwoken :(")}
        />
      </div>
    </>
  );
}

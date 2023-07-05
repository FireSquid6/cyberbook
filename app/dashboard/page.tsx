"use client";
import { addData } from "@/firebase/database";
import randomId from "@/firebase/randomId";
import { getAuth } from "firebase/auth";
import firebaseApp from "@/firebase/config";
const auth = getAuth(firebaseApp);

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <button
        onClick={() => {
          addData("notes", randomId(), {
            description: "this is a note",
            date: new Date().toISOString(),
            notebook: "B",
            pageStart: 1,
            pageEnd: 3,
            owner: auth.currentUser?.uid || "",
          });
        }}
      >
        Add a note!
      </button>
    </div>
  );
}

"use client";
import { addData, getUserNotes } from "@/firebase/database";
import randomId from "@/firebase/randomId";
import { getAuth } from "firebase/auth";
import firebaseApp from "@/firebase/config";
const auth = getAuth(firebaseApp);

export default async function Dashboard() {
  const notes = await getUserNotes();
  return (
    <div>
      <h1>Dashboard</h1>
      <button
        onClick={() => {
          addData("notes", randomId(), {
            description: "this is a note 2",
            date: new Date().toISOString(),
            notebook: "A",
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

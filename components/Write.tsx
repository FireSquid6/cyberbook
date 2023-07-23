"use client";
import randomId from "@/firebase/randomId";
import { getAuth } from "firebase/auth";
import { FormEvent, useState } from "react";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import firebaseApp from "@/firebase/config";
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

function getCurrentDate() {
  const date = new Date();
  return date.toISOString().split("T")[0];
}

export default function Write() {
  const [user, loading, error] = useAuthState(auth);
  const [date, setDate] = useState(getCurrentDate());
  const [description, setDescription] = useState("");
  const [index, setIndex] = useState("");
  const [page, setPage] = useState(1);

  const onSubmit = async (e: FormEvent) => {
    if (loading || error || !user) return;
    e.preventDefault();

    await setDoc(doc(db, `users/${user.uid}/notes`, randomId()), {
      date: date,
      description: description,
      index: index,
      page: page,
    });

    console.log(description, index, page);
  };

  return (
    <form className="flex flex-col align-middle justify-center bg-base-200 py-4 my-8 px-2 border-white border rounded-2xl shadow-2xl">
      <h2 className="text-3xl text-center m-2 mt-4">Add a Note</h2>
      <input
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
          console.log("hello!");
        }}
        type="text"
        placeholder="Description"
        className="add-note-input"
      />
      <input
        value={index}
        onChange={(e) => setIndex(e.target.value)}
        type="text"
        placeholder="Notebook Index"
        className="add-note-input"
      />
      <input
        value={date}
        onChange={(e) => setDate(e.target.value)}
        type="date"
        placeholder="yyyy-mm-dd"
        className="add-note-input"
      />
      <input
        value={page}
        onChange={(e) => setPage(Math.max(0, parseInt(e.target.value)))}
        type="number"
        placeholder="Page"
        className="add-note-input"
      />
      <button onClick={onSubmit} className="btn btn-primary m-auto w-36 my-2">
        Submit
      </button>
    </form>
  );
}

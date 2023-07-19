"use client";
import randomId from "@/firebase/randomId";
import { getAuth } from "firebase/auth";
import { FormEvent, useState } from "react";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
const auth = getAuth();
const db = getFirestore();

export default function WriteForm() {
  const [user, loading, error] = useAuthState(auth);
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [index, setIndex] = useState("");
  const [page, setPage] = useState(1);

  const onSubmit = async (e: FormEvent) => {
    if (loading || error || !user) return;
    e.preventDefault();

    await setDoc(doc(db, "notes", randomId()), {
      date: date,
      description: description,
      index: index,
      page: page,
      owner: user.uid,
    });

    console.log(description, index, page);
  };

  return (
    <form>
      <input
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
          console.log("hello!");
        }}
        type="text"
        placeholder="Description"
        className="input input-bordered w-full max-w-xs"
      />
      <input
        value={index}
        onChange={(e) => setIndex(e.target.value)}
        type="text"
        placeholder="Index"
        className="input input-bordered w-full max-w-xs"
      />
      <input
        value={date}
        onChange={(e) => setDate(e.target.value)}
        type="date"
        placeholder="yyyy-mm-dd"
        className="input input-bordered w-full max-w-xs"
      />
      <input
        value={page}
        onChange={(e) => setPage(parseInt(e.target.value))}
        type="number"
        placeholder="Page"
        className="input input-bordered w-full max-w-xs"
      />
      <button onClick={onSubmit} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

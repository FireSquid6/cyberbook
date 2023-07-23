"use client";
import { useEffect, useState } from "react";
import { getFirestore, collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import firebaseApp from "@/firebase/config";
import { getAuth } from "firebase/auth";
import Note from "@/components/Note";
import { Note as NoteType, search } from "@/firebase/search";
const auth = getAuth(firebaseApp);

export default function Search() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [pageStart, setPageStart] = useState<number>(0);
  const [pageEnd, setPageEnd] = useState<number>(0);
  const [dateStart, setDateStart] = useState<string>("");
  const [dateEnd, setDateEnd] = useState<string>("");
  const [value, loading, error] = useCollection(
    collection(
      getFirestore(firebaseApp),
      `users/${auth.currentUser?.uid ?? "noid"}/notes`
    ),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  const [notes, setNotes] = useState<NoteType[]>([]);
  useEffect(() => {
    if (!value) return;
    const unfilteredNotes: NoteType[] = [];

    value.docs.forEach((doc) => {
      unfilteredNotes.push({
        index: doc.data().index,
        description: doc.data().description,
        date: doc.data().date,
        page: doc.data().page,
        id: doc.id,
      });
    });

    const filteredNotes = search(
      unfilteredNotes,
      searchQuery,
      dateStart,
      dateEnd,
      "",
      pageStart,
      pageEnd
    );

    setNotes(filteredNotes);
  }, [value, searchQuery, pageStart, pageEnd, dateStart, dateEnd]);

  return (
    <div className="bg-base-200 p-4 my-8 rounded-lg border-white border shadow-lg">
      <div>
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          placeholder="Description"
          className="input-default"
        />
        <div className="flex flex-row">
          <label className="label">Page Start</label>
          <input
            value={pageStart}
            onChange={(e) =>
              setPageStart(Math.max(0, parseInt(e.target.value)))
            }
            type="number"
            className="input-default"
          />
          <label className="label">Page End</label>
          <input
            value={pageEnd}
            onChange={(e) => setPageEnd(Math.max(0, parseInt(e.target.value)))}
            type="number"
            className="input-default"
          />
        </div>
        <div className="flex flex-row">
          <label className="label">Date Start</label>
          <input
            value={dateStart}
            onChange={(e) => setDateStart(e.target.value)}
            type="date"
            className="input-default"
          />
          <label className="label">Date End</label>
          <input
            value={dateEnd}
            onChange={(e) => setDateEnd(e.target.value)}
            type="date"
            className="input-default"
          />
        </div>
      </div>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>Notes: Loading...</span>}
      {value && (
        <div>
          {notes.map((note) => (
            <Note
              key={note.id}
              index={note.index}
              description={note.description}
              date={note.date}
              page={note.page.toString()}
            />
          ))}
        </div>
      )}
    </div>
  );
}

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

    const filteredNotes = search(unfilteredNotes, searchQuery);

    setNotes(filteredNotes);
  }, [value, searchQuery]);

  return (
    <div className="bg-base-200 p-4 my-8 rounded-lg border-white border shadow-lg">
      <div>
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          placeholder="Description"
          className="add-note-input"
        />
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

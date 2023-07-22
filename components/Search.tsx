"use client";
import { getFirestore, collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import firebaseApp from "@/firebase/config";
import { getAuth } from "firebase/auth";
import Note from "@/components/Note";
const auth = getAuth(firebaseApp);

export default function Search() {
  const [value, loading, error] = useCollection(
    collection(
      getFirestore(firebaseApp),
      `users/${auth.currentUser?.uid ?? "noid"}/notes`
    ),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  return (
    <div>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>Notes: Loading...</span>}
      {value && (
        <span>
          Notes:{" "}
          {value.docs.map((doc) => (
            <Note
              key={doc.id}
              index={doc.data().index}
              description={doc.data().description}
              date={doc.data().date}
              page={doc.data().page}
            />
          ))}
        </span>
      )}
    </div>
  );
}

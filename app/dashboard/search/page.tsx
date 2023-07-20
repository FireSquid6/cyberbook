"use client";
import { getFirestore, collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import firebaseApp from "@/firebase/config";

export default function Search() {
  const [value, loading, error] = useCollection(
    collection(getFirestore(firebaseApp), "notes"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  return (
    <div>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>Collection: Loading...</span>}
      {value && (
        <span>
          Collection:{" "}
          {value.docs.map((doc) => (
            <div key={doc.id}>{JSON.stringify(doc.data())}, </div>
          ))}
        </span>
      )}
    </div>
  );
}

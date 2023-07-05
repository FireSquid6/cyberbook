import firebaseApp from "./config";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  getDocs,
  query,
  collection,
  where,
} from "firebase/firestore";

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export async function addData(collection: string, id: string, data: any) {
  let result = null;
  let error = null;

  try {
    result = await setDoc(doc(db, collection, id), data);
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export async function getDocument(collection: string, id: string) {
  let docRef = doc(db, collection, id);
  let result = null;
  let error = null;

  try {
    result = await getDoc(docRef);
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export async function getUserNotes() {
  if (auth.currentUser === null) {
    return Promise.reject("No user logged in");
  }
  const q = query(
    collection(db, "notes"),
    where("author", "==", auth.currentUser?.uid)
  );
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
}

import { getAuth } from "firebase/auth";
import firebaseApp from "@/firebase/config";

const auth = getAuth(firebaseApp);

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

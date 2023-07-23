import { getAuth } from "firebase/auth";
import firebaseApp from "@/firebase/config";
import Write from "@/components/Write";
import Search from "@/components/Search";
const auth = getAuth(firebaseApp);

export default async function Dashboard() {
  return (
    <div className="flex flex-col">
      <Write />
      <Search />
    </div>
  );
}

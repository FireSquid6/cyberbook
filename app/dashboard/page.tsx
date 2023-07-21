import { getAuth } from "firebase/auth";
import firebaseApp from "@/firebase/config";
import WriteForm from "@/components/WriteForm";
import Search from "@/components/Search";
const auth = getAuth(firebaseApp);

export default async function Dashboard() {
  return (
    <div className="flex flex-col">
      <WriteForm />
      <Search />
    </div>
  );
}

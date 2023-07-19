import { getAuth } from "firebase/auth";
import firebaseApp from "@/firebase/config";
import DashboardMenu from "@/components/DashboardMenu";

const auth = getAuth(firebaseApp);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-column align-center justify-center">
        <DashboardMenu />
        {children}
      </div>
    </>
  );
}

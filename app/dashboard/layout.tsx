import { getAuth } from "firebase/auth";
import firebaseApp from "@/firebase/config";
import RouteProtector from "@/components/RouteProtector";
import DashboardMenu from "@/components/DashboardMenu";

const auth = getAuth(firebaseApp);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RouteProtector redirectPath="/" enforce="signed-in" />
      <div className="flex flex-column align-center justify-center">
        <DashboardMenu />
        {children}
      </div>
    </>
  );
}

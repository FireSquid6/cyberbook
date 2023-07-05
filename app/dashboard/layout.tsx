import { getAuth } from "firebase/auth";
import firebaseApp from "@/firebase/config";
import RouteProtector from "@/components/RouteProtector";

const auth = getAuth(firebaseApp);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RouteProtector redirectPath="/" enforce="signed-in" />
      <section>{children}</section>
    </>
  );
}

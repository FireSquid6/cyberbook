import { redirect } from "next/navigation";
import { userExists } from "@/lib/server/get-user";

export default async function Index() {
  if (await userExists()) {
    redirect("/dashboard");
  }

  return <p>Hello world!</p>;
}

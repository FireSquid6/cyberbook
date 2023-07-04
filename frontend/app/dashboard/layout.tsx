import { userExists } from "@/lib/server/get-user";
import { redirect } from "next/navigation";
import React from "react";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!(await userExists())) {
    redirect("/login");
  }

  return <div className="awesome-layout">{children}</div>;
}

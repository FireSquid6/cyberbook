"use client";
import { toFullUrl } from "@/lib/to-full-url";

export default async function Dashboard() {
  const res = await fetch(toFullUrl("api/get-notes"));
  const data = await res.json();
  console.log(data);

  return <p>{`${data}`}</p>;
}

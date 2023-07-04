import { NextResponse } from "next/server";
import { getUser } from "@/lib/server/get-user";

export async function GET(request: Request) {
  const user = await getUser();
  return NextResponse.json({
    key: process.env.SUPABASE_SERVICE_KEY,
    user: user,
  });
}

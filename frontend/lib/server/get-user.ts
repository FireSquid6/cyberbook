import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function getUser() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return Promise.resolve(user);
}

export async function userExists(): Promise<boolean> {
  const user = await getUser();

  return Promise.resolve(user !== null);
}

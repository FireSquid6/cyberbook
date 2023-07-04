import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export async function signOutFromClient(): Promise<void> {
  // Create a Supabase client configured to use cookies
  const supabase = createClientComponentClient();
  return await supabase.auth
    .signOut()
    .then(() => {
      return Promise.resolve();
    })
    .catch(() => {
      return Promise.reject();
    });
}

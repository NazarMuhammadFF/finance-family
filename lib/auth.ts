import type { Session } from "@supabase/supabase-js";

import { supabase } from "@/lib/supabase";

export async function getCurrentSession(): Promise<Session | null> {
  const { data } = await supabase.auth.getSession();
  return data.session;
}

export function isAuthenticated(
  session: Session | null | undefined,
): session is Session {
  return Boolean(session?.user);
}

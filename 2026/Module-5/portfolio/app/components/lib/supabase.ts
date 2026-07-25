import { createClient as createSupabaseClient } from "@supabase/supabase-js";

// Simple Supabase client for server components and server actions.
// No auth yet, so it uses the public anon key. Swap to the @supabase/ssr
// cookie-based client once auth is added.
export function createClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
  );
}

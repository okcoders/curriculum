// Segment 2 — server component that reads projects from Supabase.
// Goes at app/projects/page.tsx (adjust the import path to your client).
import { createClient } from "@/lib/supabase";

export default async function Projects() {
  const supabase = createClient();
  const { data: projects } = await supabase.from("projects").select();

  return (
    <ul>
      {projects?.map((p) => (
        <li key={p.id}>{p.title}</li>
      ))}
    </ul>
  );
}

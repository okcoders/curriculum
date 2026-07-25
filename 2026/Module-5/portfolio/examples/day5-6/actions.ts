// Segments 3 & 4 — server actions to add and delete projects.
// Goes at app/projects/actions.ts
"use server";
import { createClient } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export async function addProject(formData: FormData) {
  const supabase = createClient();
  await supabase.from("projects").insert({
    title: formData.get("title"),
    description: formData.get("description"),
  });
  revalidatePath("/projects");
}

export async function deleteProject(id: number) {
  const supabase = createClient();
  await supabase.from("projects").delete().eq("id", id);
  revalidatePath("/projects");
}

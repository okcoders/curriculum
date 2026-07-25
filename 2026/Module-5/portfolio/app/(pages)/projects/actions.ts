// app/projects/actions.ts
"use server";
import { createClient } from "@/app/components/lib/supabase";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const supabase = createClient();

export async function addProject(formData: FormData) {
  await supabase.from("projects").insert({
    title: formData.get("title"),
    description: formData.get("description"),
  });
  redirect("/projects");
}

export async function deleteProject(id: string) {
    await supabase.from("projects")
        .delete().eq("id", id);
        revalidatePath("/projects");
}
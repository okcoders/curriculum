import { createClient } from "./supabase";
import Link from "next/link";
import { deleteProject } from "@/app/(pages)/projects/actions";

export default async function Projects() {
  const supabase = createClient();
  const { data: projects } = await supabase.from("projects").select();

  return (
    <div>
      {projects?.map((p) => (
        <div key={p.id} className="flex">
        <Link href={`/projects/${p.id}`}>
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-semibold">{p.title}</h2>
          <p className="text-gray-600">{p.description}</p>
        </div>
          </Link>
          <form action={deleteProject.bind(null, p.id)}>
            <button type="submit">X</button>
          </form>
        </div>
      ))}
    </div>
  );
}
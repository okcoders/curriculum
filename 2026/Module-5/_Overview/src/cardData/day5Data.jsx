import CodeBlock from "../components/CodeBlock";

// Day 5 cards. Wednesday (1 hr), concept. Use the full hour only if needed.
// How data works in a Next.js app: server components read, server actions write.
// Supabase setup is self-directed via the docs, not taught in class.
const day5Data = [
  {
    header: <>Module 5 - Day 5</>,
    body: (
      <>
        <p className="text-xl mb-4">How data works in a Next.js app.</p>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Server components read data</li>
          <li>Server actions write data</li>
        </ul>
      </>
    ),
  },
  {
    header: <>How Data Flows</>,
    body: (
      <ul className="list-disc list-inside space-y-2 text-left">
        <li>Reads happen in server components, on the server</li>
        <li>Writes happen in server actions, also on the server</li>
        <li>No separate API layer to build</li>
      </ul>
    ),
  },
  {
    header: <>Server Components Read</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>The page is a server component</li>
          <li>Read the data directly, then render it</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="tsx">{`import { createClient } from "@/lib/supabase";

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
}`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Server Actions Write</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>A function marked "use server" runs on the server</li>
          <li>A form calls it through the action prop</li>
          <li>Read the submitted values from formData</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="tsx">{`// app/projects/actions.ts
"use server";
import { createClient } from "@/lib/supabase";

export async function addProject(formData: FormData) {
  const supabase = createClient();
  await supabase.from("projects").insert({
    title: formData.get("title"),
    description: formData.get("description"),
  });
}`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Calling the Action from a Form</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Pass the action to the form's action prop</li>
          <li>Each input's name maps to a formData key</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="tsx">{`import { addProject } from "./actions";

export default function AddProjectForm() {
  return (
    <form action={addProject}>
      <input name="title" placeholder="Title" />
      <input name="description" placeholder="Description" />
      <button type="submit">Add</button>
    </form>
  );
}`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>revalidatePath</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>After a write, the page still shows the old data</li>
          <li>revalidatePath tells Next.js to refetch that route</li>
          <li>Call it at the end of the action</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="tsx">{`import { revalidatePath } from "next/cache";

// at the end of addProject, after the insert
revalidatePath("/projects");`}</CodeBlock>
        </div>
      </>
    ),
  },
];

export default day5Data;

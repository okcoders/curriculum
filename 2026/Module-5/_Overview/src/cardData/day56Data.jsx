import CodeBlock from "../components/CodeBlock";

// Day 5 + 6 combined, split into 4 segments.
// Each segment: teach + demo, then a Task card = where the video ends.
// Students watch a segment in order, do the task from the reference doc, repeat.
const day56Data = [
  {
    header: <>Module 5 - Day 5 &amp; 6</>,
    body: (
      <>
        <p className="text-xl mb-4">Data in a Next.js app: read and write with Supabase.</p>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Watch each segment in order</li>
          <li>Do that segment's task before the next video</li>
          <li>Use the task reference doc as you work</li>
        </ul>
      </>
    ),
  },

  // ---- SEGMENT 1: SET UP SUPABASE ----
  {
    header: <>Segment 1: Set Up Supabase</>,
    body: (
      <ul className="list-disc list-inside space-y-2 text-left">
        <li>You need a Supabase project and a projects table</li>
        <li>You will set it up yourself from the docs</li>
      </ul>
    ),
  },
  {
    header: <>What You Need to Set Up</>,
    body: (
      <ul className="list-disc list-inside space-y-2 text-left">
        <li>A Supabase project</li>
        <li>A projects table with id, title, and description columns</li>
        <li>The Supabase client wired into your app to query with</li>
      </ul>
    ),
  },
  {
    header: <>Task 1: Set Up Supabase</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Create a Supabase project and a projects table</li>
          <li>Add a few rows so you have data to read</li>
          <li>Set up the Supabase client in your app</li>
          <li>Work from the docs; ask whenever you have a question</li>
        </ul>
        <p className="mt-3 text-sm opacity-70 text-left">ETA: ~45 min</p>
        <p className="mt-4 text-left">
          <a
            href="https://supabase.com/docs/guides/getting-started/quickstarts/nextjs"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-primary"
          >
            https://supabase.com/docs/guides/getting-started/quickstarts/nextjs
          </a>
        </p>
      </>
    ),
  },

  // ---- SEGMENT 2: READING DATA ----
  {
    header: <>Segment 2: Reading Data</>,
    body: (
      <ul className="list-disc list-inside space-y-2 text-left">
        <li>Reads happen in server components, on the server</li>
        <li>Writes happen in server actions</li>
        <li>No separate API layer to build</li>
      </ul>
    ),
  },
  {
    header: <>Server Component Reads</>,
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
    header: <>Task 2: Read Your Projects</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Make your projects page read from your Supabase table</li>
          <li>Render the title and description of each row</li>
          <li>Confirm your seeded rows show on the page</li>
        </ul>
        <p className="mt-3 text-sm opacity-70 text-left">ETA: ~25 min</p>
      </>
    ),
  },

  // ---- SEGMENT 3: WRITING DATA ----
  {
    header: <>Segment 3: Writing Data</>,
    body: (
      <ul className="list-disc list-inside space-y-2 text-left">
        <li>A function marked "use server" runs on the server</li>
        <li>A form calls it through the action prop</li>
        <li>Read the submitted values from formData</li>
      </ul>
    ),
  },
  {
    header: <>Why "use server"</>,
    body: (
      <ul className="list-disc list-inside space-y-2 text-left">
        <li>Components render on the server, but this function is called from the browser (a form submit)</li>
        <li>"use server" marks it as a function the client is allowed to trigger on the server</li>
        <li>It creates the server endpoint behind the form for you</li>
        <li>Without it, the client has no server function to call</li>
      </ul>
    ),
  },
  {
    header: <>Server Action Writes</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Mark the function "use server"</li>
          <li>Insert the values into the table</li>
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
    header: <>Access and Auth</>,
    body: (
      <ul className="list-disc list-inside space-y-2 text-left">
        <li>Right now anyone visiting the page could add a project</li>
        <li>A real portfolio locks writes so only the owner can add</li>
        <li>You will set up Supabase auth for this later</li>
      </ul>
    ),
  },
  {
    header: <>Task 3: Add a Project</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Write an addProject server action that inserts a row</li>
          <li>Build a form that calls it</li>
          <li>Submit it and check the row in Supabase</li>
        </ul>
        <p className="mt-3 text-sm opacity-70 text-left">ETA: ~30 min</p>
      </>
    ),
  },

  // ---- SEGMENT 4: REFRESH + DELETE ----
  {
    header: <>Segment 4: Refresh + Delete</>,
    body: (
      <ul className="list-disc list-inside space-y-2 text-left">
        <li>After a write, the page still shows the old data</li>
        <li>revalidatePath refetches the route</li>
        <li>Delete works the same way as insert</li>
      </ul>
    ),
  },
  {
    header: <>revalidatePath</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Call it at the end of the action</li>
          <li>Next.js refetches that route so the new data shows</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="tsx">{`import { revalidatePath } from "next/cache";

// at the end of addProject, after the insert
revalidatePath("/projects");`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Delete Action</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Delete the row where the id matches</li>
          <li>Revalidate so it disappears from the list</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="tsx">{`"use server";
import { createClient } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export async function deleteProject(id: number) {
  const supabase = createClient();
  await supabase.from("projects").delete().eq("id", id);
  revalidatePath("/projects");
}`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Delete: Confirm and Strategy</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Confirm before deleting, so a click cannot wipe data by accident</li>
          <li>Hard delete: the row is gone for good (what the code above does)</li>
          <li>Soft delete: keep the row, mark it inactive, and hide it from queries</li>
          <li>Soft delete preserves history and lets you undo or restore</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="tsx">{`// soft delete: keep the row, flag it inactive
await supabase
  .from("projects")
  .update({ active: false })
  .eq("id", id);

// then read only active rows
await supabase.from("projects").select().eq("active", true);`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Task 4: Refresh + Delete</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Add revalidatePath so new projects show without a reload</li>
          <li>Add a deleteProject action and a delete button per project</li>
          <li>Confirm add and delete both update the list live</li>
        </ul>
        <p className="mt-3 text-sm opacity-70 text-left">ETA: ~25 min</p>
      </>
    ),
  },
];

export default day56Data;

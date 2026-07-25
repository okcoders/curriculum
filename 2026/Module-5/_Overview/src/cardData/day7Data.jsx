import CodeBlock from "../components/CodeBlock";

// Day 7 cards. Wednesday (1 hr), concept.
// Server actions: mutations from forms that write to the database.
const day7Data = [
  {
    header: <>Module 5 - Day 7</>,
    body: (
      <>
        <p className="text-xl mb-4">Server actions.</p>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>What a server action is</li>
          <li>Calling one from a form</li>
          <li>Writing to the database and refreshing the page</li>
        </ul>
      </>
    ),
  },
  {
    header: <>What is a Server Action</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>A function that runs on the server</li>
          <li>Marked with "use server"</li>
          <li>Called from a component, no API route to write</li>
          <li>Used to change data: create, update, delete</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="tsx">{`"use server";

export async function createProject(formData: FormData) {
  // runs on the server
}`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>A Form + Action</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Pass the action to the form's action prop</li>
          <li>Form inputs arrive as FormData</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="tsx">{`<form action={createProject}>
  <input name="title" />
  <input name="description" />
  <button type="submit">Add</button>
</form>`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Writing to the Database</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Read the fields from FormData</li>
          <li>Create the record with Prisma</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="tsx">{`"use server";
import { prisma } from "@/lib/prisma";

export async function createProject(formData: FormData) {
  await prisma.project.create({
    data: {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
    },
  });
}`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Revalidate</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>After a change, the page still shows old data</li>
          <li>revalidatePath tells Next.js to refresh it</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="tsx">{`import { revalidatePath } from "next/cache";

// at the end of the action
revalidatePath("/projects");`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Updating and Deleting</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Same pattern: an action that calls Prisma</li>
          <li>update changes a record, delete removes one</li>
          <li>Revalidate the path afterward</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="tsx">{`await prisma.project.delete({ where: { id } });
revalidatePath("/projects");`}</CodeBlock>
        </div>
      </>
    ),
  },
];

export default day7Data;

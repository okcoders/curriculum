import CodeBlock from "../components/CodeBlock";

// Day 4 cards. Saturday (4 hr). Build the list -> detail flow together, then a
// checkpoint. Then two more Next features (not-found, dynamic metadata), then a
// second checkpoint. Dynamic routes + detail pages.
const day4Data = [
  {
    header: <>Module 5 - Day 4</>,
    body: (
      <>
        <p className="text-xl mb-4">Dynamic routes and project detail pages.</p>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Add a route with a dynamic segment</li>
          <li>Read the param and render one project</li>
          <li>Handle missing projects and set a per-project title</li>
        </ul>
      </>
    ),
  },
  {
    header: <>Dynamic Routes</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>A folder named in brackets is a dynamic segment</li>
          <li>[id] matches any value in that spot of the URL</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="bash">{`app/
  projects/
    page.tsx          ->  /projects
    [id]/
      page.tsx        ->  /projects/1, /projects/2, ...`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Reading params</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>The page receives a params prop</li>
          <li>The key matches the folder name ([id] -&gt; params.id)</li>
          <li>In Next.js, params is awaited</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="tsx">{`export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <h1>Project {id}</h1>;
}`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Linking to Detail Pages</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>On the projects list, link each item to its detail route</li>
          <li>Build the href from the project id</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="tsx">{`import Link from "next/link";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <ul>
      {projects.map((p) => (
        <li key={p.id}>
          <Link href={\`/projects/\${p.id}\`}>{p.title}</Link>
        </li>
      ))}
    </ul>
  );
}`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>The Detail Page</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Read the id from params</li>
          <li>Find the matching project</li>
          <li>Render its details</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="tsx">{`import { projects } from "@/lib/projects";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === Number(id));

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">{project?.title}</h1>
      <p className="mt-2 text-gray-600">{project?.description}</p>
    </div>
  );
}`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>List to Detail</>,
    body: (
      <ul className="list-disc list-inside space-y-2 text-left">
        <li>Your turn: link each project to /projects/[id]</li>
        <li>Create the [id] route, read the param, find the project</li>
        <li>Render and style its title and description</li>
        <li>Click through the list and confirm each detail page works</li>
      </ul>
    ),
  },
  {
    header: <>Handling Not Found</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>A bad id finds no project</li>
          <li>Call notFound() to show the 404 page</li>
          <li>A not-found.tsx file customizes what shows</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="tsx">{`import { notFound } from "next/navigation";

const project = projects.find((p) => p.id === Number(id));
if (!project) notFound();

// app/projects/[id]/not-found.tsx
export default function NotFound() {
  return <p>That project does not exist.</p>;
}`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Dynamic Metadata</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Export generateMetadata to set the title per project</li>
          <li>It reads the same params as the page</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="tsx">{`export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === Number(id));
  return { title: project?.title ?? "Project" };
}`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Not Found + Metadata</>,
    body: (
      <ul className="list-disc list-inside space-y-2 text-left">
        <li>Your turn: call notFound() when no project matches, add a not-found.tsx</li>
        <li>Add generateMetadata so the tab shows the project title</li>
        <li>Work on your portfolio</li>
      </ul>
    ),
  },
];

export default day4Data;

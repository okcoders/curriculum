import CodeBlock from "../components/CodeBlock";

// Day 2 cards. Saturday (4 hr) build.
// Teach a Next.js concept, then a checkpoint where students do THAT SAME
// Next.js thing themselves. Checkpoints are Next-specific, not styling busywork.
const day2Data = [
  {
    header: <>Module 5 - Day 2</>,
    body: (
      <>
        <p className="text-xl mb-4">Build the portfolio pages.</p>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Scaffold the project and tour it</li>
          <li>Add pages with the App Router and a shared layout</li>
          <li>Render project data in a server component</li>
        </ul>
      </>
    ),
  },
  {
    header: <>Scaffold the Portfolio</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Create the project with TypeScript, App Router, Tailwind</li>
          <li>Start the dev server</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="bash">{`npx create-next-app@latest portfolio
# choose: TypeScript, App Router, Tailwind

cd portfolio
npm run dev`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Tour the Project</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>app/layout.tsx: shared shell around every page</li>
          <li>app/page.tsx: the home page (route /)</li>
          <li>app/globals.css: Tailwind and global styles</li>
          <li>A folder under app/ becomes a new route</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="bash">{`app/
  layout.tsx
  page.tsx
  globals.css`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Edit the Home Page</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>app/page.tsx is the route /</li>
          <li>Replace the starter markup with a simple hero</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="tsx">{`export default function Home() {
  return (
    <section className="py-32 text-center">
      <h1 className="text-5xl font-bold">Your Name</h1>
      <p className="mt-4 text-gray-500">Frontend developer</p>
    </section>
  );
}`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Making Pages: Folder = Route</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>A folder under app/ becomes a route</li>
          <li>Put a page.tsx inside it that exports a component</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="tsx">{`// app/about/page.tsx  ->  /about
export default function About() {
  return <h1>About Me</h1>;
}`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Checkpoint: Add a Route</>,
    body: (
      <ul className="list-disc list-inside space-y-2 text-left">
        <li>Your turn: create the app/about and app/projects folders</li>
        <li>Add a page.tsx to each that exports a component</li>
        <li>Visit /about and /projects to confirm they render</li>
      </ul>
    ),
  },
  {
    header: <>Layout + Nav with next/link</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>The root layout wraps every page</li>
          <li>Put a shared nav there using next/link</li>
          <li>Link, not a plain anchor, for client-side navigation</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="tsx">{`import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="flex gap-4 p-4 border-b">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Checkpoint: Link Your Routes</>,
    body: (
      <ul className="list-disc list-inside space-y-2 text-left">
        <li>Your turn: add the shared nav to your root layout</li>
        <li>Use next/link to link Home, About, and Projects</li>
        <li>Click through; confirm no full page reload</li>
      </ul>
    ),
  },
  {
    header: <>Project Data</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Start with a typed array in a lib file</li>
          <li>This can move to a database later</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="typescript">{`// lib/projects.ts
export interface Project {
  id: number;
  title: string;
  description: string;
}

export const projects: Project[] = [
  { id: 1, title: "Recipe Browser", description: "Module 4 app" },
  { id: 2, title: "Portfolio", description: "This site" },
];`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Projects Grid in a Server Component</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>The page is a server component by default</li>
          <li>The data is ready on the server, so there is nothing to fetch after render</li>
          <li>That is what useEffect was for in the browser, not needed here</li>
          <li>Reach for useState/useEffect in a client component when data changes from user actions</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="tsx">{`import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
      {projects.map((p) => (
        <div key={p.id} className="border rounded-lg p-4">
          <h2 className="text-xl font-semibold">{p.title}</h2>
          <p className="text-gray-600">{p.description}</p>
        </div>
      ))}
    </div>
  );
}`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Checkpoint: Render Data in a Server Component</>,
    body: (
      <ul className="list-disc list-inside space-y-2 text-left">
        <li>Your turn: add your own projects to the data file</li>
        <li>Import and map them in the projects page (a server component)</li>
        <li>No useState or useEffect; the data is read on the server</li>
      </ul>
    ),
  },
  {
    header: <>Images with next/image</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>next/image optimizes and sizes images for you</li>
          <li>Put image files in the public/ folder</li>
          <li>width and height are required</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="tsx">{`import Image from "next/image";

<Image src="/p1.png" alt="Project one" width={400} height={250} />`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Page Metadata</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Export a metadata object to set the tab title and description</li>
          <li>Next.js puts it in the page head for you</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="tsx">{`export const metadata = {
  title: "My Portfolio",
  description: "Projects built with Next.js",
};`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Checkpoint: Images + Metadata</>,
    body: (
      <ul className="list-disc list-inside space-y-2 text-left">
        <li>Your turn: add a next/image to your project cards</li>
        <li>Export metadata from your pages to set the title</li>
        <li>Check the browser tab title updated</li>
      </ul>
    ),
  },
  {
    header: <>On Your Own Time</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Browse portfolios for inspiration before next class</li>
          <li>Note layouts and sections you want to borrow</li>
        </ul>
        <p className="mt-4 text-left">
          <a
            href="https://6e87v.hatchboxapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-primary"
          >
            https://6e87v.hatchboxapp.com/
          </a>
        </p>
      </>
    ),
  },
];

export default day2Data;

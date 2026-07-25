import CodeBlock from "../components/CodeBlock";

// Day 3 cards. Wednesday (1 hr), concept. Use the full hour only if needed.
// Day 2 already rendered local data in a server component. Day 3 formalizes
// the server/client split and adds ASYNC data fetching (real await fetch).
const day3Data = [
  {
    header: <>Module 5 - Day 3</>,
    body: (
      <>
        <p className="text-xl mb-4">Server and client components, and fetching data.</p>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>When each component type runs</li>
          <li>Fetching data in an async server component</li>
          <li>Passing server data down to a client component</li>
        </ul>
      </>
    ),
  },
  {
    header: <>Server vs Client, Quick Recap</>,
    body: (
      <ul className="list-disc list-inside space-y-2 text-left">
        <li>Server component: the default, runs on the server, ships HTML</li>
        <li>Client component: runs in the browser, needs "use client"</li>
        <li>Server for data and static content; client for interactivity</li>
        <li>Default to server, opt into client only when needed</li>
      </ul>
    ),
  },
  {
    header: <>Client Components: "use client"</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Add "use client" at the very top of the file</li>
          <li>Required for useState, useEffect, and event handlers</li>
          <li>Keep them small and close to the interactive part</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="tsx">{`"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Async Data Fetching in a Server Component</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>A server component can be async</li>
          <li>await the data right in the component, no useEffect</li>
          <li>The page renders once the data is ready</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="tsx">{`export default async function Projects() {
  const res = await fetch("https://api.example.com/projects");
  const projects = await res.json();

  return (
    <ul>
      {projects.map((p) => (
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
    header: <>Passing Server Data to a Client Component</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Fetch in the server component</li>
          <li>Pass the data down as props to a client component</li>
          <li>The client component adds the interactivity</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="tsx">{`// server component
const projects = await getProjects();
return <ProjectFilter projects={projects} />;

// ProjectFilter.tsx is a "use client" component
// that filters the list based on user input`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>loading.tsx</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Add a loading.tsx next to a page</li>
          <li>Next.js shows it while the server component fetches</li>
          <li>No loading state to wire up yourself</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="tsx">{`// app/projects/loading.tsx
export default function Loading() {
  return <p>Loading projects...</p>;
}`}</CodeBlock>
        </div>
      </>
    ),
  },
];

export default day3Data;

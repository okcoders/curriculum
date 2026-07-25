import CodeBlock from "../components/CodeBlock";

const day1Data = [
  {
    header: <>Module 5 - Day 1</>,
    body: (
      <>
        <p className="text-xl mb-4">Introduction to Next.js.</p>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>What Next.js is and why teams use it</li>
          <li>How it differs from your Module 4 Vite app</li>
          <li>Scaffold one and tour it</li>
        </ul>
      </>
    ),
  },
  {
    header: <>What is Next.js</>,
    body: (
      <ul className="list-disc list-inside space-y-2 text-left">
        <li>A React framework for building fullstack apps</li>
        <li>Renders on the server, not just the browser</li>
        <li>Routing comes from your files, no react-router to wire up</li>
        <li>Frontend and backend live in one project</li>
      </ul>
    ),
  },
  {
    header: <>Next.js vs Your Module 4 App</>,
    body: (
      <ul className="list-disc list-inside space-y-2 text-left">
        <li>Module 4: Vite, a client-only SPA, react-router wired by hand</li>
        <li>Next.js: routes come from the file system, folders are URLs</li>
        <li>Module 4 fetched someone else's API; Next.js can BE the backend</li>
        <li>Same React you already know: components, props, state</li>
      </ul>
    ),
  },
  {
    header: <>App Router + File-Based Routing</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Everything lives in the app/ folder</li>
          <li>A folder = a route; page.tsx = the page that renders</li>
          <li>layout.tsx wraps pages with a shared shell</li>
          <li>No Routes or Route tags; the files ARE the routes</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="bash">{`app/
  page.tsx          ->  /
  about/
    page.tsx        ->  /about
  meals/
    page.tsx        ->  /meals`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Server vs Client Components</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Components render on the SERVER by default (new idea)</li>
          <li>Server components can fetch data directly, no useEffect</li>
          <li>Add "use client" at the top when you need state or events</li>
          <li>Rule of thumb: default server, opt into client when needed</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="tsx">{`// server component (the default)
export default function Page() {
  return <h1>Hello from the server</h1>;
}

// client component (needs interactivity)
"use client";
import { useState } from "react";`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Scaffold: create-next-app</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>One command scaffolds the whole project</li>
          <li>Choose TypeScript, App Router, and Tailwind</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="bash">{`npx create-next-app@latest my-app
# choose: TypeScript, App Router, Tailwind

cd my-app
npm run dev`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Tour the Project</>,
    body: (
      <ul className="list-disc list-inside space-y-2 text-left">
        <li>app/page.tsx: the home page (route /)</li>
        <li>app/layout.tsx: shared shell around every page</li>
        <li>app/globals.css: global styles</li>
        <li>Add a folder under app/ to add a new route</li>
      </ul>
    ),
  },
];

export default day1Data;

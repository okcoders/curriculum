import CodeBlock from "../components/CodeBlock";

// Day 8 cards. Saturday (4 hr), last class of the module.
// Light coverage of remaining Next concepts, then project work + help, then
// sharing, then the capstone overview.
const day8Data = [
  {
    header: <>Module 5 - Day 8</>,
    body: (
      <>
        <p className="text-xl mb-4"></p>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Route handlers, caching, SEO, and deploy</li>
          <li>Work on your portfolio</li>
          <li>Share what you built</li>
          <li>Capstone</li>
        </ul>
      </>
    ),
  },
  {
    header: <>Route Handlers</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Build an API endpoint with a route.ts file</li>
          <li>Export a function named for the HTTP method</li>
          <li>Return data with Response.json</li>
          <li>Use them for callers outside your app: webhooks, other services, public APIs</li>
          <li>Inside your own app, server components and server actions usually cover it</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="tsx">{`// app/api/projects/route.ts
import { createClient } from "@/app/components/lib/supabase";

export async function GET() {
  const supabase = createClient();
  const { data } = await supabase.from("projects").select();
  return Response.json(data);
}`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Caching &amp; Revalidation</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Next.js caches rendered pages and data so repeat visits are fast</li>
          <li>A cached page keeps serving until it is revalidated</li>
          <li>Time-based: rebuild on a timer with export const revalidate</li>
          <li>On-demand: revalidatePath or revalidateTag after a change</li>
          <li>Opt out entirely with export const dynamic, to render every request</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="tsx">{`// Rebuild this route at most once every 60 seconds
export const revalidate = 60;

// Or never cache it, render on every request
export const dynamic = "force-dynamic";

// Tag data when you fetch it, so it can be refreshed by tag later
const res = await fetch("https://api.example.com/projects", {
  next: { tags: ["projects"] },
});

// On-demand, inside a server action after a change:
import { revalidatePath, revalidateTag } from "next/cache";

revalidatePath("/projects");  // refresh one route
revalidateTag("projects");     // refresh the tagged fetch above`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>SEO: Sitemap</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>A sitemap lists your pages for search engines</li>
          <li>Next.js builds it from app/sitemap.ts</li>
          <li>Large sites can split into multiple sitemaps with generateSitemaps</li>
          <li>Each id becomes its own file, like /sitemap/0.xml</li>
        </ul>
        <div className="mt-4 space-y-4">
          <CodeBlock language="tsx">{`// app/sitemap.ts
export default function sitemap() {
  return [
    { url: "https://yoursite.com", lastModified: new Date() },
    { url: "https://yoursite.com/projects", lastModified: new Date() },
  ];
}`}</CodeBlock>
          <CodeBlock language="tsx">{`// multiple sitemaps: one file per id
export async function generateSitemaps() {
  return [{ id: 0 }, { id: 1 }];
}

export default function sitemap({ id }: { id: number }) {
  // return the URLs for this chunk based on id
  return [];
}`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>SEO: Open Graph</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Open Graph builds the preview card when a link is shared</li>
          <li>Set it in the metadata openGraph field</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="tsx">{`export const metadata = {
  openGraph: {
    title: "My Portfolio",
    description: "Projects built with Next.js",
    images: ["/og.png"],
  },
};`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Deploy to Vercel</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Push your repo to GitHub, then import it at vercel.com</li>
          <li>Add your environment variables in the Vercel project settings</li>
          <li>The .env file is not deployed; Vercel needs its own copy</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="bash">{`# add these in Vercel project settings > Environment Variables
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=...`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Build</>,
    body: (
      <ul className="list-disc list-inside space-y-2 text-left">
        <li>Work on your portfolio</li>
        <li>Finish features, style, and deploy</li>
        <li>Ask for help on anything you are stuck on</li>
      </ul>
    ),
  },
  {
    header: <>Share Your Work</>,
    body: (
      <ul className="list-disc list-inside space-y-2 text-left">
        <li>Show your portfolio</li>
        <li>Walk through what you built and how</li>
      </ul>
    ),
  },
  {
    header: <>Capstone Overview</>,
    body: (
      <ul className="list-disc list-inside space-y-2 text-left">
        <li>Discuss</li>
      </ul>
    ),
  },
];

export default day8Data;

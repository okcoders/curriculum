import CodeBlock from "../components/CodeBlock";

// Day 7 cards. Wednesday (1 hr), live, concept + demo.
// Proxy (proxy.ts, formerly middleware.ts before Next 16): run code before a
// request. Framed as a last-resort tool. Closes with a generateStaticParams
// discussion (sample only, not coded live).
const day7Data = [
  {
    header: <>Module 5 - Day 7</>,
    body: (
      <>
        <p className="text-xl mb-4">Proxy (formerly middleware).</p>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Run code before a request finishes</li>
          <li>Redirect, rewrite, or set headers</li>
          <li>When to reach for it, and when not to</li>
        </ul>
      </>
    ),
  },
  {
    header: <>What is Proxy</>,
    body: (
      <ul className="list-disc list-inside space-y-2 text-left">
        <li>Code that runs before a request reaches your page</li>
        <li>Lives in proxy.ts at the project root</li>
        <li>Called middleware.ts before Next.js 16</li>
        <li>Can redirect, rewrite the URL, or add headers</li>
      </ul>
    ),
  },
  {
    header: <>A Basic Proxy</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Export a function named proxy</li>
          <li>Return NextResponse.next() to let the request continue</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="tsx">{`// proxy.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  console.log("Request to:", request.nextUrl.pathname);
  return NextResponse.next();
}`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>The matcher</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Export a config with a matcher</li>
          <li>It limits which routes run the proxy</li>
          <li>Without it, the proxy runs on every request</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="tsx">{`export const config = {
  matcher: ["/dashboard/:path*"],
};`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Redirecting a Request</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Check the request, then send the user elsewhere</li>
          <li>Return NextResponse.redirect with the new URL</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="tsx">{`export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === "/home") {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>generateStaticParams: When to Use It</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Pre-builds dynamic routes at build time, one page per entry</li>
          <li>Best for content that rarely changes: blog posts, docs, marketing</li>
          <li>Not for live CRUD like our projects; new rows would not have a page until a rebuild</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="tsx">{`// app/blog/[slug]/page.tsx
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}`}</CodeBlock>
        </div>
      </>
    ),
  },
];

export default day7Data;

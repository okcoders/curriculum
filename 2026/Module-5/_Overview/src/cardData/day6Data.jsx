import CodeBlock from "../components/CodeBlock";

// Day 6 cards. Saturday (4 hr), we-do build.
// Connect Prisma to the existing Supabase (Postgres) database, model + seed
// projects, read from the database.
const day6Data = [
  {
    header: <>Module 5 - Day 6</>,
    body: (
      <>
        <p className="text-xl mb-4">Connect the app to Supabase with Prisma.</p>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Install and initialize Prisma</li>
          <li>Model and migrate the projects table</li>
          <li>Seed data and read it from a page</li>
        </ul>
      </>
    ),
  },
  {
    header: <>Install + Init Prisma</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Install Prisma and the client</li>
          <li>Init creates the prisma folder and .env</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="bash">{`npm install prisma @prisma/client
npx prisma init --datasource-provider postgresql`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Set the Datasource</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Copy your database connection string from Supabase</li>
          <li>Project Settings, then Database, then Connection string</li>
          <li>Put it in .env; the schema reads it with env("DATABASE_URL")</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="bash">{`# .env
DATABASE_URL="postgresql://postgres:[password]@[host].supabase.co:5432/postgres"`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Model the Project</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Add a Project model to schema.prisma</li>
          <li>Each field becomes a column</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="bash">{`model Project {
  id          Int      @id @default(autoincrement())
  title       String
  description String
  createdAt   DateTime @default(now())
}`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Migrate</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>A migration builds the table in Supabase</li>
          <li>Run it every time the schema changes</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="bash">{`npx prisma migrate dev --name init`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Seed Data</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>A seed script fills the table with starter rows</li>
          <li>Useful so the page has something to show</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="typescript">{`// prisma/seed.ts
import { prisma } from "../lib/prisma";

await prisma.project.create({
  data: { title: "Portfolio Site", description: "Built with Next.js" },
});`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Read from the Database in a Page</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Query Prisma directly in a server component</li>
          <li>No API route needed</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="tsx">{`import { prisma } from "@/lib/prisma";

export default async function Projects() {
  const projects = await prisma.project.findMany();

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
    header: <>Practice: Wire Your Projects Page</>,
    body: (
      <ul className="list-disc list-inside space-y-2 text-left">
        <li>Model, migrate, and seed your projects</li>
        <li>Read them from the database in the projects page</li>
        <li>Replace any hardcoded data with the query</li>
      </ul>
    ),
  },
];

export default day6Data;

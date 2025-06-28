"use client";
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/themes/prism-tomorrow.css";
import Link from "next/link";

export default function Day2() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="bg-purple-100 h-auto pb-20 text-black">
      <h1 className="text-center text-2xl pt-24 font-bolds">
        Module 5: Day 2
      </h1>
      <p className="text-center text-lg mt-2">The Full Database Setup</p>

      <div className="card w-1/2 card-lg m-auto mt-10 shadow-sm bg-white">
        <div className="card-body">
          <h2 className="card-title">Guided Setup</h2>
          <p>
            Today's entire session is dedicated to connecting your application
            to a live database. This is the "brain" that will remember your
            project data.
          </p>

          <ul className="list-disc ml-6 space-y-2 mb-6">
            <li>
              <strong>What is a Database?</strong> It's a structured system for
              storing and managing persistent data for our applications.
            </li>
            <li>
              <strong>What is Prisma?</strong> An ORM (Object-Relational Mapper)
              that acts as a bridge between our JavaScript code and the
              database.
            </li>
            <li>
              <strong>Environment Variables:</strong> We use the{" "}
              <code className="language-jsx">.env.local</code> file to store
              secrets like our database connection URL, keeping them secure and
              out of our codebase.
            </li>
          </ul>

          <Link href="https://scribehow.com/shared/Copy_Nextjs_Connection_Pooling_Snippet__zbNGNVzpQ3K0Ir9ya18fnQ" alt="Nextjs connection pooling step-by-step" target="_blank" style={{ color: "blue" }}>
          Step-by-step: Add Database connection string to portfolio project.
          </Link>

          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mt-6">
            <h3 className="font-bold text-lg text-blue-800">
              Task: The Connection
            </h3>
            <p className="mt-2">Follow these steps.</p>
            

            <div>
              Install and initialize Prisma with these two commands:
              <pre className="mt-1 rounded-lg">
                <code className="language-jsx">
                  {`npm install prisma
npx prisma init`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="card w-1/2 card-lg m-auto mt-10 shadow-sm bg-white">
        <div className="card-body">
          <h2 className="card-title">Modeling & Seeding Your Data</h2>
          <p>
            Now that we're connected, we need to create a "blueprint" for our
            data. This is called a <strong>model</strong>, and we define it in
            the <code className="language-jsx">prisma/schema.prisma</code>{" "}
            file.
          </p>

          <ul className="list-disc ml-6 space-y-2 mb-6">
            <li>
              <strong>The Prisma Schema:</strong> The single source of truth for
              our database structure.
            </li>
            <li>
              <strong>What is a Model?</strong> A model represents a table in
              our database. Each field corresponds to a column, defining its
              name and data type.
            </li>
            <li>
              <strong>The `prisma db push` command:</strong> This command
              synchronizes our schema blueprint with the actual cloud database.
            </li>
            <li>
              <strong>Data Seeding:</strong> The process of populating a
              database with initial data for development and testing.
            </li>
          </ul>


          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mt-6">
            <h3 className="font-bold text-lg text-blue-800">
              Task: Create Your Blueprint
            </h3>
            <ol className="list-decimal ml-6 mt-2 space-y-3">
              <li>
                Define a `Project` model in your `schema.prisma` file. Decide
                what fields your portfolio projects need!
                <pre className="mt-1 rounded-lg">
                  <code className="language-jsx">
                    {`model Project {
  id          String    @id @default(cuid())
  title       String
  description String
  imageUrl    String?
  projectUrl  String?
  createdAt   DateTime  @default(now())
  }`}
                  </code>
                </pre>
              </li>
              <li>
                Push your new blueprint to the cloud database:
                <pre className="mt-1 rounded-lg">
                  <code className="language-jsx">npx prisma db push</code>
                </pre>
              </li>
              <li>
                Go to the <strong>Data</strong> tab in your Vercel Postgres
                dashboard. Manually add 2-3 of your projects. This is called
                "seeding" your database.
              </li>
            </ol>
            <Link
              href="https://scribehow.com/shared/Creating_a_NeonServerless_Postgres_Database_on_Vercel__CNoJ-txFSkCPads5FgWczQ"
              target="_blank"
              alt="Scribe create a neon postgres database on Vercel"
              style={{ color: "blue" }}
            >
              Step-by-step: Create a table in Vercel Neon
            </Link>
          </div>
        </div>
      </div>

      <div className="card w-1/2 card-lg m-auto mt-10 shadow-sm bg-white">
        <div className="card-body">
          <h2 className="card-title">Displaying Your Data</h2>
          <p>
            We will fetch the data you just created and display it in our
            application using a Server Component.
          </p>

          <ul className="list-disc ml-6 space-y-2 mb-6">
            <li>
              <strong>Server Components:</strong> Pages in the App Router run on
              the server, allowing them to securely perform tasks like direct
              database access.
            </li>
            <li>
              <strong>Asynchronous Data Fetching:</strong> We use{" "}
              <code className="language-jsx">async/await</code> to pause the
              component's execution until the data has been retrieved from the
              database.
            </li>
            <li>
              <strong>The Prisma Client:</strong> An auto-generated query
              builder. Methods like{" "}
              <code className="language-jsx">findMany()</code> translate our
              JavaScript into efficient SQL queries.
            </li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mt-6">
            <h3 className="font-bold text-lg text-blue-800">
              Portfolio Work Block: Bring Your Data to Life
            </h3>
            <ol className="list-decimal ml-6 mt-2 space-y-3">
              <li>
                Create a new page at{" "}
                <code className="language-jsx">app/projects/page.jsx</code>.
              </li>
              <li>
                Write the code to fetch your projects from the database.
                <pre>

                  <code className="language-jsx">
                    {`import prisma from '../lib/prisma'; // Adjust path if needed

export default async function ProjectsPage() {
    const projects = await prisma.project.findMany();
    
    return (
        <div>
        <h1>My Projects</h1>
        {/* You will map over your projects here! */}
        </div>
        );
        }`}
                  </code>
        </pre>
              </li>
              <li>
                <strong>Your Main Task:</strong> Map over the `projects` array
                and render the data for each project. Spend the rest of our
                class time styling this page. Use Tailwind CSS to create cards,
                a grid, or any layout you envision for your portfolio. Make it
                your own
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
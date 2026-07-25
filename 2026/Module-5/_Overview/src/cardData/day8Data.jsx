import CodeBlock from "../components/CodeBlock";

// Day 8 cards. Saturday (4 hr), we-do build + deploy. Final day.
// CRUD with server actions, then deploy to Vercel with a hosted MySQL.
const day8Data = [
  {
    header: <>Module 5 - Day 8</>,
    body: (
      <>
        <p className="text-xl mb-4">CRUD with server actions, then deploy.</p>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Add and delete projects with server actions</li>
          <li>Refresh the list after changes</li>
          <li>Deploy to Vercel with a hosted database</li>
        </ul>
      </>
    ),
  },
  {
    header: <>Add Project</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>A form calls the create action</li>
          <li>The action writes to the database and revalidates</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="tsx">{`<form action={createProject}>
  <input name="title" placeholder="Title" />
  <input name="description" placeholder="Description" />
  <button type="submit">Add Project</button>
</form>`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Delete Project</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Pass the id to a delete action</li>
          <li>A small form with a submit button per project</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="tsx">{`<form action={deleteProject}>
  <input type="hidden" name="id" value={project.id} />
  <button type="submit">Delete</button>
</form>`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Revalidate the List</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Both actions call revalidatePath</li>
          <li>The projects page updates without a manual refresh</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="tsx">{`revalidatePath("/projects");`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Prepare for Deploy</>,
    body: (
      <ul className="list-disc list-inside space-y-2 text-left">
        <li>Local MySQL is not reachable from the internet</li>
        <li>Use a hosted MySQL database (for example PlanetScale or Railway)</li>
        <li>Put its connection string in DATABASE_URL</li>
        <li>Run the migration against the hosted database</li>
      </ul>
    ),
  },
  {
    header: <>Deploy to Vercel</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Push the project to GitHub</li>
          <li>Import the repo into Vercel</li>
          <li>Add the DATABASE_URL environment variable</li>
          <li>Deploy</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="bash">{`git init
git add .
git commit -m "portfolio"
git push
# then import the repo at vercel.com and add DATABASE_URL`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Practice: Finish and Demo</>,
    body: (
      <ul className="list-disc list-inside space-y-2 text-left">
        <li>Get add and delete working end to end</li>
        <li>Deploy your portfolio</li>
        <li>Show your live site</li>
      </ul>
    ),
  },
];

export default day8Data;

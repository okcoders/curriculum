import ProjectSection from "@/app/components/Projects";

export const metadata = {
  title: "Projects",
  description: "Derrick Young's previous projects",
};

function delay(t: number) {
  return new Promise((resolve) => setTimeout(resolve, t));
}

export default async function ProjectsPage() {
  return (
    <div>
      <h1>My Projects</h1>
      <p>Explore my projects</p>
      <ProjectSection />
    </div>
  );
}

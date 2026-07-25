import Link from "next/link";
import Projects from "./lib/projects";

export default function ProjectSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
      <Projects />
    </div>
  );
}
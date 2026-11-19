import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/site";

export const metadata = { title: "Projects – Reeshal" };

export default function Projects() {
  return (
    <>
      <h1>projects</h1>
      <p className="muted" style={{ marginBottom: 32 }}>things i've built, and what they're built with.</p>
      {projects.map((p) => <ProjectCard key={p.title} {...p} />)}
    </>
  );
}

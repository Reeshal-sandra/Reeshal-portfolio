import { Github, ExternalLink } from "lucide-react";
import Tags from "./Tags";

export default function ProjectCard({ title, description, tags, github, demo }) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <Tags items={tags} />
      <div className="links-row">
        {github && <a href={github} target="_blank" rel="noreferrer"><Github size={16} /> github</a>}
        {demo && <a href={demo} target="_blank" rel="noreferrer"><ExternalLink size={16} /> live demo</a>}
      </div>
    </article>
  );
}

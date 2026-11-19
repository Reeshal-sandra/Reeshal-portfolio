import Link from "next/link";
import Section from "@/components/Section";
import Tags from "@/components/Tags";
import Socials from "@/components/Socials";
import ProjectCard from "@/components/ProjectCard";
import { profile, skills, projects } from "@/data/site";

export default function Home() {
  return (
    <>
      <div className="hero">
        <h1>{profile.name}</h1>
        <p className="muted">{profile.role} · {profile.location}</p>
        <p style={{ maxWidth: 620 }}>{profile.bio}</p>
        <Link href="/contact" className="btn">get in touch</Link>
      </div>
      <Section title="tech stack"><Tags items={[...skills.languages, ...skills.web, "Git", "GitHub"]} /></Section>
      <Section title="socials"><Socials /></Section>
      <Section title="featured project">
        <ProjectCard {...projects[0]} />
        <Link href="/projects" className="btn">all projects</Link>
      </Section>
    </>
  );
}

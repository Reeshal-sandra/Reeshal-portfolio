import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/site";

export default function Socials() {
  return (
    <div className="socials">
      <a href={profile.github} aria-label="GitHub" target="_blank" rel="noreferrer"><Github /></a>
      <a href={profile.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin /></a>
      <a href={`mailto:${profile.email}`} aria-label="Email"><Mail /></a>
    </div>
  );
}

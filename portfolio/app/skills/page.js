import Section from "@/components/Section";
import Tags from "@/components/Tags";
import { skills } from "@/data/site";

export const metadata = { title: "Skills – Reeshal" };

export default function Skills() {
  return (
    <>
      <h1>skills</h1>
      <Section title="languages"><Tags items={skills.languages} /></Section>
      <Section title="web"><Tags items={skills.web} /></Section>
      <Section title="tools & platforms"><Tags items={skills.tools} /></Section>
      <Section title="core concepts"><Tags items={skills.concepts} /></Section>
    </>
  );
}

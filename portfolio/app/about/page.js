import Section from "@/components/Section";
import Tags from "@/components/Tags";
import { profile, education } from "@/data/site";

export const metadata = { title: "About – Reeshal" };

export default function About() {
  return (
    <>
      <h1>about</h1>
      <p>{profile.bio}</p>
      <Section title="career goal"><p>{profile.goal}</p></Section>
      <Section title="interests"><Tags items={profile.interests} /></Section>
      <Section title="education">
        <div className="tl">
          {education.map((e) => (
            <div className="item" key={e.school}>
              <h3>{e.school}</h3>
              <p className="muted">{e.detail} · {e.period}</p>
              {e.note && <p className="muted">{e.note}</p>}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

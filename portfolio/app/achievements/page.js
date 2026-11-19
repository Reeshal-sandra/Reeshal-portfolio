import { achievements } from "@/data/site";

export const metadata = { title: "Achievements – Reeshal" };

export default function Achievements() {
  return (
    <>
      <h1>achievements</h1>
      <p className="muted" style={{ marginBottom: 32 }}>hackathons and milestones.</p>
      {achievements.map((a) => (
        <article className="card" key={a.title}>
          <h3>{a.title}</h3>
          <p>{a.detail}</p>
          <span className="pill">{a.date}</span>
        </article>
      ))}
    </>
  );
}

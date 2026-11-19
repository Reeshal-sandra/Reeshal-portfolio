import { experience } from "@/data/site";

export const metadata = { title: "Experience – Reeshal" };

export default function Experience() {
  return (
    <>
      <h1>experience</h1>
      <div className="tl" style={{ marginTop: 40 }}>
        {experience.map((e) => (
          <div className="item" key={e.org}>
            <h3>{e.title} · {e.org}</h3>
            <p className="muted">{e.period}</p>
            <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
          </div>
        ))}
      </div>
    </>
  );
}

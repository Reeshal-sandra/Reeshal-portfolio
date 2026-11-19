export default function Tags({ items }) {
  return <div className="tags">{items.map((t) => <span className="pill" key={t}>{t}</span>)}</div>;
}

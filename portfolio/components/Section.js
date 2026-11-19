export default function Section({ title, children }) {
  return (
    <section>
      <h2 className="sec">{title}</h2>
      {children}
    </section>
  );
}

import ContactForm from "@/components/ContactForm";
import Socials from "@/components/Socials";
import Section from "@/components/Section";

export const metadata = { title: "Contact – Reeshal" };

export default function Contact() {
  return (
    <>
      <h1>contact</h1>
      <p className="muted">open to internships. send a message or find me online.</p>
      <Section title="socials"><Socials /></Section>
      <Section title="message"><ContactForm /></Section>
    </>
  );
}

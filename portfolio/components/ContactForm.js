"use client";
import { useState } from "react";
import { Send } from "lucide-react";
import { profile } from "@/data/site";

export default function ContactForm() {
  const [v, setV] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function validate() {
    const e = {};
    if (v.name.trim().length < 2) e.name = "enter your name (at least 2 characters).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "enter a valid email address.";
    if (v.message.trim().length < 10) e.message = "write at least 10 characters.";
    return e;
  }

  function submit(ev) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    const body = encodeURIComponent(`${v.message}\n\n– ${v.name} (${v.email})`);
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent("portfolio message from " + v.name)}&body=${body}`;
    setSent(true);
  }

  const field = (k, label, Tag = "input", extra = {}) => (
    <label>{label}
      <Tag value={v[k]} onChange={(e) => setV({ ...v, [k]: e.target.value })} aria-invalid={!!errors[k]} {...extra} />
      {errors[k] && <span className="err">{errors[k]}</span>}
    </label>
  );

  return (
    <form onSubmit={submit} noValidate>
      {field("name", "name")}
      {field("email", "email", "input", { type: "email" })}
      {field("message", "message", "textarea", { rows: 5 })}
      <button className="btn" type="submit"><Send size={16} /> send message</button>
      {sent && <p className="ok">your email app should open with the message ready to send.</p>}
    </form>
  );
}

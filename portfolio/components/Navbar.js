"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon, Menu, X } from "lucide-react";

const items = ["about", "projects", "experience", "skills", "achievements", "contact"];

export default function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => { setTheme(document.documentElement.dataset.theme || "dark"); }, []);
  useEffect(() => { setOpen(false); }, [path]);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  }

  return (
    <nav className="nav" aria-label="Main">
      <Link href="/" className="brand">reeshal.dev</Link>
      <button className="icon-btn menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>
      <div className={`links ${open ? "open" : ""}`}>
        {items.map((i) => (
          <Link key={i} href={`/${i}`} className={`link ${path === `/${i}` ? "active" : ""}`}>{i}</Link>
        ))}
      </div>
      <button className="icon-btn" onClick={toggle} aria-label="Switch theme">
        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </nav>
  );
}

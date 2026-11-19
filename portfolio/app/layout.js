import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const mono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Reeshal Sandra Dmello – Portfolio",
  description: "CSE student and frontend developer. Projects, experience, skills and achievements.",
};

const themeScript = `try{var t=localStorage.getItem("theme");if(t)document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body className={mono.className}>
        <Navbar />
        <main className="wrap">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

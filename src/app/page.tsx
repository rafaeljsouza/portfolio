// Home page composing hero, skills and contact sections.

import Contact from "@/components/Contact";
import { Hero } from "@/components/Hero";
import Skills from '@/components/Skills'

export default function HomePage() {
  return (
     <main className="bg-zinc-950 text-white px-6 py-12 max-w-6xl mx-auto">
      <Hero />
      <Skills />
      <Contact/>
    </main>
  );
}

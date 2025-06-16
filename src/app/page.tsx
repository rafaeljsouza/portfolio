//import { useTranslations } from 'next-intl';

import Contact from "@/components/Contact";
import { Hero } from "@/components/Hero";
import Skills from '@/components/Skills'

export default function HomePage() {
  // const t = useTranslations('home');
  return (
     <main className="pt-20 min-h-screen bg-zinc-950 text-white">
      <Hero />
      <Skills />
      <Contact/>
    </main>
  );
}

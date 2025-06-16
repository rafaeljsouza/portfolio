'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaLinux,
} from 'react-icons/fa'
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiFastapi,
  SiJavascript,
  SiPhp,
  SiDocker,
} from 'react-icons/si'

const skills = [
  // 🔬 Python stack
  { name: 'Python', icon: <FaPython size={40} /> },
  { name: 'Pandas', icon: <Image src="/icons/pandas.svg" alt="Pandas" width={80} height={80} className='filter grayscale brightness-0 invert' /> },
  { name: 'NumPy', icon: <Image src="/icons/numpy.svg" alt="NumPy" width={80} height={80} className='filter grayscale brightness-0 invert'/> },
  { name: 'SciPy', icon: <Image src="/icons/scipyinvertido.svg" alt="SciPy" width={40} height={40}/> },
  { name: 'Flask', icon: <Image src="/icons/flask.svg" alt="Flask" width={40} height={40} className='filter grayscale brightness-0 invert' /> },
  { name: 'Django', icon: <Image src="/icons/django.svg" alt="Django" width={40} height={40} className='filter grayscale brightness-0 invert' /> },
  { name: 'FastAPI', icon: <SiFastapi size={40} /> },

  // 🌐 Front-end
  { name: 'React', icon: <FaReact size={40} /> },
  { name: 'Next.js', icon: <SiNextdotjs size={40} /> },
  { name: 'TypeScript', icon: <SiTypescript size={40} /> },
  { name: 'JavaScript', icon: <SiJavascript size={40} /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} /> },
  { name: 'HTML5', icon: <FaHtml5 size={40} /> },
  { name: 'CSS3', icon: <FaCss3Alt size={40} /> },

  // 💻 Back-end
  { name: 'Node.js', icon: <FaNodeJs size={40} /> },
  { name: 'PHP', icon: <SiPhp size={40} /> },
  { name: 'Laravel', icon: <Image src="/icons/laravel.svg" alt="Laravel" width={40} height={40} className='filter grayscale brightness-0 invert'/> },

  // 🔧 Infra / DevOps
  { name: 'Git', icon: <FaGitAlt size={40} /> },
  { name: 'Docker', icon: <SiDocker size={40} /> },
  { name: 'Linux', icon: <FaLinux size={40} /> },
]


export default function Skills() {
  const t = useTranslations('Skills')

  return (
    <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">{t('title')}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 rounded-xl border border-zinc-800 hover:bg-zinc-800 transition-colors"
          >
            {skill.icon}
            <span className="mt-2 text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

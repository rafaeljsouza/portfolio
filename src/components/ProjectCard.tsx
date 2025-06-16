'use client'

import Image from 'next/image'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

type Props = {
  title: string
  description: string
  image: string
  siteLink: string
  repoLink: string
}

export function ProjectCard({ title, description, image, siteLink, repoLink }: Props) {
  return (
    <div className="bg-zinc-800 rounded-xl shadow-lg overflow-hidden flex flex-col">
      <a
        href={siteLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block h-48 w-full"
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, 400px"
          className="object-cover group-hover:scale-105 transition-transform"
        />
        <div className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded">
          <FiExternalLink />
        </div>
      </a>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm text-zinc-300 flex-1 mt-2">{description}</p>
        <a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1 text-blue-400 hover:underline"
        >
          Código <FiGithub />
        </a>
      </div>
    </div>
  )
}

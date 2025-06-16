'use client'

// Displays a single project with links to the site and repository.

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
        className="relative block h-48 w-full"
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, 400px"
          className="object-cover group-hover:scale-105 transition-transform"
        />
      </a>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm text-zinc-300 flex-1 mt-2">{description}</p>

        <div className="mt-4 flex flex-col gap-1">
          <a
            href={siteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-green-400 hover:underline"
          >
            Ver site <FiExternalLink />
          </a>

          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-400 hover:underline"
          >
            Código <FiGithub />
          </a>
        </div>
      </div>
    </div>
  )
}

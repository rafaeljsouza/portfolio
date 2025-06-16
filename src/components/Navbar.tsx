'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { FiMenu, FiX } from 'react-icons/fi'
import { useTranslations } from 'next-intl'

const navItems = [
  { nameKey: 'home', href: '/' },
  { nameKey: 'about', href: '/sobre' },
  { nameKey: 'projects', href: '/projects' },
] as const

type NavItem = typeof navItems[number]
type NameKey = NavItem["nameKey"]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const path = usePathname()
   const t = useTranslations('navbar')


  return (
    <nav className="fixed top-0 w-full bg-zinc-900 bg-opacity-80 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="text-2xl font-bold text-white">Rafael</Link>
        <button 
          onClick={() => setOpen(!open)} 
          className="md:hidden text-white text-2xl"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
        <ul className={`flex-col md:flex-row flex gap-6 items-center absolute md:static bg-zinc-900 w-full left-0 md:w-auto md:bg-transparent transition-transform ${open ? 'translate-y-16' : '-translate-y-full'} md:translate-y-0`}>
          {navItems.map((item: NavItem) => {
            const active = path === item.href
            const key = item.nameKey as NameKey;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-2 text-white ${active ? 'font-semibold underline' : 'hover:text-zinc-300'}`}
                >
                  {t(key)}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

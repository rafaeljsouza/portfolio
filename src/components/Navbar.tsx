'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { FiMenu, FiX } from 'react-icons/fi'
import { useTranslations } from 'next-intl'
import LanguageSwitcher from './LanguageSwitcher'

const navItems = [
  { nameKey: 'home', href: '/' },
  { nameKey: 'about', href: '/about' },
  { nameKey: 'projects', href: '/projects' },
] as const


export function Navbar() {
  const [open, setOpen] = useState(false)
  const path = usePathname()
  const t = useTranslations('navbar')

  return (
    <nav className="fixed top-0 w-full bg-zinc-900 bg-opacity-80 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="text-2xl font-bold text-white">
          {t('title')}
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const active = path === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-white ${active ? 'font-semibold underline' : 'hover:text-zinc-300'}`}
              >
                {t(item.nameKey)}
              </Link>
            )
          })}
          <LanguageSwitcher />
        </div>

        {/* Botão de menu hamburguer */}
        <button 
          onClick={() => setOpen(!open)} 
          className="md:hidden text-white text-2xl"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4 bg-zinc-900 text-white">
          {navItems.map((item) => {
            const active = path === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block py-2 ${active ? 'font-semibold underline' : 'hover:text-zinc-300'}`}
              >
                {t(item.nameKey)}
              </Link>
            )
          })}
          <LanguageSwitcher />
        </div>
      )}
    </nav>
  )
}

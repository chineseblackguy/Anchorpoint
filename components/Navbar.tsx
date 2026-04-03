'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/blog', label: 'Blog' },
  { href: '/store', label: 'Store' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy border-b-[3px] border-brand-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-[70px]">
        <Link href="/" className="font-display text-xl text-white tracking-tight">
          Anchor<span className="text-brand-red">Point</span>
        </Link>
        <ul className="hidden lg:flex items-center gap-7">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={`text-xs font-semibold uppercase tracking-widest transition-colors ${pathname === href ? 'text-white' : 'text-blue-300 hover:text-white'}`}>
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact" className="bg-brand-red hover:bg-brand-red-dark text-white text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded transition-colors">
              Contact Us
            </Link>
          </li>
        </ul>
        <button className="lg:hidden text-white p-1" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-navy border-t border-navy-light px-6 py-5 flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} className="text-blue-300 hover:text-white text-sm font-semibold uppercase tracking-widest transition-colors">
              {label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="bg-brand-red text-white text-sm font-bold uppercase tracking-widest px-5 py-3 rounded text-center transition-colors hover:bg-brand-red-dark">
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  )
}

import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const services = [
  'Visa Services','Passport Renewal Typing','Emirates ID Typing',
  'Medical Typing','Legal Translation','Document Attestation',
  'PRO Services','Company Formation','DED Services',
  'Dubai Police Services','Photocopying Services',
]

const pages = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="font-display text-xl text-white mb-3">Anchor<span className="text-brand-red">Point</span></div>
            <p className="text-blue-300/70 text-sm leading-relaxed mb-5">Your one-stop documentation and business setup centre in Dubai, UAE.</p>
            <span className="text-2xl">🇦🇪</span>
          </div>
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {pages.map(({ href, label }) => (
                <li key={href}><Link href={href} className="text-blue-300/70 hover:text-white text-sm transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5">Our Services</h4>
            <ul className="space-y-2">
              {services.slice(0, 7).map((s) => (
                <li key={s}><Link href="/services" className="text-blue-300/70 hover:text-white text-sm transition-colors">{s}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5">Contact</h4>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <MapPin size={16} className="text-brand-red mt-0.5 shrink-0" />
                <p className="text-blue-300/70 text-sm leading-relaxed">Office 10, Block A-2, Floor M2<br />Nesto Bldg, Burj Nahar Mall<br />Al Muttena, Deira, Dubai</p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={16} className="text-brand-red shrink-0" />
                <div className="text-blue-300/70 text-sm">
                  <a href="tel:+971525264724" className="hover:text-white block transition-colors">+971 52 526 4724</a>
                  <a href="tel:+971525291312" className="hover:text-white block transition-colors">+971 52 529 1312</a>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={16} className="text-brand-red shrink-0" />
                <a href="mailto:ap.businesssetup@gmail.com" className="text-blue-300/70 hover:text-white text-sm transition-colors">ap.businesssetup@gmail.com</a>
              </div>
              <div className="flex gap-3 items-center">
                <Clock size={16} className="text-brand-red shrink-0" />
                <p className="text-blue-300/70 text-sm">Mon – Sat: 8:00 AM – 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-blue-300/40 text-xs">© {new Date().getFullYear()} Anchor Point Business Setup. All rights reserved.</p>
          <p className="text-blue-300/40 text-xs">Dubai, United Arab Emirates 🇦🇪</p>
        </div>
      </div>
    </footer>
  )
}

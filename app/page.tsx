import Image from 'next/image'
import Link from 'next/link'
import {
  Shield, Zap, FileCheck, Users,
  MapPin, Phone, Mail,
  ChevronRight, Star
} from 'lucide-react'

const services = [
  { icon: '🏛️', title: 'DED Services', desc: 'Trade licence applications, renewals, and all Dubai Economic Department requirements handled professionally.' },
  { icon: '🛂', title: 'All Visa Services', desc: 'Residence, employment, investor, family, and tourist visas — applications, renewals, and cancellations.' },
  { icon: '🛑', title: 'Passport Renewal Typing', desc: 'Fast and accurate passport renewal typing services accepted by all embassies and consulates.' },
  { icon: '🏥', title: 'Medical Typing', desc: 'Medical fitness typing for visa and Emirates ID requirements at authorised UAE government typing centres.' },
  { icon: '🪪', title: 'Emirates ID Typing', desc: 'New applications, renewals, and replacements for Emirates ID — typed and submitted correctly, first time.' },
  { icon: '📋', title: 'Documents Clearance', desc: 'Fast clearance of all types of government and personal documents across UAE authorities.' },
  { icon: '📝', title: 'Translation & Typing', desc: 'Certified Arabic-English and English-Arabic translation and official typing accepted by UAE ministries.' },
  { icon: '📠', title: 'Photocopying Services', desc: 'High-quality photocopying and scanning for all your document needs — quick and reliable.' },
  { icon: '✅', title: 'Document Attestation', desc: 'MOFA attestation, notarisation, and embassy legalisation for all personal and commercial documents.' },
  { icon: '🚔', title: 'Dubai Police Services', desc: 'Police clearance certificates, good conduct certificates, and all Dubai Police document services.' },
  { icon: '🏢', title: 'Company Formation & PRO', desc: 'End-to-end company setup in mainland and free zones, plus dedicated PRO officer services.' },
]

const trustBadges = [
  { icon: <FileCheck size={22} className="text-brand-red" />, label: 'DED Licensed' },
  { icon: <Zap size={22} className="text-brand-red" />, label: '24hr Processing' },
  { icon: <Star size={22} className="text-brand-red" />, label: '11+ Services' },
  { icon: <Shield size={22} className="text-brand-red" />, label: '100% Confidential' },
]

const whyPoints = [
  { icon: <Zap size={20} className="text-brand-red" />, title: 'Same-Day Processing', desc: 'Urgent document processing available. We understand that deadlines matter for your business.' },
  { icon: <Shield size={20} className="text-brand-red" />, title: '100% Confidential', desc: 'Your documents and personal information are handled with absolute discretion and professionalism.' },
  { icon: <FileCheck size={20} className="text-brand-red" />, title: 'Licensed & Accredited', desc: 'Fully licensed by UAE authorities. All typing and translation services are officially certified.' },
  { icon: <Users size={20} className="text-brand-red" />, title: 'Dedicated Support', desc: 'A dedicated case manager guides you from the first document to final approval — every step.' },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1920&q=80"
            alt="Dubai skyline"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/60" />
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                'repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 80px),repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 80px)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block bg-brand-red/20 border border-brand-red/40 text-red-300 text-xs font-bold tracking-[3px] uppercase px-4 py-1.5 rounded-full mb-8">
              Your One-Stop Documentation Centre in Dubai
            </span>
            <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.05] mb-6">
              Your{' '}
              <em className="not-italic text-brand-red">Anchor</em>{' '}
              for Business Setup in the UAE
            </h1>
            <p className="text-blue-200/80 text-lg leading-relaxed mb-10 max-w-lg">
              From visa processing and passport renewal to company formation and PRO services — we handle every document so you can focus on building your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="bg-brand-red hover:bg-brand-red-dark text-white font-bold px-8 py-4 rounded transition-all hover:-translate-y-0.5 shadow-lg shadow-brand-red/30">
                Get Your Consultation
              </Link>
              <Link href="/services" className="border border-white/30 hover:border-white/70 hover:bg-white/5 text-white font-medium px-8 py-4 rounded transition-all flex items-center gap-2">
                Our Services <ChevronRight size={16} />
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 mt-14 pt-10 border-t border-white/10">
              {trustBadges.map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-2.5">
                  {icon}
                  <span className="text-white text-sm font-semibold">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <p className="text-blue-300/70 text-xs font-bold uppercase tracking-widest mb-5">What We Handle</p>
              <div className="grid grid-cols-2 gap-3">
                {services.slice(0, 8).map(({ icon, title }) => (
                  <div key={title} className="flex items-center gap-3 bg-white/5 hover:bg-white/10 rounded-lg px-3 py-2.5 transition-colors">
                    <span className="text-lg">{icon}</span>
                    <span className="text-white/80 text-xs font-medium leading-tight">{title}</span>
                  </div>
                ))}
              </div>
              <Link href="/services" className="mt-5 flex items-center justify-center gap-2 text-brand-red text-sm font-semibold hover:gap-3 transition-all">
                View all 11 services <ChevronRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-red text-xs font-bold uppercase tracking-[3px] mb-3">What We Do</p>
          <h2 className="font-display text-4xl lg:text-5xl text-navy mb-4">Complete Documentation Services</h2>
          <p className="text-slate-500 text-lg max-w-xl mb-14">All the document and business setup services you need — under one roof, handled by UAE-licensed professionals.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ icon, title, desc }) => (
              <div key={title} className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center text-2xl mb-5">{icon}</div>
                <h3 className="font-display text-lg text-navy mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ANCHOR POINT */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-brand-red text-xs font-bold uppercase tracking-[3px] mb-3">Why Anchor Point</p>
            <h2 className="font-display text-4xl lg:text-5xl text-navy mb-4">Built on Trust.<br />Driven by Results.</h2>
            <p className="text-slate-500 text-lg max-w-md mb-10">We help businesses and individuals navigate the UAE regulatory landscape with confidence, speed, and full transparency.</p>
            <div className="space-y-4">
              {whyPoints.map(({ icon, title, desc }) => (
                <div key={title} className="flex gap-4 p-5 border border-slate-200 rounded-xl hover:border-brand-red/30 transition-colors">
                  <div className="mt-0.5 shrink-0">{icon}</div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">{title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-navy rounded-2xl p-10 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-brand-red/10 rounded-full translate-x-16 translate-y-16" />
            <h3 className="font-display text-2xl text-white mb-8 relative z-10">Our Promise</h3>
            <div className="space-y-6 relative z-10">
              {[
                { title: 'No Hidden Fees', desc: 'Transparent pricing from the first consultation. What we quote is what you pay.' },
                { title: 'Real-Time Updates', desc: 'Track your application status at every step of the process.' },
                { title: 'Government Approved', desc: 'We work with all UAE government entities, ministries, and departments.' },
                { title: 'Multilingual Team', desc: 'Arabic, English, Urdu, Hindi — we speak your language.' },
              ].map(({ title, desc }) => (
                <div key={title} className="flex gap-4 items-start">
                  <div className="w-2 h-2 bg-brand-red rounded-full mt-2 shrink-0" />
                  <div>
                    <strong className="text-white text-sm block mb-0.5">{title}</strong>
                    <p className="text-blue-300/70 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="bg-slate-50 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 items-center">
          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-brand-red shrink-0" />
              <span className="text-slate-600 text-sm">Office 10, Block A-2 Floor M2, Nesto Bldg, Burj Nahar Mall, Al Muttena, Deira, Dubai</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-brand-red shrink-0" />
              <div className="text-slate-600 text-sm">
                <a href="tel:+971525264724" className="hover:text-brand-red transition-colors">+971 52 526 4724</a>
                {' · '}
                <a href="tel:+971525291312" className="hover:text-brand-red transition-colors">+971 52 529 1312</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-brand-red shrink-0" />
              <a href="mailto:ap.businesssetup@gmail.com" className="text-slate-600 text-sm hover:text-brand-red transition-colors">ap.businesssetup@gmail.com</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-4xl lg:text-5xl text-white mb-4">Ready to Get Started?</h2>
          <p className="text-blue-300/70 text-lg mb-8">Speak to one of our experts today. No commitment, just clear answers.</p>
          <Link href="/contact" className="inline-block bg-brand-red hover:bg-brand-red-dark text-white font-bold px-10 py-4 rounded transition-all hover:-translate-y-0.5 shadow-lg shadow-brand-red/30">
            Book Your Consultation →
          </Link>
        </div>
      </section>
    </>
  )
}

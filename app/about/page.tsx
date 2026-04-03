import Link from 'next/link'
import { Target, Eye, Award, Heart } from 'lucide-react'

export const metadata = { title: 'About Us | Anchor Point Business Setup' }

const values = [
  { icon: <Target size={20} className="text-brand-red" />, title: 'Our Mission', desc: 'To simplify business setup and documentation for every client in the UAE — with speed, transparency, and care.' },
  { icon: <Eye size={20} className="text-brand-red" />, title: 'Our Vision', desc: 'To be the most trusted and reliable documentation partner for businesses and individuals across the UAE.' },
  { icon: <Award size={20} className="text-brand-red" />, title: 'Integrity', desc: 'Honest advice, transparent pricing, and zero hidden costs — always.' },
  { icon: <Heart size={20} className="text-brand-red" />, title: 'Excellence', desc: 'We never settle for good enough. Every document, every client, every deadline matters.' },
]

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-red text-xs font-bold uppercase tracking-[3px] mb-3">Who We Are</p>
          <h1 className="font-display text-5xl lg:text-6xl text-white mb-6">About Anchor Point</h1>
          <p className="text-blue-300/70 text-xl max-w-2xl leading-relaxed">Your one-stop documentation and business setup centre in the heart of Deira, Dubai.</p>
        </div>
      </section>
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-brand-red text-xs font-bold uppercase tracking-[3px] mb-3">Our Story</p>
            <h2 className="font-display text-4xl text-navy mb-6">Built for Dubai. Built for You.</h2>
            <div className="space-y-4 text-slate-500 leading-relaxed">
              <p>Anchor Point Business Setup was founded with a singular mission: to remove the complexity from doing business in the UAE. We understand that navigating government regulations, documentation requirements, and bureaucratic processes can be overwhelming — especially in a fast-paced city like Dubai.</p>
              <p>Located in the heart of Deira, our office serves individuals, entrepreneurs, and companies of all sizes. Whether you need a simple document typed, a visa processed, or a full company formed — we handle it all under one roof.</p>
              <p>Our team of certified professionals is multilingual, government-trained, and dedicated to getting your documents right the first time, every time.</p>
            </div>
          </div>
          <div className="bg-navy rounded-2xl p-10 text-center relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-brand-red/10 rounded-full translate-x-12 translate-y-12" />
            <div className="text-6xl mb-4">⚓</div>
            <div className="font-display text-2xl text-white mb-2">Anchor Point</div>
            <div className="text-blue-300/60 text-sm mb-8">Business Setup & Documentation</div>
            <div className="grid grid-cols-2 gap-4 text-left relative z-10">
              {[
                { label: 'Location', value: 'Deira, Dubai' },
                { label: 'Services', value: '11+ Offered' },
                { label: 'Languages', value: 'Arabic, English, Urdu, Hindi' },
                { label: 'Hours', value: 'Mon–Sat, 8AM–8PM' },
              ].map(({ label, value }) => (
                <div key={label} className="bg-white/5 rounded-lg p-3">
                  <div className="text-blue-300/50 text-xs uppercase tracking-wider mb-1">{label}</div>
                  <div className="text-white text-sm font-semibold">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-red text-xs font-bold uppercase tracking-[3px] mb-3">What We Stand For</p>
          <h2 className="font-display text-4xl text-navy mb-12">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon, title, desc }) => (
              <div key={title} className="bg-white border border-slate-200 rounded-xl p-6 hover:border-brand-red/30 transition-colors">
                <div className="mb-4">{icon}</div>
                <h3 className="font-semibold text-navy mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-navy py-24 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-display text-4xl text-white mb-4">Let's Work Together</h2>
          <p className="text-blue-300/70 text-lg mb-8">Get in touch and see why clients trust Anchor Point.</p>
          <Link href="/contact" className="inline-block bg-brand-red hover:bg-brand-red-dark text-white font-bold px-10 py-4 rounded transition-all hover:-translate-y-0.5">Contact Us Today →</Link>
        </div>
      </section>
    </>
  )
}

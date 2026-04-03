import Link from 'next/link'

export const metadata = { title: 'Pricing | Anchor Point Business Setup' }

const plans = [
  { name: 'Starter', desc: 'For individuals with single document needs', price: 'AED 299', per: '/ service', featured: false, features: ['Single document processing', 'Basic typing & attestation', 'Standard turnaround (3–5 days)', 'Email & WhatsApp support', 'Document status updates'] },
  { name: 'Professional', desc: 'For full visa packages and business needs', price: 'AED 899', per: '/ package', featured: true, features: ['Up to 5 documents / services', 'Visa + Emirates ID processing', 'Priority turnaround (1–2 days)', 'Dedicated case manager', 'WhatsApp & phone support', 'Real-time status tracking'] },
  { name: 'Corporate', desc: 'Full business setup & ongoing PRO', price: 'Custom', per: '/ quote', featured: false, features: ['Unlimited documents', 'Company formation & licensing', 'Same-day urgent processing', 'Dedicated PRO officer', 'Monthly retainer option', 'On-site visits available', 'VIP client support'] },
]

export default function PricingPage() {
  return (
    <>
      <section className="bg-navy pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-red text-xs font-bold uppercase tracking-[3px] mb-3">Packages</p>
          <h1 className="font-display text-5xl lg:text-6xl text-white mb-6">Simple, Transparent Pricing</h1>
          <p className="text-blue-300/70 text-xl max-w-xl leading-relaxed">No hidden fees. Choose the package that fits your needs.</p>
        </div>
      </section>
      <section className="bg-navy py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {plans.map(({ name, desc, price, per, featured, features }) => (
            <div key={name} className={`rounded-2xl p-8 relative border transition-all ${featured ? 'bg-navy-light border-brand-red shadow-2xl shadow-brand-red/20 scale-105' : 'bg-navy-mid border-white/10'}`}>
              {featured && <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-red text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full">Most Popular</div>}
              <h3 className="font-display text-2xl text-white mb-1">{name}</h3>
              <p className="text-blue-300/60 text-sm mb-6">{desc}</p>
              <div className="font-display text-4xl text-white mb-1">{price} <span className="text-base text-slate-400 font-body">{per}</span></div>
              <ul className="space-y-3 my-8">
                {features.map((f) => (<li key={f} className="flex items-center gap-2.5 text-sm text-blue-200/70"><span className="text-brand-red font-bold">✓</span>{f}</li>))}
              </ul>
              <Link href="/contact" className={`block text-center py-3 rounded font-bold text-sm transition-all ${featured ? 'bg-brand-red hover:bg-brand-red-dark text-white' : 'border border-white/20 text-white hover:bg-white/5'}`}>
                {name === 'Corporate' ? 'Request Quote' : 'Get Started'}
              </Link>
            </div>
          ))}
        </div>
        <p className="text-center text-blue-300/40 text-sm mt-10">Government fees are not included. Final quote provided after consultation.</p>
      </section>
    </>
  )
}

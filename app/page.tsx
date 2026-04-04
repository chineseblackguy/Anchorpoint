import Link from 'next/link'

export const metadata = { title: 'Store | Anchor Point Business Setup' }

const packages = [
  { icon: '🛂', title: 'Visa Application Package', desc: 'Full visa processing including typing, Emirates ID, medical, and all government form guidance.', price: 'AED 599', note: '+ govt. fees' },
  { icon: '📝', title: 'Legal Translation (per page)', desc: 'Certified Arabic-English or English-Arabic translation accepted by all UAE courts and ministries.', price: 'AED 120', note: '/ page' },
  { icon: '🏢', title: 'Mainland Licence Setup', desc: 'Complete DED trade licence setup — name reservation, initial approval, and final licence issuance.', price: 'AED 1,999', note: '+ DED fees' },
  { icon: '🏛️', title: 'Monthly PRO Retainer', desc: 'Dedicated PRO officer for all your government document runs, submissions, and follow-ups.', price: 'AED 1,200', note: '/ month' },
  { icon: '✅', title: 'Document Attestation', desc: 'MOFA attestation, Ministry notarisation, and embassy legalisation for any document type.', price: 'AED 250', note: '/ document' },
  { icon: '🪪', title: 'Emirates ID Package', desc: 'Complete Emirates ID typing, submission, and follow-up including medical typing if needed.', price: 'AED 199', note: '+ ICA fees' },
  { icon: '🚔', title: 'Police Clearance Certificate', desc: 'Dubai Police good conduct and clearance certificate — typed, submitted, and collected.', price: 'AED 150', note: '+ police fees' },
  { icon: '💼', title: 'Corporate Setup Bundle', desc: 'Full company formation: licence, visa, bank account assistance, and 1-year PRO support.', price: 'Custom', note: 'quote' },
]

export default function StorePage() {
  return (
    <>
      <section className="bg-navy pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-red text-xs font-bold uppercase tracking-[3px] mb-3">Online Store</p>
          <h1 className="font-display text-5xl lg:text-6xl text-white mb-6">Service Packages</h1>
          <p className="text-blue-300/70 text-xl max-w-xl">Book your service package directly. We'll contact you within 2 hours to confirm.</p>
        </div>
      </section>
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {packages.map(({ icon, title, desc, price, note }) => (
            <div key={title} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="bg-navy h-36 flex items-center justify-center text-5xl">{icon}</div>
              <div className="p-5">
                <h3 className="font-display text-base text-navy mb-2">{title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-4">{desc}</p>
                <div className="font-display text-xl text-navy mb-4">{price} <span className="text-sm font-body text-slate-400">{note}</span></div>
                <Link href="/contact" className="block text-center bg-navy hover:bg-brand-red text-white text-sm font-bold py-2.5 rounded transition-colors">Book Now</Link>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-slate-400 text-sm mt-8">All prices exclude applicable UAE government fees. Contact us for a detailed quote.</p>
      </section>
    </>
  )
}

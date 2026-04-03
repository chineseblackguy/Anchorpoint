import Link from 'next/link'

export const metadata = { title: 'Services | Anchor Point Business Setup' }

const services = [
  { icon: '🏛️', title: 'DED Services', desc: 'Complete Dubai Economic Department services including trade licence applications, renewals, modifications, and cancellations.', items: ['Trade Licence Application', 'Licence Renewal', 'Activity Changes', 'Ownership Changes', 'Licence Cancellation'] },
  { icon: '🛂', title: 'All Visa Services', desc: 'All types of UAE visa processing — from initial application to renewal and cancellation.', items: ['Residence Visa', 'Employment Visa', 'Investor Visa', 'Family Sponsorship', 'Visit & Tourist Visa', 'Visa Renewal & Cancellation'] },
  { icon: '🛑', title: 'Passport Renewal Typing', desc: 'Fast and accurate passport renewal typing services for all nationalities.', items: ['Renewal Application Typing', 'Embassy Submission Guidance', 'All Nationalities Supported'] },
  { icon: '🏥', title: 'Medical Typing', desc: 'Medical fitness typing required for visa applications and Emirates ID processing.', items: ['Medical Fitness Forms', 'Visa Medical Typing', 'Emirates ID Medical Typing'] },
  { icon: '🪪', title: 'Emirates ID Typing', desc: 'New applications, renewals, and replacements for Emirates ID.', items: ['New Emirates ID Application', 'Emirates ID Renewal', 'Lost/Damaged ID Replacement', 'ICA Submission'] },
  { icon: '📋', title: 'Documents Clearance', desc: 'Fast and reliable clearance of all types of government and personal documents.', items: ['Labour Cards', 'Vehicle Registration', 'Health Insurance', 'Government Documents'] },
  { icon: '📝', title: 'Translation & Typing Services', desc: 'Certified Arabic-English and English-Arabic translation and official typing.', items: ['Legal Document Translation', 'Personal Certificate Translation', 'Commercial Document Translation', 'Official Typing Services'] },
  { icon: '📠', title: 'Photocopying Services', desc: 'High-quality photocopying and scanning for all your document needs.', items: ['Document Photocopying', 'Scanning & Digitisation', 'Large Format Copying'] },
  { icon: '✅', title: 'Document Attestation', desc: 'Official attestation of documents by MOFA, Ministry of Justice, and embassies.', items: ['MOFA Attestation', 'Ministry Notarisation', 'Embassy Legalisation', 'Educational Certificate Attestation'] },
  { icon: '🚔', title: 'Dubai Police Services', desc: 'All Dubai Police document services including clearance and good conduct certificates.', items: ['Police Clearance Certificate', 'Good Conduct Certificate', 'Security Reports'] },
  { icon: '🏢', title: 'Company Formation & PRO Services', desc: 'End-to-end company setup in UAE mainland and free zones, plus dedicated PRO officer services.', items: ['Mainland Company Formation', 'Free Zone Setup', 'Dedicated PRO Officer', 'Government Liaison', 'Monthly PRO Retainer'] },
]

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-red text-xs font-bold uppercase tracking-[3px] mb-3">What We Offer</p>
          <h1 className="font-display text-5xl lg:text-6xl text-white mb-6">Our Services</h1>
          <p className="text-blue-300/70 text-xl max-w-2xl leading-relaxed">11 professional documentation and business setup services — all at our Deira, Dubai office.</p>
        </div>
      </section>
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon, title, desc, items }) => (
              <div key={title} className="group bg-white border border-slate-200 rounded-xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center text-3xl mb-6">{icon}</div>
                <h3 className="font-display text-xl text-navy mb-3">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{desc}</p>
                <ul className="space-y-1.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 bg-brand-red rounded-full shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-navy py-24 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-display text-4xl text-white mb-4">Need a Specific Service?</h2>
          <p className="text-blue-300/70 text-lg mb-8">Contact us and we'll advise you on exactly what you need.</p>
          <Link href="/contact" className="inline-block bg-brand-red hover:bg-brand-red-dark text-white font-bold px-10 py-4 rounded transition-all hover:-translate-y-0.5">Talk to an Expert →</Link>
        </div>
      </section>
    </>
  )
}

export const metadata = { title: 'Blog | Anchor Point Business Setup' }

const posts = [
  { icon: '🛂', tag: 'Visa Updates', title: 'UAE Golden Visa 2025: Who Qualifies and How to Apply', excerpt: 'A complete guide to the UAE Golden Visa — eligibility criteria, required documents, and the step-by-step application process.', date: 'Jan 2025', read: '5 min' },
  { icon: '🏢', tag: 'Business Setup', title: 'Mainland vs Free Zone: Which is Right for Your Business?', excerpt: 'Key differences, costs, and advantages of UAE mainland and free zone company formation explained simply.', date: 'Dec 2024', read: '7 min' },
  { icon: '📝', tag: 'Legal', title: 'Document Attestation in UAE: The Complete 2025 Guide', excerpt: 'Everything you need to know about attesting documents — MOFA, Ministry of Justice, and embassy attestation explained.', date: 'Nov 2024', read: '6 min' },
  { icon: '🏛️', tag: 'PRO Services', title: 'What is a PRO and Why Does Your Business Need One?', excerpt: 'Understanding the role of a PRO officer in the UAE and how professional PRO services save time and money.', date: 'Oct 2024', read: '4 min' },
  { icon: '🪪', tag: 'Emirates ID', title: 'Emirates ID Renewal: Step-by-Step Process for 2025', excerpt: 'A simple guide to renewing your Emirates ID — deadlines, fees, and required documents explained clearly.', date: 'Sep 2024', read: '3 min' },
  { icon: '💼', tag: 'Business', title: '5 Common Mistakes When Setting Up a Business in Dubai', excerpt: 'Avoid these costly errors that many first-time entrepreneurs make when launching their business in the UAE.', date: 'Aug 2024', read: '5 min' },
]

export default function BlogPage() {
  return (
    <>
      <section className="bg-navy pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-red text-xs font-bold uppercase tracking-[3px] mb-3">Insights</p>
          <h1 className="font-display text-5xl lg:text-6xl text-white mb-6">Latest Articles</h1>
          <p className="text-blue-300/70 text-xl max-w-xl">UAE business regulations, visa changes, and documentation tips.</p>
        </div>
      </section>
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(({ icon, tag, title, excerpt, date, read }) => (
            <div key={title} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer">
              <div className="bg-navy h-44 flex items-center justify-center text-5xl">{icon}</div>
              <div className="p-6">
                <span className="text-brand-red text-xs font-bold uppercase tracking-wider">{tag}</span>
                <h3 className="font-display text-lg text-navy mt-2 mb-3 leading-snug">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{excerpt}</p>
                <span className="text-slate-400 text-xs">{date} · {read} read</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

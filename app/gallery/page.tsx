export const metadata = { title: 'Gallery | Anchor Point Business Setup' }

const items = [
  { icon: '🏢', label: 'Our Dubai Office', span: 2 },
  { icon: '📄', label: 'Document Services', span: 1 },
  { icon: '🤝', label: 'Client Consultations', span: 1 },
  { icon: '🏛️', label: 'Government Offices', span: 1 },
  { icon: '🇦🇪', label: 'UAE Business Setup', span: 2 },
  { icon: '✅', label: 'Completed Cases', span: 1 },
  { icon: '💼', label: 'Corporate Services', span: 1 },
]

export default function GalleryPage() {
  return (
    <>
      <section className="bg-navy pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-red text-xs font-bold uppercase tracking-[3px] mb-3">Our Work</p>
          <h1 className="font-display text-5xl lg:text-6xl text-white mb-6">Gallery</h1>
          <p className="text-blue-300/70 text-xl max-w-xl">A look at our office, team, and the work we do every day for clients across the UAE.</p>
        </div>
      </section>
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-4">
            {items.map(({ icon, label, span }) => (
              <div key={label} style={{ gridColumn: `span ${span}` }} className="bg-navy rounded-xl aspect-video flex flex-col items-center justify-center gap-3 hover:scale-[1.02] transition-transform cursor-pointer">
                <span className="text-4xl">{icon}</span>
                <span className="text-white/50 text-xs uppercase tracking-widest">{label}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400 text-sm mt-8">📸 Replace placeholders with your real office and team photos</p>
        </div>
      </section>
    </>
  )
}

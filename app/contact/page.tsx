'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react'

const services = ['DED Services','All Visa Services','Passport Renewal Typing','Medical Typing','Emirates ID Typing','Documents Clearance','Translation & Typing','Photocopying Services','Document Attestation','Dubai Police Services','Company Formation & PRO','Other']

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  return (
    <>
      <section className="bg-navy pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-red text-xs font-bold uppercase tracking-[3px] mb-3">Get In Touch</p>
          <h1 className="font-display text-5xl lg:text-6xl text-white mb-6">Contact Us</h1>
          <p className="text-blue-300/70 text-xl max-w-xl leading-relaxed">Visit us in Deira, call us, or fill in the form — we'll get back to you promptly.</p>
        </div>
      </section>
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl text-navy mb-6">We're Here to Help</h2>
            <p className="text-slate-500 leading-relaxed mb-8">Whether you have a question about our services or want to get started — our team is ready to assist you.</p>
            <div className="space-y-5">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center shrink-0"><MapPin size={16} className="text-brand-red" /></div>
                <div><strong className="text-navy text-sm block mb-0.5">Our Office</strong><span className="text-slate-500 text-sm leading-relaxed">Office 10, Block A-2, Floor M2<br />Nesto Bldg, Burj Nahar Mall<br />Al Muttena, Deira, Dubai</span></div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center shrink-0"><Phone size={16} className="text-brand-red" /></div>
                <div><strong className="text-navy text-sm block mb-0.5">Phone / WhatsApp</strong><a href="tel:+971525264724" className="text-slate-500 text-sm hover:text-brand-red transition-colors block">+971 52 526 4724</a><a href="tel:+971525291312" className="text-slate-500 text-sm hover:text-brand-red transition-colors block">+971 52 529 1312</a></div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center shrink-0"><Mail size={16} className="text-brand-red" /></div>
                <div><strong className="text-navy text-sm block mb-0.5">Email</strong><a href="mailto:ap.businesssetup@gmail.com" className="text-slate-500 text-sm hover:text-brand-red transition-colors">ap.businesssetup@gmail.com</a></div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center shrink-0"><Clock size={16} className="text-brand-red" /></div>
                <div><strong className="text-navy text-sm block mb-0.5">Working Hours</strong><span className="text-slate-500 text-sm">Monday – Saturday: 8:00 AM – 8:00 PM</span></div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 bg-white border border-slate-200 rounded-2xl p-8">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <CheckCircle size={56} className="text-green-500 mb-4" />
                <h3 className="font-display text-2xl text-navy mb-2">Message Sent!</h3>
                <p className="text-slate-500">Thank you! One of our team members will contact you within a few hours.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div><label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">First Name</label><input required type="text" placeholder="Ahmed" className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm outline-none focus:border-navy transition-colors" /></div>
                  <div><label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">Last Name</label><input type="text" placeholder="Al Rashid" className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm outline-none focus:border-navy transition-colors" /></div>
                </div>
                <div><label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">Email Address</label><input required type="email" placeholder="you@email.com" className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm outline-none focus:border-navy transition-colors" /></div>
                <div><label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">Phone / WhatsApp</label><input type="tel" placeholder="+971 50 000 0000" className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm outline-none focus:border-navy transition-colors" /></div>
                <div><label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">Service Needed</label>
                  <select required className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm outline-none focus:border-navy transition-colors bg-white text-slate-600">
                    <option value="">Select a service...</option>
                    {services.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div><label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">Message</label><textarea rows={4} placeholder="Tell us more about what you need..." className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm outline-none focus:border-navy transition-colors resize-none" /></div>
                <button type="submit" className="w-full bg-brand-red hover:bg-brand-red-dark text-white font-bold py-4 rounded-lg transition-all hover:-translate-y-0.5">Send Message →</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

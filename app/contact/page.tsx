'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <main className="bg-white text-slate-900 min-h-screen flex flex-col">
      <Navbar activePage="contact" />

      {/* HERO HEADER */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#007CAF]/5 via-transparent to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <p className="text-[#007CAF] text-xs font-bold tracking-[0.3em] uppercase mb-4 opacity-0 animate-[fadeUp_0.8s_ease_0.2s_forwards]">
            Get In Touch
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase leading-none mb-6 opacity-0 animate-[fadeUp_0.8s_ease_0.4s_forwards]">
            More <span className="text-[#007CAF]">Info</span>
          </h1>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto opacity-0 animate-[fadeUp_0.8s_ease_0.6s_forwards]">
            Submit this form to receive more information about memberships, gym facilities, and special offers. We will never sell, rent, or share your information.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-12 px-4 flex-grow relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* CONTACT INFO PANEL */}
          <div className="lg:col-span-2 space-y-8 opacity-0 animate-[fadeUp_0.8s_ease_0.7s_forwards]">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold uppercase mb-6 text-[#007CAF]">Contact Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#007CAF]/20 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#007CAF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Location</h4>
                    <p className="text-sm text-slate-700">6527 Skyline Dr. Building C<br />Fulshear, TX 77441</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#007CAF]/20 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#007CAF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.273-3.973-6.869-6.869l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Phone</h4>
                    <a href="tel:3465532726" className="text-sm text-slate-700 hover:text-[#007CAF] transition-colors">346-553-ARCO (2726)</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#007CAF]/20 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#007CAF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Email</h4>
                    <a href="mailto:info@arcofitgym.com" className="text-sm text-slate-700 hover:text-[#007CAF] transition-colors">info@arcofitgym.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold uppercase mb-4 text-[#007CAF]">Club Hours</h3>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex justify-between border-b border-slate-100 pb-2"><span>Mon - Thu</span> <span className="text-slate-900 font-medium">4:00 AM - 11:00 PM</span></li>
                <li className="flex justify-between border-b border-slate-100 pb-2"><span>Friday</span> <span className="text-slate-900 font-medium">4:00 AM - 9:00 PM</span></li>
                <li className="flex justify-between border-b border-slate-100 pb-2"><span>Saturday</span> <span className="text-slate-900 font-medium">6:00 AM - 9:00 PM</span></li>
                <li className="flex justify-between"><span>Sunday</span> <span className="text-slate-900 font-medium">7:00 AM - 8:00 PM</span></li>
              </ul>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="lg:col-span-3 opacity-0 animate-[fadeUp_0.8s_ease_0.8s_forwards]">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10 relative overflow-hidden h-full">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#007CAF] to-transparent" />
              
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center space-y-4 animate-in fade-in duration-700">
                  <div className="w-20 h-20 rounded-full bg-[#007CAF]/20 flex items-center justify-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#007CAF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black uppercase">Message Sent!</h3>
                  <p className="text-slate-600">Thank you for reaching out. A member of our team will get back to you shortly.</p>
                  <button onClick={() => setIsSubmitted(false)} className="mt-6 border border-slate-300 hover:border-[#007CAF] hover:text-[#007CAF] text-slate-700 font-bold px-8 py-3 rounded transition-all tracking-wider uppercase text-xs">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="block text-xs font-bold uppercase tracking-wider text-slate-500">First Name *</label>
                      <input required type="text" id="firstName" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-[#007CAF] focus:ring-1 focus:ring-[#007CAF] transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="block text-xs font-bold uppercase tracking-wider text-slate-500">Last Name *</label>
                      <input required type="text" id="lastName" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-[#007CAF] focus:ring-1 focus:ring-[#007CAF] transition-all" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-500">Email Address *</label>
                      <input required type="email" id="email" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-[#007CAF] focus:ring-1 focus:ring-[#007CAF] transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-500">Phone Number</label>
                      <input type="tel" id="phone" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-[#007CAF] focus:ring-1 focus:ring-[#007CAF] transition-all" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="interest" className="block text-xs font-bold uppercase tracking-wider text-white/50">I am interested in...</label>
                    <select id="interest" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-[#007CAF] focus:ring-1 focus:ring-[#007CAF] transition-all appearance-none">
                      <option value="">Please select an option</option>
                      <option value="tour">Scheduling a Tour</option>
                      <option value="membership">Membership Options</option>
                      <option value="personal-training">Personal Training</option>
                      <option value="pilates">Reformer Pilates</option>
                      <option value="group-fitness">Group Fitness</option>
                      <option value="other">Other / General Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-white/50">Message / Questions</label>
                    <textarea id="message" rows={4} className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-[#007CAF] focus:ring-1 focus:ring-[#007CAF] transition-all resize-y"></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full bg-[#007CAF] hover:brightness-110 text-white font-bold px-8 py-4 rounded-lg transition-all tracking-wider uppercase text-sm mt-4 flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-1'}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : 'Submit Inquiry'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

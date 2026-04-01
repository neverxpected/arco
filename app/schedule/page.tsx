'use client';

import { useEffect, useRef } from 'react';
import Footer from '../components/Footer';

export default function SchedulePage() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('animate-in'); }); },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <main className="bg-black text-white min-h-screen">
      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="text-xl font-black tracking-tight"><span className="text-white">ARCO</span><span className="text-[#0096C7]">FIT</span></a>
          <div className="hidden md:flex items-center gap-6 text-xs font-medium tracking-widest uppercase text-white/70">
            <a href="/" className="hover:text-[#0096C7] transition-colors">Home</a>
            <div className="relative group">
              <a href="/group-fitness" className="hover:text-[#0096C7] transition-colors flex items-center gap-1">Group Fitness<svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg></a>
              <div className="absolute top-full left-0 mt-2 w-48 bg-black/95 backdrop-blur-md border border-white/10 rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                <a href="/group-fitness" className="block px-4 py-2 text-white/60 hover:text-[#0096C7] hover:bg-white/5 transition-colors normal-case tracking-normal text-xs">Group Fitness</a>
                <a href="/reformer-pilates" className="block px-4 py-2 text-white/60 hover:text-[#0096C7] hover:bg-white/5 transition-colors normal-case tracking-normal text-xs">Reformer Pilates</a>
                <a href="/yoga-teacher-training" className="block px-4 py-2 text-white/60 hover:text-[#0096C7] hover:bg-white/5 transition-colors normal-case tracking-normal text-xs">Yoga Teacher Training</a>
                <a href="/schedule" className="block px-4 py-2 text-[#0096C7] hover:bg-white/5 transition-colors normal-case tracking-normal text-xs">Schedule</a>
              </div>
            </div>
            <a href="/amenities" className="hover:text-[#0096C7] transition-colors">Amenities</a>
            <a href="https://arcofitgym.clubautomation.com/member-portal/locations/1/memberships" target="_blank" rel="noopener noreferrer" className="hover:text-[#0096C7] transition-colors">Membership</a>
            <a href="/about-us" className="hover:text-[#0096C7] transition-colors">About</a>
            <a href="/events" className="hover:text-[#0096C7] transition-colors">Events</a>
          </div>
          <a href="tel:3465532726" className="bg-[#0096C7] hover:bg-[#0077A8] text-white text-xs font-bold px-4 py-2 rounded transition-colors tracking-wider">346-553-ARCO</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-32 pb-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0096C7]/10 via-transparent to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <p className="text-[#0096C7] text-xs font-bold tracking-[0.3em] uppercase mb-4 opacity-0 animate-[fadeUp_0.8s_ease_0.2s_forwards]">Group Fitness</p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase leading-none mb-6 opacity-0 animate-[fadeUp_0.8s_ease_0.4s_forwards]">
            Class <span className="text-[#0096C7]">Schedule</span>
          </h1>
          <p className="text-white/50 text-sm sm:text-base max-w-2xl mx-auto opacity-0 animate-[fadeUp_0.8s_ease_0.6s_forwards]">
            View our live class schedule and book your spot. Classes fill up fast — reserve yours today.
          </p>
        </div>
      </section>

      {/* EMBEDDED SCHEDULE */}
      <section className="px-4 pb-8">
        <div className="max-w-7xl mx-auto reveal opacity-0 translate-y-8 transition-all duration-700">
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden">
            <iframe
              src="https://arcofitgym.clubautomation.com/event-calendar"
              className="w-full border-0 bg-white rounded-2xl"
              style={{ minHeight: '800px' }}
              title="Arco Fit Class Schedule"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* QUICK INFO */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: '📱', title: 'Book via App', desc: 'Download the Arco Fit app to book classes, manage your schedule, and check-in on the go.' },
            { icon: '⏰', title: 'Cancel Policy', desc: 'Please cancel at least 2 hours in advance to allow others to take your spot.' },
            { icon: '🏋️', title: 'All Levels Welcome', desc: 'Our classes are designed for all fitness levels. Modifications always available.' },
          ].map((item, i) => (
            <div key={i} className="reveal opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 text-center h-full">
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="font-bold text-sm uppercase tracking-wider mb-2">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="reveal opacity-0 translate-y-8 transition-all duration-700 py-16 px-4 bg-[#0A0A0A] border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-black uppercase mb-4">Need <span className="text-[#0096C7]">Help?</span></h2>
          <p className="text-white/50 text-sm sm:text-base mb-8 max-w-lg mx-auto">Not sure which class is right for you? Check out our full class descriptions or contact us.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/group-fitness" className="bg-[#0096C7] hover:bg-[#0077A8] text-white font-bold px-8 py-3 rounded transition-all hover:scale-105 tracking-wider uppercase text-xs">View Classes</a>
            <a href="tel:3465532726" className="border border-white/20 hover:border-white/40 text-white font-bold px-8 py-3 rounded transition-all hover:scale-105 tracking-wider uppercase text-xs">Call Us</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

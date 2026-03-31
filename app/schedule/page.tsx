'use client';

import { useEffect, useRef } from 'react';

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
            <a href="#" className="hover:text-[#0096C7] transition-colors">Membership</a>
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

      {/* FOOTER */}
      <footer className="bg-[#0A0A0A] border-t border-white/10 py-14 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div><div className="text-xl font-black mb-4"><span className="text-white">ARCO</span><span className="text-[#0096C7]">FIT</span></div><p className="text-white/40 text-sm leading-relaxed">27,000 square feet of science-based fitness.</p><p className="text-white/40 text-sm mt-4">6527 Skyline Dr.<br />Building C<br />Fulshear, TX 77441</p></div>
          <div><h4 className="text-xs font-bold tracking-widest uppercase text-white/60 mb-4">Navigation</h4><ul className="space-y-2 text-sm text-white/40">{['Home','Group Fitness','Amenities','About Us','Events'].map(i=><li key={i}><a href={i==='Home'?'/':'/'+i.toLowerCase().replace(/ /g,'-')} className="hover:text-[#0096C7] transition-colors">{i}</a></li>)}</ul></div>
          <div><h4 className="text-xs font-bold tracking-widest uppercase text-white/60 mb-4">Club Hours</h4><ul className="space-y-2 text-sm text-white/40"><li>Mon-Thu: 4am-11pm</li><li>Friday: 4am-9pm</li><li>Saturday: 6am-9pm</li><li>Sunday: 7am-8pm</li></ul></div>
          <div><h4 className="text-xs font-bold tracking-widest uppercase text-white/60 mb-4">Connect</h4><div className="flex gap-3"><a href="https://www.facebook.com/share/mxxSnexwQjHehWGr/?mibextid=WC7FNe" target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-white/20 rounded-lg flex items-center justify-center hover:border-[#0096C7] hover:text-[#0096C7] transition-colors text-white/70"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a><a href="https://www.instagram.com/arcofitgym" target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-white/20 rounded-lg flex items-center justify-center hover:border-[#0096C7] hover:text-[#0096C7] transition-colors text-white/70"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a></div><div className="mt-6"><a href="tel:3465532726" className="text-[#0096C7] font-bold text-base hover:text-white transition-colors">346-553-ARCO</a><p className="text-white/40 text-sm mt-1">info@arcofitgym.com</p></div></div>
        </div>
        <div className="max-w-7xl mx-auto mt-10 pt-8 border-t border-white/10 text-center text-white/20 text-xs">Copyright 2026 Arco Fit Gym & Wellness</div>
      </footer>
    </main>
  );
}

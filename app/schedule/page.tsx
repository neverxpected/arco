'use client';

import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
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
    <main className="bg-white text-slate-900 min-h-screen">
      <Navbar activePage="schedule" />

      {/* HERO */}
      <section className="relative pt-32 pb-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#007CAF]/5 via-transparent to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <p className="text-[#007CAF] text-xs font-bold tracking-[0.3em] uppercase mb-4 opacity-0 animate-[fadeUp_0.8s_ease_0.2s_forwards]">Group Fitness</p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase leading-none mb-6 opacity-0 animate-[fadeUp_0.8s_ease_0.4s_forwards]">
            Class <span className="text-[#007CAF]">Schedule</span>
          </h1>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto opacity-0 animate-[fadeUp_0.8s_ease_0.6s_forwards]">
            View our live class schedule and book your spot. Classes fill up fast — reserve yours today.
          </p>
        </div>
      </section>

      {/* EMBEDDED SCHEDULE */}
      <section className="px-4 pb-8">
        <div className="max-w-7xl mx-auto reveal opacity-0 translate-y-8 transition-all duration-700">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden">
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
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center h-full">
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="font-bold text-sm uppercase tracking-wider mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="reveal opacity-0 translate-y-8 transition-all duration-700 py-16 px-4 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-black uppercase mb-4">Need <span className="text-[#007CAF]">Help?</span></h2>
          <p className="text-slate-500 text-sm sm:text-base mb-8 max-w-lg mx-auto">Not sure which class is right for you? Check out our full class descriptions or contact us.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/group-fitness" className="bg-[#007CAF] hover:brightness-110 text-white font-bold px-8 py-3 rounded transition-all hover:scale-105 tracking-wider uppercase text-xs">View Classes</a>
            <a href="tel:3465532726" className="border-2 border-[#007CAF] bg-transparent hover:bg-[#007CAF]/10 text-[#007CAF] font-bold px-8 py-3 rounded transition-all hover:scale-105 tracking-wider uppercase text-xs">Call Us</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

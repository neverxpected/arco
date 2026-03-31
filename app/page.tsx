'use client';

import { useEffect, useRef } from 'react';

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll('.reveal').forEach((el) => {
      observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <main className="bg-black text-white">

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-xl font-black tracking-tight">
            <span className="text-white">ARCO</span>
            <span className="text-[#0096C7]">FIT</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-xs font-medium tracking-widest uppercase text-white/70">
            <a href="#" className="hover:text-[#0096C7] transition-colors">Home</a>
            <a href="#" className="hover:text-[#0096C7] transition-colors">Group Fitness</a>
            <a href="#" className="hover:text-[#0096C7] transition-colors">Amenities</a>
            <a href="#" className="hover:text-[#0096C7] transition-colors">Membership</a>
            <a href="#" className="hover:text-[#0096C7] transition-colors">About</a>
            <a href="#" className="hover:text-[#0096C7] transition-colors">Events</a>
          </div>
          <a href="tel:3465532726" className="bg-[#0096C7] hover:bg-[#0077A8] text-white text-xs font-bold px-4 py-2 rounded transition-colors tracking-wider">
            346-553-ARCO
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://arcofitgym.com/wp-content/uploads/2025/04/dji_fly_20250413_194721_0_1744591641994_photo_low_qualitya.jpg?id=2071')` }}
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto pt-20">
          <p className="text-[#0096C7] text-xs font-bold tracking-[0.3em] uppercase mb-4 opacity-0 animate-[fadeUp_0.8s_ease_0.2s_forwards]">
            Fulshear, Texas
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-none mb-6 opacity-0 animate-[fadeUp_0.8s_ease_0.4s_forwards]">
            Fitness<br />
            <span className="text-[#0096C7]">By Design.</span>
          </h1>
          <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-8 opacity-0 animate-[fadeUp_0.8s_ease_0.6s_forwards]">
            Science-based wellness, an inspiring community, and the highest-quality equipment at our 27,000 square-foot facility.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 opacity-0 animate-[fadeUp_0.8s_ease_0.8s_forwards]">
            <a href="#" className="bg-[#0096C7] hover:bg-[#0077A8] text-white font-bold px-6 py-3 rounded transition-all hover:scale-105 tracking-wider uppercase text-xs">
              Membership Options
            </a>
            <a href="#" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-6 py-3 rounded transition-all hover:scale-105 tracking-wider uppercase text-xs">
              Schedule a Tour
            </a>
            <a href="#" className="border border-[#0096C7] text-[#0096C7] hover:bg-[#0096C7] hover:text-white font-bold px-6 py-3 rounded transition-all hover:scale-105 tracking-wider uppercase text-xs">
              Floor Plan
            </a>
            <a href="#" className="border border-white/30 text-white/70 hover:border-white hover:text-white font-bold px-6 py-3 rounded transition-all hover:scale-105 tracking-wider uppercase text-xs">
              1-Day Pass
            </a>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="bg-[#0A0A0A] border-b border-white/10 py-14">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-10">
          {[
            {
              label: 'Community',
              desc: 'Working to achieve your goals together.',
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto mb-4 text-[#0096C7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              ),
            },
            {
              label: 'Science',
              desc: 'A safer, more effective path to wellness.',
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto mb-4 text-[#0096C7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714a2.25 2.25 0 0 0 .659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M5 14.5l-.938 2.813c-.293.879.3 1.687 1.188 1.687h13.5c.888 0 1.48-.808 1.188-1.687L19 14.5m-14 0h14" />
                </svg>
              ),
            },
            {
              label: 'Results',
              desc: 'The best equipment for optimal results.',
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto mb-4 text-[#0096C7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-4.5A3.375 3.375 0 0 0 13.125 10.875h-.375m3.75 7.875v-4.5a3.375 3.375 0 0 0-3.375-3.375h-.375m0 0V6.219c0-.297.118-.583.33-.793l2.83-2.83a.374.374 0 0 0-.528-.528L12 4.875l-2.757-2.807a.374.374 0 0 0-.528.528l2.83 2.83c.211.21.33.496.33.793V10.5m0 0h-.375A3.375 3.375 0 0 0 7.5 13.875v4.875" />
                </svg>
              ),
            },
          ].map((item, i) => (
            <div key={i} className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center" style={{ transitionDelay: `${i * 150}ms` }}>
              {item.icon}
              <h3 className="text-base font-black uppercase tracking-widest mb-2">{item.label}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="reveal opacity-0 translate-y-8 transition-all duration-700 py-16 px-4 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight mb-3">
          Have Questions? We'd Love to Answer Them
        </h2>
        <p className="text-[#0096C7] font-bold text-sm sm:text-base tracking-wider uppercase">
          Give You a Tour of Arco Fit! Please Stop In!
        </p>
      </section>

      {/* SCIENCE SECTION */}
      <section className="bg-[#0A0A0A] py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <p className="text-[#0096C7] text-xs font-bold tracking-[0.3em] uppercase mb-4">The Arco Fit Way</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-tight mb-6">
              A Science-Based<br />Approach to<br />
              <span className="text-[#0096C7]">Wellness</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-8 text-sm sm:text-base">
              We strive to provide a learning environment run by experienced and successful coaches. Our most important goal is to create a welcoming atmosphere and community in which everyone feels a sense of belonging.
            </p>
            <a href="#" className="bg-[#0096C7] hover:bg-[#0077A8] text-white font-bold px-8 py-3 rounded transition-all hover:scale-105 tracking-wider uppercase text-xs inline-block">
              Membership Options
            </a>
          </div>
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <div className="aspect-video bg-white/5 rounded-xl border border-white/10 overflow-hidden">
              <iframe
                className="w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/lMdZ21jYQpU"
                title="Arco Fit"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center mb-12">
            <p className="text-[#0096C7] text-xs font-bold tracking-[0.3em] uppercase mb-3">Founded on Experience</p>
            <h2 className="text-3xl sm:text-4xl font-black uppercase">Leadership Team</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Alli Vasquez', title: 'General Manager', image: 'https://arcofitgym.com/wp-content/uploads/2025/02/Alli-Vasquez.jpg' },
              { name: 'Jeremy Koger', title: 'Founder', image: 'https://arcofitgym.com/wp-content/uploads/2025/02/Jeremy-Koger.jpg' },
              { name: 'Matt Caldwell', title: 'Founder', image: 'https://arcofitgym.com/wp-content/uploads/2025/02/Matt-Caldwell.jpg' },
              { name: 'Jason McCourt', title: 'Founder', image: 'https://arcofitgym.com/wp-content/uploads/2025/02/Jason-McCourt.jpg' },
            ].map((person, i) => (
              <div key={i} className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center group" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="w-full aspect-square bg-white/5 rounded-xl border border-white/10 mb-4 group-hover:border-[#0096C7]/50 transition-colors overflow-hidden">
                  <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-xs sm:text-sm uppercase tracking-wider">{person.name}</h3>
                <p className="text-white/40 text-xs mt-1">{person.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A0A0A] border-t border-white/10 py-14 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <div className="text-xl font-black mb-4">
              <span className="text-white">ARCO</span><span className="text-[#0096C7]">FIT</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">27,000 square feet of science-based fitness. Personal training, group fitness, Yoga, Reformer Pilates available.</p>
            <p className="text-white/40 text-sm mt-4">6527 Skyline Dr.<br />Building C<br />Fulshear, TX 77441</p>
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/60 mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-white/40">
              {['Home', 'Group Fitness', 'Amenities', 'Membership Options', 'About Us', 'Careers', 'Contact Us', 'Privacy Policy', 'Staff Portal'].map((item) => (
                <li key={item}><a href="#" className="hover:text-[#0096C7] transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/60 mb-4">Club Hours</h4>
            <ul className="space-y-2 text-sm text-white/40">
              <li>Mon - Thu: 4am - 11pm</li>
              <li>Friday: 4am - 9pm</li>
              <li>Saturday: 6am - 9pm</li>
              <li>Sunday: 7am - 8pm</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/60 mb-4">Connect</h4>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 border border-white/20 rounded-lg flex items-center justify-center hover:border-[#0096C7] hover:text-[#0096C7] transition-colors text-xs font-bold">f</a>
              <a href="#" className="w-9 h-9 border border-white/20 rounded-lg flex items-center justify-center hover:border-[#0096C7] hover:text-[#0096C7] transition-colors text-xs font-bold">ig</a>
            </div>
            <div className="mt-6">
              <a href="tel:3465532726" className="text-[#0096C7] font-bold text-base hover:text-white transition-colors">346-553-ARCO</a>
              <p className="text-white/40 text-sm mt-1">info@arcofitgym.com</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-10 pt-8 border-t border-white/10 text-center text-white/20 text-xs">
          Copyright 2026 Arco Fit Gym & Wellness
        </div>
      </footer>

    </main>
  );
}
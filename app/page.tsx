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
          style={{ backgroundImage: `url('https://arcofitgym.com/wp-content/uploads/2023/01/arco-fit-gym-hero.jpg')` }}
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto pt-20">
          <p className="text-[#0096C7] text-xs font-bold tracking-[0.3em] uppercase mb-4 opacity-0 animate-[fadeUp_0.8s_ease_0.2s_forwards]">
            Parkway, Texas
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
            { label: 'Community', desc: 'Working to achieve your goals together.' },
            { label: 'Science', desc: 'A safer, more effective path to wellness.' },
            { label: 'Results', desc: 'The best equipment for optimal results.' },
          ].map((item, i) => (
            <div key={i} className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center" style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="w-10 h-1 bg-[#0096C7] mx-auto mb-4 rounded" />
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
                src="https://www.youtube.com/embed/your-video-id"
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
              { name: 'Alli Vasquez', title: 'General Manager' },
              { name: 'Jeremy Koger', title: 'Founder' },
              { name: 'Matt Caldwell', title: 'Founder' },
              { name: 'Jason McCourt', title: 'Founder' },
            ].map((person, i) => (
              <div key={i} className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center group" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="w-full aspect-square bg-white/5 rounded-xl border border-white/10 mb-4 group-hover:border-[#0096C7]/50 transition-colors" />
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
            <p className="text-white/40 text-sm mt-4">6827 Hightech Dr, Building C<br />Parkway, TX 77084</p>
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
          Copyright 2024 Arco Fit Gym & Wellness
        </div>
      </footer>

    </main>
  );
}
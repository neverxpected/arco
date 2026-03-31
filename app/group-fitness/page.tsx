'use client';

import { useEffect, useRef, useState } from 'react';

type ClassCategory = 'All' | 'Strength' | 'HIIT' | 'Yoga' | 'Pilates' | 'Dance' | 'Conditioning';

interface FitnessClass {
  name: string;
  category: ClassCategory;
  description: string;
  icon: string;
}

const classes: FitnessClass[] = [
  {
    name: 'Build Core',
    category: 'Strength',
    description: 'Core strength is foundational — not just for performance, but for posture, balance, and longevity. A minimalist approach to maximum impact, targeting deep stabilizers and functional strength.',
    icon: '🎯',
  },
  {
    name: 'Build Lower',
    category: 'Strength',
    description: 'A lower-body strength class focused on intentional movement, clean form, and progressive overload targeting glutes, hamstrings, quads, and hips. Foundational doesn\'t mean easy — it means efficient, targeted, and smart.',
    icon: '🦵',
  },
  {
    name: 'Build Total Body',
    category: 'Strength',
    description: 'A full-body strength training experience rooted in mindful movement and intelligent design. Each class is structured around four blocks, targeting foundational movement patterns that strengthen, stabilize, and support the body.',
    icon: '💪',
  },
  {
    name: 'Build Upper',
    category: 'Strength',
    description: 'A focused strength experience designed to refine and empower the upper body. Each class flows through three progressive blocks — Basic, Compound, and Power — targeting shoulders, chest, back, and arms.',
    icon: '🏋️',
  },
  {
    name: 'Xtreme45',
    category: 'HIIT',
    description: 'A high-intensity HIIT Circuit or MetCon style workout that turns up the heat in just 45 minutes. Build strength, endurance, and improve your overall fitness with a blend of cardio, strength, and functional training.',
    icon: '🔥',
  },
  {
    name: 'The Sweat Theory',
    category: 'HIIT',
    description: 'A minimalist, intentional HIIT experience built around the science of effort and recovery. 30-minute bodyweight-only class using simple, functional movement patterns. Rooted in science. Designed with purpose.',
    icon: '💧',
  },
  {
    name: 'The P.E.A.K Method',
    category: 'Pilates',
    description: 'Uses yoga and Pilates inspired exercises through four progressive phases: Peaceful Movement, Energizing Flow, Alignment & Activation and Kinetic Power. Each phase builds upon the last, emphasizing breath control and strength.',
    icon: '⛰️',
  },
  {
    name: 'FUSE "Warm Pilates"',
    category: 'Pilates',
    description: 'A "warm" full-body Pilates class blending resistance and intensity to challenge strength, endurance, and control. With energizing cardio bursts, each session elevates your stamina and cultivates resilience.',
    icon: '🌡️',
  },
  {
    name: 'Yin Yoga',
    category: 'Yoga',
    description: 'Unwind and relax in this calming class. Hold soothing postures for several minutes to increase flexibility, release tension, and target connective tissues and fascia for deeper relaxation.',
    icon: '🧘',
  },
  {
    name: 'Fit Flow Yoga',
    category: 'Yoga',
    description: 'A slow-paced Vinyasa Flow connecting body and breath. Start with grounding breathwork, then move through gentle poses that build strength and flexibility. Perfect for all levels.',
    icon: '🌊',
  },
  {
    name: 'Ashtanga Yoga',
    category: 'Yoga',
    description: 'Follow a precise sequence of poses synchronized with breath. This vigorous practice builds strength, flexibility, and stamina while enhancing focus and discipline through increasingly challenging postures.',
    icon: '🔱',
  },
  {
    name: 'Slow Flow Yoga',
    category: 'Yoga',
    description: 'A slower-paced Vinyasa-style class with guided postures and time to explore each pose through deep, controlled breathing. The perfect class to deepen your practice and simply slow down.',
    icon: '🍃',
  },
  {
    name: 'Pilates Flow',
    category: 'Pilates',
    description: 'A fusion of yoga-inspired fluidity and Pilates-focused strength and precision. Expect graceful transitions, deep stretches, and intentional movement patterns designed to improve flexibility and build strength.',
    icon: '🌀',
  },
  {
    name: 'Lifted',
    category: 'Pilates',
    description: 'Upper Body Sculpt — Pilates-based movement focusing on arms, shoulders, and upper back. Set to motivating, mindful music. You\'ll leave feeling strong, open, and aligned — not just in posture, but in purpose.',
    icon: '✨',
  },
  {
    name: 'Rooted',
    category: 'Pilates',
    description: 'Lower Body Sculpt — a mat-based Pilates class building deep strength through glutes, hamstrings, inner thighs, and pelvic floor. Expect resistance bands, pulses, and low-impact sculpting.',
    icon: '🌿',
  },
  {
    name: 'FORME: Full Body Pilates',
    category: 'Pilates',
    description: 'A slow, intentional, and deeply focused practice emphasizing precision, control, and integrity in every movement. Perfect for those who value quality of movement over speed.',
    icon: '💎',
  },
  {
    name: 'Dance Lab',
    category: 'Dance',
    description: 'A vibrant fusion of dance styles — fiery Latin rhythms, expressive modern movements, or edgy street choreography. Sculpt your body, improve your rhythm, and express yourself in a high-energy environment.',
    icon: '💃',
  },
  {
    name: 'BollyX',
    category: 'Dance',
    description: 'Bollywood-inspired dance fitness combining dynamic choreography with the hottest music from around the world. 50-minute cardio workout cycling between higher and lower-intensity dance sequences.',
    icon: '🎶',
  },
  {
    name: 'Cardio Kickbox',
    category: 'HIIT',
    description: 'A high-energy, full-body fitness experience rooted in martial arts-inspired movement. Unleash powerful punches, kicks, and strikes — no contact involved. Builds endurance, strength, and coordination.',
    icon: '🥊',
  },
  {
    name: 'Momentum',
    category: 'Conditioning',
    description: 'A meticulously structured conditioning experience through three progressive sets. One-minute intervals crafted to challenge without compromise — delivering elevated muscular engagement and purposeful transitions.',
    icon: '⚡',
  },
];

const categories: ClassCategory[] = ['All', 'Strength', 'HIIT', 'Yoga', 'Pilates', 'Dance', 'Conditioning'];

const categoryBadgeColors: Record<string, string> = {
  Strength: 'bg-red-50 text-red-600 border-red-200',
  HIIT: 'bg-orange-50 text-orange-600 border-orange-200',
  Yoga: 'bg-purple-50 text-purple-600 border-purple-200',
  Pilates: 'bg-pink-50 text-pink-600 border-pink-200',
  Dance: 'bg-amber-50 text-amber-600 border-amber-200',
  Conditioning: 'bg-sky-50 text-[#0096C7] border-sky-200',
};

export default function GroupFitnessPage() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [activeCategory, setActiveCategory] = useState<ClassCategory>('All');

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    // Small delay to let filtered cards render before observing
    const timeout = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => {
        el.classList.remove('animate-in');
        observerRef.current?.observe(el);
      });
    }, 50);
    return () => {
      clearTimeout(timeout);
      observerRef.current?.disconnect();
    };
  }, [activeCategory]);

  const filteredClasses = activeCategory === 'All'
    ? classes
    : classes.filter((c) => c.category === activeCategory);

  return (
    <main className="bg-black text-white">

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="text-xl font-black tracking-tight">
            <span className="text-white">ARCO</span>
            <span className="text-[#0096C7]">FIT</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-xs font-medium tracking-widest uppercase text-white/70">
            <a href="/" className="hover:text-[#0096C7] transition-colors">Home</a>
            <div className="relative group">
              <a href="/group-fitness" className="text-[#0096C7] flex items-center gap-1">
                Group Fitness
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
              </a>
              <div className="absolute top-full left-0 mt-2 w-48 bg-black/95 backdrop-blur-md border border-white/10 rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                <a href="/group-fitness" className="block px-4 py-2 text-[#0096C7] hover:bg-white/5 transition-colors normal-case tracking-normal text-xs">Group Fitness</a>
                <a href="/reformer-pilates" className="block px-4 py-2 text-white/60 hover:text-[#0096C7] hover:bg-white/5 transition-colors normal-case tracking-normal text-xs">Reformer Pilates</a>
                <a href="/yoga-teacher-training" className="block px-4 py-2 text-white/60 hover:text-[#0096C7] hover:bg-white/5 transition-colors normal-case tracking-normal text-xs">Yoga Teacher Training</a>
                <a href="/schedule" className="block px-4 py-2 text-white/60 hover:text-[#0096C7] hover:bg-white/5 transition-colors normal-case tracking-normal text-xs">Schedule</a>
              </div>
            </div>
            <a href="/amenities" className="hover:text-[#0096C7] transition-colors">Amenities</a>
            <a href="#" className="hover:text-[#0096C7] transition-colors">Membership</a>
            <a href="/about-us" className="hover:text-[#0096C7] transition-colors">About</a>
            <a href="/events" className="hover:text-[#0096C7] transition-colors">Events</a>
          </div>
          <a href="tel:3465532726" className="bg-[#0096C7] hover:bg-[#0077A8] text-white text-xs font-bold px-4 py-2 rounded transition-colors tracking-wider">
            346-553-ARCO
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0096C7]/10 via-transparent to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <p className="text-[#0096C7] text-xs font-bold tracking-[0.3em] uppercase mb-4 opacity-0 animate-[fadeUp_0.8s_ease_0.2s_forwards]">
            Movement by Design
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase leading-none mb-6 opacity-0 animate-[fadeUp_0.8s_ease_0.4s_forwards]">
            Group <span className="text-[#0096C7]">Fitness</span>
          </h1>
          <p className="text-white/50 text-sm sm:text-base max-w-2xl mx-auto mb-8 opacity-0 animate-[fadeUp_0.8s_ease_0.6s_forwards]">
            Every movement serves a purpose, every class is built with intention, and every progression is designed to strengthen you from the inside out.
          </p>
          <a
            href="https://arcofitgym.com/group-fitness/schedule/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0096C7] hover:bg-[#0077A8] text-white font-bold px-8 py-3 rounded transition-all hover:scale-105 tracking-wider uppercase text-xs inline-block opacity-0 animate-[fadeUp_0.8s_ease_0.8s_forwards]"
          >
            View Schedule
          </a>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-[#0A0A0A] py-16 px-4 border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center reveal opacity-0 translate-y-8 transition-all duration-700">
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 sm:p-10">
            <div className="w-12 h-1 bg-[#0096C7] mx-auto mb-6 rounded" />
            <p className="text-white/60 leading-relaxed text-sm sm:text-base">
              This is more than a workout — it&apos;s a method. Rooted in simplicity, elevated by precision, and made to build sustainable, adaptable, real-world strength. Whether you&apos;re rebuilding, refining, or ready to elevate your practice, Movement by Design meets you where you are — and moves you forward.
            </p>
          </div>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="py-8 px-4 sticky top-[57px] z-40 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] sm:text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#0096C7] border-[#0096C7] text-white'
                    : 'bg-white/5 border-white/10 text-white/50 hover:border-white/30 hover:text-white/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CLASSES GRID */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClasses.map((cls, i) => (
            <div
              key={cls.name}
              className="reveal opacity-0 translate-y-8 transition-all duration-700 group"
              style={{ transitionDelay: `${(i % 6) * 80}ms` }}
            >
              <div className="h-full border border-gray-200 rounded-xl overflow-hidden flex flex-col transition-all duration-500 hover:border-[#0096C7]/60 hover:shadow-[0_0_30px_rgba(0,150,199,0.15)] hover:-translate-y-1">
                {/* Dark Top */}
                <div className="bg-[#111111] p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{cls.icon}</span>
                      <h3 className="text-white text-base sm:text-lg font-bold group-hover:text-[#0096C7] transition-colors duration-300 leading-tight">
                        {cls.name}
                      </h3>
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border flex-shrink-0 ${categoryBadgeColors[cls.category] || 'bg-gray-100 text-gray-600 border-gray-200'}`}>
                      {cls.category}
                    </span>
                  </div>
                </div>

                {/* Light Bottom */}
                <div className="bg-white p-5 pt-4 flex-grow">
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {cls.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#0A0A0A] py-16 px-4 border-y border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '20+', label: 'Classes Offered' },
            { number: '6', label: 'Categories' },
            { number: '7', label: 'Days a Week' },
            { number: '∞', label: 'Motivation' },
          ].map((stat, i) => (
            <div
              key={i}
              className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0096C7] mb-2">{stat.number}</div>
              <p className="text-white/40 text-xs sm:text-sm uppercase tracking-widest font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="reveal opacity-0 translate-y-8 transition-all duration-700 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase mb-4">
            Ready to Move?
          </h2>
          <p className="text-white/50 text-sm sm:text-base mb-8 max-w-lg mx-auto">
            Check out our schedule and find the class that fits your goals. From high-intensity to restorative, there&apos;s something for everyone.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://arcofitgym.com/group-fitness/schedule/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0096C7] hover:bg-[#0077A8] text-white font-bold px-8 py-3 rounded transition-all hover:scale-105 tracking-wider uppercase text-xs"
            >
              View Schedule
            </a>
            <a href="/" className="border border-white/20 hover:border-white/40 text-white font-bold px-8 py-3 rounded transition-all hover:scale-105 tracking-wider uppercase text-xs">
              Back to Home
            </a>
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
                <li key={item}>
                  <a
                    href={item === 'Home' ? '/' : item === 'Group Fitness' ? '/group-fitness' : item === 'About Us' ? '/about-us' : '#'}
                    className="hover:text-[#0096C7] transition-colors"
                  >
                    {item}
                  </a>
                </li>
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
              <a href="https://www.facebook.com/share/mxxSnexwQjHehWGr/?mibextid=WC7FNe" target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-white/20 rounded-lg flex items-center justify-center hover:border-[#0096C7] hover:text-[#0096C7] transition-colors text-white/70">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/arcofitgym" target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-white/20 rounded-lg flex items-center justify-center hover:border-[#0096C7] hover:text-[#0096C7] transition-colors text-white/70">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
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

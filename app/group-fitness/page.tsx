'use client';

import { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

type ClassCategory = 'All' | 'Strength' | 'HIIT' | 'Yoga' | 'Pilates' | 'Dance' | 'Conditioning';

interface FitnessClass {
  name: string;
  category: ClassCategory;
  description: string;
  icon: string;
}

const fitnessClasses: FitnessClass[] = [
  {
    name: 'Build Core',
    category: 'Strength',
    description: 'Core strength is foundational—not just for performance, but for posture, balance, and longevity. Build: Core refines the essentials with precision and intention, offering a minimalist approach to maximum impact, targeting deep stabilizers and functional strength.',
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
    description: 'A full-body strength training experience rooted in mindful movement and intelligent design. Each class is structured around four blocks, targeting foundational movement patterns that strengthen, stabilize, and support the body for long-term resilience.',
    icon: '💪',
  },
  {
    name: 'Build Upper',
    category: 'Strength',
    description: 'A focused strength experience designed to refine and empower the upper body through intentional movement. Each class flows through three progressive blocks—Basic, Compound, and Power—targeting shoulders, chest, back, and arms.',
    icon: '🏋️',
  },
  {
    name: 'Xtreme45',
    category: 'HIIT',
    description: 'A high-intensity HIIT Circuit or MetCon style workout that turns up the heat in just 45 minutes. Build strength, endurance, and improve your overall fitness with our blend of cardio, strength, and functional training.',
    icon: '⚡',
  },
  {
    name: 'The Sweat Theory',
    category: 'HIIT',
    description: 'A minimalist, intentional HIIT experience built around the science of effort and recovery. In just 30 minutes, this bodyweight-only class uses simple, functional movement patterns to elicit a true high-intensity response—without overwhelming the nervous system.',
    icon: '🔥',
  },
  {
    name: 'The P.E.A.K Method',
    category: 'Conditioning',
    description: 'Using yoga and Pilates-inspired exercises, guiding you through four progressive phases: Peaceful Movement, Energizing Flow, Alignment & Activation, and Kinetic Power. Each phase builds upon the last, emphasizing breath control, strength, and intentional movement.',
    icon: '⛰️',
  },
  {
    name: 'FUSE "Warm Pilates"',
    category: 'Pilates',
    description: 'A "warm" full-body Pilates class that blends resistance and intensity to challenge strength, endurance, and control. With energizing cardio bursts built in, each session elevates your stamina and cultivates resilience.',
    icon: '🔶',
  },
  {
    name: 'Yin Yoga',
    category: 'Yoga',
    description: 'Unwind and relax in this calming Yin Yoga class. Hold soothing postures for several minutes to increase flexibility, release tension, and target connective tissues and fascia for deeper relaxation.',
    icon: '🧘',
  },
  {
    name: 'Fit Flow Yoga',
    category: 'Yoga',
    description: 'This slow-paced Vinyasa Flow connects body and breath. Start with grounding breathwork, then move through gentle poses that build strength and flexibility. Hold poses longer for deeper release. Perfect for all levels.',
    icon: '🌊',
  },
  {
    name: 'Ashtanga Yoga',
    category: 'Yoga',
    description: 'Follow a precise sequence of poses, synchronized with breath to create a flow of movement. This vigorous practice builds strength, flexibility, and stamina, while enhancing focus and discipline.',
    icon: '🕉️',
  },
  {
    name: 'Slow Flow Yoga',
    category: 'Yoga',
    description: 'A slower-paced Vinyasa-style class where you\'ll be guided through postures that flow seamlessly and given time to explore each yoga pose through deep, controlled breathing. The perfect class to deepen your practice.',
    icon: '🍃',
  },
  {
    name: 'Pilates Flow',
    category: 'Pilates',
    description: 'A fusion of yoga-inspired fluidity and Pilates-focused strength and precision. Expect graceful transitions, deep stretches, and intentional movement patterns designed to improve flexibility, build strength, and body awareness.',
    icon: '✨',
  },
  {
    name: 'Lifted',
    category: 'Pilates',
    description: 'Upper Body Sculpt — Focused attention to the upper body and core through Pilates-based movement, breath connection, and intentional flow. Designed to sculpt and strengthen the arms, shoulders, and upper back.',
    icon: '🙌',
  },
  {
    name: 'Rooted',
    category: 'Pilates',
    description: 'Lower Body Sculpt — A lower-body focused, mat-based Pilates class designed to build deep strength through the glutes, hamstrings, inner thighs, and pelvic floor while maintaining a strong connection to your core.',
    icon: '🌿',
  },
  {
    name: 'FORME: Full Body Pilates',
    category: 'Pilates',
    description: 'A slow, intentional, and deeply focused practice that emphasizes precision, control, and integrity in every movement. Designed to build strength, alignment, and deep core stability.',
    icon: '💎',
  },
  {
    name: 'Dance Lab',
    category: 'Dance',
    description: 'A vibrant fusion of dance styles for an electrifying workout. Sessions could feature fiery Latin rhythms, expressive modern movements, or edgy street choreography. Suitable for all fitness levels.',
    icon: '💃',
  },
  {
    name: 'BollyX',
    category: 'Dance',
    description: 'Bollywood-inspired dance-fitness program that combines dynamic choreography with the hottest music from around the world. A 50-minute cardio workout cycling between higher and lower-intensity dance sequences.',
    icon: '🎶',
  },
  {
    name: 'Cardio Kickbox',
    category: 'Conditioning',
    description: 'A high-energy, full-body fitness experience rooted in martial arts-inspired movement. Unleash powerful punches, kicks, and strikes drawn from boxing, kickboxing, karate, and Muay Thai—no contact involved.',
    icon: '🥊',
  },
  {
    name: 'Momentum',
    category: 'Conditioning',
    description: 'A meticulously structured conditioning experience designed to sculpt, strengthen, and energize. Through three progressive sets, you\'ll move with precision—activating upper body, lower body, core, and cardio systems.',
    icon: '🚀',
  },
];

const categories: ClassCategory[] = ['All', 'Strength', 'HIIT', 'Yoga', 'Pilates', 'Dance', 'Conditioning'];

const categoryColors: Record<ClassCategory, string> = {
  All: '',
  Strength: 'bg-red-500/20 text-red-400 border-red-500/30',
  HIIT: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  Yoga: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  Pilates: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
  Dance: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  Conditioning: 'bg-[#0096C7]/20 text-[#0096C7] border-[#0096C7]/30',
};

export default function GroupFitnessPage() {
  const [activeCategory, setActiveCategory] = useState<ClassCategory>('All');
  const observerRef = useRef<IntersectionObserver | null>(null);

  const filteredClasses = activeCategory === 'All'
    ? fitnessClasses
    : fitnessClasses.filter((c) => c.category === activeCategory);

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
    document.querySelectorAll('.reveal').forEach((el) => {
      observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  // Re-observe newly rendered cards when filter changes
  useEffect(() => {
    if (!observerRef.current) return;
    document.querySelectorAll('.reveal').forEach((el) => {
      if (!el.classList.contains('animate-in')) {
        observerRef.current?.observe(el);
      }
    });
  }, [activeCategory]);

  return (
    <main className="bg-black text-white">

      <Navbar activePage="group-fitness" />

      {/* HERO */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0096C7]/10 via-transparent to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <p className="text-[#0096C7] text-xs font-bold tracking-[0.3em] uppercase mb-4 opacity-0 animate-[fadeUp_0.8s_ease_0.2s_forwards]">
            Movement by Design
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase leading-none mb-6 opacity-0 animate-[fadeUp_0.8s_ease_0.4s_forwards]">
            Group<br />
            <span className="text-[#0096C7]">Fitness</span>
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

      {/* FILTER TABS */}
      <section className="px-4 pb-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#0096C7] border-[#0096C7] text-white'
                  : 'border-white/20 text-white/50 hover:border-white/40 hover:text-white/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* CLASS GRID */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClasses.map((cls, i) => (
            <div
              key={cls.name}
              className="reveal opacity-0 translate-y-8 transition-all duration-700 group"
              style={{ transitionDelay: `${(i % 6) * 80}ms` }}
            >
              <div className="h-full border border-gray-200 rounded-xl overflow-hidden flex flex-col transition-all duration-500 hover:border-[#0096C7]/60 hover:shadow-[0_0_30px_rgba(0,150,199,0.15)] hover:-translate-y-1">
                {/* Dark Top */}
                <div className="bg-[#111111] p-6 pb-5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${categoryColors[cls.category]}`}>
                      {cls.category}
                    </span>
                    <h3 className="text-white text-base sm:text-lg font-bold group-hover:text-[#0096C7] transition-colors duration-300 leading-tight">
                      {cls.name}
                    </h3>
                  </div>
                  <span className="text-2xl">{cls.icon}</span>
                </div>
                {/* Light Bottom */}
                <div className="bg-white p-6 pt-5 flex-grow">
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {cls.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-[#0A0A0A] py-20 px-4 border-y border-white/10">
        <div className="max-w-4xl mx-auto text-center reveal opacity-0 translate-y-8 transition-all duration-700">
          <p className="text-[#0096C7] text-xs font-bold tracking-[0.3em] uppercase mb-3">Our Philosophy</p>
          <h2 className="text-3xl sm:text-4xl font-black uppercase mb-8">Movement by <span className="text-[#0096C7]">Design</span></h2>
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0096C7] to-transparent" />
            <p className="text-white/60 leading-relaxed text-sm sm:text-base mb-4">
              This is more than a workout—it&apos;s a method. Rooted in simplicity, elevated by precision, and made to build sustainable, adaptable, real-world strength.
            </p>
            <p className="text-white/60 leading-relaxed text-sm sm:text-base">
              Whether you&apos;re rebuilding, refining, or ready to elevate your practice, Movement by Design meets you where you are—and moves you forward.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: '20+', label: 'Weekly Classes' },
            { number: '7', label: 'Class Categories' },
            { number: '∞', label: 'Potential' },
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
      <section className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-[#0A0A0A] py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase mb-4">
            Find Your <span className="text-[#0096C7]">Class</span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base mb-8 max-w-xl mx-auto">
            From strength training to yoga, HIIT to dance — there&apos;s a class for every body and every goal. Check the schedule and reserve your spot.
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

      <Footer />

    </main>
  );
}

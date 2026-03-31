'use client';

import { useEffect, useRef } from 'react';

const benefits = [
  { title: 'Deep Stabilizing Strength', desc: 'Strengthen the muscles that keep you steady, aligned, and efficient.' },
  { title: 'Powerful Yet Gentle Resistance', desc: 'Springs challenge you where you\'re strong and support you where you need help.' },
  { title: 'Improved Mobility & Flexibility', desc: 'Explore movement with freedom and control.' },
  { title: 'Better Posture & Alignment', desc: 'Build the awareness and strength that carry into everyday life.' },
  { title: 'Joint-Friendly Training', desc: 'Low impact can still be deeply effective — just smoother, safer, and more sustainable.' },
  { title: 'Mind–Body Connection', desc: 'A calmer mind and deeper connection to how your body moves.' },
];

const goodFor = [
  { title: 'Core & Postural Strength', desc: 'Supports your spine and reduces strain' },
  { title: 'Mobility & Flexibility', desc: 'Feels natural, not forced' },
  { title: 'Injury Prevention & Recovery', desc: 'Controlled, low-impact movement' },
  { title: 'Athletic Performance', desc: 'Improved coordination, joint control, and balance' },
  { title: 'Prenatal & Postnatal Support', desc: 'Focus on breath and stability' },
  { title: 'Daily Life', desc: 'Improved posture and alignment for everyday movement' },
];

export default function ReformerPilatesPage() {
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
      { threshold: 0.1 }
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
          <a href="/" className="text-xl font-black tracking-tight">
            <span className="text-white">ARCO</span>
            <span className="text-[#0096C7]">FIT</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-xs font-medium tracking-widest uppercase text-white/70">
            <a href="/" className="hover:text-[#0096C7] transition-colors">Home</a>
            <div className="relative group">
              <a href="/group-fitness" className="hover:text-[#0096C7] transition-colors flex items-center gap-1">
                Group Fitness
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
              </a>
              <div className="absolute top-full left-0 mt-2 w-48 bg-black/95 backdrop-blur-md border border-white/10 rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                <a href="/group-fitness" className="block px-4 py-2 text-white/60 hover:text-[#0096C7] hover:bg-white/5 transition-colors normal-case tracking-normal text-xs">Group Fitness</a>
                <a href="/reformer-pilates" className="block px-4 py-2 text-[#0096C7] hover:bg-white/5 transition-colors normal-case tracking-normal text-xs">Reformer Pilates</a>
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
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0096C7]/10 via-transparent to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <p className="text-[#0096C7] text-xs font-bold tracking-[0.3em] uppercase mb-4 opacity-0 animate-[fadeUp_0.8s_ease_0.2s_forwards]">
            Intelligent, Intentional Movement
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase leading-none mb-6 opacity-0 animate-[fadeUp_0.8s_ease_0.4s_forwards]">
            Reformer <span className="text-[#0096C7]">Pilates</span>
          </h1>
          <p className="text-white/50 text-sm sm:text-base max-w-2xl mx-auto opacity-0 animate-[fadeUp_0.8s_ease_0.6s_forwards]">
            No gimmicks. No exaggerated claims. Just intelligent, intentional movement rooted in classical principles and delivered with honesty.
          </p>
        </div>
      </section>

      {/* WHY PILATES AT ARCO FIT */}
      <section className="bg-[#0A0A0A] py-20 px-4 border-y border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <p className="text-[#0096C7] text-xs font-bold tracking-[0.3em] uppercase mb-3">Why Pilates at Arco Fit?</p>
            <h2 className="text-3xl sm:text-4xl font-black uppercase mb-6">A Different <span className="text-[#0096C7]">Experience</span></h2>
            <p className="text-white/60 leading-relaxed text-sm sm:text-base mb-4">
              At Arco Fit, we believe in Pilates without the gimmicks. No exaggerated claims, no misleading promises — just intelligent, intentional movement rooted in classical principles and delivered with honesty.
            </p>
            <p className="text-white/60 leading-relaxed text-sm sm:text-base mb-4">
              Our classes are deliberately small, capped at just <span className="text-white font-semibold">five people</span>, so every session feels personal, guided, and truly instructor-led — not a follow-along workout.
            </p>
            <p className="text-white/60 leading-relaxed text-sm sm:text-base">
              And because Arco Fit is housed inside one of the best-equipped strength training facilities, you get a synergy no private studio or commercial gym can offer: authentic Pilates instruction integrated into a space built for real strength, real progress, and real results.
            </p>
          </div>
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: '200ms' }}>
            <div className="rounded-xl overflow-hidden border border-white/10">
              <img
                src="https://arcofitgym.com/wp-content/uploads/2025/01/processed-3A096DAE-228E-427D-8F90-9786E8BAB4EB_resized2.jpg"
                alt="Reformer Pilates machine at Arco Fit"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS REFORMER PILATES */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 order-2 md:order-1">
            <div className="rounded-xl overflow-hidden border border-white/10">
              <img
                src="https://arcofitgym.com/wp-content/uploads/2025/01/processed-1A982970-D0BF-40D8-9049-C6E3270980CA_resized.jpg"
                alt="Arco Fit Pilates studio"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 order-1 md:order-2" style={{ transitionDelay: '200ms' }}>
            <p className="text-[#0096C7] text-xs font-bold tracking-[0.3em] uppercase mb-3">The Method</p>
            <h2 className="text-3xl sm:text-4xl font-black uppercase mb-6">What Is Reformer <span className="text-[#0096C7]">Pilates?</span></h2>
            <p className="text-white/60 leading-relaxed text-sm sm:text-base mb-4">
              Reformer Pilates is a dynamic and empowering movement practice performed on a spring-based apparatus designed by Joseph Pilates. With a gliding carriage, adjustable springs, straps, and bars, the Reformer provides both resistance and assistance.
            </p>
            <p className="text-white/60 leading-relaxed text-sm sm:text-base">
              Designed to build deep stabilizing strength and improve mobility, Reformer Pilates perfectly complements a heavy resistance or hypertrophy-based routine. While your strength training builds power and muscle, Pilates reinforces the foundation behind every lift.
            </p>
          </div>
        </div>
      </section>

      {/* THE POWERHOUSE */}
      <section className="bg-[#0A0A0A] py-20 px-4 border-y border-white/10">
        <div className="max-w-4xl mx-auto text-center reveal opacity-0 translate-y-8 transition-all duration-700">
          <p className="text-[#0096C7] text-xs font-bold tracking-[0.3em] uppercase mb-3">The Core of Everything</p>
          <h2 className="text-3xl sm:text-4xl font-black uppercase mb-8">The <span className="text-[#0096C7]">Powerhouse</span></h2>
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0096C7] to-transparent" />
            <p className="text-white/60 leading-relaxed text-sm sm:text-base">
              In classical Pilates, the Powerhouse is your body&apos;s true center of strength — made up of the deep core, pelvic floor, diaphragm, spinal stabilizers, and hip stabilizers. These muscles work together to support your spine, maintain alignment, and create balanced, efficient movement. Strengthening the Powerhouse improves posture, enhances stability, reduces lower-back strain, and builds the kind of foundational control that elevates every other form of training.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center mb-14">
            <p className="text-[#0096C7] text-xs font-bold tracking-[0.3em] uppercase mb-3">Why Reformer Pilates?</p>
            <h2 className="text-3xl sm:text-4xl font-black uppercase">Key <span className="text-[#0096C7]">Benefits</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="reveal opacity-0 translate-y-8 transition-all duration-700 group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="h-full bg-white border border-gray-200 rounded-xl p-6 transition-all duration-500 hover:border-[#0096C7]/60 hover:shadow-[0_0_25px_rgba(0,150,199,0.15)] hover:-translate-y-1">
                  <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center mb-4 text-[#0096C7]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                  </div>
                  <h3 className="text-gray-900 font-bold text-sm uppercase tracking-wider mb-2 group-hover:text-[#0096C7] transition-colors duration-300">{b.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOOD FOR */}
      <section className="bg-[#0A0A0A] py-20 px-4 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center mb-14">
            <p className="text-[#0096C7] text-xs font-bold tracking-[0.3em] uppercase mb-3">Versatile & Uplifting</p>
            <h2 className="text-3xl sm:text-4xl font-black uppercase">What Is It <span className="text-[#0096C7]">Good For?</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {goodFor.map((g, i) => (
              <div
                key={i}
                className="reveal opacity-0 translate-y-8 transition-all duration-700"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="bg-white border border-gray-200 rounded-xl p-6 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center text-[#0096C7] flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-bold text-sm mb-1">{g.title}</h3>
                    <p className="text-gray-500 text-sm">{g.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYNERGY */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center reveal opacity-0 translate-y-8 transition-all duration-700">
          <p className="text-[#0096C7] text-xs font-bold tracking-[0.3em] uppercase mb-3">Better Together</p>
          <h2 className="text-3xl sm:text-4xl font-black uppercase mb-8">Pilates + <span className="text-[#0096C7]">Strength</span></h2>
          <div className="grid sm:grid-cols-2 gap-6 text-left">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-sm uppercase tracking-wider mb-3 text-[#0096C7]">Strength Training</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Builds muscle size, power, and metabolic capacity. The foundation for physical performance.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-sm uppercase tracking-wider mb-3 text-[#0096C7]">Pilates</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Strengthens stabilizers, improves mobility, and refines movement patterns. The precision behind every lift.</p>
            </div>
          </div>
          <p className="text-white/50 text-sm mt-8">Together, they create a strong, capable, and well-balanced body that moves with ease and confidence.</p>
        </div>
      </section>

      {/* FREQUENCY */}
      <section className="bg-[#0A0A0A] py-16 px-4 border-y border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: '5', label: 'Max Class Size' },
            { number: '2–3x', label: 'Sessions Per Week' },
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
      <section className="reveal opacity-0 translate-y-8 transition-all duration-700 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase mb-4">
            Step Into Your <span className="text-[#0096C7]">Strength</span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base mb-8 max-w-xl mx-auto">
            Discover the difference that intentional, intelligent movement can make. Whether you&apos;re a lifter, a mover, or brand new to Pilates — this is where your body learns to thrive.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://arcofitgym.com/group-fitness/schedule/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0096C7] hover:bg-[#0077A8] text-white font-bold px-8 py-3 rounded transition-all hover:scale-105 tracking-wider uppercase text-xs"
            >
              Book a Class
            </a>
            <a href="/group-fitness" className="border border-white/20 hover:border-white/40 text-white font-bold px-8 py-3 rounded transition-all hover:scale-105 tracking-wider uppercase text-xs">
              All Group Fitness
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
              {['Home', 'Group Fitness', 'Reformer Pilates', 'Amenities', 'Membership Options', 'About Us', 'Careers', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a
                    href={item === 'Home' ? '/' : item === 'Group Fitness' ? '/group-fitness' : item === 'Reformer Pilates' ? '/reformer-pilates' : item === 'About Us' ? '/about-us' : '#'}
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

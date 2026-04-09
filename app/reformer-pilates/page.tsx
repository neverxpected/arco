'use client';

import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
    <main className="bg-white text-slate-900">

      <Navbar activePage="reformer-pilates" />

      {/* HERO */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#007CAF]/5 via-transparent to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <p className="text-[#007CAF] text-xs font-bold tracking-[0.3em] uppercase mb-4 opacity-0 animate-[fadeUp_0.8s_ease_0.2s_forwards]">
            Intelligent, Intentional Movement
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase leading-none mb-6 opacity-0 animate-[fadeUp_0.8s_ease_0.4s_forwards]">
            Reformer <span className="text-[#007CAF]">Pilates</span>
          </h1>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto opacity-0 animate-[fadeUp_0.8s_ease_0.6s_forwards]">
            No gimmicks. No exaggerated claims. Just intelligent, intentional movement rooted in classical principles and delivered with honesty.
          </p>
        </div>
      </section>

      {/* WHY PILATES AT ARCO FIT */}
      <section className="bg-slate-50 py-20 px-4 border-y border-slate-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <p className="text-[#007CAF] text-xs font-bold tracking-[0.3em] uppercase mb-3">Why Pilates at Arco Fit?</p>
            <h2 className="text-3xl sm:text-4xl font-black uppercase mb-6">A Different <span className="text-[#007CAF]">Experience</span></h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-4">
              At Arco Fit, we believe in Pilates without the gimmicks. No exaggerated claims, no misleading promises — just intelligent, intentional movement rooted in classical principles and delivered with honesty.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-4">
              Our classes are deliberately small, capped at just <span className="text-white font-semibold">five people</span>, so every session feels personal, guided, and truly instructor-led — not a follow-along workout.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              And because Arco Fit is housed inside one of the best-equipped strength training facilities, you get a synergy no private studio or commercial gym can offer: authentic Pilates instruction integrated into a space built for real strength, real progress, and real results.
            </p>
          </div>
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: '200ms' }}>
            <div className="rounded-xl overflow-hidden border border-slate-200">
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
            <div className="rounded-xl overflow-hidden border border-slate-200">
              <img
                src="https://arcofitgym.com/wp-content/uploads/2025/01/processed-1A982970-D0BF-40D8-9049-C6E3270980CA_resized.jpg"
                alt="Arco Fit Pilates studio"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 order-1 md:order-2" style={{ transitionDelay: '200ms' }}>
            <p className="text-[#007CAF] text-xs font-bold tracking-[0.3em] uppercase mb-3">The Method</p>
            <h2 className="text-3xl sm:text-4xl font-black uppercase mb-6">What Is Reformer <span className="text-[#007CAF]">Pilates?</span></h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-4">
              Reformer Pilates is a dynamic and empowering movement practice performed on a spring-based apparatus designed by Joseph Pilates. With a gliding carriage, adjustable springs, straps, and bars, the Reformer provides both resistance and assistance.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Designed to build deep stabilizing strength and improve mobility, Reformer Pilates perfectly complements a heavy resistance or hypertrophy-based routine. While your strength training builds power and muscle, Pilates reinforces the foundation behind every lift.
            </p>
          </div>
        </div>
      </section>

      {/* THE POWERHOUSE */}
      <section className="bg-slate-50 py-20 px-4 border-y border-slate-200">
        <div className="max-w-4xl mx-auto text-center reveal opacity-0 translate-y-8 transition-all duration-700">
          <p className="text-[#007CAF] text-xs font-bold tracking-[0.3em] uppercase mb-3">The Core of Everything</p>
          <h2 className="text-3xl sm:text-4xl font-black uppercase mb-8">The <span className="text-[#007CAF]">Powerhouse</span></h2>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#007CAF] to-transparent" />
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              In classical Pilates, the Powerhouse is your body&apos;s true center of strength — made up of the deep core, pelvic floor, diaphragm, spinal stabilizers, and hip stabilizers. These muscles work together to support your spine, maintain alignment, and create balanced, efficient movement. Strengthening the Powerhouse improves posture, enhances stability, reduces lower-back strain, and builds the kind of foundational control that elevates every other form of training.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center mb-14">
            <p className="text-[#007CAF] text-xs font-bold tracking-[0.3em] uppercase mb-3">Why Reformer Pilates?</p>
            <h2 className="text-3xl sm:text-4xl font-black uppercase">Key <span className="text-[#007CAF]">Benefits</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="reveal opacity-0 translate-y-8 transition-all duration-700 group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="h-full bg-white border border-gray-200 rounded-xl p-6 transition-all duration-500 hover:border-[#007CAF]/60 hover:shadow-[0_0_20px_rgba(0,124,175,0.1)] hover:-translate-y-1">
                  <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center mb-4 text-[#007CAF]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                  </div>
                  <h3 className="text-gray-900 font-bold text-sm uppercase tracking-wider mb-2 group-hover:text-[#007CAF] transition-colors duration-300">{b.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOOD FOR */}
      <section className="bg-slate-50 py-20 px-4 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center mb-14">
            <p className="text-[#007CAF] text-xs font-bold tracking-[0.3em] uppercase mb-3">Versatile & Uplifting</p>
            <h2 className="text-3xl sm:text-4xl font-black uppercase">What Is It <span className="text-[#007CAF]">Good For?</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {goodFor.map((g, i) => (
              <div
                key={i}
                className="reveal opacity-0 translate-y-8 transition-all duration-700"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="bg-white border border-gray-200 rounded-xl p-6 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center text-[#007CAF] flex-shrink-0 mt-0.5">
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
          <p className="text-[#007CAF] text-xs font-bold tracking-[0.3em] uppercase mb-3">Better Together</p>
          <h2 className="text-3xl sm:text-4xl font-black uppercase mb-8">Pilates + <span className="text-[#007CAF]">Strength</span></h2>
          <div className="grid sm:grid-cols-2 gap-6 text-left">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-sm uppercase tracking-wider mb-3 text-[#007CAF]">Strength Training</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Builds muscle size, power, and metabolic capacity. The foundation for physical performance.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-sm uppercase tracking-wider mb-3 text-[#007CAF]">Pilates</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Strengthens stabilizers, improves mobility, and refines movement patterns. The precision behind every lift.</p>
            </div>
          </div>
          <p className="text-slate-500 text-sm mt-8">Together, they create a strong, capable, and well-balanced body that moves with ease and confidence.</p>
        </div>
      </section>

      {/* FREQUENCY */}
      <section className="bg-slate-50 py-16 px-4 border-y border-slate-200">
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
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#007CAF] mb-2">{stat.number}</div>
              <p className="text-slate-400 text-xs sm:text-sm uppercase tracking-widest font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="reveal opacity-0 translate-y-8 transition-all duration-700 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase mb-4">
            Step Into Your <span className="text-[#007CAF]">Strength</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mb-8 max-w-xl mx-auto">
            Discover the difference that intentional, intelligent movement can make. Whether you&apos;re a lifter, a mover, or brand new to Pilates — this is where your body learns to thrive.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://arcofitgym.com/group-fitness/schedule/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#007CAF] hover:brightness-110 text-white font-bold px-8 py-3 rounded transition-all hover:scale-105 tracking-wider uppercase text-xs"
            >
              Book a Class
            </a>
            <a href="/group-fitness" className="border-2 border-[#007CAF] bg-transparent hover:bg-[#007CAF]/10 text-[#007CAF] font-bold px-8 py-3 rounded transition-all hover:scale-105 tracking-wider uppercase text-xs">
              All Group Fitness
            </a>
          </div>
        </div>
      </section>

      <Footer />

    </main>
  );
}

'use client';

import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const founders = [
  {
    name: 'Jeremy Koger',
    image: 'https://arcofitgym.com/wp-content/uploads/2023/07/Image-1-scaled-1.jpeg?id=72',
  },
  {
    name: 'Matt Caldwell',
    image: 'https://arcofitgym.com/wp-content/uploads/2023/07/Image-2-scaled-1.jpeg?id=71',
  },
  {
    name: 'Jason McCourt',
    image: 'https://arcofitgym.com/wp-content/uploads/2023/07/Image-scaled-1.jpeg?id=73',
  },
];

const values = [
  {
    title: 'Facts, Not Fads',
    desc: 'Every decision is guided by data and time-tested methods — never trends.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714a2.25 2.25 0 0 0 .659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M5 14.5l-.938 2.813c-.293.879.3 1.687 1.188 1.687h13.5c.888 0 1.48-.808 1.188-1.687L19 14.5m-14 0h14" />
      </svg>
    ),
  },
  {
    title: 'Member First',
    desc: 'Your well-being is always our top priority — from the equipment we choose to the coaches we hire.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
  {
    title: 'World-Class Equipment',
    desc: 'The best selection of strength training gear, carefully curated from the world\'s top manufacturers.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
      </svg>
    ),
  },
  {
    title: 'Welcoming Environment',
    desc: 'High-energy and immaculately clean — a space where everyone belongs.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
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

      <Navbar activePage="about-us" />

      {/* HERO */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0096C7]/10 via-transparent to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <p className="text-[#0096C7] text-xs font-bold tracking-[0.3em] uppercase mb-4 opacity-0 animate-[fadeUp_0.8s_ease_0.2s_forwards]">
            Founded on Experience
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase leading-none mb-6 opacity-0 animate-[fadeUp_0.8s_ease_0.4s_forwards]">
            Our <span className="text-[#0096C7]">Story</span>
          </h1>
          <p className="text-white/50 text-sm sm:text-base max-w-2xl mx-auto opacity-0 animate-[fadeUp_0.8s_ease_0.6s_forwards]">
            Born from a shared passion for training and a dream to create the perfect gym.
          </p>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center mb-12">
            <p className="text-[#0096C7] text-xs font-bold tracking-[0.3em] uppercase mb-3">The Beginning</p>
            <h2 className="text-3xl sm:text-4xl font-black uppercase">Our Founders</h2>
          </div>

          {/* Founder Photos */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {founders.map((founder, i) => (
              <div
                key={i}
                className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center group"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="w-full aspect-square bg-white/5 rounded-xl border border-white/10 overflow-hidden transition-all duration-500 group-hover:border-[#0096C7]/60 group-hover:shadow-[0_0_25px_rgba(0,150,199,0.3)] group-hover:-translate-y-2 group-hover:scale-[1.02]">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-bold text-sm sm:text-base uppercase tracking-wider mt-4 transition-colors duration-300 group-hover:text-[#0096C7]">
                  {founder.name}
                </h3>
                <p className="text-white/40 text-xs mt-1">Founder</p>
              </div>
            ))}
          </div>

          {/* Origin Story */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 max-w-4xl mx-auto">
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 sm:p-12">
              <div className="w-12 h-1 bg-[#0096C7] mb-6 mx-auto sm:mx-0 rounded" />
              <p className="text-white/60 leading-relaxed text-sm sm:text-base mb-6">
                Arco Fit Gym & Wellness was born from a shared passion for training and a dream to create the perfect gym. In 2019, Jeremy, Matt, and Jason met at the gym, each pursuing their own fitness journeys but quickly bonded over their enthusiasm for health and fitness.
              </p>
              <p className="text-white/60 leading-relaxed text-sm sm:text-base mb-6">
                Matt had a vision of building the ultimate training space — one that would be rooted in science and proven methods, not fads or trends. He shared his idea with Jeremy and Jason, and together they set out on a mission to bring this dream to life.
              </p>
              <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                Fast forward five years, and Arco Fit opened its doors, offering a space where every decision is made with the members in mind. We believe in facts, not fads, and use data and tried-and-true methods to guide everything we do. Whether you&apos;re just starting your fitness journey or you&apos;re an experienced athlete, Arco Fit is here to support you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-[#0A0A0A] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center mb-14">
            <p className="text-[#0096C7] text-xs font-bold tracking-[0.3em] uppercase mb-3">What We Stand For</p>
            <h2 className="text-3xl sm:text-4xl font-black uppercase">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <div
                key={i}
                className="reveal opacity-0 translate-y-8 transition-all duration-700 group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="h-full bg-white/[0.03] border border-white/10 rounded-xl p-6 text-center transition-all duration-500 hover:border-[#0096C7]/40 hover:bg-white/[0.06] hover:shadow-[0_0_25px_rgba(0,150,199,0.1)] hover:-translate-y-1">
                  <div className="text-[#0096C7] flex justify-center mb-4">
                    {val.icon}
                  </div>
                  <h3 className="font-bold text-sm uppercase tracking-wider mb-3 group-hover:text-[#0096C7] transition-colors duration-300">{val.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION STATEMENT */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 max-w-4xl mx-auto text-center">
            <p className="text-[#0096C7] text-xs font-bold tracking-[0.3em] uppercase mb-3">Our Purpose</p>
            <h2 className="text-3xl sm:text-4xl font-black uppercase mb-8">Mission Statement</h2>
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 sm:p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0096C7] to-transparent" />
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#0096C7]/30 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-white/60 leading-relaxed text-sm sm:text-base lg:text-lg">
                At Arco Fit, our mission is to empower individuals to achieve their fitness goals by providing the best selection of strength training equipment, carefully curated from the world&apos;s top manufacturers. We are committed to delivering an exceptional experience through our hospitable, professional, and well-trained staff. Our facility is immaculately clean and meticulously maintained, creating a high-energy and welcoming environment for all. Whether you&apos;re a seasoned athlete or just beginning your fitness journey, Arco Fit is here to support and inspire you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#0A0A0A] py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '27,000', label: 'Sq. Ft. Facility' },
            { number: '2024', label: 'Year Founded' },
            { number: '3', label: 'Founders' },
            { number: '∞', label: 'Commitment' },
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
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/50 text-sm sm:text-base mb-8 max-w-lg mx-auto">
            Come visit our 27,000 sq. ft. facility and see why Arco Fit is the premier fitness destination in Fulshear.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://arcofitgym.clubautomation.com/member-portal/locations/1/memberships" target="_blank" rel="noopener noreferrer" className="bg-[#0096C7] hover:bg-[#0077A8] text-white font-bold px-8 py-3 rounded transition-all hover:scale-105 tracking-wider uppercase text-xs">
              Membership Options
            </a>
            <a href="#" className="border border-white/20 hover:border-white/40 text-white font-bold px-8 py-3 rounded transition-all hover:scale-105 tracking-wider uppercase text-xs">
              Schedule a Tour
            </a>
          </div>
        </div>
      </section>

      <Footer />

    </main>
  );
}


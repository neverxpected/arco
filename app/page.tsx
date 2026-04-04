'use client';

import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const heroVideoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = heroVideoRef.current;
    if (!container) return;

    // Create the video element entirely via DOM APIs to bypass
    // React's bug where the muted attribute doesn't get applied
    // to the actual DOM node. iOS Safari requires muted + playsinline
    // to be present in the DOM for autoplay to work.
    const video = document.createElement('video');
    video.src = '/videos/arco-hero-vid3.mp4';
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.preload = 'auto';
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
    video.className = 'absolute inset-0 w-full h-full object-cover';

    container.appendChild(video);

    // Try to play immediately and on data-ready events
    const tryPlay = () => {
      video.play().catch(() => {});
    };
    tryPlay();
    video.addEventListener('loadedmetadata', tryPlay, { once: true });
    video.addEventListener('canplay', tryPlay, { once: true });

    return () => {
      video.pause();
      video.removeAttribute('src');
      video.load();
      container.removeChild(video);
    };
  }, []);

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

      <Navbar activePage="home" />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div ref={heroVideoRef} className="absolute inset-0" />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 text-center px-2 sm:px-4 w-full max-w-4xl mx-auto pt-20">
          <p className="text-[#0096C7] text-xs font-bold tracking-[0.3em] uppercase mb-1 opacity-0 animate-[fadeUp_0.8s_ease_0.2s_forwards]">
            Fulshear, Texas
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-none mb-6 opacity-0 animate-[fadeUp_0.8s_ease_0.4s_forwards]">
            What&apos;s<br />
            <span className="text-[#0096C7]">Your Goal?</span>
          </h1>
          <p className="text-white/70 text-[13px] min-[400px]:text-sm sm:text-base md:text-lg max-w-[95%] sm:max-w-xl mx-auto mb-8 opacity-0 animate-[fadeUp_0.8s_ease_0.6s_forwards]">
            Science-based wellness, an inspiring community, and the highest-quality equipment at our 27,000 square-foot facility.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 opacity-0 animate-[fadeUp_0.8s_ease_0.8s_forwards]">
            <a href="https://arcofitgym.clubautomation.com/member-portal/locations/1/memberships" target="_blank" rel="noopener noreferrer" className="bg-[#0096C7] hover:bg-[#0077A8] text-white font-bold px-6 py-3 rounded transition-all hover:scale-105 tracking-wider uppercase text-xs">
              Membership Options
            </a>
            <a href="https://arcofitgym.vfpnext.com/embed/engage/form/11?Account=21585041&ClubID=1" target="_blank" rel="noopener noreferrer" className="border border-white/30 text-white/70 hover:border-white hover:text-white font-bold px-6 py-3 rounded transition-all hover:scale-105 tracking-wider uppercase text-xs">
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
      <section className="reveal opacity-0 translate-y-8 transition-all duration-700 py-16 text-center overflow-hidden">
        <div className="px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight mb-3">
            Have Questions?<br className="block sm:hidden" /> We'd Love to Answer Them
          </h2>
          <p className="text-[#0096C7] font-bold text-sm sm:text-base tracking-wider uppercase mb-8">
            Give You a Tour of Arco Fit! Please Stop In!
          </p>
          <a href="/contact" className="inline-block bg-[#0096C7] hover:bg-[#0077A8] text-white font-bold px-8 py-4 rounded-lg transition-all shadow-[0_0_15px_rgba(0,150,199,0.3)] hover:shadow-[0_0_25px_rgba(0,150,199,0.5)] hover:-translate-y-1 tracking-wider uppercase text-sm mb-16 relative z-10">
            Schedule A Tour
          </a>
        </div>

        {/* INFINITE PHOTO SCROLLER */}
        <div className="relative w-full mt-2 mx-auto max-w-7xl overflow-hidden">
          {/* Fade out on the left, fade in on the right */}
          <div className="absolute inset-y-0 left-0 w-20 sm:w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-20 sm:w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

          <div className="flex w-[max-content] animate-marquee gap-6 px-2 py-8 hover:[animation-play-state:paused] items-center">
            {/* Render two identical groups side by side for a seamless infinite loop */}
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-6">
                {[
                  'acrofit sign.jpg', 'cardio section.jpg', 'custom saunas.jpg', 'group fitness.jpeg', 'gym 1.jpg', 'gym 2.jpg', 'gym 3.jpg', 'gym 4.jpg', 'gym floor.jpg', 'locker rom.jpeg', 'revitalize.jpg', 'world class equipment.jpg', 'yoga and pilates.jpeg'
                ].map((img, j) => (
                  <div key={j} className="relative w-64 sm:w-80 h-40 sm:h-56 shrink-0 group rounded-xl border border-white/10 transition-all duration-500 hover:border-[#0096C7] hover:shadow-[0_0_40px_rgba(0,150,199,0.5)] hover:-translate-y-2 hover:scale-[1.03] cursor-pointer overflow-hidden">
                    <img
                      src={`/photos/${encodeURIComponent(img)}`}
                      alt="Gym Facility"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCIENCE SECTION */}
      <section className="bg-[#0A0A0A] py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center md:text-left">
            <p className="text-[#0096C7] text-xs font-bold tracking-[0.3em] uppercase mb-4">The Arco Fit Way</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-tight mb-6">
              A Science-Based<br />Approach to<br />
              <span className="text-[#0096C7]">Wellness</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-8 text-sm sm:text-base">
              We strive to provide a learning environment run by experienced and successful coaches. Our most important goal is to create a welcoming atmosphere and community in which everyone feels a sense of belonging.
            </p>
            <a href="https://arcofitgym.clubautomation.com/member-portal/locations/1/memberships" target="_blank" rel="noopener noreferrer" className="bg-[#0096C7] hover:bg-[#0077A8] text-white font-bold px-8 py-3 rounded transition-all hover:scale-105 tracking-wider uppercase text-xs inline-block">
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
              { name: 'Jeremy Koger', title: 'Founder', image: 'https://arcofitgym.com/wp-content/uploads/2025/02/Jeremy-Koger.jpg' },
              { name: 'Matt Caldwell', title: 'Founder', image: 'https://arcofitgym.com/wp-content/uploads/2025/02/Matt-Caldwell.jpg' },
              { name: 'Jason McCourt', title: 'Founder', image: 'https://arcofitgym.com/wp-content/uploads/2025/02/Jason-McCourt.jpg' },
              { name: 'Alli Vasquez', title: 'General Manager', image: 'https://arcofitgym.com/wp-content/uploads/2025/02/Alli-Vasquez.jpg' },
            ].map((person, i) => (
              <div key={i} className="reveal opacity-0 translate-y-8 transition-all duration-500 text-center group cursor-pointer" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="w-full aspect-square bg-white/5 rounded-xl border border-white/10 mb-4 overflow-hidden transition-all duration-500 group-hover:border-[#0096C7] group-hover:shadow-[0_0_40px_rgba(0,150,199,0.5)] group-hover:-translate-y-2 group-hover:scale-[1.03]">
                  <img src={person.image} alt={person.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <h3 className="font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors duration-300 group-hover:text-[#0096C7]">{person.name}</h3>
                <p className="text-white/40 text-xs mt-1 transition-colors duration-300 group-hover:text-white/60">{person.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="bg-[#0A0A0A] border-t border-white/10 py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center mb-10">
            <p className="text-[#0096C7] text-xs font-bold tracking-[0.3em] uppercase mb-3">Visit Us</p>
            <h2 className="text-3xl sm:text-4xl font-black uppercase mb-4">Our Location</h2>
            <p className="text-white/60 text-sm">
              6527 Skyline Dr. Building C<br />
              Fulshear, TX 77441
            </p>
          </div>
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 w-full max-w-5xl h-[400px] sm:h-[500px] rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-2 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <iframe
              src="https://maps.google.com/maps?q=6527%20Skyline%20Dr.%20Building%20C%20Fulshear,%20TX%2077441&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              className="rounded-xl grayscale contrast-[110%] brightness-90"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />

    </main>
  );
}
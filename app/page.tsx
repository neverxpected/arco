'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, Variants, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

/* ─── Animation Variants (strictly typed for Next.js prod builds) ─── */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardItem: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

/* ─── Hero text cascade — using container stagger ─── */

const heroStaggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const heroFadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export default function Home() {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const heroVideoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = heroVideoRef.current;
    if (!container) return;

    // Create the video element entirely via DOM APIs to bypass
    // React's bug where the muted attribute doesn't get applied
    // to the actual DOM node. iOS Safari requires muted + playsinline
    // to be present in the DOM for autoplay to work.
    const video = document.createElement('video');
    video.src = '/videos/Commercial Reel.mp4';
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
      video.play().catch(() => { });
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

  return (
    <main className="bg-white text-slate-900">

      <Navbar activePage="home" />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div ref={heroVideoRef} className="absolute inset-0" />
        <div className="absolute inset-0 bg-black/40" />

        {/* Ambient breathing glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#007CAF] rounded-full mix-blend-multiply filter blur-[120px] opacity-15 animate-pulse pointer-events-none" />

        <motion.div
          className="relative z-10 text-center px-4 sm:px-6 w-full max-w-4xl mx-auto pt-24 pb-8"
          initial="hidden"
          animate="visible"
          variants={heroStaggerContainer}
        >
          <motion.p
            variants={heroFadeUp}
            className="text-white text-xs font-bold tracking-[0.3em] uppercase mb-1"
          >
            Fulshear, Texas
          </motion.p>

          <motion.h1
            variants={heroFadeUp}
            className="text-[#007CAF] text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-none mb-6"
          >
            What&apos;s<br />
            <span className="text-white">Your Goal?</span>
          </motion.h1>

          <motion.p
            variants={heroFadeUp}
            className="text-white/70 text-[13px] min-[400px]:text-sm sm:text-base md:text-lg max-w-[95%] sm:max-w-xl mx-auto mb-8"
          >
            Science-based wellness, an inspiring community, and the highest-quality equipment at our 27,000 square-foot facility.
          </motion.p>

          <motion.div
            variants={heroFadeUp}
            className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3"
          >
            <a href="https://arcofitgym.clubautomation.com/member-portal/locations/1/memberships" target="_blank" rel="noopener noreferrer" className="bg-[#007CAF] hover:brightness-110 text-white font-bold px-6 py-3 rounded transition-all hover:scale-105 tracking-wider uppercase text-xs">
              Membership Options
            </a>
            <a href="https://arcofitgym.vfpnext.com/embed/engage/form/11?Account=21585041&ClubID=1" target="_blank" rel="noopener noreferrer" className="border border-white/40 text-white/80 hover:border-white hover:text-white font-bold px-6 py-3 rounded transition-all hover:scale-105 tracking-wider uppercase text-xs">
              1-Day Pass
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* INFINITE TYPOGRAPHY MARQUEE */}
      <section className="bg-[#007CAF] py-3 md:py-4 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: typeof window !== 'undefined' && window.innerWidth < 768 ? 10 : 20 }}
        >
          {[...Array(2)].map((_, i) => (
            <span
              key={i}
              className="text-2xl md:text-4xl font-black uppercase text-white select-none px-4"
            >
              STRENGTH &bull; RECOVERY &bull; COMMUNITY &bull; SCIENCE &bull; REFORMER PILATES &bull; YOGA &bull;&nbsp;
            </span>
          ))}
        </motion.div>
      </section>

      {/* PILLARS */}
      <section className="bg-white py-10 md:py-14">
        <motion.div
          className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            {
              label: 'Community',
              desc: 'Working to achieve your goals together.',
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto mb-4 text-[#007CAF] transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              ),
            },
            {
              label: 'Science',
              desc: 'A safer, more effective path to wellness.',
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto mb-4 text-[#007CAF] transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714a2.25 2.25 0 0 0 .659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M5 14.5l-.938 2.813c-.293.879.3 1.687 1.188 1.687h13.5c.888 0 1.48-.808 1.188-1.687L19 14.5m-14 0h14" />
                </svg>
              ),
            },
            {
              label: 'Results',
              desc: 'The best equipment for optimal results.',
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto mb-4 text-[#007CAF] transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              ),
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={cardItem}
              className="text-center bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200 group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:border-[#007CAF]/50 hover:shadow-[0_8px_30px_rgba(0,124,175,0.12)]"
            >
              {item.icon}
              <h3 className="text-base font-black uppercase tracking-widest mb-2 text-slate-900">{item.label}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA BANNER */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="bg-slate-950 py-10 md:py-16 text-center overflow-hidden"
      >
        <div className="px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight mb-3 text-white">
            STOP IN FOR AN ARCO FIT TOUR!
          </h2>
          <p className="text-[#007CAF] font-bold text-sm sm:text-base tracking-wider uppercase mb-8">
            GOT QUESTIONS? WE GOT ANSWERS!
          </p>
          <a href="/contact" className="inline-block bg-[#007CAF] hover:brightness-110 text-white font-bold px-8 py-4 rounded-lg transition-all hover:-translate-y-1 tracking-wider uppercase text-sm mb-16 relative z-10">
            Schedule A Tour
          </a>
        </div>

        {/* INFINITE PHOTO SCROLLER */}
        <div className="relative w-full mt-2 mx-auto max-w-7xl overflow-hidden">
          {/* Fade out on the left, fade in on the right */}
          <div className="absolute inset-y-0 left-0 w-20 sm:w-40 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-20 sm:w-40 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>

          <div className="flex w-[max-content] animate-marquee gap-4 md:gap-6 px-2 py-6 md:py-8 hover:[animation-play-state:paused] items-center">
            {/* Render two identical groups side by side for a seamless infinite loop */}
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-4 md:gap-6">
                {[
                  'acrofit sign.jpg', 'cardio section.jpg', 'custom saunas.jpg', 'group fitness.jpeg', 'gym 1.jpg', 'gym 2.jpg', 'gym 3.jpg', 'gym 4.jpg', 'gym floor.jpg', 'locker rom.jpeg', 'revitalize.jpg', 'world class equipment.jpg', 'yoga and pilates.jpeg'
                ].map((img, j) => (
                  <div key={j} onClick={() => setActiveImage(img)} className="relative w-52 sm:w-64 md:w-80 h-36 sm:h-40 md:h-56 shrink-0 group rounded-xl border border-white/10 transition-all duration-500 md:hover:border-[#007CAF] md:hover:shadow-[0_0_30px_rgba(0,124,175,0.4)] md:hover:-translate-y-2 cursor-pointer overflow-hidden">
                    <img
                      src={`/photos/${encodeURIComponent(img)}`}
                      alt="Gym Facility"
                      className="w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SCIENCE SECTION — "The Arco Fit Way" */}
      <section className="bg-slate-50 py-12 md:py-20 px-4">
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="text-center md:text-left">
            <p className="text-[#007CAF] text-xs font-bold tracking-[0.3em] uppercase mb-4">The Arco Fit Way</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight mb-6 text-slate-900">
              A Science-Based<br />Approach to<br />
              <span className="text-[#007CAF]">Wellness</span>
            </h2>
            <ScrollRevealText text="We strive to provide a learning environment run by experienced and successful coaches. Our most important goal is to create a welcoming atmosphere and community in which everyone feels a sense of belonging." />
            <a href="https://arcofitgym.clubautomation.com/member-portal/locations/1/memberships" target="_blank" rel="noopener noreferrer" className="bg-[#007CAF] hover:brightness-110 text-white font-bold px-8 py-3 rounded transition-all hover:scale-105 tracking-wider uppercase text-xs inline-block">
              Membership Options
            </a>
          </div>
          <div>
            <div className="aspect-video bg-slate-100 rounded-xl border border-slate-200 overflow-hidden shadow-sm">
              <video
                className="w-full h-full rounded-xl object-cover"
                src="/videos/arco-drone.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                title="Arco Fit Drone Flyover"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* LEADERSHIP */}
      <section className="bg-white py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-8 md:mb-12"
          >
            <p className="text-[#007CAF] text-xs font-bold tracking-[0.3em] uppercase mb-3">Founded on Experience</p>
            <h2 className="text-2xl md:text-4xl font-black uppercase text-slate-900">Leadership Team</h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {[
              { name: 'Jeremy Koger', title: 'Founder', image: 'https://arcofitgym.com/wp-content/uploads/2025/02/Jeremy-Koger.jpg' },
              { name: 'Matt Caldwell', title: 'Founder', image: 'https://arcofitgym.com/wp-content/uploads/2025/02/Matt-Caldwell.jpg' },
              { name: 'Jason McCourt', title: 'Founder', image: 'https://arcofitgym.com/wp-content/uploads/2025/02/Jason-McCourt.jpg' },
              { name: 'Alli Vasquez', title: 'General Manager', image: 'https://arcofitgym.com/wp-content/uploads/2025/02/Alli-Vasquez.jpg' },
            ].map((person, i) => (
              <ProfileCard key={i} person={person} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="bg-slate-50 border-t border-slate-200 py-12 md:py-20 px-4">
        <motion.div
          className="max-w-7xl mx-auto flex flex-col items-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="text-center mb-10">
            <p className="text-[#007CAF] text-xs font-bold tracking-[0.3em] uppercase mb-3">Visit Us</p>
            <h2 className="text-2xl md:text-4xl font-black uppercase mb-4 text-slate-900">Our Location</h2>
            <p className="text-slate-500 text-sm">
              6527 Skyline Dr. Building C<br />
              Fulshear, TX 77441
            </p>
          </div>
          <div className="w-full max-w-5xl h-[280px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-slate-200 bg-white p-1.5 sm:p-2 shadow-sm">
            <iframe
              src="https://maps.google.com/maps?q=6527%20Skyline%20Dr.%20Building%20C%20Fulshear,%20TX%2077441&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              className="rounded-xl"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </section>

      <Footer />

      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 backdrop-blur-sm p-4 sm:p-8 cursor-zoom-out"
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              src={`/photos/${encodeURIComponent(activeImage)}`}
              alt="Gym Facility Enlarged"
              className="max-w-full max-h-full rounded-2xl shadow-2xl object-contain border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
            
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/50 hover:text-white transition-colors bg-black/50 hover:bg-black/80 rounded-full p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}

const Word = ({ children, progress, range }: { children: string, progress: any, range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return <motion.span style={{ opacity }} className="inline-block mr-[0.25em]">{children}</motion.span>;
};

const ScrollRevealText = ({ text }: { text: string }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 50%"],
  });

  const words = text.split(" ");

  return (
    <p ref={containerRef} className="text-slate-600 leading-relaxed mb-8 text-sm sm:text-base md:text-lg font-medium flex flex-wrap">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>;
      })}
    </p>
  );
};

const ProfileCard = ({ person }: { person: { name: string, title: string, image: string } }) => {
  return (
    <motion.div
      variants={cardItem}
      className="text-center group cursor-pointer"
    >
      <div className="w-full aspect-square bg-slate-100 rounded-xl border border-slate-200 mb-3 md:mb-4 overflow-hidden transition-all duration-500 md:group-hover:border-[#007CAF] md:group-hover:shadow-[0_0_30px_rgba(0,124,175,0.3)] md:group-hover:-translate-y-2">
        <motion.img 
          src={person.image} 
          alt={person.name} 
          className="w-full h-full object-cover origin-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
        />
      </div>
      <h3 className="font-bold text-xs sm:text-sm uppercase tracking-wider text-slate-900 transition-colors duration-300 md:group-hover:text-[#007CAF]">{person.name}</h3>
      <p className="text-slate-400 text-xs mt-1 transition-colors duration-300 md:group-hover:text-slate-600">{person.title}</p>
    </motion.div>
  );
};
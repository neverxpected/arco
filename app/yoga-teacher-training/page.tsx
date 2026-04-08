'use client';

import { useEffect, useRef } from 'react';
import Footer from '../components/Footer';

const curriculum = [
  { title: 'Yoga History & Philosophy', desc: 'Explore the roots of yoga through classical texts, including the Yoga Sutras of Patanjali and the Bhagavad Gita.', icon: '📜' },
  { title: 'Sanskrit', desc: 'Gain familiarity with key Sanskrit terms, chants, and posture names to honor the tradition.', icon: '🕉️' },
  { title: 'Meditation & Pranayama', desc: 'Develop a daily meditation and breathwork practice. Learn classical pranayama techniques that balance the nervous system.', icon: '🧘' },
  { title: 'Ashtanga Vinyasa Yoga', desc: 'Study the Primary Series with a focus on breath, bandhas, and drishti for discipline, strength, and mindfulness.', icon: '🔥' },
  { title: 'Functional Anatomy & Physiology', desc: 'Understand joint structure, muscle function, and energetic pathways to make your teaching safe, intelligent, and inclusive.', icon: '🦴' },
  { title: 'Asana, Alignment & Assists', desc: 'Deepen your understanding of asana through a functional movement perspective. Learn hands-on assists safely.', icon: '🤲' },
  { title: 'Yin Yoga & Sound Healing', desc: 'Access deeper connective tissues and emotional layers. Experience the healing power of singing bowls, gongs, and mantra.', icon: '🔔' },
];

const requiredReading = [
  'Bhagavad Gita translated by Graham M. Schweig',
  'The Heart of Yoga by T.K.V. Desikachar',
  'Breath by James Nestor',
  'Light on Yoga by B.K.S Iyengar',
  "Man's Search For Meaning by Viktor Frankl",
  'Yoga Anatomy by Leslie Kaminoff',
  'Ashtanga Yoga: The Practice Manual by David Swenson',
];

export default function YogaTeacherTrainingPage() {
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
    <main className="bg-white text-slate-900">
      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="text-xl font-black tracking-tight"><span className="text-white">ARCO</span><span className="text-[#007CAF]">FIT</span></a>
          <div className="hidden md:flex items-center gap-6 text-xs font-medium tracking-widest uppercase text-white/70">
            <a href="/" className="hover:text-[#007CAF] transition-colors">Home</a>
            <div className="relative group">
              <a href="/group-fitness" className="hover:text-[#007CAF] transition-colors flex items-center gap-1">Group Fitness<svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg></a>
              <div className="absolute top-full left-0 mt-2 w-48 bg-black/95 backdrop-blur-md border border-slate-200 rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                <a href="/group-fitness" className="block px-4 py-2 text-white/60 hover:text-[#007CAF] hover:bg-slate-100 transition-colors normal-case tracking-normal text-xs">Group Fitness</a>
                <a href="/reformer-pilates" className="block px-4 py-2 text-white/60 hover:text-[#007CAF] hover:bg-slate-100 transition-colors normal-case tracking-normal text-xs">Reformer Pilates</a>
                <a href="/yoga-teacher-training" className="block px-4 py-2 text-[#007CAF] hover:bg-slate-100 transition-colors normal-case tracking-normal text-xs">Yoga Teacher Training</a>
                <a href="/schedule" className="block px-4 py-2 text-white/60 hover:text-[#007CAF] hover:bg-slate-100 transition-colors normal-case tracking-normal text-xs">Schedule</a>
              </div>
            </div>
            <a href="/amenities" className="hover:text-[#007CAF] transition-colors">Amenities</a>
            <a href="https://arcofitgym.clubautomation.com/member-portal/locations/1/memberships" target="_blank" rel="noopener noreferrer" className="hover:text-[#007CAF] transition-colors">Membership</a>
            <a href="/about-us" className="hover:text-[#007CAF] transition-colors">About</a>
            <a href="/events" className="hover:text-[#007CAF] transition-colors">Events</a>
          </div>
          <a href="tel:3465532726" className="bg-[#007CAF] hover:brightness-110 text-white text-xs font-bold px-4 py-2 rounded transition-colors tracking-wider">346-553-ARCO</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#007CAF]/5 via-transparent to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <p className="text-[#007CAF] text-xs font-bold tracking-[0.3em] uppercase mb-4 opacity-0 animate-[fadeUp_0.8s_ease_0.2s_forwards]">200-Hour Certification</p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase leading-none mb-6 opacity-0 animate-[fadeUp_0.8s_ease_0.4s_forwards]">
            Yoga Teacher <span className="text-[#007CAF]">Training</span>
          </h1>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto mb-8 opacity-0 animate-[fadeUp_0.8s_ease_0.6s_forwards]">
            Awaken the teacher within. A transformative program designed to deepen your practice and empower you to confidently lead others on their yoga journey.
          </p>
          <a href="https://arcofitgym.clubautomation.com/calendar/event-info?id=10661" target="_blank" rel="noopener noreferrer" className="bg-[#007CAF] hover:brightness-110 text-white font-bold px-8 py-3 rounded transition-all hover:scale-105 tracking-wider uppercase text-xs inline-block opacity-0 animate-[fadeUp_0.8s_ease_0.8s_forwards]">
            Register Now
          </a>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-slate-50 py-20 px-4 border-y border-slate-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <p className="text-[#007CAF] text-xs font-bold tracking-[0.3em] uppercase mb-3">The Program</p>
            <h2 className="text-3xl sm:text-4xl font-black uppercase mb-6 drop-shadow-sm leading-[1.1]">Ancient Wisdom,<br /> <span className="text-[#007CAF]">Modern Approach</span></h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-4">Immerse yourself in a transformative 200-hour Yoga Teacher Training designed to deepen your practice and empower you with the tools to confidently lead others on their yoga journey.</p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">This comprehensive training weaves together the ancient wisdom of yoga with a functional, modern approach to movement, mindfulness, and teaching. Whether you aspire to teach or simply wish to enrich your own practice, this training offers a powerful journey of self-discovery, connection, and embodied wisdom.</p>
          </div>
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: '200ms' }}>
            <div className="rounded-xl overflow-hidden border border-slate-200 aspect-video md:aspect-square lg:aspect-video">
              <img src="/photos/yoga%201.jpg" alt="Yoga practice at Arco Fit" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center mb-14">
            <p className="text-[#007CAF] text-xs font-bold tracking-[0.3em] uppercase mb-3">What You&apos;ll Learn</p>
            <h2 className="text-3xl sm:text-4xl font-black uppercase">Curriculum</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {curriculum.map((item, i) => (
              <div key={i} className="reveal opacity-0 translate-y-8 transition-all duration-700 group" style={{ transitionDelay: `${(i % 6) * 80}ms` }}>
                <div className="h-full border border-gray-200 rounded-xl overflow-hidden flex flex-col transition-all duration-500 hover:border-[#007CAF]/60 hover:shadow-[0_0_20px_rgba(0,124,175,0.1)] hover:-translate-y-1">
                  {/* Dark Top */}
                  <div className="bg-[#111111] p-5">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <h3 className="text-white font-bold text-sm uppercase tracking-wider group-hover:text-[#007CAF] transition-colors duration-300">{item.title}</h3>
                    </div>
                  </div>
                  {/* Light Bottom */}
                  <div className="bg-white p-5 pt-4 flex-grow">
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEACHERS */}
      <section className="bg-slate-50 py-20 px-4 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center mb-14">
            <p className="text-[#007CAF] text-xs font-bold tracking-[0.3em] uppercase mb-3">Your Guides</p>
            <h2 className="text-3xl sm:text-4xl font-black uppercase">About Your <span className="text-[#007CAF]">Teachers</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: 'Samantha Walker', creds: 'E-RYT 500, RPYT', bio: 'Samantha began practicing and teaching yoga at Stephen F. Austin State University in 2010. Her practice is deeply rooted in Ashtanga Vinyasa Yoga and Vipassana Meditation. She has taught yoga classes and trained yoga teachers all over Houston since 2012. "The more we can feel, the more we can heal."' },
              { name: 'Jerrilyn Parker', creds: 'E-RYT 500, PRYT, YACEP', bio: 'Hailing from Dallas, Jerrilyn developed a consistent yoga practice after the birth of her third child. Yoga helped her recover and transform. She has taught Jerrilyn that transformation can be experienced in the body and the mind through breathing.' },
            ].map((t, i) => (
              <div key={i} className="reveal opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="bg-white border border-gray-200 rounded-xl p-8">
                  <h3 className="text-gray-900 font-bold text-lg mb-1">{t.name}</h3>
                  <p className="text-[#007CAF] text-xs font-bold tracking-wider mb-4">{t.creds}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{t.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DATES & COST */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center mb-14">
            <p className="text-[#007CAF] text-xs font-bold tracking-[0.3em] uppercase mb-3">Details</p>
            <h2 className="text-3xl sm:text-4xl font-black uppercase">Dates, Schedule & <span className="text-[#007CAF]">Cost</span></h2>
          </div>
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 grid sm:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h3 className="font-bold text-sm uppercase tracking-wider text-[#007CAF] mb-4">Schedule</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">January – May 2026</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">2 weekends a month: Saturdays & Sundays, 9am – 5pm</p>
              <p className="text-gray-600 text-sm leading-relaxed">+ 2 YTT faculty-led classes per week (in-person)</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h3 className="font-bold text-sm uppercase tracking-wider text-[#007CAF] mb-4">Pricing</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex justify-between"><span>Non-member</span><span className="font-bold text-gray-900">$3,400</span></li>
                <li className="flex justify-between"><span>Member</span><span className="font-bold text-gray-900">$3,100</span></li>
                <li className="flex justify-between"><span>Early bird discount</span><span className="text-[#007CAF]">−$100</span></li>
                <li className="flex justify-between"><span>Paid in full discount</span><span className="text-[#007CAF]">−$200</span></li>
              </ul>
              <p className="text-gray-400 text-xs mt-4">Includes unlimited yoga for the duration of training.</p>
            </div>
          </div>
        </div>
      </section>

      {/* READING LIST */}
      <section className="bg-slate-50 py-16 px-4 border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <h3 className="font-bold text-sm uppercase tracking-wider text-[#007CAF] mb-6 text-center">Required Reading</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {requiredReading.map((book, i) => (
                <div key={i} className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-4 py-3">
                  <span className="text-[#007CAF]">📖</span>
                  <span className="text-gray-600 text-sm">{book}</span>
                </div>
              ))}
            </div>
            <p className="text-slate-300 text-xs text-center mt-4">Cost of books is not included in tuition.</p>
          </div>
        </div>
      </section>

      {/* CERTIFICATION */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center reveal opacity-0 translate-y-8 transition-all duration-700">
          <img 
            src="https://arcofitgym.com/wp-content/uploads/2026/01/RYS200-300x300.png" 
            alt="RYS 200 Certification" 
            className="w-24 h-24 mx-auto mb-6 invert brightness-[2.5] hue-rotate-[190deg] saturate-[2.5] opacity-90 style-mix-blend-screen" 
            style={{ mixBlendMode: 'screen' }}
          />
          <p className="text-slate-500 text-sm leading-relaxed max-w-2xl mx-auto">After completing the 200-Hour Arco Fit Yoga Teacher Training program, you will be eligible to obtain your Registered Yoga Teacher 200-Hour Certificate (RYT-200) from Yoga Alliance.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-slate-50 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase mb-4">Begin Your <span className="text-[#007CAF]">Journey</span></h2>
          <p className="text-slate-500 text-sm sm:text-base mb-8 max-w-xl mx-auto">Step onto the mat. Step into your calling. For questions, reach out at Samantha.Walker@arcofitgym.com</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://arcofitgym.clubautomation.com/calendar/event-info?id=10661" target="_blank" rel="noopener noreferrer" className="bg-[#007CAF] hover:brightness-110 text-white font-bold px-8 py-3 rounded transition-all hover:scale-105 tracking-wider uppercase text-xs">Register Now</a>
            <a href="/group-fitness" className="border border-white/20 hover:border-white/40 text-white font-bold px-8 py-3 rounded transition-all hover:scale-105 tracking-wider uppercase text-xs">All Group Fitness</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

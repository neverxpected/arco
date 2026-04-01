'use client';

import { useEffect, useRef, useState } from 'react';
import Footer from '../components/Footer';

interface Amenity {
  title: string;
  description: string;
  icon: string;
  image?: string;
  imagePosition?: string;
  details?: string[];
}

const amenities: Amenity[] = [
  {
    title: 'Gym Floor',
    description: 'State-of-the-art training facility boasting an unparalleled gym floor stocked with top-tier strength training equipment.',
    icon: '🏋️',
    image: '/photos/gym floor.jpg',
  },
  {
    title: 'World Class Equipment',
    description: 'Premium gear designed to optimize your strength and performance goals from the best brands in the industry.',
    icon: '⚙️',
    image: '/photos/world class equipment.jpg',
    details: ['Arsenal Strength','Watson','Prime','Atlantis','Panatta','Sorinex','Rogers','Booty Builder','Matrix'],
  },
  {
    title: 'Revitalize Nutrition Bar',
    description: 'Carefully curated selection of nutrition products designed to support your body\'s innate capacity to rebuild.',
    icon: '🥤',
    image: '/photos/revitalize.jpg',
    imagePosition: 'object-top',
    details: ['Vitamins & Supplements', 'Handcrafted Smoothies', 'Health-conscious snacks and refreshments'],
  },
  {
    title: 'Kids Club',
    description: 'Age-specific areas for infants (12 weeks+), toddlers, and children up to 11 years old.',
    icon: '👶',
    image: '/photos/kids club.jpg',
    details: ['Age-specific areas (infants, toddlers, 5 and up)', 'Infant add-on: $40/child', 'Kids Club add-on: $25/child', 'Mon-Fri: 8am-1pm & 4pm-8pm', 'Sat: 8am-2pm | Sun: 11am-3pm'],
  },
  {
    title: 'Locker Rooms',
    description: 'Sleek and contemporary modern spaces to accommodate changing, showering and storing belongings.',
    icon: '🚿',
    image: '/photos/locker rom.jpeg',
  },
  {
    title: 'Custom Saunas',
    description: 'Custom separate men\'s and women\'s dry saunas! Oversized to provide plenty of space for all.',
    icon: '🧖',
    image: '/photos/custom saunas.jpg',
  },
  {
    title: 'Student Athlete Training',
    description: 'Structured programs for young athletes ages 8–17 focusing on coordination, speed, strength, and sport-specific conditioning.',
    icon: '🎽',
    image: 'https://i.ytimg.com/vi/pNzP_ZWGP9Y/hqdefault.jpg',
    details: ['Little Legends (Ages 8-12): Mon & Wed at 5:30 PM', 'Arco Fit Elites (Ages 12-17): Tue & Thu at 7:00 PM', 'Limited to 12 spots per session'],
  },
  {
    title: 'Yoga & Pilates',
    description: 'Yoga and Mat Pilates included in membership. Reformer Pilates available in 5:1 group or private 1:1 sessions.',
    icon: '🧘',
    image: '/photos/yoga and pilates.jpeg',
  },
  {
    title: 'Group Fitness',
    description: 'Over 20 group fitness classes spanning strength, HIIT, yoga, Pilates, dance, and conditioning.',
    icon: '👥',
    image: '/photos/group fitness.jpeg',
  },
  {
    title: 'Cardio Section',
    description: 'Cutting-edge technology meets unparalleled comfort. Every workout session is as enjoyable as it is effective.',
    icon: '🏃',
    image: '/photos/cardio section.jpg',
  },
  {
    title: 'Posing Room',
    description: 'Private posing room with mirrors from all angles and hi-fi Bluetooth speaker system for a personalized experience.',
    icon: '📸',
    image: 'https://arcofitgym.com/wp-content/uploads/2025/04/0Z3A7247a.jpg',
  },
];

const galleryImages = [
  { src: 'https://arcofitgym.com/wp-content/uploads/2025/04/0Z3A7185a-800x800.jpg', alt: 'Free weights area' },
  { src: 'https://arcofitgym.com/wp-content/uploads/2025/04/0Z3A7187a-800x800.jpg', alt: 'Cardio section' },
  { src: 'https://arcofitgym.com/wp-content/uploads/2025/04/0Z3A7204a-800x800.jpg', alt: 'Strength machines' },
  { src: 'https://arcofitgym.com/wp-content/uploads/2025/04/0Z3A7191a-800x800.jpg', alt: 'Gym interior' },
  { src: 'https://arcofitgym.com/wp-content/uploads/2025/04/0Z3A7192a-800x800.jpg', alt: 'Training floor' },
  { src: 'https://arcofitgym.com/wp-content/uploads/2025/04/0Z3A7194b-800x800.jpg', alt: 'Equipment area' },
  { src: 'https://arcofitgym.com/wp-content/uploads/2025/04/0Z3A7225a-800x800.jpg', alt: 'Kids Club' },
  { src: 'https://arcofitgym.com/wp-content/uploads/2025/04/0Z3A7213a-800x800.jpg', alt: 'Kids Club interior' },
];

export default function AmenitiesPage() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [activeFloor, setActiveFloor] = useState<'1st' | '2nd'>('1st');

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('animate-in'); }); },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <main className="bg-black text-white">
      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="text-xl font-black tracking-tight"><span className="text-white">ARCO</span><span className="text-[#0096C7]">FIT</span></a>
          <div className="hidden md:flex items-center gap-6 text-xs font-medium tracking-widest uppercase text-white/70">
            <a href="/" className="hover:text-[#0096C7] transition-colors">Home</a>
            <div className="relative group">
              <a href="/group-fitness" className="hover:text-[#0096C7] transition-colors flex items-center gap-1">Group Fitness<svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg></a>
              <div className="absolute top-full left-0 mt-2 w-48 bg-black/95 backdrop-blur-md border border-white/10 rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                <a href="/group-fitness" className="block px-4 py-2 text-white/60 hover:text-[#0096C7] hover:bg-white/5 transition-colors normal-case tracking-normal text-xs">Group Fitness</a>
                <a href="/reformer-pilates" className="block px-4 py-2 text-white/60 hover:text-[#0096C7] hover:bg-white/5 transition-colors normal-case tracking-normal text-xs">Reformer Pilates</a>
                <a href="/yoga-teacher-training" className="block px-4 py-2 text-white/60 hover:text-[#0096C7] hover:bg-white/5 transition-colors normal-case tracking-normal text-xs">Yoga Teacher Training</a>
                <a href="/schedule" className="block px-4 py-2 text-white/60 hover:text-[#0096C7] hover:bg-white/5 transition-colors normal-case tracking-normal text-xs">Schedule</a>
              </div>
            </div>
            <a href="/amenities" className="text-[#0096C7]">Amenities</a>
            <a href="https://arcofitgym.clubautomation.com/member-portal/locations/1/memberships" target="_blank" rel="noopener noreferrer" className="hover:text-[#0096C7] transition-colors">Membership</a>
            <a href="/about-us" className="hover:text-[#0096C7] transition-colors">About</a>
            <a href="/events" className="hover:text-[#0096C7] transition-colors">Events</a>
          </div>
          <a href="tel:3465532726" className="bg-[#0096C7] hover:bg-[#0077A8] text-white text-xs font-bold px-4 py-2 rounded transition-colors tracking-wider">346-553-ARCO</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0096C7]/10 via-transparent to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <p className="text-[#0096C7] text-xs font-bold tracking-[0.3em] uppercase mb-4 opacity-0 animate-[fadeUp_0.8s_ease_0.2s_forwards]">27,000 Square Feet</p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase leading-none mb-6 opacity-0 animate-[fadeUp_0.8s_ease_0.4s_forwards]">
            Our <span className="text-[#0096C7]">Amenities</span>
          </h1>
          <p className="text-white/50 text-sm sm:text-base max-w-2xl mx-auto opacity-0 animate-[fadeUp_0.8s_ease_0.6s_forwards]">
            State-of-the-art equipment, premium facilities, and everything you need for science-backed fitness under one roof.
          </p>
        </div>
      </section>

      {/* FLOOR PLANS */}
      <section className="bg-[#0A0A0A] py-16 px-4 border-y border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center mb-8">
            <p className="text-[#0096C7] text-xs font-bold tracking-[0.3em] uppercase mb-3">Building Tour</p>
            <h2 className="text-2xl sm:text-3xl font-black uppercase">Floor <span className="text-[#0096C7]">Plans</span></h2>
          </div>
          <div className="flex justify-center gap-3 mb-8">
            {(['1st', '2nd'] as const).map((f) => (
              <button key={f} onClick={() => setActiveFloor(f)} className={`text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-full border transition-all duration-300 ${activeFloor === f ? 'bg-[#0096C7] border-[#0096C7] text-white' : 'bg-white/5 border-white/10 text-white/50 hover:border-white/30 hover:text-white/80'}`}>
                {f} Floor
              </button>
            ))}
          </div>
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <div className="rounded-xl overflow-hidden border border-white/10 bg-white">
              <img
                src={activeFloor === '1st' ? 'https://arcofitgym.com/wp-content/uploads/2024/03/arco_fit-building_tour_first_floor-rev01.jpg' : 'https://arcofitgym.com/wp-content/uploads/2024/07/arco_fit-building_tour_second_floor-rev01.jpg'}
                alt={`${activeFloor} Floor Plan`}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AMENITIES GRID */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center mb-14">
            <p className="text-[#0096C7] text-xs font-bold tracking-[0.3em] uppercase mb-3">Everything You Need</p>
            <h2 className="text-3xl sm:text-4xl font-black uppercase">Facilities & <span className="text-[#0096C7]">Services</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((a, i) => (
              <div key={i} className="reveal opacity-0 translate-y-8 transition-all duration-700 group" style={{ transitionDelay: `${(i % 6) * 80}ms` }}>
                <div className="h-full bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden transition-all duration-500 hover:border-[#0096C7]/40 hover:bg-white/[0.06] hover:shadow-[0_0_25px_rgba(0,150,199,0.1)] hover:-translate-y-1">
                  {a.image && (
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={a.image} 
                        alt={a.title} 
                        className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${a.imagePosition || 'object-center'}`} 
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{a.icon}</span>
                      <h3 className="font-bold text-sm uppercase tracking-wider group-hover:text-[#0096C7] transition-colors duration-300">{a.title}</h3>
                    </div>
                    <p className="text-white/40 text-sm leading-relaxed mb-3">{a.description}</p>
                    {a.details && (
                      <ul className="space-y-1">
                        {a.details.map((d, j) => (
                          <li key={j} className="text-white/30 text-xs flex items-start gap-2">
                            <span className="text-[#0096C7] mt-0.5">•</span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPMENT BRANDS */}
      <section className="bg-[#0A0A0A] py-16 px-4 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center mb-10">
            <p className="text-[#0096C7] text-xs font-bold tracking-[0.3em] uppercase mb-3">Premium Partners</p>
            <h2 className="text-2xl sm:text-3xl font-black uppercase">Equipment <span className="text-[#0096C7]">Brands</span></h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4 reveal opacity-0 translate-y-8 transition-all duration-700">
            {['Arsenal Strength','Watson','Prime','Atlantis','Panatta','Sorinex','Rogers','Booty Builder','Matrix'].map((brand, i) => (
              <div key={i} className="bg-white/[0.05] border border-white/10 rounded-lg px-6 py-3 text-white/60 text-sm font-medium tracking-wider uppercase">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center mb-14">
            <p className="text-[#0096C7] text-xs font-bold tracking-[0.3em] uppercase mb-3">See The Space</p>
            <h2 className="text-3xl sm:text-4xl font-black uppercase">Photo <span className="text-[#0096C7]">Gallery</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {galleryImages.map((img, i) => (
              <div key={i} className="reveal opacity-0 translate-y-8 transition-all duration-700 group overflow-hidden rounded-lg" style={{ transitionDelay: `${(i % 8) * 60}ms` }}>
                <img src={img.src} alt={img.alt} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#0A0A0A] py-16 px-4 border-y border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '27K', label: 'Square Feet' },
            { number: '9+', label: 'Equipment Brands' },
            { number: '2', label: 'Floors' },
            { number: '20+', label: 'Group Classes' },
          ].map((stat, i) => (
            <div key={i} className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0096C7] mb-2">{stat.number}</div>
              <p className="text-white/40 text-xs sm:text-sm uppercase tracking-widest font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="reveal opacity-0 translate-y-8 transition-all duration-700 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase mb-4">Experience It <span className="text-[#0096C7]">Yourself</span></h2>
          <p className="text-white/50 text-sm sm:text-base mb-8 max-w-xl mx-auto">Visit Arco Fit and see our 27,000 sq ft facility in person. Your strongest self starts here.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:3465532726" className="bg-[#0096C7] hover:bg-[#0077A8] text-white font-bold px-8 py-3 rounded transition-all hover:scale-105 tracking-wider uppercase text-xs">Contact Us</a>
            <a href="/" className="border border-white/20 hover:border-white/40 text-white font-bold px-8 py-3 rounded transition-all hover:scale-105 tracking-wider uppercase text-xs">Back to Home</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

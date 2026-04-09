'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Amenity {
  title: string;
  description: string;
  icon: string;
  image?: string;
  imagePosition?: string;
  details?: string[];
  id?: string;
}

const amenities: Amenity[] = [
  {
    title: 'Gym Floor',
    description: 'State-of-the-art training facility boasting an unparalleled gym floor stocked with top-tier strength training equipment.',
    icon: '🏋️',
    image: '/photos/gym floor.jpg',
    id: 'main-workout-area',
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
    id: 'kids-club',
  },
  {
    title: 'Locker Rooms',
    description: 'Sleek and contemporary modern spaces to accommodate changing, showering and storing belongings.',
    icon: '🚿',
    image: '/photos/locker rom.jpeg',
    id: 'locker-rooms',
  },
  {
    title: 'Custom Saunas',
    description: 'Custom separate men\'s and women\'s dry saunas! Oversized to provide plenty of space for all.',
    icon: '🧖',
    image: '/photos/custom saunas.jpg',
    id: 'saunas',
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
    id: 'pilates',
  },
  {
    title: 'Group Fitness',
    description: 'Over 20 group fitness classes spanning strength, HIIT, yoga, Pilates, dance, and conditioning.',
    icon: '👥',
    image: '/photos/group fitness.jpeg',
    id: 'group-exercise',
  },
  {
    title: 'Cardio Section',
    description: 'Cutting-edge technology meets unparalleled comfort. Every workout session is as enjoyable as it is effective.',
    icon: '🏃',
    image: '/photos/cardio section.jpg',
    id: 'cardio-section',
  },
  {
    title: 'Posing Room',
    description: 'Private posing room with mirrors from all angles and hi-fi Bluetooth speaker system for a personalized experience.',
    icon: '📸',
    image: 'https://arcofitgym.com/wp-content/uploads/2025/04/0Z3A7247a.jpg',
    id: 'posing-room',
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

/* ────────────────────────────────────────────────────
   Interactive Map Zone Definitions
   Coordinates are percentages of the image dimensions
   ──────────────────────────────────────────────────── */
interface MapZone {
  id: string;
  label: string;
  /** SVG polygon points as "x1,y1 x2,y2 ..." in % of viewBox */
  points: string;
  /** Center position for label (percentage) */
  labelX: number;
  labelY: number;
  /** Scroll target element ID */
  targetId: string;
}

const mapZones1st: MapZone[] = [
  {
    id: 'zone-workout',
    label: 'Main Workout Area',
    // L-shaped: large gym floor left, narrows at bottom-right
    points: '1,7 54,7 54,55 48,55 48,96 1,96',
    labelX: 27,
    labelY: 48,
    targetId: 'main-workout-area',
  },
  {
    id: 'zone-lockers',
    label: 'Locker Rooms',
    // Women's + Men's locker rooms upper right
    points: '60,5 91,5 91,49 60,49',
    labelX: 75.5,
    labelY: 27,
    targetId: 'locker-rooms',
  },
  {
    id: 'zone-kids',
    label: "Kid's Club",
    // Lower right incl. infant/toddler areas - L-shape
    points: '56,52 91,52 91,96 56,96',
    labelX: 73,
    labelY: 74,
    targetId: 'kids-club',
  },
  {
    id: 'zone-saunas',
    label: 'Saunas',
    // Small rooms far upper right
    points: '92,5 98,5 98,23 92,23',
    labelX: 95,
    labelY: 14,
    targetId: 'saunas',
  },
];

const mapZones2nd: MapZone[] = [
  {
    id: 'zone-group-exercise',
    label: 'Group Exercise',
    // Upper-right enclosed room
    points: '63,4 96,4 96,33 63,33',
    labelX: 79.5,
    labelY: 18,
    targetId: 'group-exercise',
  },
  {
    id: 'zone-cardio',
    label: 'Cardio Section',
    // Equipment rows, center-bottom
    points: '54,41 81,41 81,96 54,96',
    labelX: 67.5,
    labelY: 68,
    targetId: 'cardio-section',
  },
  {
    id: 'zone-posing',
    label: 'Posing Room',
    // Small room right side, between group exercise and pilates
    points: '83,34 97,34 97,57 83,57',
    labelX: 90,
    labelY: 45,
    targetId: 'posing-room',
  },
  {
    id: 'zone-pilates',
    label: 'Pilates',
    // Lower-right corner room
    points: '83,60 97,60 97,96 83,96',
    labelX: 90,
    labelY: 78,
    targetId: 'pilates',
  },
];

export default function AmenitiesPage() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [activeFloor, setActiveFloor] = useState<'1st' | '2nd'>('1st');
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);
  const [activeZone, setActiveZone] = useState<string | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('animate-in'); }); },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  const handleZoneClick = useCallback((targetId: string, zoneId: string) => {
    setActiveZone(zoneId);
    const el = document.getElementById(targetId);
    if (el) {
      const navHeight = 64;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight - 24,
        behavior: 'smooth',
      });
    }
    // Clear active state after scroll animation
    setTimeout(() => setActiveZone(null), 1500);
  }, []);

  return (
    <main className="bg-white text-slate-900">
      <Navbar activePage="amenities" />

      {/* HERO */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#007CAF]/5 via-transparent to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <p className="text-[#007CAF] text-xs font-bold tracking-[0.3em] uppercase mb-4 opacity-0 animate-[fadeUp_0.8s_ease_0.2s_forwards]">27,000 Square Feet</p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase leading-none mb-6 opacity-0 animate-[fadeUp_0.8s_ease_0.4s_forwards]">
            Our <span className="text-[#007CAF]">Amenities</span>
          </h1>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto opacity-0 animate-[fadeUp_0.8s_ease_0.6s_forwards]">
            State-of-the-art equipment, premium facilities, and everything you need for science-backed fitness under one roof.
          </p>
        </div>
      </section>

      {/* INTERACTIVE FLOOR PLAN */}
      <section className="bg-slate-50 py-16 px-4 border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center mb-8">
            <p className="text-[#007CAF] text-xs font-bold tracking-[0.3em] uppercase mb-3">Building Tour</p>
            <h2 className="text-2xl sm:text-3xl font-black uppercase">Floor <span className="text-[#007CAF]">Plans</span></h2>
            <p className="text-slate-400 text-xs mt-3 max-w-md mx-auto">Click on a highlighted area to explore that section</p>
          </div>
          <div className="flex justify-center gap-3 mb-8">
            {(['1st', '2nd'] as const).map((f) => (
              <button key={f} onClick={() => setActiveFloor(f)} className={`text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-full border transition-all duration-300 ${activeFloor === f ? 'bg-[#007CAF] border-[#007CAF] text-white' : 'bg-slate-100 border-slate-200 text-white/50 hover:border-white/30 hover:text-white/80'}`}>
                {f} Floor
              </button>
            ))}
          </div>
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <div className="rounded-xl overflow-hidden border border-slate-200 bg-black relative group/map">
              {/* Floor plan base image */}
              <img
                src={activeFloor === '1st' ? 'https://arcofitgym.com/wp-content/uploads/2024/03/arco_fit-building_tour_first_floor-rev01.jpg' : 'https://arcofitgym.com/wp-content/uploads/2024/07/arco_fit-building_tour_second_floor-rev01.jpg'}
                alt={`${activeFloor} Floor Plan`}
                className="w-full h-auto block"
                draggable={false}
              />

              {/* Interactive SVG overlay */}
              {(() => {
                const zones = activeFloor === '1st' ? mapZones1st : mapZones2nd;
                return (
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  style={{ pointerEvents: 'none' }}
                >
                  {zones.map((zone) => {
                    const isHovered = hoveredZone === zone.id;
                    const isActive = activeZone === zone.id;
                    return (
                      <g key={zone.id} style={{ pointerEvents: 'auto', cursor: 'pointer' }}>
                        {/* Clickable zone polygon */}
                        <polygon
                          points={zone.points}
                          fill={isActive ? 'rgba(255,255,255,0.18)' : isHovered ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0)'}
                          stroke={isActive ? '#007CAF' : isHovered ? 'rgba(0,150,199,0.6)' : 'transparent'}
                          strokeWidth="0.3"
                          className="transition-all duration-300"
                          onMouseEnter={() => setHoveredZone(zone.id)}
                          onMouseLeave={() => setHoveredZone(null)}
                          onClick={() => handleZoneClick(zone.targetId, zone.id)}
                        />
                        {/* Label */}
                        <text
                          x={zone.labelX}
                          y={zone.labelY}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fill={isActive || isHovered ? '#ffffff' : 'rgba(255,255,255,0.7)'}
                          fontSize="2"
                          fontWeight="700"
                          fontFamily="system-ui, -apple-system, sans-serif"
                          letterSpacing="0.1"
                          className="transition-all duration-300 pointer-events-none select-none uppercase"
                          style={{
                            textShadow: '0 0 8px rgba(0,0,0,0.9), 0 0 16px rgba(0,0,0,0.7)',
                            paintOrder: 'stroke',
                            stroke: 'rgba(0,0,0,0.5)',
                            strokeWidth: '0.3px',
                          }}
                        >
                          {zone.label}
                        </text>
                        {/* Pulsing dot indicator */}
                        {(isHovered || isActive) && (
                          <>
                            <circle
                              cx={zone.labelX}
                              cy={zone.labelY + 4}
                              r="0.8"
                              fill="#007CAF"
                              className="animate-ping"
                              opacity="0.6"
                            />
                            <circle
                              cx={zone.labelX}
                              cy={zone.labelY + 4}
                              r="0.5"
                              fill="#007CAF"
                            />
                          </>
                        )}
                      </g>
                    );
                  })}
                </svg>
                );
              })()}

              {/* Hover instruction overlay */}
              {!hoveredZone && !activeZone && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 flex items-center gap-2 opacity-0 group-hover/map:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-[#007CAF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.591" />
                  </svg>
                  <span className="text-white/60 text-[10px] font-medium tracking-wider uppercase">Click a zone to explore</span>
                </div>
              )}
            </div>

            {/* Zone legend */}
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {(activeFloor === '1st' ? mapZones1st : mapZones2nd).map((zone) => (
                <button
                  key={zone.id}
                  onClick={() => handleZoneClick(zone.targetId, zone.id)}
                  onMouseEnter={() => setHoveredZone(zone.id)}
                  onMouseLeave={() => setHoveredZone(null)}
                  className={`text-[10px] sm:text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border transition-all duration-300 ${
                    hoveredZone === zone.id || activeZone === zone.id
                      ? 'bg-[#007CAF]/20 border-[#007CAF]/50 text-[#007CAF]'
                      : 'bg-slate-100 border-slate-200 text-white/50 hover:border-white/20 hover:text-white/70'
                  }`}
                >
                  {zone.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AMENITIES GRID */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center mb-14">
            <p className="text-[#007CAF] text-xs font-bold tracking-[0.3em] uppercase mb-3">Everything You Need</p>
            <h2 className="text-3xl sm:text-4xl font-black uppercase">Facilities & <span className="text-[#007CAF]">Services</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((a, i) => (
              <div
                key={i}
                id={a.id}
                className={`reveal opacity-0 translate-y-8 transition-all duration-700 group ${a.id ? 'scroll-mt-24' : ''}`}
                style={{ transitionDelay: `${(i % 6) * 80}ms` }}
              >
                <div className="h-full bg-slate-50 border border-slate-200 rounded-xl overflow-hidden transition-all duration-500 hover:border-[#007CAF]/40  hover:shadow-[0_0_20px_rgba(0,124,175,0.1)] hover:-translate-y-1">
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
                      <h3 className="font-bold text-sm uppercase tracking-wider group-hover:text-[#007CAF] transition-colors duration-300">{a.title}</h3>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed mb-3">{a.description}</p>
                    {a.details && (
                      <ul className="space-y-1">
                        {a.details.map((d, j) => (
                          <li key={j} className="text-slate-300 text-xs flex items-start gap-2">
                            <span className="text-[#007CAF] mt-0.5">•</span>
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
      <section className="bg-slate-50 py-16 px-4 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center mb-10">
            <p className="text-[#007CAF] text-xs font-bold tracking-[0.3em] uppercase mb-3">Premium Partners</p>
            <h2 className="text-2xl sm:text-3xl font-black uppercase">Equipment <span className="text-[#007CAF]">Brands</span></h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4 reveal opacity-0 translate-y-8 transition-all duration-700">
            {['Arsenal Strength','Watson','Prime','Atlantis','Panatta','Sorinex','Rogers','Booty Builder','Matrix'].map((brand, i) => (
              <div key={i} className="bg-white/[0.05] border border-slate-200 rounded-lg px-6 py-3 text-slate-500 text-sm font-medium tracking-wider uppercase">
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
            <p className="text-[#007CAF] text-xs font-bold tracking-[0.3em] uppercase mb-3">See The Space</p>
            <h2 className="text-3xl sm:text-4xl font-black uppercase">Photo <span className="text-[#007CAF]">Gallery</span></h2>
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
      <section className="bg-slate-50 py-16 px-4 border-y border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '27K', label: 'Square Feet' },
            { number: '9+', label: 'Equipment Brands' },
            { number: '2', label: 'Floors' },
            { number: '20+', label: 'Group Classes' },
          ].map((stat, i) => (
            <div key={i} className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#007CAF] mb-2">{stat.number}</div>
              <p className="text-slate-400 text-xs sm:text-sm uppercase tracking-widest font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="reveal opacity-0 translate-y-8 transition-all duration-700 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase mb-4">Experience It <span className="text-[#007CAF]">Yourself</span></h2>
          <p className="text-slate-500 text-sm sm:text-base mb-8 max-w-xl mx-auto">Visit Arco Fit and see our 27,000 sq ft facility in person. Your strongest self starts here.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:3465532726" className="bg-[#007CAF] hover:brightness-110 text-white font-bold px-8 py-3 rounded transition-all hover:scale-105 tracking-wider uppercase text-xs">Contact Us</a>
            <a href="/" className="border border-white/20 hover:border-white/40 text-white font-bold px-8 py-3 rounded transition-all hover:scale-105 tracking-wider uppercase text-xs">Back to Home</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

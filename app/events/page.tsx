'use client';

import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const events = [
  {
    title: "Dick's Sporting Goods + Arco Fit Xtreme 45 Workout",
    date: 'Sunday, February 8',
    time: '7:30 AM',
    description: 'Join us for a high-energy Extreme45 workout in partnership with Dick\'s Sporting Goods. This event is designed to push you, motivate you, and bring the community together for a fun and challenging sweat session.',
    category: 'Workout',
  },
  {
    title: 'Valentine\'s Yoga Couples Class + Kids Club Art Night',
    date: 'Saturday, February 14',
    time: '5:00 PM – 7:00 PM',
    description: 'Couples Yoga Class: A relaxing, connection-focused yoga class designed for couples. Cost: $50 per couple. Kids Club Art Painting Event: A creative art night for kids happening at the same time — perfect for parents who want to enjoy date night while their kids have fun. Cost: $25 per child.',
    category: 'Yoga',
    price: '$50/couple · $25/child',
  },
  {
    title: 'Valentine\'s Reformer Pilates Event — The Art of Two',
    date: 'Sunday, February 15',
    time: '12:30 PM – 2:00 PM',
    description: 'An intimate couple\'s reformer Pilates experience designed to deepen connection through movement, breath, and presence. Reserve early.',
    category: 'Pilates',
    price: '$75 per couple',
  },
  {
    title: 'Youth Sports Program Demos',
    date: 'Saturday, February 21 & Saturday, February 28',
    time: '1:00 PM – 2:00 PM',
    description: 'Join us for free youth sports demo sessions as we prepare to relaunch our Youth Sports Program on March 9. These demos are a great way for kids to meet our coaches, learn the structure of the program, and get moving.',
    category: 'Youth',
    price: 'Free',
  },
  {
    title: 'Full Sap Moon Sound Bath',
    date: 'Sunday, March 1',
    time: '5:00 PM – 7:00 PM',
    description: 'A guided journey designed to help you let go of what no longer serves you and reconnect with your inner rhythm. Bathed in the full moon\'s potent energy, you\'ll be immersed in healing soundscapes created with crystal bowls, gongs, chimes, and other vibrational instruments.',
    category: 'Wellness',
    price: '$30 members · $40 non-members',
  },
  {
    title: 'Foundations of Flight: An All-Levels Arm Balance Workshop',
    date: 'Saturday, March 21',
    time: '1:00 PM – 3:00 PM',
    description: 'Whether you\'re just starting your arm balance journey or looking to refine your skills, this all-levels workshop will give you the tools, confidence, and strength to explore flight in your yoga practice. No previous arm balance experience required!',
    category: 'Yoga',
    price: '$25 members · $35 non-members',
  },
  {
    title: 'Bro-lates',
    date: 'Saturday, March 28',
    time: '9:00 AM – 10:00 AM',
    description: 'A performance-focused reformer class designed for lifters who want to move and train at a higher level. Improve hip and shoulder mobility, build deep core strength, and develop stability that carries over directly to heavier, safer lifts. Beginner friendly.',
    category: 'Pilates',
  },
  {
    title: 'Full Pink Moon Sound Bath',
    date: 'Thursday, April 3',
    time: '5:00 PM – 7:00 PM',
    description: 'A restorative sound immersion designed to calm the nervous system and deepen inner awareness.',
    category: 'Wellness',
    price: '$30 members · $40 non-members',
  },
  {
    title: 'Pilates in the Parking Lot @ Chick-fil-A',
    date: 'Friday, April 11',
    time: '7:30 AM – 10:00 AM',
    description: 'A community morning designed for all ages. Enjoy a Pilates class while the kids join in playful movement and spring-themed activities. Located @ Chick-fil-A Fulshear (1463).',
    category: 'Community',
  },
  {
    title: 'The Art of Stillness',
    date: 'Friday, April 18',
    time: '1:00 PM – 3:00 PM',
    description: "This workshop is designed for both beginners and experienced meditators, offering a supportive space to explore stillness without pressure or perfection. You'll be guided to observe your thoughts with compassion and deepen your connection to the breath.",
    category: 'Wellness',
    price: '$25 members · $35 non-members',
  },
  {
    title: 'Paint & Plant Workshop for Kids',
    date: 'Friday, April 25',
    time: '2:00 PM – 4:00 PM',
    description: "Kids will decorate their own flowerpot, plant a sunflower seed to nurture and watch grow at home, and wrap up the afternoon with a cheerful spring scavenger hunt. It's a hands-on, creative experience that blends art, nature, and playful exploration.",
    category: 'Youth',
    price: '$20 per child',
  },
  {
    title: 'Self Defense Workshop',
    date: 'Friday, April 25',
    time: '12:00 PM – 1:00 PM',
    description: 'A practical, hands-on session focused on situational awareness and personal safety. Learn how to recognize potential threats, build confidence, and apply simple, effective techniques for real-world situations. Designed for all experience levels.',
    category: 'Workshop',
    price: '$25 members · $35 non-members',
  },
];

const categoryColors: Record<string, string> = {
  Workout: 'bg-red-500/20 text-red-400 border-red-500/30',
  Yoga: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  Pilates: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
  Youth: 'bg-green-500/20 text-green-400 border-green-500/30',
  Wellness: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  Community: 'bg-[#007CAF]/20 text-[#007CAF] border-[#007CAF]/30',
  Workshop: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
};

export default function EventsPage() {
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

      <Navbar activePage="events" />

      {/* HERO */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#007CAF]/5 via-transparent to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <p className="text-[#007CAF] text-xs font-bold tracking-[0.3em] uppercase mb-4 opacity-0 animate-[fadeUp_0.8s_ease_0.2s_forwards]">
            What&apos;s Happening at Arco Fit
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase leading-none mb-6 opacity-0 animate-[fadeUp_0.8s_ease_0.4s_forwards]">
            Upcoming<br />
            <span className="text-[#007CAF]">Events</span>
          </h1>
          <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto opacity-0 animate-[fadeUp_0.8s_ease_0.6s_forwards]">
            From high-energy workouts to restorative sound baths, there&apos;s something for everyone. Join the Arco Fit community.
          </p>
        </div>
      </section>

      {/* EVENTS GRID */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <div
              key={i}
              className="reveal opacity-0 translate-y-8 transition-all duration-700 group"
              style={{ transitionDelay: `${(i % 6) * 80}ms` }}
            >
              <div className="h-full border border-gray-200 rounded-xl overflow-hidden flex flex-col transition-all duration-500 hover:border-[#007CAF]/60 hover:shadow-[0_0_20px_rgba(0,124,175,0.1)] hover:-translate-y-1">
                {/* Dark Top */}
                <div className="bg-[#111111] p-6 pb-5">
                  {/* Category & Price */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${categoryColors[event.category] || 'bg-white/10 text-white/60 border-white/20'}`}>
                      {event.category}
                    </span>
                    {event.price && (
                      <span className="text-slate-400 text-xs font-medium">{event.price}</span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-white text-base sm:text-lg font-bold mb-3 group-hover:text-[#007CAF] transition-colors duration-300 leading-tight">
                    {event.title}
                  </h3>

                  {/* Date & Time */}
                  <div className="flex items-center gap-2 text-white/50 text-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#007CAF] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>
                    <span>{event.date}</span>
                    <span className="text-white/20">|</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#007CAF] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span>{event.time}</span>
                  </div>
                </div>

                {/* Light Bottom */}
                <div className="bg-white p-6 pt-5 flex-grow">
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-slate-50 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase mb-4">
            Don&apos;t Miss Out
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mb-8 max-w-lg mx-auto">
            Follow us on social media to stay updated on all our upcoming events and community activities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://www.instagram.com/arcofitgym" target="_blank" rel="noopener noreferrer" className="bg-[#007CAF] hover:brightness-110 text-white font-bold px-8 py-3 rounded transition-all hover:scale-105 tracking-wider uppercase text-xs inline-flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              Follow on Instagram
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

'use client';

import { useState } from 'react';

interface NavbarProps {
  activePage?: string;
}

export default function Navbar({ activePage = '' }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (page: string) => activePage === page;
  const linkClass = (page: string) =>
    isActive(page) ? 'text-[#0096C7]' : 'hover:text-[#0096C7] transition-colors';

  const dropdownItems = [
    { label: 'Group Fitness', href: '/group-fitness' },
    { label: 'Reformer Pilates', href: '/reformer-pilates' },
    { label: 'Yoga Teacher Training', href: '/yoga-teacher-training' },
    { label: 'Schedule', href: '/schedule' },
  ];

  const mobileLinks = [
    { label: 'Home', href: '/' },
    { label: 'Group Fitness', href: '/group-fitness' },
    { label: 'Reformer Pilates', href: '/reformer-pilates' },
    { label: 'Yoga Teacher Training', href: '/yoga-teacher-training' },
    { label: 'Schedule', href: '/schedule' },
    { label: 'Amenities', href: '/amenities' },
    { label: 'About', href: '/about-us' },
    { label: 'Events', href: '/events' },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="text-xl font-black tracking-tight">
            <span className="text-white">ARCO</span>
            <span className="text-[#0096C7]">FIT</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-xs font-medium tracking-widest uppercase text-white/70">
            <a href="/" className={linkClass('home')}>Home</a>
            <div className="relative group">
              <a href="/group-fitness" className={`${linkClass('group-fitness')} flex items-center gap-1`}>
                Group Fitness
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
              </a>
              <div className="absolute top-full left-0 mt-2 w-48 bg-black/95 backdrop-blur-md border border-white/10 rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                {dropdownItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-2 hover:bg-white/5 transition-colors normal-case tracking-normal text-xs ${isActive(item.href.slice(1)) ? 'text-[#0096C7]' : 'text-white/60 hover:text-[#0096C7]'}`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            <a href="/amenities" className={linkClass('amenities')}>Amenities</a>
            <a href="https://arcofitgym.clubautomation.com/member-portal/locations/1/memberships" target="_blank" rel="noopener noreferrer" className="hover:text-[#0096C7] transition-colors">Membership</a>
            <a href="/about-us" className={linkClass('about-us')}>About</a>
            <a href="/events" className={linkClass('events')}>Events</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:3465532726" className="hidden sm:inline-flex bg-[#0096C7] hover:bg-[#0077A8] text-white text-xs font-bold px-4 py-2 rounded transition-colors tracking-wider">
              346-553-ARCO
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5"
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[4px]' : ''}`} />
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[4px]' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-md transition-all duration-500 md:hidden flex flex-col ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="pt-20 px-6 flex-1 overflow-y-auto">
          <div className="flex flex-col gap-1">
            {mobileLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-bold uppercase tracking-wider py-3 border-b border-white/10 transition-colors ${isActive(link.href === '/' ? 'home' : link.href.slice(1)) ? 'text-[#0096C7]' : 'text-white/80 hover:text-[#0096C7]'}`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3">
            <a href="https://arcofitgym.clubautomation.com/member-portal/locations/1/memberships" target="_blank" rel="noopener noreferrer" className="bg-[#0096C7] hover:bg-[#0077A8] text-white font-bold px-6 py-3 rounded text-center tracking-wider uppercase text-xs transition-colors">
              Membership Options
            </a>
            <a href="tel:3465532726" className="border border-white/20 text-white font-bold px-6 py-3 rounded text-center tracking-wider uppercase text-xs">
              346-553-ARCO
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

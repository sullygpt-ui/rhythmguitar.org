'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const learnPages = [
  { href: '/learn-rhythm-guitar', label: 'Learn Rhythm Guitar' },
  { href: '/strumming-patterns', label: 'Strumming Patterns' },
  { href: '/guitar-counting', label: 'Guitar Counting' },
  { href: '/palm-muting-technique', label: 'Palm Muting' },
  { href: '/chord-changes', label: 'Chord Changes' },
  { href: '/reading-chord-charts', label: 'Reading Chord Charts' },
  { href: '/syncopation-guitar', label: 'Syncopation' },
  { href: '/rhythm-vs-lead-guitar', label: 'Rhythm vs Lead' },
  { href: '/guitar-timing-tips', label: 'Timing Tips' },
  { href: '/best-rhythm-guitar-course', label: 'Best Course Review' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-dark-900/80 backdrop-blur-xl border-b border-white/5">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Image src="/images/logo.svg" alt="RhythmGuitar.org" width={200} height={32} className="h-8 w-auto" priority />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="relative" onMouseEnter={() => setLearnOpen(true)} onMouseLeave={() => setLearnOpen(false)}>
            <button className="text-gray-400 hover:text-gray-200 transition-colors flex items-center gap-1 relative group py-2">
              Learn
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
            </button>
            {learnOpen && (
              <div className="absolute top-full left-0 mt-1 w-64 glass-card rounded-xl shadow-2xl py-2 border border-white/10">
                {learnPages.map((p) => (
                  <Link key={p.href} href={p.href} className="block px-4 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all">
                    {p.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {[
            { href: '/courses', label: 'Courses' },
            { href: '/rhythm-guitar-courses-compared', label: 'Compare' },
            { href: '/reviews', label: 'Reviews' },
            { href: '/about', label: 'About' },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="text-gray-400 hover:text-gray-200 transition-colors relative group py-2">
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
          <Link href="/go/rrg1" className="bg-accent hover:bg-accent-light text-dark-900 font-bold px-5 py-2 rounded-lg transition-all text-sm glow-accent hover:scale-105">
            Get the Course
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-gray-400 hover:text-white transition-colors" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass-card border-t border-white/5 px-4 py-6 space-y-3 animate-fade-in-up">
          <p className="text-xs text-primary uppercase tracking-widest font-semibold mb-2">Learn</p>
          {learnPages.map((p) => (
            <Link key={p.href} href={p.href} className="block text-gray-300 hover:text-accent text-sm py-1.5 pl-2 border-l border-dark-500 hover:border-accent transition-all" onClick={() => setMobileOpen(false)}>
              {p.label}
            </Link>
          ))}
          <div className="string-divider my-4" />
          <Link href="/courses" className="block text-gray-300 hover:text-accent py-1.5 font-medium" onClick={() => setMobileOpen(false)}>Courses</Link>
          <Link href="/rhythm-guitar-courses-compared" className="block text-gray-300 hover:text-accent py-1.5 font-medium" onClick={() => setMobileOpen(false)}>Compare</Link>
          <Link href="/reviews" className="block text-gray-300 hover:text-accent py-1.5 font-medium" onClick={() => setMobileOpen(false)}>Reviews</Link>
          <Link href="/about" className="block text-gray-300 hover:text-accent py-1.5 font-medium" onClick={() => setMobileOpen(false)}>About</Link>
          <Link href="/go/rrg1" className="block bg-accent text-dark-900 font-bold px-4 py-3 rounded-lg text-center mt-4 glow-accent" onClick={() => setMobileOpen(false)}>
            Get the Course →
          </Link>
        </div>
      )}
    </header>
  );
}

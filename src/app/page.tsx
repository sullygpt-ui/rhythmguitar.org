import Link from 'next/link';
import Image from 'next/image';
import TestimonialCard from '@/components/TestimonialCard';
import AffiliateCTA from '@/components/AffiliateCTA';
import NewsletterForm from '@/components/NewsletterForm';
import { reviews } from '@/lib/reviews';

const benefits = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
    title: 'Counting & Timing',
    desc: 'Learn to count quarter notes, eighth notes, and sixteenths with confidence.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Strumming Technique',
    desc: 'Master proper strumming mechanics for clean, consistent sound.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Popular Patterns',
    desc: '10+ strumming patterns used in thousands of hit songs.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: 'Rhythm Grid',
    desc: 'Visualize rhythm with the powerful rhythm grid system.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
      </svg>
    ),
    title: 'Chord Changes',
    desc: 'Switch chords smoothly without breaking your rhythm.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Reading Chord Sheets',
    desc: 'Read and play from chord charts and lead sheets like a pro.',
  },
];

const audiences = [
  { label: 'Beginners', desc: 'Just starting guitar and want to build solid foundations from day one.' },
  { label: 'Intermediate Players', desc: 'Can play chords but struggle with timing, feel, or keeping a steady beat.' },
  { label: 'Performers & Band Members', desc: 'Need reliable rhythm skills to play with others confidently.' },
  { label: 'Acoustic & Electric', desc: 'Techniques work on any guitar — acoustic, electric, classical.' },
];

const stats = [
  { value: '700K+', label: 'Musicians' },
  { value: '40M+', label: 'Views' },
  { value: '5-Star', label: 'Rated' },
  { value: '22', label: 'Lessons' },
];

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'RhythmGuitar.org',
    url: 'https://rhythmguitar.org',
    description: 'Your complete resource for mastering rhythm guitar.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://rhythmguitar.org/blog?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/hero-guitar.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          quality={80}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 via-dark-900/70 to-dark-900" />
        {/* Grid pattern */}
        <div className="absolute inset-0 rhythm-grid-bg opacity-30" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center py-20">
          <div className="animate-fade-in-up">
            <p className="text-primary-light text-sm font-semibold uppercase tracking-widest mb-6">The #1 Rhythm Guitar Resource Online</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight">
              Master <span className="gradient-text">Rhythm Guitar</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Rhythm is the foundation of everything you play. Learn to count, strum, and groove with confidence — whether you&apos;re just starting out or leveling up.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up stagger-2">
            <Link href="/go/rrg1" className="bg-accent hover:bg-accent-light text-dark-900 font-bold px-10 py-4 rounded-xl text-lg transition-all glow-accent hover:scale-105 inline-flex items-center justify-center gap-2">
              Start Learning Today
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
            <Link href="/learn-rhythm-guitar" className="border border-white/10 hover:border-primary/50 text-gray-300 font-semibold px-10 py-4 rounded-xl text-lg transition-all backdrop-blur-sm hover:bg-white/5">
              Free Beginner Guide
            </Link>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto animate-fade-in-up stagger-3">
            {stats.map((s) => (
              <div key={s.label} className="glass-card rounded-xl px-4 py-3">
                <div className="text-2xl font-bold gradient-text">{s.value}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900 to-transparent" />
      </section>

      {/* Featured Course */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <div className="gradient-border">
          <div className="glass-card rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center relative">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-accent pulse-dot" />
                <span className="text-accent text-sm font-semibold uppercase tracking-widest">Featured Course</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-4">Real Rhythm Guitar Level 1</h2>
              <p className="text-gray-400 mb-6 leading-relaxed text-lg">
                22 video lessons that take you from zero to confident rhythm player. Learn counting, strumming patterns, chord changes, and how to read chord sheets — all with a printable PDF workbook.
              </p>
              <ul className="text-gray-400 space-y-3 mb-8">
                {['22 HD video lessons', 'Printable PDF workbook', 'Lifetime access', '5-star rated by students'].map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/go/rrg1" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 glow-primary text-lg">
                Get the Course — $45
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </Link>
            </div>

            <div className="w-full md:w-96 h-64 md:h-80 rounded-2xl overflow-hidden relative flex-shrink-0">
              <Image
                src="/images/electric-guitar.jpg"
                alt="Electric guitar"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-primary/10" />
              {/* Price badge */}
              <div className="absolute top-4 right-4 bg-accent text-dark-900 font-bold text-2xl px-4 py-2 rounded-xl glow-accent">
                $45
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-4">What You&apos;ll Learn</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">Essential rhythm skills that transform your playing.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="glass-card rounded-xl p-7 hover:glow-primary transition-all duration-300 group cursor-default">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center text-primary mb-5 group-hover:scale-110 transition-transform">
                {b.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-200 mb-2">{b.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 relative overflow-hidden">
        <Image
          src="/images/playing-guitar.jpg"
          alt=""
          fill
          className="object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-dark-800/90" />
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-4">What Students Say</h2>
            <p className="text-gray-400 text-lg">Real reviews from real guitarists.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.slice(0, 4).map((r) => (
              <TestimonialCard key={r.author} review={r} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/reviews" className="text-primary hover:text-primary-light transition-colors font-semibold inline-flex items-center gap-2">
              Read All Reviews
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-200 text-center mb-16">Who This Is For</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {audiences.map((a) => (
            <div key={a.label} className="gradient-border">
              <div className="glass-card rounded-2xl p-6 h-full">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C9.5 2 7 4 6 7c-1 3-.5 6.5 1 9.5S11 22 12 22s3-1.5 5-4.5 2-6.5 1-9.5C17 4 14.5 2 12 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-200 mb-1 text-lg">{a.label}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 relative overflow-hidden">
        <Image
          src="/images/studio.jpg"
          alt=""
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900/95 to-dark-900" />
        <div className="relative max-w-xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-4">Join 1,000+ Guitarists</h2>
          <p className="text-gray-400 mb-8 text-lg">Free exercises, pattern breakdowns, and practice tips. No spam.</p>
          <div className="glass-card rounded-xl p-6">
            <NewsletterForm />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-10 max-w-4xl mx-auto px-4">
        <AffiliateCTA />
      </section>
    </>
  );
}

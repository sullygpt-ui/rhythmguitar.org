import Link from 'next/link';
import Image from 'next/image';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Rhythm Guitar Blog — Articles & Guides',
  description: 'Browse all rhythm guitar articles: strumming patterns, counting guides, technique tips, and course reviews.',
  path: '/blog',
});

const images = [
  '/images/acoustic-guitar.jpg',
  '/images/fretboard.jpg',
  '/images/electric-guitar.jpg',
  '/images/guitar-amp.jpg',
  '/images/playing-guitar.jpg',
  '/images/studio.jpg',
  '/images/hero-guitar.jpg',
  '/images/acoustic-guitar.jpg',
  '/images/fretboard.jpg',
  '/images/electric-guitar.jpg',
];

const posts = [
  { href: '/learn-rhythm-guitar', title: 'How to Learn Rhythm Guitar: The Complete Beginner\'s Guide', excerpt: 'Everything you need to know to start your rhythm guitar journey — from what rhythm guitar is to building your first practice routine.', date: '2026-02-15' },
  { href: '/strumming-patterns', title: '10 Essential Strumming Patterns Every Guitarist Should Know', excerpt: 'From basic downstrokes to advanced syncopated patterns, these 10 patterns will cover 90% of the songs you want to play.', date: '2026-02-10' },
  { href: '/guitar-counting', title: 'How to Count Rhythm on Guitar: Quarter Notes to Sixteenths', excerpt: 'Master the counting system that every musician uses. Learn quarter notes, eighth notes, sixteenths, and how to internalize the beat.', date: '2026-02-05' },
  { href: '/palm-muting-technique', title: 'Palm Muting on Guitar: Technique, Tips & Exercises', excerpt: 'The definitive guide to palm muting — hand position, pressure control, and exercises for rock, metal, and acoustic styles.', date: '2026-01-30' },
  { href: '/chord-changes', title: 'How to Change Chords Faster on Guitar: 7 Proven Techniques', excerpt: 'Struggling with chord transitions? These 7 techniques will help you switch chords smoothly without losing the beat.', date: '2026-01-25' },
  { href: '/reading-chord-charts', title: 'How to Read Guitar Chord Charts & Sheets Like a Pro', excerpt: 'Decode chord diagrams, lead sheets, and rhythm notation. Everything you need to walk into a jam session prepared.', date: '2026-01-20' },
  { href: '/syncopation-guitar', title: 'Syncopation on Guitar: What It Is and How to Master It', excerpt: 'Syncopation is what makes music groove. Learn what it is, hear examples in funk, reggae, and rock, and practice exercises to develop your feel.', date: '2026-01-15' },
  { href: '/rhythm-vs-lead-guitar', title: 'Rhythm Guitar vs Lead Guitar: What\'s the Difference?', excerpt: 'A clear breakdown of rhythm and lead guitar roles, skills, and which one you should learn first.', date: '2026-01-10' },
  { href: '/guitar-timing-tips', title: '10 Tips to Improve Your Guitar Timing and Feel', excerpt: 'Practical advice for developing rock-solid timing — from metronome exercises to playing with backing tracks.', date: '2026-01-05' },
  { href: '/best-rhythm-guitar-course', title: 'Best Rhythm Guitar Course Online (2026 Review)', excerpt: 'We reviewed the top rhythm guitar courses available in 2026. Here\'s our in-depth look at what\'s worth your money.', date: '2026-01-01' },
];

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-200 mb-4">Rhythm Guitar <span className="gradient-text">Blog</span></h1>
        <p className="text-gray-400 text-lg">Guides, techniques, and tips to improve your rhythm playing.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post, i) => (
          <Link key={post.href} href={post.href} className="glass-card rounded-xl overflow-hidden group hover:glow-primary transition-all duration-300">
            {/* Image */}
            <div className="h-48 relative overflow-hidden">
              <Image
                src={images[i]}
                alt=""
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent" />
              <time className="absolute bottom-3 left-4 text-xs text-gray-400 bg-dark-900/60 backdrop-blur-sm px-2 py-1 rounded">{post.date}</time>
            </div>
            <div className="p-6">
              <h2 className="text-lg font-bold text-gray-200 mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
              <p className="text-sm text-gray-400 leading-relaxed mb-3">{post.excerpt}</p>
              <span className="text-sm text-primary font-semibold inline-flex items-center gap-1">
                Read More
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

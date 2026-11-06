import Link from 'next/link';
import Image from 'next/image';
import { createMetadata } from '@/lib/metadata';
import { publishedOn } from '@/lib/publishDates';

export const metadata = createMetadata({
  title: 'Rhythm Guitar Blog — Articles & Guides',
  description: 'Browse all rhythm guitar articles: strumming patterns, counting guides, technique tips, and course reviews.',
  path: '/blog',
});

const posts = [
  { href: '/rhythm-guitar-courses-compared', image: '/images/studio.jpg', title: 'Rhythm Guitar Courses Compared: Which One Is Right for You?', excerpt: 'A side-by-side look at the rhythm guitar courses worth considering — what each one covers, who it suits, and what it costs.' },
  { href: '/learn-rhythm-guitar', image: '/images/acoustic-guitar.jpg', title: 'How to Learn Rhythm Guitar: The Complete Beginner\'s Guide', excerpt: 'Everything you need to know to start your rhythm guitar journey — from what rhythm guitar is to building your first practice routine.' },
  { href: '/strumming-patterns', image: '/images/fretboard.jpg', title: '10 Essential Strumming Patterns Every Guitarist Should Know', excerpt: 'From basic downstrokes to advanced syncopated patterns, these 10 patterns will cover 90% of the songs you want to play.' },
  { href: '/guitar-counting', image: '/images/electric-guitar.jpg', title: 'How to Count Rhythm on Guitar: Quarter Notes to Sixteenths', excerpt: 'Master the counting system that every musician uses. Learn quarter notes, eighth notes, sixteenths, and how to internalize the beat.' },
  { href: '/palm-muting-technique', image: '/images/guitar-amp.jpg', title: 'Palm Muting on Guitar: Technique, Tips & Exercises', excerpt: 'The definitive guide to palm muting — hand position, pressure control, and exercises for rock, metal, and acoustic styles.' },
  { href: '/chord-changes', image: '/images/playing-guitar.jpg', title: 'How to Change Chords Faster on Guitar: 7 Proven Techniques', excerpt: 'Struggling with chord transitions? These 7 techniques will help you switch chords smoothly without losing the beat.' },
  { href: '/reading-chord-charts', image: '/images/hero-guitar.jpg', title: 'How to Read Guitar Chord Charts & Sheets Like a Pro', excerpt: 'Decode chord diagrams, lead sheets, and rhythm notation. Everything you need to walk into a jam session prepared.' },
  { href: '/syncopation-guitar', image: '/images/acoustic-guitar.jpg', title: 'Syncopation on Guitar: What It Is and How to Master It', excerpt: 'Syncopation is what makes music groove. Learn what it is, hear examples in funk, reggae, and rock, and practice exercises to develop your feel.' },
  { href: '/rhythm-vs-lead-guitar', image: '/images/fretboard.jpg', title: 'Rhythm Guitar vs Lead Guitar: What\'s the Difference?', excerpt: 'A clear breakdown of rhythm and lead guitar roles, skills, and which one you should learn first.' },
  { href: '/guitar-timing-tips', image: '/images/electric-guitar.jpg', title: '10 Tips to Improve Your Guitar Timing and Feel', excerpt: 'Practical advice for developing rock-solid timing — from metronome exercises to playing with backing tracks.' },
  { href: '/best-rhythm-guitar-course', image: '/images/studio.jpg', title: 'Best Rhythm Guitar Course Online (2026 Review)', excerpt: 'We reviewed the top rhythm guitar courses available in 2026. Here\'s our in-depth look at what\'s worth your money.' },
];

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-200 mb-4">Rhythm Guitar <span className="gradient-text">Blog</span></h1>
        <p className="text-gray-400 text-lg">Guides, techniques, and tips to improve your rhythm playing.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <Link key={post.href} href={post.href} className="glass-card rounded-xl overflow-hidden group hover:glow-primary transition-all duration-300">
            {/* Image */}
            <div className="h-48 relative overflow-hidden">
              <Image
                src={post.image}
                alt=""
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent" />
              <time className="absolute bottom-3 left-4 text-xs text-gray-400 bg-dark-900/60 backdrop-blur-sm px-2 py-1 rounded">{publishedOn(post.href)}</time>
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

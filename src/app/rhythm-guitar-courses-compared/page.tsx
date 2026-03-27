import { createMetadata } from '@/lib/metadata';
import AffiliateCTA from '@/components/AffiliateCTA';
import FAQSection from '@/components/FAQSection';
import Link from 'next/link';

export const metadata = createMetadata({
  title: 'Rhythm Guitar Courses Compared: Which One Is Right for You? (2026)',
  description: 'We compare the top rhythm guitar courses and learning platforms — Real Rhythm Guitar, JustinGuitar, Fender Play, Guitar Tricks, Yousician, and YouTube. Find out which one fits your goals and budget.',
  path: '/rhythm-guitar-courses-compared',
});

const courses = [
  {
    name: 'Real Rhythm Guitar Level 1',
    provider: 'Signals Music Studio',
    price: '$45 one-time',
    format: '22 video lessons + printable PDF',
    focus: 'Rhythm-specific',
    level: 'Beginner to Advanced',
    pros: ['Laser-focused on rhythm skills', 'Structured curriculum from counting to complex patterns', 'Printable PDF workbook with exercises', 'Lifetime access — no subscription', 'Physical book bundle available ($60)', '5-star rated by students'],
    cons: ['Rhythm only — no lead guitar, scales, or theory beyond rhythm', 'Self-paced (no live feedback)'],
    verdict: 'The best option if rhythm guitar is your specific goal. No other course covers counting, strumming, syncopation, and chord sheet reading in this much depth.',
    rating: 5,
    slug: 'rrg1',
    highlight: true,
  },
  {
    name: 'JustinGuitar',
    provider: 'Justin Sandercoe',
    price: 'Free (donations welcome)',
    format: 'Video lessons on website + app',
    focus: 'General guitar (beginner-focused)',
    level: 'Beginner to Intermediate',
    pros: ['Completely free', 'Massive library of lessons', 'Well-structured beginner course', 'Great community and support'],
    cons: ['Rhythm is covered briefly — not a deep dive', 'Can feel overwhelming with so much content', 'No dedicated rhythm-specific curriculum', 'App has premium features behind paywall'],
    verdict: 'Excellent free resource for absolute beginners learning guitar overall. If rhythm is your weak spot, you will need to supplement with something more focused.',
    rating: 4,
    slug: null,
    highlight: false,
  },
  {
    name: 'Fender Play',
    provider: 'Fender',
    price: '$14.99/month',
    format: 'App + video lessons',
    focus: 'General guitar (song-based)',
    level: 'Beginner',
    pros: ['Learn by playing real songs', 'Clean, modern interface', 'Covers guitar, bass, and ukulele', 'Good for staying motivated'],
    cons: ['Very shallow on rhythm technique', 'Subscription adds up ($180/year)', 'Limited intermediate/advanced content', 'Song-focused — less technique drilling'],
    verdict: 'Fun way to learn songs, but you will not develop strong rhythm fundamentals here. Good as a supplement, not a primary rhythm resource.',
    rating: 3,
    slug: null,
    highlight: false,
  },
  {
    name: 'Guitar Tricks',
    provider: 'Guitar Tricks Inc.',
    price: '$19.95/month',
    format: 'Video lessons library',
    focus: 'General guitar (comprehensive)',
    level: 'Beginner to Advanced',
    pros: ['Huge library (11,000+ lessons)', 'Core Learning System for beginners', 'Genre-specific courses (blues, rock, country)', 'Song tutorials included'],
    cons: ['Rhythm is scattered across many courses', 'Subscription cost ($240/year)', 'Can feel unfocused — too many choices', 'Interface feels dated compared to newer platforms'],
    verdict: 'A solid general guitar education platform. Has rhythm content mixed into other courses, but no single dedicated rhythm curriculum.',
    rating: 3,
    slug: null,
    highlight: false,
  },
  {
    name: 'Yousician',
    provider: 'Yousician Ltd.',
    price: '$19.99/month',
    format: 'Gamified app with real-time feedback',
    focus: 'General guitar (gamified)',
    level: 'Beginner',
    pros: ['Real-time feedback via microphone', 'Gamified — makes practice fun', 'Structured daily practice routines', 'Tracks your progress'],
    cons: ['Very basic rhythm coverage', 'Gamification can prioritize speed over technique', 'Limited free tier', 'No deep rhythm-specific training'],
    verdict: 'Great for building a practice habit and getting basic timing feedback. Not a substitute for dedicated rhythm study.',
    rating: 3,
    slug: null,
    highlight: false,
  },
  {
    name: 'YouTube (Free Videos)',
    provider: 'Various creators',
    price: 'Free',
    format: 'Individual videos',
    focus: 'Varies wildly',
    level: 'All levels',
    pros: ['Completely free', 'Endless content variety', 'Can find great teachers (including Signals Music Studio)', 'Good for specific topics'],
    cons: ['No structure or curriculum', 'Quality varies enormously', 'Easy to waste hours without progress', 'No workbook, exercises, or accountability', 'Hard to know what to learn next'],
    verdict: 'YouTube is where most guitarists start, and there is excellent content there. But for systematic rhythm development, an unstructured approach leaves major gaps.',
    rating: 2,
    slug: null,
    highlight: false,
  },
];

const faqs = [
  { question: 'Which rhythm guitar course is best for complete beginners?', answer: 'Real Rhythm Guitar Level 1 is designed for beginners and takes you from counting quarter notes all the way to advanced syncopation. JustinGuitar is also excellent for absolute beginners who want to learn guitar more broadly (not just rhythm). If budget is a concern, JustinGuitar is free, while RRG1 is a one-time $45 investment.' },
  { question: 'Do I need a subscription or is there a one-time payment option?', answer: 'Real Rhythm Guitar Level 1 ($45) and the bundle with the physical book ($60) are one-time purchases with lifetime access. JustinGuitar and YouTube are free. Fender Play, Guitar Tricks, and Yousician are all subscription-based, ranging from $15-20/month.' },
  { question: 'Can I use free YouTube videos instead of a paid course?', answer: 'You can absolutely learn rhythm guitar from YouTube — Signals Music Studio has excellent free content there. However, a structured course with exercises and progression saves you significant time. Most self-taught guitarists have gaps in their rhythm fundamentals because they learned in a random order. A course like RRG1 ensures you build skills systematically.' },
  { question: 'What if I already play guitar but my rhythm is weak?', answer: 'Real Rhythm Guitar Level 1 is specifically designed for this situation. Many of its students are intermediate players who can play chords and songs but struggle with timing, strumming variety, or playing with other musicians. The course builds from basics to advanced concepts, so you can move quickly through what you know and focus on your weak areas.' },
  { question: 'Is Real Rhythm Guitar Level 1 worth $45?', answer: 'At $45 one-time (less than 3 months of most subscriptions), RRG1 offers 22 video lessons plus a printable workbook. If you compare that to Fender Play ($180/year) or Guitar Tricks ($240/year), it is significantly cheaper over time. The question is whether focused rhythm training matches your goals — if rhythm is your bottleneck, it is one of the best investments you can make.' },
  { question: 'Are there any courses that combine rhythm and lead guitar?', answer: 'Guitar Tricks and Fender Play both cover general guitar including rhythm and lead. The Signals Music Studio Theory and Songwriting Course ($270) is a comprehensive music education that includes rhythm concepts alongside melody, harmony, and arrangement. For rhythm specifically though, RRG1 goes deeper than any general course.' },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} className={`w-5 h-5 ${star <= rating ? 'text-accent' : 'text-dark-500'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function CoursesComparedPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Rhythm Guitar Courses Compared: Which One Is Right for You?',
    description: 'A detailed comparison of the best rhythm guitar courses and learning platforms available in 2026.',
    author: { '@type': 'Organization', name: 'RhythmGuitar.org' },
    publisher: { '@type': 'Organization', name: 'RhythmGuitar.org' },
    datePublished: '2026-02-27',
    dateModified: '2026-02-27',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Affiliate Disclaimer */}
      <div className="bg-dark-800 border-b border-dark-600 py-2">
        <p className="max-w-4xl mx-auto px-4 text-xs text-gray-400 text-center">
          This page contains affiliate links. We may earn a commission at no extra cost to you. <Link href="/disclaimer" className="text-primary underline">Learn more</Link>
        </p>
      </div>

      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">2026 Comparison Guide</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-6">
            Rhythm Guitar Courses <span className="gradient-text">Compared</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            There are dozens of ways to learn guitar online. But if your goal is to master <strong className="text-gray-200">rhythm</strong> specifically, your options narrow fast. We compared the top platforms so you don&apos;t have to.
          </p>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">At a Glance</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-dark-500">
                <th className="text-left py-3 px-4 text-gray-400 font-semibold">Course</th>
                <th className="text-left py-3 px-4 text-gray-400 font-semibold">Price</th>
                <th className="text-left py-3 px-4 text-gray-400 font-semibold">Format</th>
                <th className="text-left py-3 px-4 text-gray-400 font-semibold">Rhythm Focus</th>
                <th className="text-left py-3 px-4 text-gray-400 font-semibold">Rating</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.name} className={`border-b border-dark-600 ${course.highlight ? 'bg-primary/5' : ''}`}>
                  <td className="py-4 px-4">
                    <span className={`font-semibold ${course.highlight ? 'text-accent' : 'text-gray-200'}`}>{course.name}</span>
                    <span className="block text-xs text-gray-500">{course.provider}</span>
                  </td>
                  <td className="py-4 px-4 text-gray-300">{course.price}</td>
                  <td className="py-4 px-4 text-gray-400 text-xs">{course.format}</td>
                  <td className="py-4 px-4">
                    <span className={`text-xs font-semibold px-2 py-1 rounded ${course.focus === 'Rhythm-specific' ? 'bg-accent/20 text-accent' : 'bg-dark-600 text-gray-400'}`}>
                      {course.focus}
                    </span>
                  </td>
                  <td className="py-4 px-4"><StarRating rating={course.rating} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="string-divider max-w-4xl mx-auto" />

      {/* Detailed Reviews */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-12 text-center">Detailed Breakdown</h2>

        {courses.map((course, idx) => (
          <div key={course.name} className={`mb-12 ${course.highlight ? 'glass-card gradient-border' : 'glass-card'} rounded-xl p-6 md:p-8`}>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                {course.highlight && (
                  <span className="inline-block bg-accent/20 text-accent text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2">
                    Our Top Pick
                  </span>
                )}
                <h3 className="text-xl md:text-2xl font-bold text-white">{course.name}</h3>
                <p className="text-gray-400 text-sm">by {course.provider}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-accent">{course.price}</p>
                <StarRating rating={course.rating} />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-sm font-semibold text-gray-300 mb-2">Format</p>
                <p className="text-gray-400 text-sm">{course.format}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-300 mb-2">Level</p>
                <p className="text-gray-400 text-sm">{course.level}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-sm font-semibold text-green-400 mb-2">Pros</p>
                <ul className="space-y-1">
                  {course.pros.map((pro) => (
                    <li key={pro} className="text-gray-400 text-sm flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">+</span> {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-red-400 mb-2">Cons</p>
                <ul className="space-y-1">
                  {course.cons.map((con) => (
                    <li key={con} className="text-gray-400 text-sm flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">-</span> {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-dark-800/50 rounded-lg p-4 mb-4">
              <p className="text-sm font-semibold text-gray-300 mb-1">Our Verdict</p>
              <p className="text-gray-400 text-sm leading-relaxed">{course.verdict}</p>
            </div>

            {course.slug && (
              <div className="mt-4">
                <Link href={`/go/${course.slug}`} className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-dark-900 font-bold px-6 py-3 rounded-lg transition-colors">
                  Get {course.name} <span>→</span>
                </Link>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* The Key Takeaway */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <div className="glass-card gradient-border rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">The Bottom Line</h2>
          <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto mb-4">
            Most guitar courses teach a little bit of everything. That is great if you are starting from zero. But if <strong className="text-gray-200">rhythm is your bottleneck</strong> — if you struggle with timing, strumming feels stiff, or you cannot lock in with other musicians — a general course will not solve that.
          </p>
          <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto mb-6">
            <strong className="text-accent">Real Rhythm Guitar Level 1</strong> is the only course we have found that treats rhythm as a complete discipline. 22 lessons from counting basics to advanced syncopation, with a workbook full of exercises. At $45 one-time (cheaper than 3 months of any subscription), it is the most focused and cost-effective rhythm education available.
          </p>
          <AffiliateCTA />
        </div>
      </section>

      {/* Internal Links */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <h2 className="text-xl font-bold text-white mb-6">Keep Learning</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { href: '/best-rhythm-guitar-course', label: 'Full RRG1 Review' },
            { href: '/learn-rhythm-guitar', label: 'Beginner Rhythm Guide' },
            { href: '/strumming-patterns', label: '10 Essential Strumming Patterns' },
            { href: '/guitar-counting', label: 'How to Count Rhythm' },
            { href: '/chord-changes', label: 'Faster Chord Changes' },
            { href: '/syncopation-guitar', label: 'Master Syncopation' },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="glass-card rounded-lg p-4 hover:border-primary/30 transition-colors group">
              <span className="text-gray-300 group-hover:text-primary transition-colors text-sm font-medium">{link.label} →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQSection faqs={faqs} />
      </section>
    </>
  );
}

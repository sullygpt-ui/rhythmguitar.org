import Link from 'next/link';
import Image from 'next/image';
import NewsletterForm from './NewsletterForm';

export default function Footer() {
  return (
    <footer className="bg-dark-800 mt-20 relative">
      <div className="string-divider" />
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <Image src="/images/logo.svg" alt="RhythmGuitar.org" width={180} height={28} className="h-7 w-auto mb-4" />
            <p className="text-sm text-gray-400 leading-relaxed">Your complete resource for mastering rhythm guitar. Guides, courses, and tips to improve your timing and feel.</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-200 uppercase tracking-widest mb-5">Learn</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                ['/learn-rhythm-guitar', 'Beginner Guide'],
                ['/strumming-patterns', 'Strumming Patterns'],
                ['/guitar-counting', 'Counting Rhythm'],
                ['/chord-changes', 'Chord Changes'],
                ['/guitar-timing-tips', 'Timing Tips'],
                ['/blog', 'All Articles'],
              ].map(([href, label]) => (
                <li key={href}><Link href={href} className="text-gray-400 hover:text-accent transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-200 uppercase tracking-widest mb-5">Resources</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                ['/courses', 'Courses'],
                ['/reviews', 'Reviews'],
                ['/about', 'About'],
                ['/privacy', 'Privacy Policy'],
                ['/terms', 'Terms of Use'],
                ['/disclaimer', 'Affiliate Disclaimer'],
              ].map(([href, label]) => (
                <li key={href}><Link href={href} className="text-gray-400 hover:text-accent transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-200 uppercase tracking-widest mb-5">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">Get rhythm tips and exercises in your inbox.</p>
            <NewsletterForm />
          </div>
        </div>

        <div className="string-divider mt-12 mb-6" />

        <div className="text-center mb-6">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Sister Sites</p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="https://musictheory.xyz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">MusicTheory.xyz</a>
            <a href="https://freeguitarlessons.org" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">FreeGuitarLessons.org</a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} RhythmGuitar.org. All rights reserved.</p>
          <p className="text-xs text-gray-400">
            <Link href="/disclaimer" className="hover:text-accent transition-colors">Affiliate Disclosure</Link>: We may earn a commission when you purchase through our links at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
}

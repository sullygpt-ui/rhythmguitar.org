import Link from 'next/link';

export default function AffiliateCTA({
  slug = 'rrg1',
  text = 'Start Learning Today',
  className = '',
}: {
  slug?: string;
  text?: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-dark-700 to-accent/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent" />

      <div className="relative glass-card rounded-2xl p-10 text-center border border-white/10">
        {/* Pulsing dot */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-accent pulse-dot" />
          <span className="text-xs text-accent font-semibold uppercase tracking-widest">Limited Time Offer</span>
        </div>

        <h3 className="text-3xl font-bold text-gray-200 mb-4">Ready to Master Rhythm Guitar?</h3>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto leading-relaxed">
          Join thousands of guitarists who have transformed their rhythm playing with Real Rhythm Guitar. 22 video lessons, printable PDF workbook, lifetime access.
        </p>

        <Link
          href={`/go/${slug}`}
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-dark-900 font-bold px-10 py-4 rounded-xl text-lg transition-all glow-accent hover:scale-105"
        >
          {/* Guitar pick icon */}
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C9.5 2 7 4 6 7c-1 3-.5 6.5 1 9.5S11 22 12 22s3-1.5 5-4.5 2-6.5 1-9.5C17 4 14.5 2 12 2z" />
          </svg>
          {text}
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>

        <p className="text-sm text-gray-400 mt-4">Only $45 · Lifetime Access · 5-Star Rated</p>
      </div>
    </div>
  );
}

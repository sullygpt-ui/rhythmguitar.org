import type { Review } from '@/lib/reviews';

export default function TestimonialCard({ review }: { review: Review }) {
  return (
    <div className="glass-card rounded-xl p-6 hover:glow-primary transition-all duration-300 relative group">
      {/* Decorative quote mark */}
      <span className="absolute -top-2 -left-1 text-5xl text-primary/20 font-serif leading-none select-none">&ldquo;</span>

      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: review.rating }).map((_, i) => (
          <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <p className="text-gray-300 text-sm leading-relaxed mb-5">&ldquo;{review.text}&rdquo;</p>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold shadow-lg">
          {review.author[0].toUpperCase()}
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-200">{review.author}</p>
          {review.course && <p className="text-xs text-primary-light">{review.course}</p>}
        </div>
      </div>
    </div>
  );
}

import { createMetadata } from '@/lib/metadata';
import TestimonialCard from '@/components/TestimonialCard';
import AffiliateCTA from '@/components/AffiliateCTA';
import { reviews } from '@/lib/reviews';

export const metadata = createMetadata({
  title: 'Student Reviews — Real Rhythm Guitar',
  description: 'Read real reviews from students of the Real Rhythm Guitar course by Signals Music Studio. 5-star rated by guitarists worldwide.',
  path: '/reviews',
});

export default function ReviewsPage() {
  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Real Rhythm Guitar Level 1',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: avgRating,
      reviewCount: reviews.length,
      bestRating: 5,
    },
    review: reviews.map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.author },
      reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 },
      reviewBody: r.text,
    })),
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <p className="text-sm text-gray-400 mb-8 bg-dark-700/50 border border-dark-600 rounded-lg px-4 py-2 inline-block">
        📋 This page contains affiliate links. We may earn a commission at no extra cost to you.
      </p>

      <h1 className="text-4xl font-bold text-gray-200 mb-4">Student Reviews</h1>

      <div className="flex items-center gap-4 mb-12">
        <div className="text-5xl font-bold text-accent">{avgRating}</div>
        <div>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-accent text-xl">★</span>
            ))}
          </div>
          <p className="text-sm text-gray-400">{reviews.length} verified reviews</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {reviews.map((r) => (
          <TestimonialCard key={r.author} review={r} />
        ))}
      </div>

      <AffiliateCTA />
    </div>
  );
}

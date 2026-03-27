import { createMetadata } from '@/lib/metadata';
import AffiliateCTA from '@/components/AffiliateCTA';

export const metadata = createMetadata({
  title: 'About RhythmGuitar.org',
  description: 'Learn about RhythmGuitar.org, your go-to resource for rhythm guitar education, and about Jake Lizzio of Signals Music Studio.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-200 mb-8">About RhythmGuitar.org</h1>

      <div className="prose-rhythm">
        <h2>Our Mission</h2>
        <p>
          RhythmGuitar.org is a dedicated resource hub for guitarists who want to master the most important (and most overlooked) skill in music: <strong>rhythm</strong>. We publish free guides, pattern breakdowns, timing exercises, and honest course reviews to help players at every level build rock-solid rhythm foundations.
        </p>
        <p>
          Whether you&apos;re a complete beginner learning your first strum or an intermediate player looking to tighten up your timing, you&apos;ll find practical, actionable content here that you can apply to your playing today.
        </p>

        <h2>About Jake Lizzio & Signals Music Studio</h2>
        <p>
          The courses we recommend are created by <strong>Jake Lizzio</strong>, the guitarist and educator behind <strong>Signals Music Studio</strong> — one of the most respected guitar education channels on YouTube.
        </p>
        <ul>
          <li><strong>700,000+</strong> musicians in the community</li>
          <li><strong>40,000,000+</strong> video views across platforms</li>
          <li><strong>20+ years</strong> of teaching experience</li>
          <li><strong>5-star</strong> average rating from students</li>
        </ul>
        <p>
          Jake&apos;s teaching philosophy is simple: no fluff, no flashy production gimmicks — just clear, practical instruction that gets results. His Real Rhythm Guitar courses are the most comprehensive rhythm-focused guitar courses available online, and they&apos;re the courses we most frequently recommend to our readers.
        </p>

        <h2>Affiliate Disclosure</h2>
        <p>
          RhythmGuitar.org is an affiliate partner of Signals Music Studio. This means that when you purchase a course through our links, we may earn a small commission at <strong>no extra cost to you</strong>. This helps us keep the site running and continue publishing free educational content.
        </p>
        <p>
          We only recommend products we genuinely believe in. Our editorial content is independent, and affiliate relationships never influence our recommendations or reviews. For full details, see our <a href="/disclaimer">Affiliate Disclaimer</a>.
        </p>
      </div>

      <div className="mt-12">
        <AffiliateCTA />
      </div>
    </div>
  );
}

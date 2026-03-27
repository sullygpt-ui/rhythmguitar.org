import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Affiliate Disclaimer',
  description: 'FTC-compliant affiliate disclosure for RhythmGuitar.org. Learn how our affiliate relationships work.',
  path: '/disclaimer',
});

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 prose-rhythm">
      <h1 className="text-4xl font-bold text-gray-200 mb-8">Affiliate Disclaimer</h1>
      <p><strong>Last updated:</strong> February 2026</p>

      <h2>FTC Disclosure</h2>
      <p>
        In accordance with the Federal Trade Commission&apos;s guidelines concerning the use of endorsements and testimonials in advertising (16 CFR Part 255), we want to be fully transparent about our affiliate relationships.
      </p>

      <h2>Affiliate Relationships</h2>
      <p>
        RhythmGuitar.org is a participant in the Signals Music Studio affiliate program. This means that <strong>we may earn a commission when you purchase a product through our affiliate links at no extra cost to you</strong>.
      </p>
      <p>
        The prices you pay are the same whether you use our affiliate links or go directly to the vendor&apos;s website. Using our links simply helps support the operation of this website and allows us to continue creating free educational content.
      </p>

      <h2>How Affiliate Links Work</h2>
      <p>
        When you click an affiliate link on our site, you are redirected to the product page on the vendor&apos;s website. If you make a purchase during that session, we receive a small referral commission. This commission comes from the vendor, not from you — you pay exactly the same price regardless.
      </p>

      <h2>Editorial Independence</h2>
      <p>
        Our affiliate relationships <strong>do not influence our editorial content</strong>. We only recommend products and courses that we have researched and genuinely believe provide value to our readers. If a product is not good, we won&apos;t recommend it regardless of whether an affiliate program exists.
      </p>

      <h2>Product Recommendations</h2>
      <p>
        The courses and products we recommend on this site are created by Signals Music Studio (Jake Lizzio). We recommend these products because:
      </p>
      <ul>
        <li>They are highly rated by verified students (5-star average)</li>
        <li>The instructor has 20+ years of teaching experience</li>
        <li>They provide comprehensive, structured learning paths</li>
        <li>They are reasonably priced for the value provided</li>
      </ul>

      <h2>Questions?</h2>
      <p>
        If you have any questions about our affiliate relationships or this disclaimer, please contact us at disclosure@rhythmguitar.org.
      </p>
    </div>
  );
}

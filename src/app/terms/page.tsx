import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Terms of Use',
  description: 'RhythmGuitar.org terms of use — the rules and guidelines for using our website.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 prose-rhythm">
      <h1 className="text-4xl font-bold text-gray-200 mb-8">Terms of Use</h1>
      <p><strong>Last updated:</strong> February 2026</p>

      <h2>Acceptance of Terms</h2>
      <p>By accessing and using RhythmGuitar.org, you agree to be bound by these Terms of Use. If you do not agree, please do not use our website.</p>

      <h2>Content</h2>
      <p>The content on this website is provided for informational and educational purposes only. While we strive for accuracy, we make no guarantees about the completeness, reliability, or suitability of the information provided.</p>

      <h2>Affiliate Links</h2>
      <p>Our site contains affiliate links to third-party products and services. When you click these links and make a purchase, we may earn a commission. These affiliate relationships do not influence our editorial content. See our <a href="/disclaimer">Affiliate Disclaimer</a> for full details.</p>

      <h2>Intellectual Property</h2>
      <p>All content on RhythmGuitar.org, including text, graphics, and design elements, is owned by RhythmGuitar.org or its content creators and is protected by copyright law. You may not reproduce, distribute, or create derivative works without permission.</p>

      <h2>User Conduct</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the site for any unlawful purpose</li>
        <li>Attempt to interfere with the site&apos;s operation</li>
        <li>Scrape or harvest content without permission</li>
        <li>Submit false information through our forms</li>
      </ul>

      <h2>Disclaimer of Warranties</h2>
      <p>This website is provided &ldquo;as is&rdquo; without warranties of any kind, either express or implied. We do not warrant that the site will be uninterrupted, error-free, or free of harmful components.</p>

      <h2>Limitation of Liability</h2>
      <p>RhythmGuitar.org shall not be liable for any damages arising from your use of, or inability to use, this website or any linked third-party sites.</p>

      <h2>Changes to Terms</h2>
      <p>We reserve the right to modify these terms at any time. Continued use of the site after changes constitutes acceptance of the new terms.</p>

      <h2>Contact</h2>
      <p>For questions about these terms, email us at legal@rhythmguitar.org.</p>
    </div>
  );
}

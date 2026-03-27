import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Privacy Policy',
  description: 'RhythmGuitar.org privacy policy — how we collect, use, and protect your personal information.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 prose-rhythm">
      <h1 className="text-4xl font-bold text-gray-200 mb-8">Privacy Policy</h1>
      <p><strong>Last updated:</strong> February 2026</p>

      <h2>Information We Collect</h2>
      <p>We collect information you voluntarily provide, such as your email address when subscribing to our newsletter. We also automatically collect certain information through cookies and analytics tools, including your IP address, browser type, pages visited, and time spent on the site.</p>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>To send you newsletter emails (if you subscribe)</li>
        <li>To analyze site traffic and improve our content</li>
        <li>To track affiliate link clicks for performance measurement</li>
      </ul>

      <h2>Google Analytics</h2>
      <p>We use Google Analytics to understand how visitors interact with our website. Google Analytics collects information such as how often users visit the site, what pages they visit, and what other sites they used prior to coming to our site. We use this information solely to improve our website. Google Analytics collects the IP address assigned to you on the date you visit the site, but does not collect your name or other identifying information.</p>

      <h2>Cookies</h2>
      <p>Our site uses cookies for analytics purposes. You can control cookies through your browser settings. Disabling cookies may affect your experience on the site.</p>

      <h2>Affiliate Links</h2>
      <p>When you click an affiliate link on our site, we may track that click for performance measurement. You will be redirected to the third-party site (Signals Music Studio), which has its own privacy policy.</p>

      <h2>Third-Party Services</h2>
      <p>We use the following third-party services:</p>
      <ul>
        <li><strong>Google Analytics</strong> — Website analytics</li>
        <li><strong>Vercel</strong> — Website hosting</li>
        <li><strong>Signals Music Studio</strong> — Affiliate partner</li>
      </ul>

      <h2>Data Retention</h2>
      <p>Newsletter email addresses are retained until you unsubscribe. Analytics data is retained according to Google Analytics&apos; default retention settings.</p>

      <h2>Your Rights</h2>
      <p>You may request to view, update, or delete your personal information at any time by contacting us. You can unsubscribe from our newsletter by clicking the unsubscribe link in any email.</p>

      <h2>Contact</h2>
      <p>For privacy-related inquiries, email us at privacy@rhythmguitar.org.</p>
    </div>
  );
}

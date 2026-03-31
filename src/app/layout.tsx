import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'RhythmGuitar.org — Master Rhythm Guitar',
  description: 'Your complete resource for mastering rhythm guitar. Free guides, strumming patterns, timing exercises, and expert course reviews.',
  metadataBase: new URL('https://rhythmguitar.org'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6YWVEGXP4V"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6YWVEGXP4V');
          `}
        </Script>
        <Script id="signals-music-tracker" strategy="afterInteractive">
          {`
            // Track signalsmusic.studio outbound clicks
            document.addEventListener('DOMContentLoaded', function() {
              function trackSignalsMusicClick(url) {
                const data = {
                  timestamp: new Date().toISOString(),
                  url: url,
                  referrer: window.location.href,
                  userAgent: navigator.userAgent.substring(0, 200),
                  site: 'rhythmguitar.org'
                };
                
                // Send to analytics as custom event
                gtag('event', 'outbound_click', {
                  event_category: 'signalsmusic_affiliate',
                  event_label: url,
                  transport_type: 'beacon'
                });
                
                // Also try to log to our tracking endpoint
                fetch('/api/track-outbound', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(data),
                  keepalive: true
                }).catch(() => {}); // Silent fail if endpoint doesn't exist
              }
              
              // Track all signalsmusic.studio links
              document.addEventListener('click', function(e) {
                const link = e.target.closest('a');
                if (link && link.href && link.href.includes('signalsmusic.studio')) {
                  trackSignalsMusicClick(link.href);
                }
              });
            });
          `}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

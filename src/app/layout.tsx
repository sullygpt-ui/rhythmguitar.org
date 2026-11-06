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
            window.gtag = window.gtag || gtag;
            gtag('js', new Date());
            gtag('config', 'G-6YWVEGXP4V');
          `}
        </Script>
        <Script id="signals-music-tracker" strategy="afterInteractive">
          {`
            // Track signalsmusic.studio outbound clicks.
            // Attached directly: this script runs after DOMContentLoaded has
            // already fired, so wrapping it in that listener would never run.
            (function () {
              if (window.__signalsMusicTrackerAttached) return;
              window.__signalsMusicTrackerAttached = true;

              function trackSignalsMusicClick(url) {
                var data = {
                  timestamp: new Date().toISOString(),
                  url: url,
                  referrer: window.location.href,
                  userAgent: navigator.userAgent.substring(0, 200),
                  site: 'rhythmguitar.org'
                };

                // Send to analytics as custom event
                if (typeof window.gtag === 'function') {
                  window.gtag('event', 'outbound_click', {
                    event_category: 'signalsmusic_affiliate',
                    event_label: url,
                    transport_type: 'beacon'
                  });
                }

                // Also log to our tracking endpoint
                fetch('/api/track-outbound', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(data),
                  keepalive: true
                }).catch(function () {}); // Silent fail if endpoint is unavailable
              }

              // Delegated listener survives client-side navigation
              document.addEventListener('click', function (e) {
                var target = e.target;
                if (!target || typeof target.closest !== 'function') return;
                var link = target.closest('a');
                if (link && link.href && link.href.indexOf('signalsmusic.studio') !== -1) {
                  trackSignalsMusicClick(link.href);
                }
              }, true);
            })();
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

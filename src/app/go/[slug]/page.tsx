'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';

const links: Record<string, string> = {
  rrg1: 'https://signalsmusic.studio/courses/rrg1?ref=sully',
  rrg2: 'https://signalsmusic.studio/courses/rrg2?ref=sully',
  shop: 'https://signalsmusic.studio/shop?ref=sully',
  codex: 'https://signalsmusic.studio/shop?ref=sully',
  bundle: 'https://signalsmusic.studio/shop?ref=sully',
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function RedirectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const destination = links[slug] || 'https://signalsmusic.studio?ref=sully';

  useEffect(() => {
    // Fire GA event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'affiliate_click', { slug, destination });
    }

    // Log click (best effort)
    fetch('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'click', slug, destination, timestamp: new Date().toISOString() }),
    }).catch(() => {});

    // Redirect after 1 second
    const timer = setTimeout(() => {
      window.location.href = destination;
    }, 1000);

    return () => clearTimeout(timer);
  }, [slug, destination]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-gray-400 text-lg">Redirecting to Signals Music Studio...</p>
        <p className="text-gray-400 text-sm mt-2">
          If not redirected, <a href={destination} className="text-primary underline">click here</a>.
        </p>
      </div>
    </div>
  );
}

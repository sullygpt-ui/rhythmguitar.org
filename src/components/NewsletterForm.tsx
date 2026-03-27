'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return <p className="text-sm text-green-400">✓ You&apos;re subscribed! Check your inbox.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        required
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 bg-dark-700 border border-dark-500 rounded-lg px-3 py-2 text-sm text-gray-200 placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="bg-primary hover:bg-primary-light text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors disabled:opacity-50"
      >
        {status === 'loading' ? '...' : 'Join'}
      </button>
      {status === 'error' && <p className="text-xs text-red-400 mt-1">Something went wrong. Try again.</p>}
    </form>
  );
}

import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rhythmguitar.org'
  const pages = [
    '', '/about', '/courses', '/reviews', '/blog',
    '/learn-rhythm-guitar', '/strumming-patterns', '/guitar-counting',
    '/palm-muting-technique', '/chord-changes', '/reading-chord-charts',
    '/syncopation-guitar', '/rhythm-vs-lead-guitar', '/guitar-timing-tips',
    '/best-rhythm-guitar-course', '/rhythm-guitar-courses-compared',
    '/privacy', '/terms', '/disclaimer',
  ]
  return pages.map(page => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === '' ? 'weekly' : 'monthly' as const,
    priority: page === '' ? 1 : page === '/best-rhythm-guitar-course' ? 0.9 : 0.7,
  }))
}

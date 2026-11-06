import type { MetadataRoute } from 'next'

const baseUrl = 'https://rhythmguitar.org'

/**
 * lastModified is a real date per page, not `new Date()`.
 *
 * Building with `new Date()` told Google that all 19 URLs changed on every
 * deploy, which was false and trains Google to ignore the field. Update a
 * page's date here when you meaningfully change its content — not for a typo
 * or a styling tweak.
 */
type Entry = {
  path: string
  lastModified: string
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
}

const PAGES: Entry[] = [
  { path: '', lastModified: '2026-03-27', changeFrequency: 'weekly', priority: 1 },

  // Commercial-intent pages
  { path: '/best-rhythm-guitar-course', lastModified: '2026-03-27', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/rhythm-guitar-courses-compared', lastModified: '2026-03-27', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/courses', lastModified: '2026-03-27', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/reviews', lastModified: '2026-03-27', changeFrequency: 'monthly', priority: 0.8 },

  // Guides
  { path: '/learn-rhythm-guitar', lastModified: '2026-03-27', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/strumming-patterns', lastModified: '2026-03-27', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/guitar-counting', lastModified: '2026-03-27', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/palm-muting-technique', lastModified: '2026-03-27', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/chord-changes', lastModified: '2026-03-27', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/reading-chord-charts', lastModified: '2026-03-27', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/syncopation-guitar', lastModified: '2026-03-27', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/rhythm-vs-lead-guitar', lastModified: '2026-03-27', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/guitar-timing-tips', lastModified: '2026-03-27', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/blog', lastModified: '2026-03-27', changeFrequency: 'monthly', priority: 0.6 },

  // Boilerplate
  { path: '/about', lastModified: '2026-03-27', changeFrequency: 'yearly', priority: 0.4 },
  { path: '/privacy', lastModified: '2026-03-27', changeFrequency: 'yearly', priority: 0.2 },
  { path: '/terms', lastModified: '2026-03-27', changeFrequency: 'yearly', priority: 0.2 },
  { path: '/disclaimer', lastModified: '2026-03-27', changeFrequency: 'yearly', priority: 0.2 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map(({ path, lastModified, changeFrequency, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(`${lastModified}T00:00:00Z`),
    changeFrequency,
    priority,
  }))
}

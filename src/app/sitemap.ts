import type { MetadataRoute } from 'next'
import { publishedOn } from '@/lib/publishDates'

const baseUrl = 'https://rhythmguitar.org'

/**
 * lastModified is a real date per page, not `new Date()`.
 *
 * Building with `new Date()` told Google that all 19 URLs changed on every
 * deploy, which was false and trains Google to ignore the field. The dates
 * themselves live in @/lib/publishDates, shared with the blog index and each
 * Article page's JSON-LD so the three cannot drift apart again.
 */
type Entry = {
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
}

const PAGES: Entry[] = [
  { path: '', changeFrequency: 'weekly', priority: 1 },

  // Commercial-intent pages
  { path: '/best-rhythm-guitar-course', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/rhythm-guitar-courses-compared', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/courses', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/reviews', changeFrequency: 'monthly', priority: 0.8 },

  // Guides
  { path: '/learn-rhythm-guitar', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/strumming-patterns', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/guitar-counting', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/palm-muting-technique', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/chord-changes', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/reading-chord-charts', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/syncopation-guitar', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/rhythm-vs-lead-guitar', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/guitar-timing-tips', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/blog', changeFrequency: 'monthly', priority: 0.6 },

  // Boilerplate
  { path: '/about', changeFrequency: 'yearly', priority: 0.4 },
  { path: '/privacy', changeFrequency: 'yearly', priority: 0.2 },
  { path: '/terms', changeFrequency: 'yearly', priority: 0.2 },
  { path: '/disclaimer', changeFrequency: 'yearly', priority: 0.2 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map(({ path, changeFrequency, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(`${publishedOn(path)}T00:00:00Z`),
    changeFrequency,
    priority,
  }))
}

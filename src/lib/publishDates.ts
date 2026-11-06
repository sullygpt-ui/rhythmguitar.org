/**
 * Real publication dates — one source of truth for the sitemap, the blog index
 * and each Article page's JSON-LD.
 *
 * These used to be three independent sets of hand-written dates, and they had
 * drifted: /guitar-timing-tips showed 2026-01-05 on its blog card while its
 * structured data claimed datePublished 2026-02-22, so Google saw one date and
 * readers another. None of them were real. Every page on this site shipped in a
 * single commit on 2026-03-27, which is what the entries below say.
 *
 * Update an entry when you meaningfully change that page's content — not for a
 * typo or a styling tweak.
 */
export const PUBLISHED: Record<string, string> = {
  '': '2026-03-27',
  '/about': '2026-03-27',
  '/best-rhythm-guitar-course': '2026-03-27',
  '/blog': '2026-03-27',
  '/chord-changes': '2026-03-27',
  '/courses': '2026-03-27',
  '/disclaimer': '2026-03-27',
  '/guitar-counting': '2026-03-27',
  '/guitar-timing-tips': '2026-03-27',
  '/learn-rhythm-guitar': '2026-03-27',
  '/palm-muting-technique': '2026-03-27',
  '/privacy': '2026-03-27',
  '/reading-chord-charts': '2026-03-27',
  '/reviews': '2026-03-27',
  '/rhythm-guitar-courses-compared': '2026-03-27',
  '/rhythm-vs-lead-guitar': '2026-03-27',
  '/strumming-patterns': '2026-03-27',
  '/syncopation-guitar': '2026-03-27',
  '/terms': '2026-03-27',
};

/**
 * ISO date for a path. Throws at build time on an unknown path, so a typo
 * fails the build instead of silently shipping an empty date.
 */
export function publishedOn(path: string): string {
  const date = PUBLISHED[path];
  if (!date) throw new Error(`publishedOn: no date recorded for "${path}"`);
  return date;
}

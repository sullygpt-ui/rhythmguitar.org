/**
 * Submit the sitemap to Search Console, then show what Google has on file.
 *
 *   node scripts/gsc-submit-sitemap.mjs
 *
 * Idempotent: re-submitting an already-known sitemap is a no-op to Google.
 * Needs the service account added as a Full user on the property, since
 * submitting is a write.
 */
import { loadKey, accessToken, makeApi, SITE } from './gsc-auth.mjs';

const SITEMAP = 'https://rhythmguitar.org/sitemap.xml';

const key = loadKey();
const token = await accessToken(key, 'https://www.googleapis.com/auth/webmasters');
const api = makeApi(token, key);

console.log(`submitting ${SITEMAP} to ${SITE}`);
await api(`/sitemaps/${encodeURIComponent(SITEMAP)}`, { method: 'PUT' });
console.log('submitted.\n');

// `indexed` is a field Google deprecated and never removed; it reads 0 for
// every site and means nothing. `submitted` and the error counts are real.
const sm = await api('/sitemaps');
for (const s of sm.sitemap ?? []) {
  const web = (s.contents ?? []).find((c) => c.type === 'web');
  console.log(`  ${s.path}`);
  console.log(`    urls submitted ${web?.submitted ?? '?'}  errors ${s.errors}  warnings ${s.warnings}`);
  console.log(`    last downloaded by Google: ${s.lastDownloaded ? String(s.lastDownloaded).slice(0, 10) : 'not yet'}`);
}

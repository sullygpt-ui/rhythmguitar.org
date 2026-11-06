/**
 * What Search Console knows about rhythmguitar.org, in one run.
 *
 *   node scripts/gsc-report.mjs [days]        # default 28
 *
 * Zero dependencies — see scripts/gsc-auth.mjs for the credential and the
 * self-signed JWT. Override the key or the property with GSC_KEY_PATH and
 * GSC_SITE:
 *   GSC_SITE=sc-domain:rhythmguitar.org node scripts/gsc-report.mjs
 *
 * The service account must be added as a user on the Search Console property
 * first (Settings -> Users and permissions -> Add user, Full or Restricted).
 *
 * Three traps this script is built around, learned on notrenewing.com:
 *
 *  - Site totals must come from an UNDIMENSIONED query, not from summing the
 *    per-query rows. Google withholds the query string for searches too rare to
 *    anonymise, so the query dimension sees only part of real traffic. Summing
 *    it understated clicks by a third and impressions by 60%.
 *  - 1,000 rows is the API's per-request maximum, so one call silently
 *    truncates. Page through with startRow until a short page comes back.
 *  - The sitemaps endpoint reports `indexed: "0"` for every site. Google
 *    deprecated that counter years ago and left the field in place, so it is not
 *    evidence of anything. Counting distinct pages that earned an impression is
 *    a real floor on what is indexed.
 */
import { loadKey, accessToken, makeApi, SITE } from './gsc-auth.mjs';

const BRAND = /rhythmguitar|rhythm\s*guitar\.org/i;
const SCOPE = 'https://www.googleapis.com/auth/webmasters.readonly';

const fmt = (d) => d.toISOString().slice(0, 10);
const pct = (n) => `${(n * 100).toFixed(1)}%`;

async function main() {
  const key = loadKey();
  const api = makeApi(await accessToken(key, SCOPE), key);

  const days = Number(process.argv[2] ?? 28);
  // Search Console data lags two to three days; asking for yesterday returns a
  // half-populated day that reads as a crash in traffic.
  const end = new Date(Date.now() - 3 * 86400_000);
  const start = new Date(end.getTime() - days * 86400_000);
  const prevEnd = new Date(start.getTime() - 86400_000);
  const prevStart = new Date(prevEnd.getTime() - days * 86400_000);

  const query = async (dimensions, range = { start, end }, maxRows = 25000) => {
    const PAGE = 1000;
    const rows = [];
    for (let startRow = 0; startRow < maxRows; startRow += PAGE) {
      const data = await api('/searchAnalytics/query', {
        method: 'POST',
        body: JSON.stringify({
          startDate: fmt(range.start), endDate: fmt(range.end),
          dimensions, rowLimit: PAGE, startRow,
        }),
      });
      const batch = data.rows ?? [];
      rows.push(...batch);
      if (batch.length < PAGE) break;
    }
    return rows;
  };

  const totals = (rows) => ({
    clicks: rows.reduce((a, r) => a + r.clicks, 0),
    impressions: rows.reduce((a, r) => a + r.impressions, 0),
  });
  const delta = (a, b) => (b === 0 ? 'n/a' : `${a >= b ? '+' : ''}${(((a - b) / b) * 100).toFixed(0)}%`);

  console.log(`${SITE}`);
  console.log(`${fmt(start)} to ${fmt(end)} (${days} days), vs ${fmt(prevStart)} to ${fmt(prevEnd)}\n`);

  const [queries, prevQueries, pages, siteNow, sitePrev] = [
    await query(['query']),
    await query(['query'], { start: prevStart, end: prevEnd }),
    await query(['page']),
    await query([], { start, end }, 1),
    await query([], { start: prevStart, end: prevEnd }, 1),
  ];

  const now = totals(siteNow);
  const was = totals(sitePrev);
  const attributed = totals(queries);

  console.log('=== TOTALS (all search traffic) ===');
  if (now.impressions === 0) {
    console.log('  No impressions in this window. Either the property is new, or');
    console.log('  Google has not started reporting for it yet (allow a few days).');
  }
  console.log(
    `clicks ${now.clicks} (${delta(now.clicks, was.clicks)})   ` +
    `impressions ${now.impressions} (${delta(now.impressions, was.impressions)})   ` +
    `CTR ${pct(now.clicks / (now.impressions || 1))}`,
  );
  console.log(
    `attributed to a query: ${attributed.clicks} clicks ` +
    `(${pct(attributed.clicks / (now.clicks || 1))} of all), ` +
    `${attributed.impressions} impressions ` +
    `(${pct(attributed.impressions / (now.impressions || 1))}) ` +
    '— the rest is anonymised, so every split below covers only this part',
  );
  console.log(`distinct queries: ${queries.length} (was ${prevQueries.length})`);

  const brand = queries.filter((r) => BRAND.test(r.keys[0]));
  const nonBrand = queries.filter((r) => !BRAND.test(r.keys[0]));
  const b = totals(brand);
  const nb = totals(nonBrand);
  console.log(`\nbrand    : ${b.clicks} clicks (${pct(b.clicks / (attributed.clicks || 1))} of attributed), ${b.impressions} impressions, ${brand.length} queries`);
  console.log(`non-brand: ${nb.clicks} clicks (${pct(nb.clicks / (attributed.clicks || 1))} of attributed), ${nb.impressions} impressions, ${nonBrand.length} queries`);

  console.log('\n=== NON-BRAND CTR BY POSITION (attributed queries only) ===');
  const BUCKETS = [
    ['1-3', (p) => p < 3.5],
    ['3.5-6', (p) => p >= 3.5 && p < 6],
    ['6-10', (p) => p >= 6 && p < 10],
    ['10-20', (p) => p >= 10 && p < 20],
    ['20+', (p) => p >= 20],
  ];
  for (const [label, test] of BUCKETS) {
    const t = totals(nonBrand.filter((r) => test(r.position)));
    console.log(`  pos ${label.padEnd(6)} ${String(t.impressions).padStart(6)} impr ${String(t.clicks).padStart(5)} clicks  CTR ${pct(t.clicks / (t.impressions || 1))}`);
  }

  console.log('\n=== WHAT IS INDEXED (pages that earned at least one impression) ===');
  for (const r of [...pages].sort((a, c) => c.impressions - a.impressions)) {
    const p = r.keys[0].replace(/^https:\/\/(www\.)?rhythmguitar\.org/, '') || '/';
    console.log(`  ${String(r.impressions).padStart(7)} impr  ${String(r.clicks).padStart(5)} clicks  ${pct(r.ctr).padStart(6)}  pos ${r.position.toFixed(1).padStart(5)}  ${p}`);
  }
  console.log(`  TOTAL distinct pages with impressions: ${pages.length}`);

  console.log('\n=== NEARLY THERE: non-brand queries at position 4-20 ===');
  const near = nonBrand
    .filter((r) => r.position >= 4 && r.position <= 20 && r.impressions >= 20)
    .sort((a, c) => c.impressions - a.impressions)
    .slice(0, 25);
  for (const r of near) {
    console.log(`  pos ${r.position.toFixed(1).padStart(4)}  ${String(r.impressions).padStart(6)} impr  ${String(r.clicks).padStart(4)} clicks  ${pct(r.ctr).padStart(6)}  "${r.keys[0]}"`);
  }
  if (!near.length) console.log('  (none)');

  console.log('\n=== RANKS WELL, NOBODY CLICKS: position <= 5, CTR < 3%, 50+ impressions ===');
  const dull = queries
    .filter((r) => r.position <= 5 && r.ctr < 0.03 && r.impressions >= 50)
    .sort((a, c) => c.impressions - a.impressions)
    .slice(0, 25);
  for (const r of dull) {
    console.log(`  pos ${r.position.toFixed(1).padStart(4)}  ${String(r.impressions).padStart(6)} impr  ${String(r.clicks).padStart(4)} clicks  ${pct(r.ctr).padStart(6)}  "${r.keys[0]}"`);
  }
  if (!dull.length) console.log('  (none)');

  console.log('\n=== SITEMAPS (ignore `indexed`, Google stopped populating it) ===');
  const sm = await api('/sitemaps');
  for (const s of sm.sitemap ?? []) {
    const web = (s.contents ?? []).find((c) => c.type === 'web');
    console.log(`  ${s.path}`);
    console.log(`    submitted ${web?.submitted ?? '?'}  errors ${s.errors}  warnings ${s.warnings}  last downloaded ${String(s.lastDownloaded).slice(0, 10)}`);
  }
  if (!(sm.sitemap ?? []).length) {
    console.log('  (none submitted — run scripts/gsc-submit-sitemap.mjs)');
  }
}

main().catch((err) => {
  console.error('ERROR:', err.message);
  process.exit(1);
});

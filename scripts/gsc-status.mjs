/**
 * Is Search Console wired up yet?
 *
 *   node scripts/gsc-status.mjs
 *
 * Lists every property the service account can read, says whether this site is
 * among them, and prints the next step if it is not.
 */
import { loadKey, accessToken, SITE } from './gsc-auth.mjs';

const key = loadKey();
const token = await accessToken(key, 'https://www.googleapis.com/auth/webmasters.readonly');

const res = await fetch('https://www.googleapis.com/webmasters/v3/sites', {
  headers: { Authorization: `Bearer ${token}` },
});
if (!res.ok) {
  console.error(`ERROR ${res.status}: ${await res.text()}`);
  process.exit(1);
}
const sites = (await res.json()).siteEntry ?? [];

console.log(`service account: ${key.client_email}`);
console.log(`looking for:     ${SITE}\n`);
console.log('properties this account can read:');
for (const s of sites) console.log(`  ${s.siteUrl.padEnd(50)} ${s.permissionLevel}`);
if (!sites.length) console.log('  (none)');

const match = sites.find((s) => s.siteUrl === SITE || s.siteUrl === 'sc-domain:rhythmguitar.org');
if (match) {
  console.log(`\nOK: ${match.siteUrl} is readable (${match.permissionLevel}).`);
  console.log('Next: node scripts/gsc-report.mjs');
} else {
  console.log(`\nNot set up yet. ${SITE} is not readable by this account.`);
  console.log('Do this once in the Search Console UI:');
  console.log('  1. https://search.google.com/search-console -> Add property -> URL prefix');
  console.log(`     -> ${SITE}`);
  console.log('  2. Verify with the "Google Analytics" method (the G-6YWVEGXP4V tag is');
  console.log('     already on every page, so this is instant and needs no code change).');
  console.log('  3. Settings -> Users and permissions -> Add user ->');
  console.log(`     ${key.client_email}  (Full)`);
  console.log('  4. node scripts/gsc-submit-sitemap.mjs');
}

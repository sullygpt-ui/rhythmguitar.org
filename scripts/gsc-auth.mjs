/**
 * Shared Search Console auth for the scripts in this folder.
 *
 * Signs its own RS256 JWT with node:crypto so this project needs no Google
 * client library. Reads the service-account key that the NotRenewing project
 * already uses (same GCP project, same reader account) unless GSC_KEY_PATH
 * points elsewhere.
 */
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));

export const API = 'https://www.googleapis.com/webmasters/v3/sites';

export const KEY_PATH =
  process.env.GSC_KEY_PATH ??
  path.join(HERE, '..', '..', 'notrenewing', '.env.gsc-service-account.json');

// URL-prefix property. A domain property would be 'sc-domain:rhythmguitar.org'.
export const SITE = process.env.GSC_SITE ?? 'https://rhythmguitar.org/';

export function loadKey() {
  if (!fs.existsSync(KEY_PATH)) {
    console.error(`Missing service-account key at ${KEY_PATH}`);
    console.error('Set GSC_KEY_PATH to point at it.');
    process.exit(1);
  }
  return JSON.parse(fs.readFileSync(KEY_PATH, 'utf-8'));
}

const b64 = (buf) => Buffer.from(buf).toString('base64url');

export async function accessToken(key, scope) {
  const now = Math.floor(Date.now() / 1000);
  const input =
    b64(JSON.stringify({ alg: 'RS256', typ: 'JWT' })) +
    '.' +
    b64(JSON.stringify({
      iss: key.client_email, scope, aud: key.token_uri, iat: now, exp: now + 3600,
    }));
  const sig = crypto.createSign('RSA-SHA256').update(input).end().sign(key.private_key);
  const res = await fetch(key.token_uri, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: `${input}.${b64(sig)}`,
    }),
  });
  if (!res.ok) throw new Error(`token request failed: ${res.status} ${await res.text()}`);
  return (await res.json()).access_token;
}

/** Fetch wrapper that turns the three Search Console errors worth naming into advice. */
export function makeApi(token, key, site = SITE) {
  return async (urlPath, init = {}) => {
    const res = await fetch(`${API}/${encodeURIComponent(site)}${urlPath}`, {
      ...init,
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    });
    if (res.status === 403) {
      console.error(`\n403 from Search Console for ${site}.`);
      console.error(`Add ${key.client_email} as a user on that property, or check GSC_SITE.`);
      process.exit(1);
    }
    if (res.status === 404) {
      console.error(`\n404: Search Console has no property ${site}, or this account cannot see it.`);
      console.error('Create it at https://search.google.com/search-console first.');
      process.exit(1);
    }
    if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
    const raw = await res.text();
    return raw.trim() ? JSON.parse(raw) : {};
  };
}

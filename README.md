This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Analytics and Search Console

**Google Analytics 4** — property `G-6YWVEGXP4V`, tag in `src/app/layout.tsx`.
Data starts 2026-03-27, when the tag went in. Custom events:

| Event | Fires on |
|---|---|
| `affiliate_click` | the `/go/[slug]` redirect pages |
| `outbound_click` | any in-page link to `signalsmusic.studio` |

GA4 answers "how much traffic, to which pages, and what do people do". It does
**not** report search rankings, impressions, or the queries people searched —
Google strips the query from the referrer, so GA4 shows only "Organic Search".
That is what Search Console is for.

**Google Search Console** — scripts in `scripts/`, no dependencies, sharing the
service-account credential from the NotRenewing project (same GCP project).
Point `GSC_KEY_PATH` elsewhere to use a different key, `GSC_SITE` to target a
different property.

```bash
npm run gsc:status    # is the property set up and readable?
npm run gsc:sitemap   # submit https://rhythmguitar.org/sitemap.xml
npm run gsc:report    # clicks, impressions, positions, what is nearly ranking
npm run gsc:report 90 # same over 90 days instead of the default 28
```

The property is **`https://rhythmguitar.org/`** (URL-prefix, verified
2026-11-06). A domain property was not an option: DNS is at Network Solutions,
not Vercel, so no TXT record can be added from here.

Verification is by **meta tag**, and it is load-bearing — Google rechecks it and
will unverify the property if the tag disappears. The token lives in the Vercel
env var `GOOGLE_SITE_VERIFICATION`; `layout.tsx` emits the tag only when that var
is set. **Do not delete that variable.** The pages are statically prerendered, so
the value is baked in at build time and any change needs a redeploy.

Owners: the service account above, and `Michael.K.Sullivan@gmail.com` — the
Google account that owns GCP project `fluted-lambda-295723`. That is the account
to sign in with for the Search Console UI; it is not the same account as the
Gmail or Vercel logins used elsewhere here.

Search Console does not backfill: data accrues from the 2026-11-06 verification
date forward, so the first useful report is a week or two out.

## Storage

Supabase, borrowed from the **NotRenewing** project (ref `cmcndptzwsussurxxqqq`)
rather than a project of its own. Tables here are namespaced with a
`rhythmguitar_` prefix — keep that convention:

- `rhythmguitar_subscribers` — newsletter signups (`/api/newsletter`)
- `rhythmguitar_outbound_clicks` — affiliate clicks (`/api/track-outbound`)

`SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are set in Vercel for
**Production only**, so these routes return 503 on preview deployments.
`GET /api/track-outbound` returns aggregate counts to anyone and raw rows only
with an `Authorization: Bearer $CLICKS_ADMIN_TOKEN` header.

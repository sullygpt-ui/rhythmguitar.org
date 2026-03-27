import type { Metadata } from 'next';

const SITE_URL = 'https://rhythmguitar.org';
const SITE_NAME = 'RhythmGuitar.org';

export function createMetadata({
  title,
  description,
  path = '',
  type = 'website',
}: {
  title: string;
  description: string;
  path?: string;
  type?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = path === '' ? title : `${title} | ${SITE_NAME}`;
  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: type as 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
  };
}

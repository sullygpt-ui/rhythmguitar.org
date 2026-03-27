export interface Course {
  slug: string;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  affiliateSlug: string;
  features: string[];
  badge?: string;
}

export const courses: Course[] = [
  {
    slug: 'rrg1',
    name: 'Real Rhythm Guitar Level 1',
    description: 'Build rock-solid rhythm guitar foundations with 22 video lessons covering counting, strumming patterns, chord changes, and reading chord sheets. Includes printable PDF workbook.',
    price: '$45',
    affiliateSlug: 'rrg1',
    features: ['22 video lessons', 'Printable PDF workbook', 'Lifetime access', 'Beginner-friendly'],
    badge: 'Most Popular',
  },
  {
    slug: 'rrg2',
    name: 'Real Rhythm Guitar Level 2',
    description: 'Take your rhythm playing to the next level with advanced strumming, syncopation, fingerpicking patterns, and complex time signatures.',
    price: '$45',
    affiliateSlug: 'rrg2',
    features: ['Advanced strumming', 'Syncopation mastery', 'Fingerpicking', 'Complex rhythms'],
  },
  {
    slug: 'theory-songwriting',
    name: 'Theory and Songwriting Course',
    description: 'A comprehensive deep-dive into music theory and songwriting. Understand how music works and start writing your own songs with confidence.',
    price: '$270',
    affiliateSlug: 'shop',
    features: ['Complete music theory', 'Songwriting techniques', 'Chord progressions', 'Song analysis'],
  },
  {
    slug: 'codex',
    name: 'Chord Progression Codex',
    description: 'A massive collection of chord progressions organized by mood, genre, and difficulty. Your go-to reference for writing and playing.',
    price: '$45',
    affiliateSlug: 'codex',
    features: ['Hundreds of progressions', 'Organized by mood/genre', 'Digital download', 'Instant access'],
  },
  {
    slug: 'rrg1-bundle',
    name: 'RRG1 Bundle (Digital + Physical)',
    description: 'Get both the digital course and the physical workbook shipped to your door. The complete Real Rhythm Guitar Level 1 experience.',
    price: '$60',
    originalPrice: '$65',
    affiliateSlug: 'bundle',
    features: ['Digital course access', 'Physical workbook', 'Free shipping', 'Save $5'],
    badge: 'Best Value',
  },
  {
    slug: 'codex-bundle',
    name: 'Codex Bundle (Digital + Physical)',
    description: 'The Chord Progression Codex in both digital and beautiful physical formats. Perfect for your music stand or desk.',
    price: '$90',
    originalPrice: '$105',
    affiliateSlug: 'codex',
    features: ['Digital + Physical', 'Premium print quality', 'Free shipping', 'Save $15'],
  },
  {
    slug: 'blues-crash-course',
    name: '5-Day Blues Guitar Crash Course',
    description: 'Learn the essentials of blues guitar in just 5 days. Covers blues scales, shuffles, turnarounds, and classic licks.',
    price: 'Pay What You Can',
    affiliateSlug: 'shop',
    features: ['5 focused lessons', 'Blues fundamentals', 'Classic licks', 'Self-paced'],
  },
  {
    slug: 'interval-course',
    name: 'Guitar Interval Course',
    description: 'Master intervals on the fretboard — the building blocks of melody, harmony, and ear training.',
    price: 'Pay What You Can',
    affiliateSlug: 'shop',
    features: ['Interval training', 'Ear development', 'Fretboard mastery', 'Self-paced'],
  },
  {
    slug: 'barre-chords',
    name: 'Mastering Barre Chord Technique',
    description: 'Finally conquer barre chords with proper technique, strength-building exercises, and practical applications.',
    price: 'Pay What You Can',
    affiliateSlug: 'shop',
    features: ['Proper technique', 'Strength exercises', 'Common shapes', 'Self-paced'],
  },
];

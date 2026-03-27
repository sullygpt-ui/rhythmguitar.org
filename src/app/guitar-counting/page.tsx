import { createMetadata } from '@/lib/metadata';
import AffiliateCTA from '@/components/AffiliateCTA';
import FAQSection from '@/components/FAQSection';

export const metadata = createMetadata({
  title: 'How to Count Rhythm on Guitar: Quarter Notes to Sixteenths',
  description: 'Master musical counting for guitar — quarter notes, eighth notes, sixteenth notes, and triplets. Visual rhythm grids and practice exercises included.',
  path: '/guitar-counting',
});

const faqs = [
  { question: 'What does "1 and 2 and 3 and 4 and" mean in guitar?', answer: 'This is how musicians count eighth notes. The numbers (1, 2, 3, 4) fall on the main beats (downbeats), and the "ands" fall between them (upbeats). Each number-and pair represents one beat divided into two equal parts. When strumming, downstrokes typically fall on the numbers and upstrokes on the "ands."' },
  { question: 'How do I count sixteenth notes on guitar?', answer: 'Sixteenth notes are counted "1-e-and-a, 2-e-and-a, 3-e-and-a, 4-e-and-a." Each beat is divided into four equal parts. The "1" is a downstroke, "e" is an upstroke, "and" is a downstroke, and "a" is an upstroke. This is the fastest common subdivision in most popular music.' },
  { question: 'Why is counting important for guitar players?', answer: 'Counting is how you internalize rhythm and stay in time. Without counting, you\'re guessing where strums fall. With counting, you have a precise map of the rhythm. It\'s also how you communicate with other musicians — if someone says "accent the \'and\' of beat 3," counting is how you know exactly where that is.' },
  { question: 'Should I count out loud while playing guitar?', answer: 'Yes, especially when learning. Counting out loud forces you to internalize the rhythm and reveals timing errors you might not notice otherwise. As you improve, you can transition to counting in your head, but many professional musicians still count out loud during complex passages.' },
  { question: 'What is a time signature and why does it matter?', answer: 'A time signature tells you how many beats are in a measure and what note value gets one beat. The most common is 4/4 (four quarter-note beats per measure). 3/4 is waltz time (three beats). 6/8 has six eighth-note beats, grouped in two sets of three, creating a swinging feel. Understanding time signatures helps you count correctly for any song.' },
];

export default function GuitarCountingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Count Rhythm on Guitar: Quarter Notes to Sixteenths',
    author: { '@type': 'Organization', name: 'RhythmGuitar.org' },
    publisher: { '@type': 'Organization', name: 'RhythmGuitar.org' },
    datePublished: '2026-02-05',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <p className="text-sm text-gray-400 mb-6 bg-dark-700/50 border border-dark-600 rounded-lg px-4 py-2 inline-block">
        📋 This page contains affiliate links. We may earn a commission at no extra cost to you.
      </p>

      <h1 className="text-4xl font-bold text-gray-200 mb-6">How to Count Rhythm on Guitar: Quarter Notes to Sixteenths</h1>
      <p className="text-gray-400 text-lg mb-8">Published February 5, 2026 · 14 min read</p>

      <div className="prose-rhythm">
        <p>
          Counting is the single most important skill in rhythm guitar — and it&apos;s the one most self-taught guitarists skip. If you&apos;ve ever struggled to play in time, lost your place in a song, or couldn&apos;t figure out a <a href="/strumming-patterns">strumming pattern</a> by ear, the fix is almost always better counting.
        </p>
        <p>
          In this guide, we&apos;ll build your counting skills from the ground up: quarter notes, eighth notes, sixteenth notes, and triplets. We&apos;ll use visual rhythm grids to make the concepts click, and provide practice exercises you can start using today.
        </p>

        <h2>Why Counting Matters</h2>
        <p>
          Think of counting as a GPS for music. Without it, you&apos;re driving by feel and hoping you end up in the right place. With counting, you know <em>exactly</em> where you are in the music at all times.
        </p>
        <p>
          Counting gives you:
        </p>
        <ul>
          <li><strong>Precision:</strong> You know exactly where every strum, note, or rest falls</li>
          <li><strong>Communication:</strong> When someone says &ldquo;play on the and of 2,&rdquo; you know what that means</li>
          <li><strong>Learning speed:</strong> New <a href="/strumming-patterns">strumming patterns</a> become much easier to learn when you can count them</li>
          <li><strong>Recovery:</strong> If you get lost, counting helps you find your place instantly</li>
          <li><strong>Independence:</strong> You can figure out rhythms from recordings without needing someone to show you</li>
        </ul>

        <h2>The Basics: Pulse and Tempo</h2>
        <p>
          Before we count anything, we need to understand <strong>pulse</strong>. Every piece of music has a steady pulse — a regular heartbeat that everything else is built on. When you tap your foot to a song, you&apos;re feeling the pulse.
        </p>
        <p>
          <strong>Tempo</strong> is how fast the pulse moves, measured in BPM (beats per minute). A slow ballad might be 60 BPM (one beat per second). An uptempo rock song might be 140 BPM. The tempo changes the speed, but the counting system stays the same.
        </p>
        <p>
          <strong>Exercise:</strong> Put on a song you know well. Tap your foot along with it. Count &ldquo;1, 2, 3, 4&rdquo; in time with your foot taps. That&apos;s the pulse. That&apos;s where counting starts.
        </p>

        <h2>Quarter Notes: 1 - 2 - 3 - 4</h2>
        <p>
          Quarter notes are the basic building blocks. In 4/4 time (the most common time signature in popular music), there are four quarter notes per measure. We count them simply: &ldquo;1, 2, 3, 4.&rdquo;
        </p>

        <div className="bg-dark-700 border border-dark-500 rounded-lg p-4 font-mono text-sm my-6">
          <p className="text-gray-400 mb-1">Quarter Note Rhythm Grid:</p>
          <div className="grid grid-cols-4 gap-2 text-center">
            <div className="bg-primary/20 border border-primary/40 rounded p-3">
              <div className="text-accent text-lg font-bold">1</div>
              <div className="text-gray-400 text-xs">Beat</div>
            </div>
            <div className="bg-primary/20 border border-primary/40 rounded p-3">
              <div className="text-accent text-lg font-bold">2</div>
              <div className="text-gray-400 text-xs">Beat</div>
            </div>
            <div className="bg-primary/20 border border-primary/40 rounded p-3">
              <div className="text-accent text-lg font-bold">3</div>
              <div className="text-gray-400 text-xs">Beat</div>
            </div>
            <div className="bg-primary/20 border border-primary/40 rounded p-3">
              <div className="text-accent text-lg font-bold">4</div>
              <div className="text-gray-400 text-xs">Beat</div>
            </div>
          </div>
        </div>

        <p>
          On guitar, quarter notes are played as downstrokes on each beat. This is the simplest strumming pattern: D - D - D - D. Your foot taps on each beat, your hand strums down on each beat. Simple, but important to master.
        </p>

        <h2>Eighth Notes: 1-and-2-and-3-and-4-and</h2>
        <p>
          Eighth notes divide each beat in half. Instead of four events per measure, we now have eight. We count them: &ldquo;1 and 2 and 3 and 4 and.&rdquo;
        </p>

        <div className="bg-dark-700 border border-dark-500 rounded-lg p-4 font-mono text-sm my-6">
          <p className="text-gray-400 mb-1">Eighth Note Rhythm Grid:</p>
          <div className="grid grid-cols-8 gap-1 text-center">
            {['1', '+', '2', '+', '3', '+', '4', '+'].map((beat, i) => (
              <div key={i} className={`${i % 2 === 0 ? 'bg-primary/20 border-primary/40' : 'bg-accent/10 border-accent/30'} border rounded p-2`}>
                <div className={`${i % 2 === 0 ? 'text-accent' : 'text-primary-light'} font-bold`}>{beat}</div>
                <div className="text-gray-400 text-[10px]">{i % 2 === 0 ? 'D' : 'U'}</div>
              </div>
            ))}
          </div>
        </div>

        <p>
          This is where the down-up strumming motion becomes essential. Downstrokes fall on the beats (1, 2, 3, 4) and upstrokes fall on the &ldquo;ands.&rdquo; Your arm moves in a constant pendulum: down-up-down-up-down-up-down-up.
        </p>
        <p>
          Most <a href="/strumming-patterns">strumming patterns</a> are built from eighth notes with certain strums removed. That&apos;s why understanding this subdivision is so crucial — it&apos;s the skeleton that all common patterns hang on.
        </p>

        <h2>Sixteenth Notes: 1-e-and-a</h2>
        <p>
          Sixteenth notes divide each beat into four equal parts. We count them: &ldquo;1-e-and-a, 2-e-and-a, 3-e-and-a, 4-e-and-a.&rdquo; That&apos;s 16 events per measure.
        </p>

        <div className="bg-dark-700 border border-dark-500 rounded-lg p-4 font-mono text-sm my-6">
          <p className="text-gray-400 mb-1">Sixteenth Note Rhythm Grid (one beat):</p>
          <div className="grid grid-cols-4 gap-2 text-center">
            {['1', 'e', '+', 'a'].map((beat, i) => (
              <div key={i} className="bg-dark-600 border border-dark-500 rounded p-3">
                <div className="text-accent font-bold">{beat}</div>
                <div className="text-gray-400 text-xs">{i % 2 === 0 ? 'D' : 'U'}</div>
              </div>
            ))}
          </div>
        </div>

        <p>
          Sixteenth notes are fast — at 100 BPM, you&apos;re strumming about 6.6 times per second. This subdivision is used in funk, fast rock, and R&B. You don&apos;t usually play all 16 strums; instead, you selectively hit or mute certain ones to create patterns.
        </p>
        <p>
          The strumming direction follows the same logic: the &ldquo;1&rdquo; and &ldquo;and&rdquo; are downstrokes, the &ldquo;e&rdquo; and &ldquo;a&rdquo; are upstrokes. This keeps your arm moving in the same constant pendulum motion, just twice as fast.
        </p>

        <h2>Triplets: 1-trip-let</h2>
        <p>
          Triplets divide each beat into three equal parts instead of two or four. We count them: &ldquo;1-trip-let, 2-trip-let, 3-trip-let, 4-trip-let.&rdquo; This creates a completely different feel — a rolling, swinging groove that&apos;s foundational to blues, jazz, and shuffle rhythms.
        </p>
        <p>
          Triplets feel fundamentally different from straight eighth or sixteenth notes because they&apos;re grouped in threes rather than twos. This is the feel behind blues shuffles, jazz swing, and 12/8 time signatures.
        </p>

        <h2>The Rhythm Grid System</h2>
        <p>
          A rhythm grid is a visual tool that maps out exactly where every strum falls within a measure. Think of it as a calendar for music — each cell represents a specific moment in time.
        </p>
        <p>
          Here&apos;s how to use a rhythm grid:
        </p>
        <ol>
          <li>Draw a row of boxes — one for each subdivision (8 boxes for eighth notes, 16 for sixteenths)</li>
          <li>Number the beats underneath</li>
          <li>Fill in the boxes where you strum (D for down, U for up)</li>
          <li>Leave empty boxes for rests</li>
        </ol>
        <p>
          This visual approach makes abstract rhythms concrete. It&apos;s one of the key teaching tools in the <a href="/go/rrg1">Real Rhythm Guitar course</a>, and once you start using rhythm grids, you&apos;ll wonder how you ever learned patterns without them.
        </p>

        <h2>Practice Exercises</h2>

        <h3>Exercise 1: The Counting Ladder</h3>
        <p>
          Set your metronome to 70 BPM. Play four bars of each subdivision:
        </p>
        <ol>
          <li>4 bars of quarter notes (count: 1-2-3-4)</li>
          <li>4 bars of eighth notes (count: 1-and-2-and-3-and-4-and)</li>
          <li>4 bars of sixteenth notes (count: 1-e-and-a-2-e-and-a...)</li>
          <li>4 bars of quarter notes again (come back home)</li>
        </ol>
        <p>
          The goal: each transition should be seamless. You should feel the tempo stay constant even as the number of strums per beat changes.
        </p>

        <h3>Exercise 2: The Missing Strum</h3>
        <p>
          Play a full bar of eighth notes (D U D U D U D U). Now remove one strum — but keep your arm moving in the same motion. Try removing different strums and notice how the feel changes. This is exactly how <a href="/strumming-patterns">strumming patterns</a> are built.
        </p>

        <h3>Exercise 3: Accent Shifting</h3>
        <p>
          Play eighth notes and accent (play louder) on different beats:
        </p>
        <ul>
          <li>Accent beats 1 and 3 (standard rock feel)</li>
          <li>Accent beats 2 and 4 (backbeat — snare drum feel)</li>
          <li>Accent the &ldquo;ands&rdquo; only (<a href="/syncopation-guitar">syncopated</a> feel)</li>
        </ul>
        <p>
          This exercise develops dynamic control and helps you feel how accents change the character of a rhythm.
        </p>

        <h3>Exercise 4: Count Along with Music</h3>
        <p>
          Put on your favorite songs and count along. Start with &ldquo;1-2-3-4&rdquo; and see if you can feel where the eighth notes and sixteenth notes fall. Try to identify the <a href="/strumming-patterns">strumming pattern</a> being used. This real-world application is where counting skills become truly useful.
        </p>

        <h2>Time Signatures Beyond 4/4</h2>
        <p>
          While 4/4 is by far the most common time signature, you&apos;ll encounter others:
        </p>
        <ul>
          <li><strong>3/4 (Waltz time):</strong> Three beats per measure. Count: &ldquo;1-2-3, 1-2-3.&rdquo; Used in waltzes, some folk songs, and occasional pop songs.</li>
          <li><strong>6/8 (Compound time):</strong> Six eighth notes per measure, grouped in two sets of three. Count: &ldquo;1-2-3-4-5-6.&rdquo; Creates a swinging, rolling feel. Used in slow blues, some ballads, and Irish music.</li>
          <li><strong>2/4 (March time):</strong> Two beats per measure. Common in marches, polkas, and some Latin styles.</li>
        </ul>
        <p>
          The counting principles remain the same — you&apos;re just adjusting how many beats fit in each measure.
        </p>

        <h2>Next Steps</h2>
        <p>
          Counting is a skill that improves with consistent practice. Once you&apos;re comfortable counting quarter, eighth, and sixteenth notes, you&apos;re ready to tackle more advanced rhythm concepts:
        </p>
        <ul>
          <li><a href="/strumming-patterns">10 Essential Strumming Patterns</a> — Apply your counting to real patterns</li>
          <li><a href="/syncopation-guitar">Syncopation on Guitar</a> — Learn to play &ldquo;against&rdquo; the beat</li>
          <li><a href="/guitar-timing-tips">10 Tips for Better Timing</a> — Practical advice for tightening your feel</li>
          <li><a href="/rhythm-vs-lead-guitar">Rhythm vs Lead Guitar</a> — Understanding the rhythm guitarist&apos;s role</li>
        </ul>
        <p>
          For a complete, structured approach that takes you from counting basics through advanced rhythm concepts, the <a href="/go/rrg1">Real Rhythm Guitar Level 1</a> course is the most comprehensive resource available. <a href="/best-rhythm-guitar-course">Read our full review</a>.
        </p>

        <h2>Frequently Asked Questions</h2>
        <FAQSection faqs={faqs} />
      </div>

      <div className="mt-12">
        <AffiliateCTA />
      </div>
    </article>
  );
}

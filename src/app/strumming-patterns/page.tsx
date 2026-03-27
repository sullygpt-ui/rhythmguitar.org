import { createMetadata } from '@/lib/metadata';
import AffiliateCTA from '@/components/AffiliateCTA';

export const metadata = createMetadata({
  title: '10 Essential Strumming Patterns Every Guitarist Should Know',
  description: 'Learn 10 strumming patterns that cover 90% of popular songs. Complete with notation, tips, and practice advice for beginners through advanced players.',
  path: '/strumming-patterns',
});

const patterns = [
  { name: 'The Steady Quarter', notation: 'D - D - D - D -', beats: '1   2   3   4', level: 'Beginner', desc: 'Pure downstrokes on every beat. This is where every guitarist starts. It sounds simple, but keeping it perfectly even at various tempos is harder than you think. Use this for punk rock, campfire singalongs, and any time you need a driving, forceful rhythm.', tip: 'Focus on making every downstroke sound identical — same volume, same tone, same attack. Use a metronome starting at 60 BPM and work up to 140 BPM.' },
  { name: 'The Basic Down-Up', notation: 'D U D U D U D U', beats: '1 + 2 + 3 + 4 +', level: 'Beginner', desc: 'Alternating down and up strokes on every eighth note. This is the foundation of almost every strumming pattern. Your arm moves in a constant pendulum motion — down on the numbers, up on the "ands." Many patterns are variations of this with certain strums removed.', tip: 'Keep your arm moving at a constant speed. The motion never stops. Even when you skip a strum in more complex patterns, your arm keeps the same down-up motion.' },
  { name: 'The Folk Strum', notation: 'D - D U - U D U', beats: '1   2 + . + 4 +', level: 'Beginner', desc: 'One of the most common patterns in popular music. You hear it in thousands of folk, pop, and country songs. The skip on beat 3\'s downstroke creates a lilting, natural feel. Songs like "Knockin\' on Heaven\'s Door" and "Horse with No Name" use variations of this pattern.', tip: 'The secret is the missing downstroke on beat 3. Your arm still moves down, but you don\'t hit the strings. This keeps your timing locked while creating the syncopated feel.' },
  { name: 'The Pop Rock', notation: 'D - D U D U D U', beats: '1   2 + 3 + 4 +', level: 'Beginner', desc: 'A slight variation of the full eighth note pattern — you play a single downstroke on beat 1, then switch to down-up for beats 2 through 4. This creates a slight emphasis on beat 1 that gives the pattern a driving, forward-moving energy. Great for uptempo pop and rock songs.', tip: 'Accent beat 1 slightly louder than the other strums. This gives the pattern its characteristic "punch" on the downbeat.' },
  { name: 'The Island Strum', notation: 'D - D U - U D U', beats: '1   2 +   + 4 +', level: 'Intermediate', desc: 'Also called the "reggae strum" or "calypso strum," this pattern emphasizes the off-beats — the "ands" — creating that laid-back island feel. It\'s used in reggae, ska, and tropical-influenced pop. The missed downstroke on beat 3 is what gives it that bouncy, relaxed groove.', tip: 'Lean into the upstrokes. In most patterns, downstrokes are louder, but in this pattern, the upstrokes should have equal or greater emphasis. Think "lazy and relaxed."' },
  { name: 'The Muted Groove', notation: 'D x D U x U D U', beats: '1 x 2 + x + 4 +', level: 'Intermediate', desc: 'Adding muted "ghost strums" (marked x) creates a percussive, funky feel. You lightly rest your fretting hand fingers across the strings while strumming to get a "chk" sound. This technique transforms a basic pattern into something that grooves hard. Essential for funk, R&B, and modern pop.', tip: 'The muted strums should be quick and light — just enough contact to make a percussive "chk." Practice the muting motion separately before combining it with the full pattern.' },
  { name: 'The Ballad Pattern', notation: 'D - - U - U D -', beats: '1     +   + 4', level: 'Intermediate', desc: 'A spacious, breathing pattern perfect for slow songs and ballads. The open space in the pattern lets chords ring out and creates an emotional, contemplative feel. Works beautifully with fingerpicking variations where you pluck individual strings on some beats.', tip: 'Let the silence work for you. Resist the urge to fill every beat. The spaces in this pattern are what make it sound musical and emotional.' },
  { name: 'The Syncopated Funk', notation: 'D - U - D U - U', beats: '1   +   3 +   +', level: 'Advanced', desc: 'This pattern puts emphasis on unexpected beats, creating a groove that pulls against the steady pulse. It\'s the foundation of funk guitar and appears in R&B, soul, and modern pop. The key is playing the off-beat upstrokes with confidence and consistent volume. Check our full guide on syncopation for more.', tip: 'Practice this very slowly at first. The syncopation can be disorienting. Count out loud: "ONE - and - THREE and - and." Once your body internalizes the feel, you can speed up.' },
  { name: 'The Reggae Skank', notation: '- U - U - U - U', beats: '  +   +   +   +', level: 'Advanced', desc: 'Pure upstrokes on the off-beats — the signature sound of reggae guitar. No downstrokes at all. This creates the "chop" sound that defines reggae music. Often combined with palm muting for an even tighter, more percussive sound. Think Bob Marley, Peter Tosh, and any classic reggae track.', tip: 'Mute the strings immediately after each upstroke by releasing fretting hand pressure. This creates the short, choppy sound essential to reggae. The strum should be quick and sharp, not smooth and flowing.' },
  { name: 'The Sixteenth Note Groove', notation: 'D U D U D U D U D U D U D U D U', beats: '1 e + a 2 e + a 3 e + a 4 e + a', level: 'Advanced', desc: 'Sixteen strums per bar — four per beat. This is the fastest common strumming subdivision and creates an intense, driving energy. Used in fast rock, punk, and high-energy pop. You don\'t always play every single strum; the pattern comes alive when you selectively mute or skip certain strums within the sixteenth-note framework.', tip: 'Your arm needs to move twice as fast as eighth notes. Start at a very slow tempo (50-60 BPM) and focus on keeping every strum perfectly even. Speed will come with practice.' },
];

export default function StrummingPatternsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: '10 Essential Strumming Patterns Every Guitarist Should Know',
    description: 'Learn the most important strumming patterns for guitar, from basic to advanced.',
    step: patterns.map((p, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: p.name,
      text: p.desc,
    })),
  };

  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <p className="text-sm text-gray-400 mb-6 bg-dark-700/50 border border-dark-600 rounded-lg px-4 py-2 inline-block">
        📋 This page contains affiliate links. We may earn a commission at no extra cost to you.
      </p>

      <h1 className="text-4xl font-bold text-gray-200 mb-6">10 Essential Strumming Patterns Every Guitarist Should Know</h1>
      <p className="text-gray-400 text-lg mb-8">Published February 10, 2026 · 15 min read</p>

      <div className="prose-rhythm">
        <p>
          Strumming patterns are the rhythmic DNA of guitar playing. A great strumming pattern can make a simple two-chord song sound incredible, while the wrong pattern can make a complex arrangement fall flat. The good news? <strong>You only need about 10 patterns to cover 90% of the songs you&apos;ll ever want to play.</strong>
        </p>
        <p>
          In this guide, we&apos;ll break down 10 essential strumming patterns from beginner to advanced, with notation, tips, and practice advice for each one. We use a simple notation system: <strong>D = downstroke, U = upstroke, x = muted strum, and - = rest (arm moves but doesn&apos;t hit strings)</strong>.
        </p>
        <p>
          Before diving in, make sure you understand <a href="/guitar-counting">basic counting</a> — you&apos;ll need to feel the difference between quarter notes, eighth notes, and sixteenth notes to execute these patterns properly.
        </p>

        <h2>How Strumming Notation Works</h2>
        <p>
          Throughout this guide, we write patterns on two lines. The top line shows what your strumming hand does (D, U, x, or -). The bottom line shows the beat count. Here&apos;s how to read them:
        </p>
        <ul>
          <li><strong>D</strong> — Downstroke (strum from low E toward high E)</li>
          <li><strong>U</strong> — Upstroke (strum from high E toward low E)</li>
          <li><strong>x</strong> — Muted strum (lightly rest fingers on strings and strum for a percussive sound)</li>
          <li><strong>-</strong> — Rest/skip (your arm moves in position but doesn&apos;t hit the strings)</li>
        </ul>
        <p>
          The beat count shows where each strum falls. Numbers (1, 2, 3, 4) are the main beats. &ldquo;+&rdquo; represents the &ldquo;and&rdquo; (off-beat). &ldquo;e&rdquo; and &ldquo;a&rdquo; are sixteenth note subdivisions.
        </p>
        <p>
          The most important concept: <strong>your strumming arm never stops moving</strong>. Even on rests, your arm moves down or up — it just doesn&apos;t contact the strings. This constant motion is what keeps you in time.
        </p>

        <h2>The 10 Patterns</h2>

        {patterns.map((pattern, index) => (
          <div key={index} className="my-8">
            <h3>Pattern {index + 1}: {pattern.name}</h3>
            <div className="flex items-center gap-2 mb-3">
              <span className={`text-xs font-semibold px-2 py-1 rounded ${
                pattern.level === 'Beginner' ? 'bg-green-900/50 text-green-400' :
                pattern.level === 'Intermediate' ? 'bg-yellow-900/50 text-yellow-400' :
                'bg-red-900/50 text-red-400'
              }`}>{pattern.level}</span>
            </div>
            <div className="bg-dark-700 border border-dark-500 rounded-lg p-4 font-mono text-sm mb-4">
              <div className="text-accent">{pattern.notation}</div>
              <div className="text-gray-400">{pattern.beats}</div>
            </div>
            <p>{pattern.desc}</p>
            <p><strong>Pro Tip:</strong> {pattern.tip}</p>
          </div>
        ))}

        <h2>How to Practice Strumming Patterns</h2>
        <p>
          Learning these patterns isn&apos;t just about memorizing the sequence — it&apos;s about internalizing the feel until it becomes automatic. Here&apos;s the most effective practice approach:
        </p>
        <ol>
          <li><strong>Start with one chord.</strong> Don&apos;t add chord changes until the strumming pattern is automatic. Use an easy open chord like Em or G.</li>
          <li><strong>Use a metronome.</strong> Start at 60 BPM. If you can&apos;t play it cleanly at 60, go slower. There is no &ldquo;too slow.&rdquo;</li>
          <li><strong>Count out loud.</strong> Say the beat count while strumming. This connects your internal clock to your physical motion.</li>
          <li><strong>Practice for 5 minutes per pattern.</strong> Focused repetition beats unfocused noodling every time.</li>
          <li><strong>Add chord changes gradually.</strong> Once the pattern is automatic on one chord, try switching between two chords (like G and C) every 4 beats.</li>
          <li><strong>Apply to a real song.</strong> The ultimate test is playing along with an actual recording. Find a song that uses the pattern and try to lock in with the original.</li>
        </ol>

        <h2>Common Strumming Mistakes</h2>
        <ul>
          <li><strong>Stopping your arm on rests.</strong> Your arm should move continuously. Rests mean your arm moves but misses the strings — it doesn&apos;t mean your arm stops.</li>
          <li><strong>Strumming from the wrist only.</strong> The motion should come from your elbow. Your wrist stays loose and acts as a hinge, not the motor.</li>
          <li><strong>Uneven volume.</strong> Downstrokes are naturally louder than upstrokes. Work on making upstrokes match your downstrokes in volume (unless the pattern calls for an accent).</li>
          <li><strong>Rushing.</strong> The most common timing error. Use a metronome and resist the urge to speed up, especially in patterns with rests or syncopation.</li>
        </ul>

        <h2>Taking Your Strumming Further</h2>
        <p>
          These 10 patterns give you a solid foundation, but strumming mastery goes deeper. Advanced skills include <a href="/syncopation-guitar">syncopation</a>, dynamics (playing louder and softer within a pattern), <a href="/palm-muting-technique">palm muting</a> for percussive effects, and developing your own patterns by ear.
        </p>
        <p>
          For a structured, step-by-step approach to mastering all of these skills, check out <a href="/go/rrg1">Real Rhythm Guitar Level 1</a>. It covers all 10 of these pattern types and more, with video demonstrations and a printable workbook. Read our <a href="/best-rhythm-guitar-course">full review</a>.
        </p>
        <p>
          Also explore our other guides: <a href="/guitar-counting">counting rhythm</a>, <a href="/chord-changes">faster chord changes</a>, and <a href="/guitar-timing-tips">timing improvement tips</a>.
        </p>
      </div>

      <div className="mt-12">
        <AffiliateCTA />
      </div>
    </article>
  );
}

export interface Review {
  author: string;
  rating: number;
  text: string;
  course?: string;
}

export const reviews: Review[] = [
  {
    author: 'fakeplasticriff',
    rating: 5,
    text: 'Excellent course that cover all the important stuff about rhythm. I highly recommend it for anyone who wants to improve their rhythm guitar skills.',
    course: 'Real Rhythm Guitar Level 1',
  },
  {
    author: 'Abdulaziz Aljaafari',
    rating: 5,
    text: "Jake Lizzio's Real Rhythm Guitar course is absolutely fantastic. The way he breaks down complex rhythm concepts into simple, digestible lessons is incredible. I finally feel confident about my rhythm playing.",
    course: 'Real Rhythm Guitar Level 1',
  },
  {
    author: 'Alex Stephany',
    rating: 5,
    text: 'Jake is what you call a guitar teacher. No flashy lights, no over-the-top production. He gets right down to business and teaches you what you need to know in a clear, concise way.',
    course: 'Real Rhythm Guitar Level 1',
  },
  {
    author: 'BrianLit',
    rating: 5,
    text: 'It is fairly easy to follow. I especially like all the tips and special advice for learning each rhythm. The practice tracks are great for building confidence.',
    course: 'Real Rhythm Guitar Level 1',
  },
  {
    author: 'GuitarMike42',
    rating: 5,
    text: "I've been playing for 10 years and never really understood rhythm properly until this course. Jake explains things in a way that just clicks. My timing has improved dramatically.",
    course: 'Real Rhythm Guitar Level 1',
  },
  {
    author: 'Sarah K.',
    rating: 5,
    text: "As a complete beginner, I was intimidated by guitar courses. But Jake's teaching style is so approachable and encouraging. I'm actually keeping time now!",
    course: 'Real Rhythm Guitar Level 1',
  },
  {
    author: 'DesertRocker',
    rating: 5,
    text: "The rhythm grid concept alone is worth the price of admission. It completely changed how I think about strumming patterns. Can't recommend this enough.",
    course: 'Real Rhythm Guitar Level 1',
  },
  {
    author: 'JamSessionPro',
    rating: 5,
    text: 'Finally a course that focuses on what most guitarists actually need — solid rhythm skills. The video quality is excellent and the PDF workbook is a great companion.',
    course: 'Real Rhythm Guitar Level 1',
  },
];

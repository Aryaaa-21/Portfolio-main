import { Shield, BookOpen, Heart } from 'lucide-react';

// The main projects, explained properly. Web3 builds live in the full list below, not here. Each says what was built and
// what was hard about it. `role` is honest about who wrote the code.
export const featured = [
  {
    id: 'rakshamarg',
    title: 'RakshaMarg',
    image: '/img/project/rakshamarg.webp',
    imagePosition: 'object-left',
    category: 'AI + Public Safety',
    role: 'Team DNA Coded',
    builtLabel: 'What we built',
    icon: Shield,
    accent: 'emerald',
    summary: 'Navigation that picks the safest, best-lit route instead of the fastest one.',
    built:
      'A safety-first navigation app. It scores each route from 0 to 100 using street lighting, crime data and crowd density, offers three options with the safest highlighted, and adds live location sharing, a one-tap SOS, and nearby safe zones such as police stations and hospitals.',
    hard:
      'Turning very different signals (lighting, crime, crowd) into one score people can trust, and keeping "safest" from producing absurdly long detours. The live tracking and SOS path also had to keep working when the rest of the app was slow.',
    features: ['Route safety score (0-100)', 'Live location sharing', 'One-tap SOS alerts', 'Safe zones along the route'],
    techStack: ['TypeScript', 'JavaScript', 'Python', 'React', 'MongoDB', 'Google Maps API', 'Gemini AI', 'Firebase'],
    github: 'https://github.com/DNA-Coded/RakshaMarg',
    demo: 'https://www.rakshamarg.app/',
  },
  {
    id: 'vedax',
    title: 'VEDAX',
    image: '/img/project/vedax.webp',
    imagePosition: 'object-center',
    category: 'EdTech',
    role: 'Lead developer',
    icon: BookOpen,
    accent: 'orange',
    summary: 'Learn and practise Vedic mathematics through timed, game-like drills.',
    built:
      'A web app covering all 16 sutras as practice modules, a 60-second speed arena for mental calculation, a global leaderboard computed on the backend, and optional sound and vibration feedback. It runs on React with a Node, Express and MongoDB API.',
    hard:
      'Guest mode. People can practise without an account and their progress lives in the browser, so signing in later means merging that local history into the database without losing or double-counting anything. Keeping the leaderboard fair meant scoring on the server, not in the browser.',
    features: ['16-sutra practice library', '60-second speed arena', 'Server-computed leaderboard', 'Guest progress that syncs on sign-in'],
    techStack: ['TypeScript', 'React', 'Tailwind CSS', 'Zustand', 'Node.js', 'Express', 'MongoDB'],
    github: '',
    demo: 'https://vedax-math.vercel.app/',
  },
  {
    id: 'swasthi',
    title: 'Swasthi',
    image: '/img/project/swasthi.webp',
    imagePosition: 'object-left',
    category: 'Healthcare + AI',
    role: 'Team Sprinter',
    builtLabel: 'What we built',
    icon: Heart,
    accent: 'violet',
    summary: 'A friendly AI health assistant that answers in Indian languages.',
    built:
      'Our first hackathon project, built at CodeSprint 2.0 at JIS University in September 2025, where we placed 13th. It pairs a symptom check with wellness guidance so someone can get basic direction early instead of ignoring a problem.',
    hard:
      'It was the first time any of us built against a clock. Most of the difficulty was deciding what to cut so that one flow worked end to end in two days, then explaining it clearly in a short pitch.',
    features: ['Symptom assessment', 'Wellness guidance', 'Answers in Indian languages', 'Built in a two-day hackathon'],
    techStack: ['Python', 'JavaScript', 'React', 'Flask', 'MongoDB', 'Gemini AI'],
    github: '',
    demo: '',
  },
];

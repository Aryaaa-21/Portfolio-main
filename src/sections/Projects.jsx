import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Github, ExternalLink, Shield, BookOpen, Heart, ArrowUp, ArrowDown } from 'lucide-react';

// The main projects, explained properly. Web3 builds live in the full list below, not here. Each says what was built and
// what was hard about it. `role` is honest about who wrote the code.
const featured = [
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
    techStack: ['TypeScript', 'React', 'Python', 'MongoDB', 'Google Maps API', 'Gemini AI', 'Firebase'],
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
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Node.js', 'Express', 'MongoDB'],
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
    techStack: ['React', 'Python', 'Flask', 'MongoDB', 'Gemini AI'],
    github: '',
    demo: '',
  },
];

const ACCENT_CHIP = {
  emerald: 'border-emerald-500/40 text-emerald-400',
  cyan: 'border-cyan-500/40 text-cyan-400',
  violet: 'border-violet-500/40 text-violet-400',
  orange: 'border-orange-500/40 text-orange-400',
};

const ACCENT_DOT = {
  emerald: 'bg-emerald-500',
  cyan: 'bg-cyan-500',
  violet: 'bg-violet-500',
  orange: 'bg-orange-500',
};

const pad = (n) => String(n).padStart(2, '0');

function ProjectLinks({ project, dark }) {
  const outline = dark
    ? 'border-white/25 text-white hover:bg-white hover:text-black'
    : 'border-text dark:border-text-dark hover:bg-text hover:text-background dark:hover:bg-text-dark dark:hover:text-background-dark';
  const solid = dark
    ? 'bg-white text-black border-white hover:bg-neutral-200'
    : 'bg-text border-text text-background dark:bg-text-dark dark:border-text-dark dark:text-background-dark hover:opacity-85';
  const base = 'px-5 py-2.5 border font-mono text-xs uppercase tracking-wider transition-colors duration-300 flex items-center justify-center gap-2';
  return (
    <>
      {project.demo && (
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className={`${base} ${solid}`}>
          <ExternalLink className="w-3.5 h-3.5" /> Live site
        </a>
      )}
      {project.github && (
        <a href={project.github} target="_blank" rel="noopener noreferrer" className={`${base} ${outline}`}>
          <Github className="w-3.5 h-3.5" /> Code
        </a>
      )}
    </>
  );
}

// Desktop slide text. Children fade up in sequence each time the slide becomes active.
function SlideContent({ project, idx, isActive }) {
  const step = (order) => ({
    className: `transition-all duration-700 ease-out ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`,
    style: { transitionDelay: isActive ? `${350 + order * 90}ms` : '0ms' },
  });
  const label = 'text-xs font-mono uppercase tracking-wider text-white/45 block mb-1.5';

  return (
    <div className="w-full h-full bg-neutral-950 flex flex-col justify-center px-14 xl:px-20">
      <div className="max-w-xl space-y-5 pt-16">
        <div {...step(0)}>
          <div className="flex flex-wrap items-center gap-3">
            <span className={`px-2 py-0.5 border text-xs font-mono tracking-wider uppercase ${ACCENT_CHIP[project.accent]}`}>
              {project.category}
            </span>
            <span className="text-xs font-mono text-white/50 tracking-wider uppercase">{project.role}</span>
          </div>
        </div>

        <div {...step(1)}>
          <span className="font-mono text-xs text-white/30 block mb-1">{pad(idx)} / {pad(featured.length)}</span>
          <h2 className="text-4xl xl:text-5xl font-display font-bold tracking-tight text-white uppercase">{project.title}</h2>
          <p className="text-sm xl:text-base font-body text-white/80 leading-relaxed mt-3">{project.summary}</p>
        </div>

        <div {...step(2)}>
          <div className="pt-5 border-t border-white/10">
            <span className={label}>{project.builtLabel || 'What I built'}</span>
            <p className="text-xs xl:text-sm text-white/65 font-body leading-relaxed">{project.built}</p>
          </div>
        </div>

        <div {...step(3)}>
          <span className={label}>What was hard</span>
          <p className="text-xs xl:text-sm text-white/65 font-body leading-relaxed border-l-2 border-white/20 pl-3">
            {project.hard}
          </p>
        </div>

        <div {...step(4)}>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span key={tech} className="px-2 py-0.5 border border-white/15 text-xs font-mono text-white/60">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div {...step(5)}>
          <div className="flex gap-3 pt-2">
            <ProjectLinks project={project} dark />
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideImage({ project, side }) {
  return (
    <div className="w-full h-full relative overflow-hidden bg-neutral-900">
      <img
        src={project.image}
        alt={`${project.title} screenshot`}
        loading="lazy"
        className={`w-full h-full object-cover ${project.imagePosition || 'object-center'} brightness-[0.9] hover:brightness-100 transition-all duration-[1000ms] hover:scale-105`}
      />
      <div
        className={`absolute inset-0 pointer-events-none ${
          side === 'left' ? 'bg-gradient-to-r from-transparent to-neutral-950/90' : 'bg-gradient-to-l from-transparent to-neutral-950/90'
        }`}
      />
    </div>
  );
}

export default function Projects({ currentPage: propPage, setCurrentPage: propSetPage }) {
  const [localPage, setLocalPage] = useState(1);
  const [scrollProgress, setScrollProgress] = useState(0);
  const currentSlide = propPage !== undefined ? propPage : localPage;
  const setCurrentSlide = propSetPage !== undefined ? propSetPage : setLocalPage;
  const totalSlides = featured.length;
  const containerRef = useRef(null);

  const handleScroll = useCallback(() => {
    if (!containerRef.current || window.innerWidth < 1024) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollable = rect.height - window.innerHeight;
    if (scrollable <= 0) return;
    const progress = Math.max(0, Math.min(1, -rect.top / scrollable));
    setScrollProgress(progress);
    setCurrentSlide(Math.min(totalSlides, Math.max(1, Math.ceil(progress * totalSlides - 0.001))));
  }, [setCurrentSlide, totalSlides]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToSlide = (idx) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const containerTop = rect.top + window.scrollY;
    const scrollable = rect.height - window.innerHeight;
    window.scrollTo({ top: containerTop + ((idx - 1) / totalSlides) * scrollable + 5, behavior: 'smooth' });
  };

  const slide = Math.min(totalSlides, Math.max(1, currentSlide));

  return (
    <section
      ref={containerRef}
      id="featured"
      className="relative w-full bg-black text-white border-b border-white/10"
    >
      {/* Desktop: one screen of scroll per project, pinned split-screen */}
      <div className="hidden lg:block" style={{ height: `${totalSlides * 100}vh` }}>
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none z-10" />

          {featured.map((project, i) => {
            const idx = i + 1;
            const isActive = slide === idx;
            const isEven = idx % 2 === 0;
            const leftTrans = isActive ? 'translateY(0)' : isEven ? 'translateY(-100%)' : 'translateY(100%)';
            const rightTrans = isActive ? 'translateY(0)' : isEven ? 'translateY(100%)' : 'translateY(-100%)';
            const column = 'absolute top-0 w-1/2 h-full transition-transform duration-[800ms] ease-[cubic-bezier(0.85,0,0.15,1)]';

            return (
              <div
                key={project.id}
                aria-hidden={!isActive}
                className={`absolute inset-0 ${isActive ? 'z-20 pointer-events-auto' : 'z-0 pointer-events-none'}`}
              >
                <div className={`${column} left-0`} style={{ transform: leftTrans }}>
                  {isEven ? <SlideContent project={project} idx={idx} isActive={isActive} /> : <SlideImage project={project} side="left" />}
                </div>
                <div className={`${column} left-1/2`} style={{ transform: rightTrans }}>
                  {isEven ? <SlideImage project={project} side="right" /> : <SlideContent project={project} idx={idx} isActive={isActive} />}
                </div>
              </div>
            );
          })}

          {/* Controls */}
          <div className="absolute bottom-6 left-6 right-6 z-40 flex items-center justify-between">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => slide > 1 && scrollToSlide(slide - 1)}
                disabled={slide === 1}
                aria-label="Previous project"
                className="p-2 border border-white/15 hover:border-white/50 text-white/60 hover:text-white disabled:opacity-20 transition-all bg-white/5 backdrop-blur-sm"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => slide < totalSlides && scrollToSlide(slide + 1)}
                disabled={slide === totalSlides}
                aria-label="Next project"
                className="p-2 border border-white/15 hover:border-white/50 text-white/60 hover:text-white disabled:opacity-20 transition-all bg-white/5 backdrop-blur-sm"
              >
                <ArrowDown className="w-4 h-4" />
              </button>
            </div>

            {/* Project picker */}
            <div className="flex items-center gap-1 bg-black/60 backdrop-blur-sm border border-white/10 px-1 py-1">
              {featured.map((project, i) => {
                const idx = i + 1;
                const isCurrent = slide === idx;
                return (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => scrollToSlide(idx)}
                    aria-current={isCurrent}
                    className={`px-3 py-1.5 font-mono text-xs tracking-wider uppercase transition-colors duration-300 ${
                      isCurrent ? 'bg-white text-black font-bold' : 'text-white/55 hover:text-white'
                    }`}
                  >
                    {pad(idx)} {project.title}
                  </button>
                );
              })}
            </div>

            <div className="w-28 h-px bg-white/15 relative" aria-hidden="true">
              <div className="absolute top-0 left-0 h-full bg-white transition-all duration-200" style={{ width: `${scrollProgress * 100}%` }} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: stacked cards */}
      <div className="lg:hidden w-full px-6 pt-12 pb-20 bg-background dark:bg-background-dark space-y-12">
        {featured.map((project) => {
          const ProjectIcon = project.icon;
          return (
            <article
              key={project.id}
              className="border border-border dark:border-border-dark bg-surface/30 dark:bg-surface-dark/30 overflow-hidden flex flex-col"
            >
              <div className="w-full h-48 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  loading="lazy"
                  className={`w-full h-full object-cover ${project.imagePosition || 'object-center'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <ProjectIcon className="w-5 h-5 text-white" />
                  <span className="text-xs font-mono uppercase text-white tracking-wider bg-black/60 px-2 py-0.5 border border-white/20">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-5 text-text dark:text-text-dark">
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-2xl font-bold tracking-tight">{project.title}</h3>
                    <span className="text-xs font-mono uppercase text-text/50 dark:text-text-dark/50">{project.role}</span>
                  </div>
                  <p className="text-sm font-body text-text/80 dark:text-text-dark/80 mt-2 leading-relaxed">{project.summary}</p>
                </div>

                <div className="pt-4 border-t border-border dark:border-border-dark">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-text/50 dark:text-text-dark/50 mb-1.5">{project.builtLabel || 'What I built'}</h4>
                  <p className="text-sm font-body text-text/65 dark:text-text-dark/65 leading-relaxed">{project.built}</p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-text/50 dark:text-text-dark/50 mb-1.5">What was hard</h4>
                  <p className="text-sm font-body text-text/65 dark:text-text-dark/65 leading-relaxed border-l-2 border-border dark:border-border-dark pl-3">
                    {project.hard}
                  </p>
                </div>

                <ul className="space-y-1.5 text-xs font-mono text-text/70 dark:text-text-dark/70">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${ACCENT_DOT[project.accent]}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3 pt-4 border-t border-border dark:border-border-dark [&>a]:flex-1">
                  <ProjectLinks project={project} />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

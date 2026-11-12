import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { featured } from '../data/featured';
import Reveal, { RevealText } from '../components/motion/Reveal';

// The main projects as a plain list. On a mouse, a preview of the project
// under the pointer follows it around; on touch, each row carries its image.
export default function SelectedWork({ total }) {
  const listRef = useRef(null);
  const [active, setActive] = useState(null);
  const x = useSpring(useMotionValue(0), { stiffness: 180, damping: 22, mass: 0.5 });
  const y = useSpring(useMotionValue(0), { stiffness: 180, damping: 22, mass: 0.5 });

  const onMove = (event) => {
    if (event.pointerType !== 'mouse' || !listRef.current) return;
    const rect = listRef.current.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  };

  const current = featured.find((project) => project.id === active);

  return (
    <section id="work" className="py-24 lg:py-36 bg-background dark:bg-background-dark theme-transition">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 lg:mb-16">
          <RevealText
            text="SELECTED WORK"
            className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-text dark:text-text-dark"
          />
          <Reveal delay={0.15} y={12}>
            <p className="font-body text-base text-text/60 dark:text-text-dark/60 max-w-sm">
              Three projects I can talk about in detail. The other {total - featured.length} are on the projects page.
            </p>
          </Reveal>
        </div>

        <div
          ref={listRef}
          onPointerMove={onMove}
          onPointerLeave={() => setActive(null)}
          className="relative border-t border-border dark:border-border-dark"
        >
          {featured.map((project) => {
            const dimmed = active && active !== project.id;
            return (
              <Link
                key={project.id}
                to="/projects"
                onPointerEnter={(event) => event.pointerType === 'mouse' && setActive(project.id)}
                onFocus={() => setActive(project.id)}
                onBlur={() => setActive(null)}
                className={`group relative grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-4 items-center py-8 lg:py-10 border-b border-border dark:border-border-dark transition-opacity duration-500 ${
                  dimmed ? 'lg:opacity-35' : 'opacity-100'
                }`}
              >
                <div className="lg:hidden aspect-[16/10] overflow-hidden border border-border dark:border-border-dark bg-mono-11">
                  <img
                    src={project.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className={`w-full h-full object-cover ${project.imagePosition}`}
                  />
                </div>

                <h3 className="lg:col-span-5 font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-text dark:text-text-dark transition-transform duration-500 ease-out lg:group-hover:translate-x-4">
                  {project.title}
                </h3>

                <div className="lg:col-span-4">
                  <p className="font-body text-base lg:text-lg leading-snug text-text/80 dark:text-text-dark/80">
                    {project.summary}
                  </p>
                  <p className="font-body text-sm text-text/50 dark:text-text-dark/50 mt-2">
                    {project.category}, {project.role}
                  </p>
                </div>

                <p className="lg:col-span-2 font-body text-sm text-text/55 dark:text-text-dark/55">
                  {project.techStack.slice(0, 3).join(', ')}
                </p>

                <span className="hidden lg:flex lg:col-span-1 justify-end">
                  <span className="w-12 h-12 rounded-full border border-border dark:border-border-dark flex items-center justify-center text-text dark:text-text-dark transition-all duration-500 group-hover:bg-text group-hover:text-background dark:group-hover:bg-text-dark dark:group-hover:text-background-dark group-hover:rotate-45">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </span>
              </Link>
            );
          })}

          {/* Preview that follows the pointer */}
          <motion.div
            aria-hidden="true"
            style={{ x, y }}
            className="hidden lg:block pointer-events-none absolute top-0 left-0 z-20"
          >
            <AnimatePresence>
              {current && (
                <motion.div
                  key="preview"
                  initial={{ opacity: 0, scale: 0.7, rotate: -6 }}
                  animate={{ opacity: 1, scale: 1, rotate: -3 }}
                  exit={{ opacity: 0, scale: 0.7, rotate: 4 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 w-[400px] aspect-[16/10] overflow-hidden border border-white/15 bg-mono-11 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)]"
                >
                  <AnimatePresence initial={false}>
                    <motion.img
                      key={current.id}
                      src={current.image}
                      alt=""
                      initial={{ opacity: 0, scale: 1.12 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.45 }}
                      className={`absolute inset-0 w-full h-full object-cover ${current.imagePosition}`}
                    />
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        <Reveal y={12} className="mt-10">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 font-body text-base font-semibold text-text dark:text-text-dark border-b border-text/40 dark:border-text-dark/40 hover:border-text dark:hover:border-text-dark pb-1 transition-colors"
          >
            See all {total} projects
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

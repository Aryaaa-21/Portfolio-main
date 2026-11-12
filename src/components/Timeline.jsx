import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion';
import SpotlightCard from './motion/SpotlightCard';

const EASE = [0.22, 1, 0.36, 1];

// Distance from the top of a row to the centre of its node (pt-6 + half the node).
const NODE_CENTER = 40;

const DETAIL_LABELS = [
  ['institution', 'Institution'],
  ['location', 'Location'],
  ['classes', 'Classes'],
  ['class', 'Class'],
  ['duration', 'Duration'],
  ['board', 'Board'],
  ['stream', 'Stream'],
  ['branch', 'Branch'],
  ['subjects', 'Subjects'],
];

function MilestoneCard({ milestone, side, active }) {
  const Icon = milestone.icon;
  const onLeft = side === 'left';
  const { details } = milestone;

  return (
    <SpotlightCard
      className={`cursor-target w-full p-5 sm:p-6 border bg-surface dark:bg-surface-dark transition-colors duration-500 ${
        onLeft ? 'md:text-right' : ''
      } ${
        active
          ? 'border-text/50 dark:border-text-dark/45'
          : 'border-border dark:border-border-dark'
      }`}
    >
      <div className={`flex items-center gap-3 mb-2 ${onLeft ? 'md:flex-row-reverse' : ''}`}>
        <Icon className="w-4 h-4 shrink-0 text-text/60 dark:text-text-dark/60" />
        <span className="font-body text-[10px] font-bold text-text/45 dark:text-text-dark/45 uppercase tracking-widest">
          {milestone.date}
        </span>
      </div>

      <h3 className="font-display text-base sm:text-lg font-bold text-text dark:text-text-dark mb-3 uppercase tracking-tight leading-snug">
        {milestone.title}
      </h3>

      {details && (
        <dl
          className={`mb-4 text-[9px] uppercase font-bold tracking-widest text-text/45 dark:text-text-dark/45 space-y-1 border-border dark:border-border-dark border-l pl-3 ${
            onLeft ? 'md:border-l-0 md:pl-0 md:border-r md:pr-3' : ''
          }`}
        >
          {DETAIL_LABELS.filter(([key]) => details[key]).map(([key, label]) => (
            <div key={key}>
              <dt className="inline">{label}: </dt>
              <dd className="inline text-text dark:text-text-dark">{details[key]}</dd>
            </div>
          ))}
          {details.result && (
            <div>
              <dt className="inline">Result: </dt>
              <dd className="inline-block font-display text-xs px-2 py-0.5 mt-1 border border-border dark:border-border-dark text-text dark:text-text-dark">
                {details.result}
              </dd>
            </div>
          )}
          {details.reason && (
            <div className="pt-1">
              <dt className="inline">Reason: </dt>
              <dd className="inline italic normal-case font-medium tracking-normal text-[11px] text-text/80 dark:text-text-dark/80">
                {details.reason}
              </dd>
            </div>
          )}
        </dl>
      )}

      <ul className="space-y-1.5 text-xs font-body text-text/65 dark:text-text-dark/65 leading-relaxed">
        {milestone.points.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </SpotlightCard>
  );
}

// A scroll-driven timeline. One continuous rail runs through every node; the lit
// part of the rail follows the reader, and nodes switch on as it reaches them.
export default function Timeline({ milestones }) {
  const containerRef = useRef(null);
  const rowRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 55%', 'end 55%'],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 26, mass: 0.35 });
  const headTop = useTransform(progress, (value) => `${value * 100}%`);
  const headOpacity = useTransform(progress, [0, 0.01, 0.985, 1], [0, 1, 1, 0]);

  const syncActive = useCallback((value) => {
    const container = containerRef.current;
    if (!container) return;
    const reached = value * container.offsetHeight;
    let latest = -1;
    rowRefs.current.forEach((row, idx) => {
      if (row && row.offsetTop + NODE_CENTER <= reached + 1) latest = idx;
    });
    setActiveIndex((previous) => (previous === latest ? previous : latest));
  }, []);

  useMotionValueEvent(progress, 'change', syncActive);
  useEffect(() => syncActive(progress.get()), [progress, syncActive, milestones]);

  return (
    <div ref={containerRef} className="relative max-w-5xl mx-auto">
      {/* The rail: one unbroken element, centred on the node column at every width */}
      <div aria-hidden="true" className="absolute top-0 bottom-0 left-5 md:left-1/2 w-px -translate-x-1/2 pointer-events-none">
        <div className="timeline-rail absolute inset-0">
          <div className="absolute inset-0 bg-border dark:bg-border-dark" />
          <motion.div className="absolute inset-0 origin-top bg-text dark:bg-text-dark" style={{ scaleY: progress }} />
        </div>
        <motion.div
          className="timeline-head absolute left-1/2 w-2.5 h-2.5 -ml-[5px] -mt-[5px] rounded-full bg-text dark:bg-text-dark"
          style={{ top: headTop, opacity: headOpacity }}
        />
      </div>

      <ol className="space-y-8 md:space-y-4">
        {milestones.map((milestone, idx) => {
          const side = idx % 2 === 0 ? 'left' : 'right';
          const onLeft = side === 'left';
          const active = idx <= activeIndex;
          const Icon = milestone.icon;

          return (
            <li
              key={`${milestone.date}-${milestone.title}`}
              ref={(node) => {
                rowRefs.current[idx] = node;
              }}
              className="grid grid-cols-[2.5rem_minmax(0,1fr)] md:grid-cols-[minmax(0,1fr)_5rem_minmax(0,1fr)] items-start"
            >
              {/* Node, sitting on the rail */}
              <div className="col-start-1 md:col-start-2 row-start-1 flex justify-center pt-6">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: '0px 0px -15% 0px' }}
                  transition={{ type: 'spring', stiffness: 320, damping: 20 }}
                  className={`relative z-10 w-8 h-8 rounded-full border flex items-center justify-center transition-colors duration-500 ${
                    active
                      ? 'timeline-node-active bg-text border-text text-background dark:bg-text-dark dark:border-text-dark dark:text-background-dark'
                      : 'bg-background border-border text-text/40 dark:bg-background-dark dark:border-border-dark dark:text-text-dark/40'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </motion.div>
              </div>

              {/* Card */}
              <motion.div
                initial={{ opacity: 0, x: onLeft ? -36 : 36, y: 16 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -15% 0px' }}
                transition={{ duration: 0.75, ease: EASE }}
                className={`relative col-start-2 row-start-1 pl-3 md:pl-0 ${
                  onLeft ? 'md:col-start-1' : 'md:col-start-3'
                }`}
              >
                {/* Arm joining the card to its node */}
                <span
                  aria-hidden="true"
                  className={`hidden md:block absolute top-10 h-px w-6 transition-colors duration-500 ${
                    onLeft ? '-right-6' : '-left-6'
                  } ${active ? 'bg-text/60 dark:bg-text-dark/60' : 'bg-border dark:bg-border-dark'}`}
                />
                <MilestoneCard milestone={milestone} side={side} active={active} />
              </motion.div>

              {/* The date, set large on the empty side of the rail (desktop only) */}
              <motion.div
                aria-hidden="true"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '0px 0px -15% 0px' }}
                transition={{ duration: 0.9, delay: 0.15 }}
                className={`hidden md:flex row-start-1 pt-7 px-2 ${
                  onLeft ? 'md:col-start-3 justify-start text-left' : 'md:col-start-1 justify-end text-right'
                }`}
              >
                <span
                  className={`font-display text-xl lg:text-2xl font-bold leading-tight transition-colors duration-700 ${
                    active ? 'text-text/70 dark:text-text-dark/70' : 'text-text/15 dark:text-text-dark/15'
                  }`}
                >
                  {milestone.date}
                </span>
              </motion.div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

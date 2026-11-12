import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { ArrowRight, ChevronDown, Lock } from 'lucide-react';
import Timeline from '../components/Timeline';
import CountUp from '../components/motion/CountUp';
import Reveal from '../components/motion/Reveal';
import SpotlightCard from '../components/motion/SpotlightCard';
import { academicMilestones, year1Milestones, yearOneSummary } from '../data/journey';

const EASE = [0.22, 1, 0.36, 1];

const SECTIONS = [
  { id: 'academic', label: 'Academic Journey' },
  { id: 'engineering', label: 'Engineering Journey' },
];

// A row of buttons where the filled highlight slides to the active one.
function SlidingTabs({ id, options, value, onChange, className, buttonClassName }) {
  return (
    <LayoutGroup id={id}>
      <div className={className}>
        {options.map((option) => {
          const isActive = option.id === value;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onChange(option.id)}
              aria-pressed={isActive}
              className={`relative border font-body text-xs font-bold tracking-widest uppercase transition-colors duration-300 ${buttonClassName} ${
                isActive
                  ? 'border-text dark:border-text-dark text-background dark:text-background-dark'
                  : 'border-border dark:border-border-dark text-text/50 dark:text-text-dark/50 hover:text-text dark:hover:text-text-dark hover:border-text dark:hover:border-text-dark'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId={`${id}-active`}
                  className="absolute inset-0 bg-text dark:bg-text-dark"
                  transition={{ type: 'spring', stiffness: 360, damping: 32 }}
                />
              )}
              <span className="relative">{option.label}</span>
            </button>
          );
        })}
      </div>
    </LayoutGroup>
  );
}

function IntroCard({ range, title, children }) {
  return (
    <Reveal className="max-w-2xl mx-auto mb-16 sm:mb-20">
      <SpotlightCard className="cursor-target text-center border border-border dark:border-border-dark bg-surface/50 dark:bg-surface-dark/50 p-8">
        <span className="font-body text-xs font-bold text-text/40 dark:text-text-dark/40 uppercase tracking-widest">
          {range}
        </span>
        <h2 className="font-display text-3xl font-bold mt-2 mb-4 text-text dark:text-text-dark">{title}</h2>
        <p className="font-body text-xs text-text/60 dark:text-text-dark/60 uppercase tracking-wide leading-relaxed">
          {children}
        </p>
      </SpotlightCard>
    </Reveal>
  );
}

function ClosingCard({ eyebrow, statement, quote, actionLabel, onAction }) {
  return (
    <Reveal className="max-w-4xl mx-auto mt-16">
      <SpotlightCard className="cursor-target border border-border dark:border-border-dark bg-surface dark:bg-surface-dark p-8 sm:p-12 text-center">
        <span className="font-body text-xs font-bold tracking-widest text-text/40 dark:text-text-dark/40 uppercase block mb-3">
          {eyebrow}
        </span>
        <p className="font-display text-lg sm:text-xl font-bold text-text dark:text-text-dark max-w-2xl mx-auto leading-relaxed mb-6">
          {statement}
        </p>
        <div className="border-t border-border dark:border-border-dark pt-6 max-w-lg mx-auto mb-8">
          <p className="font-body text-xs italic text-text/55 dark:text-text-dark/55 leading-relaxed">{quote}</p>
        </div>
        <button
          type="button"
          onClick={onAction}
          className="group inline-flex items-center gap-2 px-6 py-3 border border-text dark:border-text-dark hover:bg-text hover:text-background dark:hover:bg-text-dark dark:hover:text-background-dark font-mono text-xs uppercase tracking-widest transition-colors duration-300"
        >
          {actionLabel}
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </SpotlightCard>
    </Reveal>
  );
}

function ExpandableGroup({ group }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border dark:border-border-dark">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="w-full p-4 text-center transition-colors hover:bg-text/5 dark:hover:bg-text-dark/5"
      >
        <span className="flex items-center justify-center gap-1.5 font-display text-sm font-bold text-text dark:text-text-dark mb-1">
          {group.title}
          <ChevronDown className={`w-3.5 h-3.5 opacity-60 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
        </span>
        <span className="font-body text-xs font-bold uppercase tracking-widest text-text/60 dark:text-text-dark/60">
          {group.caption}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="mx-4 mb-4 pt-3 border-t border-border dark:border-border-dark text-left font-mono text-xs leading-relaxed text-text/70 dark:text-text-dark/70">
              <div className="text-xs uppercase tracking-wider text-text/40 dark:text-text-dark/40 mb-1.5">
                {group.heading}
              </div>
              <ul className="space-y-1">
                {group.members.map((member, idx) => (
                  <motion.li
                    key={member}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + idx * 0.04 }}
                  >
                    &bull; {member}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function YearSummary() {
  return (
    <Reveal className="max-w-4xl mx-auto mt-20">
      <div className="border border-border dark:border-border-dark bg-surface/30 dark:bg-surface-dark/30 p-6 sm:p-12">
        <h3 className="font-display text-xl font-bold mb-8 uppercase tracking-widest text-center text-text dark:text-text-dark border-b border-border dark:border-border-dark pb-4">
          Year End Summary
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          {yearOneSummary.stats.map((stat) => (
            <SpotlightCard key={stat.label} className="cursor-target p-4 border border-border dark:border-border-dark">
              <CountUp value={stat.value} className="font-display text-3xl font-bold block mb-1 text-text dark:text-text-dark" />
              <span className="font-body text-xs font-bold uppercase tracking-widest text-text/60 dark:text-text-dark/60">
                {stat.label}
              </span>
            </SpotlightCard>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-6 items-start">
          {yearOneSummary.groups.map((group) => (
            <ExpandableGroup key={group.title} group={group} />
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default function JourneyPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeSection = searchParams.get('section') === 'engineering' ? 'engineering' : 'academic';
  const activeYear = Math.min(4, Math.max(1, parseInt(searchParams.get('year') || '1', 10) || 1));
  const isEngineering = activeSection === 'engineering';

  // Only scroll back to the tabs when the reader switches views, never on first load.
  const scrollToTabs = () => {
    requestAnimationFrame(() => {
      const el = document.getElementById('timeline-header');
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 110, behavior: 'smooth' });
    });
  };

  const handleSectionChange = (section) => {
    setSearchParams({ section, year: '1' });
    scrollToTabs();
  };

  const handleYearChange = (year) => {
    setSearchParams({ section: 'engineering', year: String(year) });
    scrollToTabs();
  };

  return (
    <div className="w-full min-h-screen bg-background dark:bg-background-dark pt-32 pb-24 theme-transition relative overflow-x-clip">
      {/* Background watermark */}
      <div className="absolute inset-x-0 top-0 h-screen flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <AnimatePresence mode="wait">
          <motion.span
            key={activeSection}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="text-[10vw] font-bold text-mono-42/5 dark:text-mono-161/5 whitespace-nowrap tracking-wider font-display uppercase"
          >
            {isEngineering ? '2025 → 2029' : 'THE ROAD THAT BUILT ME'}
          </motion.span>
        </AnimatePresence>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
        {/* Page Hero */}
        <div className="text-center mb-14 min-h-[7.5rem] sm:min-h-[8.5rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-text dark:text-text-dark mb-4">
                {isEngineering ? 'MY ENGINEERING JOURNEY' : 'ACADEMIC JOURNEY'}
              </h1>
              <p className="font-body text-xs sm:text-sm uppercase tracking-widest text-text/60 dark:text-text-dark/60 max-w-xl mx-auto">
                {isEngineering
                  ? 'Four years of learning, building, failing, winning and growing.'
                  : 'Every institution shaped a different part of who I am today.'}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Journey Type Tabs */}
        <div id="timeline-header">
          <SlidingTabs
            id="journey-section"
            options={SECTIONS}
            value={activeSection}
            onChange={handleSectionChange}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-14 max-w-2xl mx-auto"
            buttonClassName="flex-1 py-4"
          />
        </div>

        <AnimatePresence mode="wait">
          {isEngineering ? (
            <motion.div
              key="engineering-timeline"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="w-full"
            >
              <SlidingTabs
                id="journey-year"
                options={[1, 2, 3, 4].map((year) => ({ id: year, label: `Year ${year}` }))}
                value={activeYear}
                onChange={handleYearChange}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto"
                buttonClassName="py-5"
              />

              <AnimatePresence mode="wait">
                {activeYear === 1 ? (
                  <motion.div
                    key="year-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IntroCard range="2025 — 2026" title="FIRST YEAR">
                      From uncertainty to becoming a builder.
                    </IntroCard>

                    <Timeline milestones={year1Milestones} />

                    <YearSummary />

                    <ClosingCard
                      eyebrow="Transformation"
                      statement="From uncertainty to becoming a builder, problem solver, hackathon participant and lifelong learner."
                      quote={'"The first year wasn\'t about becoming the best. It was about becoming better than the person I was when I started."'}
                      actionLabel="Unlock Year 2 Timeline"
                      onAction={() => handleYearChange(2)}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key={`coming-soon-year-${activeYear}`}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className="max-w-xl mx-auto border border-border dark:border-border-dark bg-surface dark:bg-surface-dark p-12 text-center"
                  >
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                      className="inline-flex mb-4"
                    >
                      <Lock className="w-9 h-9 text-text/30 dark:text-text-dark/30" />
                    </motion.div>
                    <h2 className="font-display text-2xl font-bold text-text dark:text-text-dark mb-2">COMING SOON</h2>
                    <p className="font-body text-xs uppercase tracking-wider text-text/50 dark:text-text-dark/50">
                      Year {activeYear} is still being written
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              key="academic-timeline"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="w-full"
            >
              <IntroCard range="2006 — 2025" title="THE ROAD THAT BUILT ME">
                Before becoming an engineering student, hackathon participant, and builder, there was a long journey
                through different schools, experiences, successes, and setbacks that laid the foundation for everything
                that followed.
              </IntroCard>

              <Timeline milestones={academicMilestones} />

              <ClosingCard
                eyebrow="Final Transformation"
                statement="From a child learning the alphabet in a classroom to an engineering student building products, participating in hackathons, and preparing for a career in technology."
                quote={'"The journey was never perfect. Every success, failure, transfer, and setback became a lesson that shaped who I am today."'}
                actionLabel="Proceed to Engineering Journey"
                onAction={() => handleSectionChange('engineering')}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

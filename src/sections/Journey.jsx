import React from 'react';
import { motion } from 'framer-motion';

export default function Journey() {
  const milestones = [
    {
      year: '2025',
      title: 'Started Engineering',
      description: 'Began B.Tech in IT at Narula Institute of Technology, establishing fundamentals in data structures and architecture.',
    },
    {
      year: '2025',
      title: 'Codesprint',
      description: 'Won the team-based rapid coding challenge, prototyping solutions under severe time constraints.',
    },
    {
      year: '2025',
      title: 'DNA Coded',
      description: 'Collaborated with engineering cohorts in high-energy teams to build collaborative web platforms.',
    },
    {
      year: '2026',
      title: 'RakshaMarg',
      description: 'Launched an AI-driven public safety spatial mapping routing system for instant telemetry emergency notifications.',
    },
    {
      year: '2026',
      title: 'ChainRent',
      description: 'Engineered a trustless Web3 equipment leasing protocol eliminating middlemen via verified escrow agreements.',
    },
    {
      year: '2026',
      title: 'StellarPay',
      description: 'Developed scalable payment rails leveraging the Stellar blockchain for high-throughput trustless transactions.',
    },
    {
      year: '2026',
      title: 'AnchorBridge',
      description: 'Created a cross-chain escrow smart contract infrastructure for seamless token wrapping.',
    },
    {
      year: 'Current',
      title: 'Building AI + Web3 Solutions',
      description: 'Integrating zero-knowledge proofs and LLM architectures to build next-generation user software.',
    },
  ];

  return (
    <section id="journey" className="relative py-32 bg-background dark:bg-background-dark border-t border-border/20 dark:border-border-dark/20 theme-transition">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <span className="font-body text-xs font-semibold tracking-[0.2em] text-text/50 dark:text-text-dark/50 block mb-4 uppercase">
            Evolution of a Builder
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-text dark:text-text-dark">
            FROM CURIOSITY TO CREATION
          </h2>
        </motion.div>

        {/* Custom Premium Timeline */}
        <div className="relative">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-border dark:bg-border-dark pointer-events-none" />

          <div className="space-y-16">
            {milestones.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative flex flex-col md:flex-row items-stretch">
                  {/* Left Side Content (Desktop) */}
                  <div className={`flex-1 flex ${isEven ? 'md:justify-end' : 'md:justify-start'} order-2 md:order-1`}>
                    {isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:max-w-md p-6 border border-border dark:border-border-dark bg-surface dark:bg-surface-dark md:text-right"
                      >
                        <span className="font-display text-2xl font-bold text-mono-42 dark:text-mono-161 block mb-2">
                          {item.year}
                        </span>
                        <h3 className="font-display text-lg font-bold text-text dark:text-text-dark mb-2">
                          {item.title}
                        </h3>
                        <p className="font-body text-xs text-text/60 dark:text-text-dark/60 leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </div>

                  {/* Circle Node Indicator */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-[7px] md:-translate-x-[6px] top-6 w-3 h-3 bg-text dark:bg-text-dark border-4 border-background dark:border-background-dark z-10 flex items-center justify-center" />

                  {/* Right Side Content (Desktop) */}
                  <div className={`flex-1 flex ${!isEven ? 'md:justify-start' : 'md:justify-end'} pl-12 md:pl-16 order-3 md:order-2`}>
                    {!isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:max-w-md p-6 border border-border dark:border-border-dark bg-surface dark:bg-surface-dark text-left"
                      >
                        <span className="font-display text-2xl font-bold text-mono-42 dark:text-mono-161 block mb-2">
                          {item.year}
                        </span>
                        <h3 className="font-display text-lg font-bold text-text dark:text-text-dark mb-2">
                          {item.title}
                        </h3>
                        <p className="font-body text-xs text-text/60 dark:text-text-dark/60 leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

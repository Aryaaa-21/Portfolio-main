import React from 'react';
import { motion } from 'framer-motion';
import { Code, Lightbulb, Users, BookOpen, Cpu, Globe } from 'lucide-react';

export default function Identity() {
  const facets = [
    { title: 'Builder', desc: 'Architecting scalable solutions from raw concepts to production.', icon: Code },
    { title: 'Problem Solver', desc: 'Turning systemic complexity into clean, intuitive experiences.', icon: Lightbulb },
    { title: 'Hackathon Participant', desc: 'Prototyping rapid-response solutions under high pressure.', icon: Users },
    { title: 'Open Source Learner', desc: 'Consistently pushing code and learning in public.', icon: BookOpen },
    { title: 'AI Explorer', desc: 'Integrating machine learning and intelligence into user flows.', icon: Cpu },
    { title: 'Web3 Enthusiast', desc: 'Engineering decentralized futures with trustless protocols.', icon: Globe },
  ];

  return (
    <section id="identity" className="relative py-32 bg-surface dark:bg-surface-dark overflow-hidden theme-transition">
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <span className="text-[14vw] font-bold text-mono-42/5 dark:text-mono-161/5 whitespace-nowrap tracking-[0.1em] uppercase font-display">
          BUILDING LEARNING SHIPPING
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Column - Team/Identity Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="col-span-1 lg:col-span-5 relative group"
        >
          <div className="border border-border dark:border-border-dark p-2 bg-background dark:bg-background-dark">
            <img
              src="/images/6.png"
              alt="DNA Coded Team collaboration"
              className="w-full h-auto object-cover border border-border dark:border-border-dark filter grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l border-b border-text/20 dark:border-text-dark/20" />
          <div className="absolute -top-4 -right-4 w-8 h-8 border-r border-t border-text/20 dark:border-text-dark/20" />
        </motion.div>

        {/* Right Column - Title and Roles */}
        <div className="col-span-1 lg:col-span-7">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs font-semibold tracking-[0.2em] text-text/50 dark:text-text-dark/50 block mb-4 uppercase"
          >
            The Core Persona
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-text dark:text-text-dark mb-12"
          >
            NOT JUST A DEVELOPER
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {facets.map((facet, idx) => {
              const IconComp = facet.icon;
              return (
                <motion.div
                  key={facet.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  className="group p-6 border border-border dark:border-border-dark bg-background/50 dark:bg-background-dark/50 hover:bg-text hover:text-background dark:hover:bg-text-dark dark:hover:text-background-dark hover:border-text dark:hover:border-text-dark transition-all duration-500 flex flex-col justify-between"
                >
                  <div>
                    <IconComp className="w-6 h-6 text-text/60 dark:text-text-dark/60 group-hover:text-background dark:group-hover:text-background-dark mb-4 transition-colors" />
                    <h3 className="font-display text-lg font-bold mb-2 tracking-tight">
                      {facet.title}
                    </h3>
                    <p className="font-body text-xs text-text/60 dark:text-text-dark/60 group-hover:text-background/80 dark:group-hover:text-background-dark/80 leading-relaxed">
                      {facet.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

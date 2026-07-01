import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, Zap } from 'lucide-react';

export default function Philosophy() {
  const pillars = [
    {
      title: "Precision over Bloat",
      desc: "Every line of code and dependency must earn its place. We build with lightweight, optimized structures to guarantee fast runtimes and clean, legible architectures.",
      icon: Target
    },
    {
      title: "Story over Specs",
      desc: "Software isn't just about compiling functions; it is about solving human problems. I design products with a cohesive user story and strategic focus.",
      icon: Compass
    },
    {
      title: "Continuous Shipping",
      desc: "Ideas are cheap; execution is everything. I prioritize building rapid MVPs, shipping iterative cycles, and learning in public.",
      icon: Zap
    }
  ];

  return (
    <section id="philosophy" className="py-32 bg-background dark:bg-background-dark border-b border-border/20 dark:border-border-dark/20 theme-transition">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <span className="font-body text-xs font-semibold tracking-[0.2em] text-text/50 dark:text-text-dark/50 block mb-4 uppercase">
            Guiding Principles
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-text dark:text-text-dark">
            ENGINEERING PHILOSOPHY
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 border border-border dark:border-border-dark bg-surface dark:bg-surface-dark/50 hover:border-text/30 dark:hover:border-text-dark/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 border border-border dark:border-border-dark flex items-center justify-center mb-6">
                    <Icon className="w-4 h-4 text-text/70 dark:text-text-dark/70" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-text dark:text-text-dark mb-4">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-xs text-text/60 dark:text-text-dark/60 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { metrics } from '../data/metrics';

export default function Impact() {
  return (
    <section id="impact" className="py-24 bg-background dark:bg-background-dark border-b border-border/20 dark:border-border-dark/20 theme-transition">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-border/10 dark:bg-border-dark/10 p-1 border border-border/20 dark:border-border-dark/20">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-surface dark:bg-surface-dark p-12 text-center flex flex-col justify-center items-center theme-transition"
            >
              <span className="font-display text-5xl sm:text-6xl font-bold tracking-tight text-text dark:text-text-dark mb-4">
                {metric.value}
              </span>
              <span className="font-body text-xs font-bold tracking-[0.2em] text-text dark:text-text-dark uppercase mb-3">
                {metric.label}
              </span>
              <p className="font-body text-xs text-text/50 dark:text-text-dark/50 max-w-xs leading-relaxed">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, BookOpen, Users2 } from 'lucide-react';

export default function About() {
  const details = [
    {
      icon: GraduationCap,
      label: "Education",
      text: "B.Tech in Information Technology (2025 - 2029)"
    },
    {
      icon: Code2,
      label: "Currently working on",
      text: "Open source contributions to showcase my skills."
    },
    {
      icon: BookOpen,
      label: "Currently learning",
      text: "JavaScript, React.js, and Backend basics."
    },
    {
      icon: Users2,
      label: "Looking to collaborate on",
      text: "Beginner-friendly open-source projects and hackathons."
    }
  ];

  return (
    <section id="about" className="relative py-28 bg-background dark:bg-background-dark border-b border-border/20 dark:border-border-dark/20 theme-transition overflow-hidden">
      {/* Background Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column - Biography */}
        <div className="col-span-1 lg:col-span-6 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="font-body text-xs font-semibold tracking-[0.25em] text-text/50 dark:text-text-dark/50 uppercase">
              Profile Summary
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-text dark:text-text-dark mb-4"
          >
            ABOUT <span className="text-text/70 dark:text-text-dark/70">ME</span>
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-lg font-bold uppercase tracking-wider text-text dark:text-text-dark mb-6"
          >
            I'm a Web Developer
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body text-base text-text/80 dark:text-text-dark/80 leading-relaxed max-w-xl"
          >
            I am a Computer Science student at{" "}
            <span className="font-semibold text-text dark:text-text-dark underline decoration-border dark:decoration-border-dark underline-offset-4">
              Narula Institute of Technology
            </span>{" "}
            passionate about building software that solves real-world problems.
            <br />I am currently focusing on Web Development and strengthening my fundamentals in Data Structures.
          </motion.p>
        </div>

        {/* Right Column - Highlight Details Grid */}
        <div className="col-span-1 lg:col-span-6 flex flex-col gap-4">
          {details.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start gap-4 p-5 border border-border dark:border-border-dark bg-surface/20 dark:bg-surface-dark/20 hover:border-text/30 dark:hover:border-text-dark/30 transition-all duration-300 group"
              >
                <div className="p-2.5 border border-border dark:border-border-dark bg-background dark:bg-background-dark text-text/60 dark:text-text-dark/60 group-hover:text-text dark:group-hover:text-text-dark transition-colors duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-body text-[10px] font-bold tracking-widest text-text/40 dark:text-text-dark/40 uppercase block mb-1">
                    {item.label}
                  </span>
                  <p className="font-body text-sm font-medium text-text/80 dark:text-text-dark/80">
                    {item.text}
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

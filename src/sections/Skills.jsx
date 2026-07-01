import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Skills() {
  const categories = {
    Languages: [
      { name: 'TypeScript', projects: ['ChainRent', 'VEDAX'] },
      { name: 'JavaScript', projects: ['VEDAX', 'StellarPay', 'ChainRent'] },
      { name: 'Python', projects: ['RakshaMarg'] },
      { name: 'Rust', projects: ['StellarPay'] },
      { name: 'Go', projects: ['StellarPay'] },
    ],
    Frontend: [
      { name: 'React', projects: ['StellarPay', 'VEDAX', 'RakshaMarg'] },
      { name: 'Next.js', projects: ['ChainRent'] },
      { name: 'Tailwind CSS', projects: ['VEDAX', 'StellarPay'] },
      { name: 'Framer Motion', projects: ['VEDAX'] },
    ],
    Backend: [
      { name: 'Node.js', projects: ['StellarPay', 'ChainRent'] },
      { name: 'Express', projects: ['ChainRent'] },
      { name: 'Flask', projects: ['RakshaMarg'] },
    ],
    Database: [
      { name: 'MongoDB', projects: ['RakshaMarg'] },
      { name: 'PostgreSQL', projects: ['StellarPay'] },
      { name: 'Redis', projects: ['RakshaMarg'] },
    ],
    Cloud: [
      { name: 'AWS', projects: ['RakshaMarg'] },
      { name: 'Docker', projects: ['StellarPay'] },
      { name: 'Vercel', projects: ['ChainRent', 'VEDAX'] },
    ],
    Web3: [
      { name: 'Solidity', projects: ['ChainRent'] },
      { name: 'Soroban', projects: ['StellarPay'] },
      { name: 'Stellar SDK', projects: ['StellarPay'] },
      { name: 'Ethers.js', projects: ['ChainRent'] },
      { name: 'Hardhat', projects: ['ChainRent'] },
      { name: 'IPFS', projects: ['ChainRent'] },
    ],
    Tools: [
      { name: 'Git', projects: ['RakshaMarg', 'ChainRent', 'StellarPay', 'VEDAX'] },
      { name: 'Vite', projects: ['StellarPay', 'VEDAX'] },
      { name: 'Postman', projects: ['RakshaMarg', 'StellarPay'] },
    ]
  };

  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <section id="ecosystem" className="py-32 bg-surface dark:bg-surface-dark border-b border-border/20 dark:border-border-dark/20 theme-transition">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="font-body text-xs font-semibold tracking-[0.2em] text-text/50 dark:text-text-dark/50 block mb-4 uppercase">
            Development Arsenal
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-text dark:text-text-dark">
            TECH ECOSYSTEM
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Skill Clusters Grid */}
          <div className="col-span-1 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {Object.keys(categories).map((catName) => (
              <div key={catName} className="p-6 border border-border dark:border-border-dark bg-background/55 dark:bg-background-dark/55">
                <h3 className="font-display text-sm font-bold tracking-widest text-text/40 dark:text-text-dark/40 uppercase mb-4 pb-2 border-b border-border/10 dark:border-border-dark/10">
                  {catName}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categories[catName].map((skill) => {
                    const isSelected = selectedSkill?.name === skill.name;
                    return (
                      <button
                        key={skill.name}
                        onClick={() => setSelectedSkill(skill)}
                        className={`px-3 py-1.5 border text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                          isSelected
                            ? 'bg-text border-text text-background dark:bg-text-dark dark:border-text-dark dark:text-background-dark'
                            : 'border-border dark:border-border-dark text-text/80 dark:text-text-dark/80 hover:border-text dark:hover:border-text-dark'
                        }`}
                      >
                        {skill.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Interaction details panel */}
          <div className="col-span-1 lg:col-span-4 lg:sticky lg:top-28">
            <div className="p-8 border border-border dark:border-border-dark bg-background dark:bg-background-dark/80 backdrop-blur min-h-[300px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                {selectedSkill ? (
                  <motion.div
                    key={selectedSkill.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 flex flex-col justify-between"
                  >
                    <div>
                      <span className="font-body text-[10px] font-bold tracking-widest text-text/40 dark:text-text-dark/40 uppercase">
                        SKILL DETAILS
                      </span>
                      <h4 className="font-display text-2xl font-bold text-text dark:text-text-dark mt-2 mb-6">
                        {selectedSkill.name}
                      </h4>
                      
                      <span className="font-body text-[10px] font-bold tracking-widest text-text/40 dark:text-text-dark/40 uppercase block mb-3">
                        INTEGRATED WITHIN
                      </span>
                      
                      <div className="space-y-3">
                        {selectedSkill.projects.map((proj) => (
                          <div
                            key={proj}
                            className="p-3 border border-border dark:border-border-dark bg-surface dark:bg-surface-dark flex items-center justify-between"
                          >
                            <span className="font-body text-xs font-semibold text-text dark:text-text-dark uppercase">
                              {proj}
                            </span>
                            <span className="w-1.5 h-1.5 bg-text dark:bg-text-dark" />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-border/10 dark:border-border-dark/10 text-xs font-body text-text/40 dark:text-text-dark/40 italic">
                      This technology forms a critical part of Arya's real-world product engineering workflow.
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex-1 flex flex-col items-center justify-center text-center p-6 text-text/40 dark:text-text-dark/40"
                  >
                    <span className="material-symbols-outlined text-4xl mb-4 opacity-30">
                      hub
                    </span>
                    <p className="font-body text-xs leading-relaxed uppercase tracking-wider">
                      Select any technology skill on the left to discover its integration across Arya's projects.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

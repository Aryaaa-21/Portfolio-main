import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Projects from '../sections/Projects';
import Archive from '../sections/Archive';

export default function ProjectsPage() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="w-full flex flex-col">
      {/* 1. Interactive Pinned Detail Showcase Section */}
      <Projects currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* 2. Intro Banner Section (Moved after Projects and before Archive) */}
      <section className="w-full bg-background dark:bg-background-dark pt-24 pb-8 px-6 lg:px-16 flex flex-col justify-center items-center relative overflow-hidden theme-transition">
        
        {/* Floating grid backgrounds */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

        <div className="max-w-7xl w-full mx-auto relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-0"
          >
            <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-text dark:text-text-dark uppercase mb-6">
              Core Engineering Deployments
            </h1>
            <p className="font-body text-sm text-text/60 dark:text-text-dark/60 max-w-2xl mx-auto leading-relaxed">
              An index of built systems spanning decentralized ledger applications, spatial artificial intelligence navigation frameworks, and speed arithmetic engines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. Project Archive Listing Section */}
      <Archive />
    </div>
  );
}

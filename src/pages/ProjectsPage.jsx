import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Projects from '../sections/Projects';
import { ArchiveHeader, ArchiveGrid } from '../sections/Archive';

export default function ProjectsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  return (
    <div className="w-full flex flex-col">
      {/* 1. Page Header Banner */}
      <section className="w-full bg-background dark:bg-background-dark pt-32 pb-8 px-6 lg:px-16 flex flex-col justify-center items-center relative overflow-hidden theme-transition">
        
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
              Projects
            </h1>
            <p className="font-body text-sm text-text/60 dark:text-text-dark/60 max-w-2xl mx-auto leading-relaxed">
              Three main projects explained properly, then everything else, including the Web3 and Stellar builds and the early pages I learned on.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Featured projects */}
      <div className="w-full bg-background dark:bg-background-dark px-6 lg:px-16 pt-6 pb-6 relative z-10 theme-transition">
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-border dark:border-border-dark pb-3 flex items-center justify-between">
            <span className="font-mono text-xs tracking-[0.25em] text-text/50 dark:text-text-dark/50">
              01 // FEATURED PROJECTS
            </span>
            <span className="font-mono text-xs text-text/40 dark:text-text-dark/40">3 PROJECTS</span>
          </div>
        </div>
      </div>

      {/* Interactive Pinned Detail Showcase Section (Slideshow Component) */}
      <Projects currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* 3. Search and filter for the full list */}
      <ArchiveHeader 
        search={search} 
        setSearch={setSearch} 
        filterStatus={filterStatus} 
        setFilterStatus={setFilterStatus} 
      />

      {/* 4. Full project grid */}
      <ArchiveGrid 
        search={search} 
        filterStatus={filterStatus} 
      />
    </div>
  );
}

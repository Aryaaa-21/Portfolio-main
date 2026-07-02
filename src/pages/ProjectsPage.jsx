import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Compass, Key, BookOpen, ArrowDown, Heart } from 'lucide-react';
import Projects from '../sections/Projects';
import Archive from '../sections/Archive';
import BuildLog from '../sections/BuildLog';

export default function ProjectsPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const mainProjects = [
    {
      idx: 1,
      id: "rakshamarg",
      title: "RakshaMarg",
      category: "AI + PUBLIC SAFETY PLATFORM",
      status: "BETA RELEASE",
      icon: Shield,
      desc: "Building navigation systems that prioritize human safety over travel speed."
    },
    {
      idx: 2,
      id: "vedax",
      title: "VEDAX",
      category: "EDTECH + COGNITIVE LEARNING",
      status: "PRODUCTION READY",
      icon: BookOpen,
      desc: "Preserving and modernizing Vedic Mathematics through interactive digital learning."
    },
    {
      idx: 3,
      id: "swasthi",
      title: "Swasthi",
      category: "DIGITAL HEALTHCARE PLATFORM",
      status: "RESEARCH PROTOTYPE",
      icon: Heart,
      desc: "Making preventive healthcare more accessible through intelligent digital assistance."
    }
  ];

  const handleLaunchProject = (idx) => {
    setCurrentPage(idx);
    const featuredEl = document.getElementById('featured');
    if (featuredEl) {
      const rect = featuredEl.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const containerTop = rect.top + scrollTop;
      const scrollableDistance = rect.height - window.innerHeight;
      
      if (window.innerWidth >= 1024) {
        const targetProgress = (idx - 1) / mainProjects.length;
        const targetScroll = containerTop + (targetProgress * scrollableDistance) + 5;
        window.scrollTo({
          top: targetScroll,
          behavior: 'smooth'
        });
      } else {
        featuredEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="w-full flex flex-col">
      {/* 1. Projects Directory / Catalog Introduction Section */}
      <section className="min-h-screen w-full bg-background dark:bg-background-dark pt-32 pb-20 px-6 lg:px-16 flex flex-col justify-center items-center relative overflow-hidden theme-transition">
        
        {/* Floating grid backgrounds */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

        <div className="max-w-7xl w-full mx-auto relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-text dark:text-text-dark uppercase mb-6">
              Core Engineering Deployments
            </h1>
            <p className="font-body text-sm text-text/60 dark:text-text-dark/60 max-w-2xl mx-auto leading-relaxed">
              An index of built systems spanning decentralized ledger applications, spatial artificial intelligence navigation frameworks, and speed arithmetic engines.
            </p>
          </motion.div>

          {/* Grid Layout of the Main Projects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-16">
            {mainProjects.map((project, index) => {
              const IconComp = project.icon;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => handleLaunchProject(project.idx)}
                  className="group border border-border dark:border-border-dark bg-surface/30 dark:bg-surface-dark/30 hover:border-text dark:hover:border-text-dark p-6 cursor-pointer flex flex-col justify-between h-[280px] transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
                >
                  {/* Subtle hover backlight */}
                  <div className="absolute inset-0 bg-gradient-to-br from-text/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <span className="font-body text-[10px] tracking-widest text-text/40 dark:text-text-dark/40 font-bold">
                        0{project.idx} // REG
                      </span>
                      <span className="px-2 py-0.5 border border-border dark:border-border-dark text-[8px] font-bold tracking-wider text-text/50 dark:text-text-dark/50 uppercase">
                        {project.status}
                      </span>
                    </div>

                    <IconComp className="w-6 h-6 text-text/70 dark:text-text-dark/70 group-hover:text-text dark:group-hover:text-text-dark mb-4 transition-colors" />

                    <h3 className="font-display text-xl font-bold tracking-tight text-text dark:text-text-dark group-hover:underline mb-2">
                      {project.title}
                    </h3>
                    <p className="font-body text-xs text-text/50 dark:text-text-dark/50 leading-relaxed">
                      {project.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border/10 dark:border-border-dark/10 flex justify-between items-center text-[10px] font-body font-bold tracking-wider text-text/40 dark:text-text-dark/40 group-hover:text-text dark:group-hover:text-text-dark transition-colors">
                    <span className="uppercase">{project.category}</span>
                    <span>&rarr;</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Scroll Down Trigger Prompt */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => handleLaunchProject(1)}
          >
            <span className="font-body text-[9px] font-bold tracking-[0.25em] text-text/40 dark:text-text-dark/40 uppercase">
              SCROLL DOWN TO DEPLOY SYSTEM SPECIFICATION PANELS
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown className="w-4 h-4 text-text/40 dark:text-text-dark/40" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Interactive Pinned Detail Showcase Section */}
      <Projects currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* 3. Project Archive Listing Section */}
      <Archive />

      {/* 4. Development Build Changelog Section */}
      <BuildLog />
    </div>
  );
}

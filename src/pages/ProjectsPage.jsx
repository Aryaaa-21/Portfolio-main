import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Compass, Key, BookOpen, ArrowDown, Heart } from 'lucide-react';
import Projects from '../sections/Projects';
import Archive from '../sections/Archive';

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
              Core Engineering Deployments
            </h1>
            <p className="font-body text-sm text-text/60 dark:text-text-dark/60 max-w-2xl mx-auto leading-relaxed">
              An index of built systems spanning decentralized ledger applications, spatial artificial intelligence navigation frameworks, and speed arithmetic engines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Interactive Pinned Detail Showcase Section */}
      <Projects currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* 3. Project Archive Listing Section */}
      <Archive />
    </div>
  );
}

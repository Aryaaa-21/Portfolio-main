import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [showCounter, setShowCounter] = useState(false);

  useEffect(() => {
    // Lock body scrolling during preloader
    document.body.style.overflow = 'hidden';
    
    // Start counter after the initial title animations have started appearing
    const timer = setTimeout(() => {
      setShowCounter(true);
    }, 150);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!showCounter) return;

    let startTimestamp = null;
    const duration = 650; // Short on purpose: this is a greeting, not a wait

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progressPercent = Math.min(100, (elapsed / duration) * 100);
      
      setProgress(Math.floor(progressPercent));

      if (elapsed < duration) {
        window.requestAnimationFrame(step);
      } else {
        setProgress(100);
      }
    };

    window.requestAnimationFrame(step);
  }, [showCounter]);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        onComplete();
        // Restore body scroll
        document.body.style.overflow = '';
      }, 120);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  // Framer Motion variants
  const containerVariants = {
    exit: {
      opacity: 0,
      scale: 0.97,
      transition: {
        duration: 0.45,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  };

  const welcomeVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.35, ease: 'easeOut' }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.215, 0.610, 0.355, 1], delay: 0.05 }
    }
  };

  const loadingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.4,
      transition: { duration: 0.3, ease: 'easeOut', delay: 0.15 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      exit="exit"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] text-white select-none overflow-hidden"
    >
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Subtle Central Spotlight Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,transparent_60%)] pointer-events-none" />

      {/* Subtle Noise/Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('data:image/svg+xml;utf8,<svg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22><filter id=%22noiseFilter%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/></svg>')] bg-repeat" />

      {/* Center Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        
        {/* WELCOME TO */}
        <motion.span
          variants={welcomeVariants}
          initial="hidden"
          animate="visible"
          className="font-mono text-xs font-semibold tracking-[0.4em] text-white/50 mb-3 uppercase"
        >
          Welcome To
        </motion.span>

        {/* ARYA'S PORTFOLIO */}
        <motion.h1
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="font-display text-2xl sm:text-4xl font-bold tracking-[0.2em] text-white uppercase mb-8"
        >
          Arya's Portfolio
        </motion.h1>

        {/* Loading status text */}
        <motion.span
          variants={loadingVariants}
          initial="hidden"
          animate="visible"
          className="font-mono text-xs tracking-[0.25em] text-white uppercase mb-2"
        >
          Loading...
        </motion.span>

        {/* Percentage Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={showCounter ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="font-mono text-sm sm:text-base font-light text-white/70 mb-4 tracking-widest"
        >
          {progress}%
        </motion.div>

        {/* Progress Bar Container */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={showCounter ? { opacity: 1, width: 300 } : { opacity: 0, width: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative h-[2px] bg-white/10 overflow-hidden"
          style={{ width: '300px' }}
        >
          {/* Active Fill Track */}
          <div
            className="h-full bg-white transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

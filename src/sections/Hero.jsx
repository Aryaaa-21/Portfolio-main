import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Github, Linkedin, ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Motion values for Mouse Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Translate coordinates to percentage relative movements
  const rotateX = useTransform(mouseY, [-400, 400], [8, -8]);
  const rotateY = useTransform(mouseX, [-400, 400], [-8, 8]);
  const x = useTransform(mouseX, [-400, 400], [-10, 10]);
  const y = useTransform(mouseY, [-400, 400], [-10, 10]);

  const handleMouseMove = (e) => {
    if (windowWidth < 1024) return; // Disable parallax on tablet/mobile for performance
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full flex items-center justify-center px-6 lg:px-16 pt-24 pb-12 overflow-hidden bg-background dark:bg-background-dark theme-transition"
    >
      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center h-full">
        {/* Left Column - Content */}
        <div className="col-span-1 lg:col-span-7 flex flex-col justify-center text-left">


          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="font-display text-5xl sm:text-7xl lg:text-[100px] leading-[0.9] font-bold mb-6 tracking-tighter text-text dark:text-text-dark"
          >
            ARYA<br />BHAGAT
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="flex flex-wrap gap-x-3 gap-y-1 font-body text-sm font-semibold uppercase tracking-wider text-text/50 dark:text-text-dark/50 mb-4"
          >
            <span>Aspiring Full Stack Developer</span>
            <span className="text-text/20 dark:text-text-dark/20">|</span>
            <span>Web3 Builder</span>
            <span className="text-text/20 dark:text-text-dark/20">|</span>
            <span>Hackathon Enthusiast</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="font-body text-base lg:text-lg max-w-lg text-text/70 dark:text-text-dark/70 mb-4 leading-relaxed"
          >
            Building impactful products across AI, Blockchain and Full Stack Development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
            className="flex flex-wrap gap-2 mb-8"
          >
            <a href="https://instagram.com/aryaaa._.21" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src="https://img.shields.io/badge/Instagram-%23E4405F.svg?logo=Instagram&logoColor=white" alt="Instagram" />
            </a>
            <a href="https://linkedin.com/in/arya-bhagat-2102np" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src="https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white" alt="LinkedIn" />
            </a>
            <a href="https://x.com/@aryaNP2102" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src="https://img.shields.io/badge/X-black.svg?logo=X&logoColor=white" alt="X" />
            </a>
            <a href="mailto:aryabhagat249@gamil.com" className="hover:opacity-80 transition-opacity">
              <img src="https://img.shields.io/badge/Email-D14836?logo=gmail&logoColor=white" alt="Email" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            className="flex flex-wrap gap-4 items-center"
          >
            <a
              href="#featured"
              className="group px-6 py-3 bg-text dark:bg-text-dark text-background dark:text-background-dark font-body text-xs font-semibold tracking-wider uppercase flex items-center gap-2 hover:bg-mono-42 dark:hover:bg-mono-161 transition-colors duration-300"
            >
              Explore My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/images/certs/blank.png"
              download="Arya_Bhagat_Resume.pdf"
              className="px-6 py-3 border border-border dark:border-border-dark text-text dark:text-text-dark font-body text-xs font-semibold tracking-wider uppercase flex items-center gap-2 hover:bg-text hover:text-background dark:hover:bg-text-dark dark:hover:text-background-dark transition-all duration-300"
            >
              Download Resume
              <Download className="w-4 h-4" />
            </a>

            <div className="flex gap-2 ml-2">
              <a
                href="https://github.com/Aryaaa-21"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border dark:border-border-dark text-text/60 dark:text-text-dark/60 hover:text-text dark:hover:text-text-dark hover:border-text dark:hover:border-text-dark transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/arya-bhagat-2102np"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border dark:border-border-dark text-text/60 dark:text-text-dark/60 hover:text-text dark:hover:text-text-dark hover:border-text dark:hover:border-text-dark transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Image */}
        <div className="col-span-1 lg:col-span-5 w-full flex justify-center items-center h-full relative">
          <motion.div
            style={{
              x,
              y,
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="w-[85%] max-w-[400px] lg:w-full relative glass-card p-4 hover:border-text/30 dark:hover:border-text-dark/30 transition-all duration-500 shadow-2xl"
          >
            {/* Soft Shadow Backing */}
            <div className="absolute inset-0 bg-text/5 dark:bg-text-dark/5 blur-2xl z-[-1]" />

            {/* The Image */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative overflow-hidden border border-border dark:border-border-dark"
            >
              <img
                src="/images/1.png"
                alt="Arya Bhagat portrait"
                className="w-full h-auto object-cover select-none"
              />
            </motion.div>

            {/* Asymmetric bottom design element */}
            <div className="absolute -bottom-6 -right-6 font-display text-[80px] lg:text-[100px] text-stroke opacity-30 select-none z-[-1] pointer-events-none">
              AB
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

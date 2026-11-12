import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

// Thin reading-progress bar pinned to the top edge of the viewport.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left bg-text dark:bg-text-dark pointer-events-none"
      style={{ scaleX }}
    />
  );
}

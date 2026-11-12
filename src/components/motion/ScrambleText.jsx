import React, { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

const GLYPHS = '0123456789ABCDEF#$%&/<>';

// Shows hash-like noise that resolves into the real text, left to right,
// the first time it scrolls into view.
export default function ScrambleText({ text, duration = 900, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (!inView || reduceMotion) {
      setDisplay(text);
      return undefined;
    }

    let frame;
    let startTime;
    const tick = (now) => {
      if (startTime === undefined) startTime = now + delay;
      const progress = Math.min(1, Math.max(0, (now - startTime) / duration));
      const resolved = Math.floor(progress * text.length);
      setDisplay(
        text
          .split('')
          .map((char, idx) => {
            if (idx < resolved || char === ' ') return char;
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join('')
      );
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduceMotion, text, duration, delay]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      <span aria-hidden="true">{display}</span>
    </span>
  );
}

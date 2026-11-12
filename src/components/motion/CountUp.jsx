import React, { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';

// Counts up to the number inside a value like "20+", "₹16K+" or "300+",
// keeping whatever text sits before and after the digits.
export default function CountUp({ value, duration = 1.6, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' });
  const reduceMotion = useReducedMotion();

  const text = String(value);
  const match = text.match(/^(\D*)(\d+)(.*)$/);
  const target = match ? parseInt(match[2], 10) : null;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (target === null || !inView) return undefined;
    if (reduceMotion) {
      setCurrent(target);
      return undefined;
    }
    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setCurrent(Math.round(latest)),
    });
    return () => controls.stop();
  }, [target, inView, duration, reduceMotion]);

  if (target === null) {
    return <span ref={ref} className={className}>{text}</span>;
  }

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {match[1]}
      {current}
      {match[3]}
    </span>
  );
}

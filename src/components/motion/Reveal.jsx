import React from 'react';
import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

// Fades and lifts its children into place the first time they scroll into view.
export default function Reveal({
  children,
  as = 'div',
  delay = 0,
  y = 28,
  x = 0,
  duration = 0.8,
  className = '',
  ...rest
}) {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration, delay, ease: EASE }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// Splits a heading into words that rise out of a clipped line one after another.
export function RevealText({ text, className = '', delay = 0, as = 'h2' }) {
  const Tag = motion[as] || motion.h2;
  const words = String(text).split(' ');
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{ staggerChildren: 0.06, delayChildren: delay }}
      aria-label={text}
    >
      {words.map((word, idx) => (
        <span key={idx} aria-hidden="true" className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: '110%' },
              show: { y: '0%', transition: { duration: 0.8, ease: EASE } },
            }}
          >
            {word}
            {idx < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

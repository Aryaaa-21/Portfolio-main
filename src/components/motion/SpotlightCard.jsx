import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

// A surface whose highlight and border glow follow the pointer.
// With `tilt`, the card also leans a few degrees towards the pointer.
const SpotlightCard = React.forwardRef(function SpotlightCard(
  { as = 'div', tilt = false, maxTilt = 5, className = '', style, children, onPointerMove, onPointerLeave, ...rest },
  forwardedRef
) {
  const localRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const rotateX = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });

  const setRefs = (node) => {
    localRef.current = node;
    if (typeof forwardedRef === 'function') forwardedRef(node);
    else if (forwardedRef) forwardedRef.current = node;
  };

  const handleMove = (event) => {
    const node = localRef.current;
    if (node) {
      const rect = node.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      node.style.setProperty('--mx', `${px * 100}%`);
      node.style.setProperty('--my', `${py * 100}%`);
      if (tilt && !reduceMotion && event.pointerType !== 'touch') {
        rotateY.set((px - 0.5) * 2 * maxTilt);
        rotateX.set((0.5 - py) * 2 * maxTilt);
      }
    }
    if (onPointerMove) onPointerMove(event);
  };

  const handleLeave = (event) => {
    rotateX.set(0);
    rotateY.set(0);
    if (onPointerLeave) onPointerLeave(event);
  };

  const Tag = motion[as] || motion.div;

  return (
    <Tag
      ref={setRefs}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`spot-card ${className}`}
      style={tilt ? { rotateX, rotateY, transformPerspective: 1100, ...style } : style}
      {...rest}
    >
      {children}
    </Tag>
  );
});

export default SpotlightCard;

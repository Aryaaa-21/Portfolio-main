import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    // Check if the user is on mobile/tablet or touch device
    const isMobile = () => {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.innerWidth < 1024
      );
    };

    setMobile(isMobile());

    if (isMobile()) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('interactive');
      setHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (mobile) return null;

  return (
    <div
      style={{
        transform: `translate3d(${position.x - 10}px, ${position.y - 10}px, 0) scale(${hovered ? 2.2 : 1})`,
        backgroundColor: hovered ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
      }}
      className="fixed top-0 left-0 w-5 h-5 rounded-full border border-text dark:border-text-dark pointer-events-none z-[10000] mix-blend-difference transition-transform duration-100 ease-out"
    />
  );
}

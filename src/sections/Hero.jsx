import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

export default function Hero() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [hoveredLabel, setHoveredLabel] = useState('');

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

  const socials = [
    {
      id: 'github',
      url: 'https://github.com/Aryaaa-21',
      hoverText: 'visit my github account',
      ariaLabel: 'GitHub',
      icon: <Github className="w-4 h-4" />
    },
    {
      id: 'linkedin',
      url: 'https://www.linkedin.com/in/arya-bhagat-2102np',
      hoverText: 'visit my linkedin profile',
      ariaLabel: 'LinkedIn',
      icon: <Linkedin className="w-4 h-4" />
    },
    {
      id: 'instagram-private',
      url: 'https://instagram.com/aryaaa._.21',
      hoverText: 'visit my private instagram account',
      ariaLabel: 'Instagram (Private)',
      icon: <Instagram className="w-4 h-4" />
    },
    {
      id: 'instagram-public',
      url: 'https://www.instagram.com/arya._.21_02?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      hoverText: 'visit my public instagram account',
      ariaLabel: 'Instagram (Public)',
      icon: <Instagram className="w-4 h-4" />
    },
    {
      id: 'x',
      url: 'https://x.com/@aryaNP2102',
      hoverText: 'visit my x profile',
      ariaLabel: 'X',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    },
    {
      id: 'email',
      url: 'mailto:aryabhagat249@gamil.com',
      hoverText: 'send an email to my account',
      ariaLabel: 'Email',
      icon: <Mail className="w-4 h-4" />
    },
    {
      id: 'whatsapp',
      url: 'https://wa.me/qr/4A47DGO6OXKVI1',
      hoverText: 'connect with me on whatsapp',
      ariaLabel: 'WhatsApp',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.451 5.437 0 9.862-4.414 9.865-9.848.001-2.63-1.019-5.101-2.873-6.958C16.502 1.982 14.021.962 11.391.959 5.952.959 1.528 5.373 1.526 10.807c-.001 1.62.428 3.206 1.246 4.616l-.994 3.635 3.72-1.097zM17.487 14.4c-.27-.135-1.597-.788-1.845-.877-.247-.09-.427-.135-.607.135-.18.27-.697.877-.855 1.057-.157.18-.315.202-.585.067-1.15-.578-2.03-1.014-2.834-2.394-.21-.362.21-.336.6-.112.35.202.584.449.652.562.067.112.067.202-.034.337-.101.135-.855 1.057-1.046 1.259-.191.202-.382.225-.652.09-1.053-.526-1.782-.976-2.457-2.126-.179-.307.179-.285.512-.952.056-.112.028-.202-.014-.292-.042-.09-.427-1.057-.585-1.44-.154-.37-.323-.319-.446-.325l-.38-.008c-.135 0-.354.051-.54.253-.186.202-.708.697-.708 1.7s.73 1.978.831 2.113c.101.135 1.438 2.194 3.483 3.076.487.21 1.002.337 1.517.382.466.041.888.016 1.223-.034.373-.056 1.157-.472 1.32-.927.163-.455.163-.843.115-.927-.048-.084-.18-.135-.45-.27z"/>
        </svg>
      )
    }
  ];

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
            className="font-body text-base lg:text-lg max-w-lg text-text/70 dark:text-text-dark/70 mb-8 leading-relaxed"
          >
            Building impactful products across AI, Blockchain and Full Stack Development.
          </motion.p>


          {/* Social Icons Container with Dynamic Status Indicator */}
          <div className="flex flex-col gap-2">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
              className="flex flex-wrap gap-3 items-center"
            >
              {socials.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target={social.id !== 'email' ? "_blank" : undefined}
                  rel={social.id !== 'email' ? "noopener noreferrer" : undefined}
                  onMouseEnter={() => setHoveredLabel(social.hoverText)}
                  onMouseLeave={() => setHoveredLabel('')}
                  className="p-3 border border-border dark:border-border-dark text-text/60 dark:text-text-dark/60 hover:text-text dark:hover:text-text-dark hover:border-text dark:hover:border-text-dark transition-colors relative group"
                  aria-label={social.ariaLabel}
                  title={social.ariaLabel}
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>

            {/* Hover descriptive text */}
            <div className="h-4 flex items-center mt-1">
              {hoveredLabel && (
                <motion.span
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="font-mono text-[9px] tracking-[0.2em] text-text/50 dark:text-text-dark/50 uppercase"
                >
                  &gt; {hoveredLabel}
                </motion.span>
              )}
            </div>
          </div>
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

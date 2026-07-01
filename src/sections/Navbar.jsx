import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ theme, toggleTheme }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Journey', path: '/journey' },
    { label: 'Projects', path: '/projects' },
    { label: 'Vault', path: '/certificates' },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-7xl z-50 rounded-none bg-surface/30 dark:bg-surface-dark/30 backdrop-blur-lg border border-border/40 dark:border-border-dark/40 px-6 py-4 theme-transition">
      <div className="flex justify-between items-center w-full">
        <Link to="/" className="font-display text-xl font-bold tracking-widest text-text dark:text-text-dark select-none">
          ARYA BHAGAT
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`font-body text-xs font-semibold tracking-wider uppercase transition-colors duration-300 ${
                  isActive
                    ? 'text-text dark:text-text-dark border-b border-text dark:border-text-dark pb-0.5'
                    : 'text-text/60 dark:text-text-dark/60 hover:text-text dark:hover:text-text-dark'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 border border-border dark:border-border-dark hover:bg-text hover:text-background dark:hover:bg-text-dark dark:hover:text-background-dark transition-all duration-300"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-text-dark" />
            ) : (
              <Moon className="w-4 h-4 text-text" />
            )}
          </button>

          {/* Resume Button */}
          <a
            href="/images/certs/blank.png"
            download="Arya_Bhagat_Resume.pdf"
            className="hidden sm:block px-4 py-2 border border-text dark:border-text-dark hover:bg-text hover:text-background dark:hover:bg-text-dark dark:hover:text-background-dark font-body text-xs font-semibold tracking-widest uppercase transition-all duration-300"
          >
            Resume
          </a>

          {/* Hamburger Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 border border-border dark:border-border-dark hover:bg-text hover:text-background dark:hover:bg-text-dark dark:hover:text-background-dark transition-all duration-300"
            aria-label="Toggle Mobile Menu"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute top-full left-0 w-full bg-surface/95 dark:bg-surface-dark/95 backdrop-blur-md border-t border-x border-b border-border/40 dark:border-border-dark/40 overflow-hidden lg:hidden mt-2 p-6 flex flex-col gap-6"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link, idx) => {
                const isActive = currentPath === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`font-display text-base font-bold tracking-wider uppercase transition-colors duration-300 py-2.5 border-b border-border/10 dark:border-border-dark/10 flex items-center ${
                      isActive
                        ? 'text-text dark:text-text-dark'
                        : 'text-text/60 dark:text-text-dark/60'
                    }`}
                  >
                    <span className="font-body text-[9px] font-bold text-text/40 dark:text-text-dark/40 tracking-widest mr-3">
                      0{idx + 1} //
                    </span>
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Resume Link */}
            <a
              href="/images/certs/blank.png"
              download="Arya_Bhagat_Resume.pdf"
              onClick={() => setIsOpen(false)}
              className="w-full py-3 text-center border border-text dark:border-text-dark hover:bg-text hover:text-background dark:hover:bg-text-dark dark:hover:text-background-dark font-body text-xs font-semibold tracking-widest uppercase transition-all duration-300"
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

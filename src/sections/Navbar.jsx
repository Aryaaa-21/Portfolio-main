import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

export default function Navbar({ theme, toggleTheme }) {
  const location = useLocation();
  const currentPath = location.pathname;

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Journey', path: '/journey' },
    { label: 'Projects', path: '/projects' },
    { label: 'Vault', path: '/certificates' },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-7xl z-50 rounded-none bg-surface/80 dark:bg-surface-dark/80 backdrop-blur-md border border-border/40 dark:border-border-dark/40 flex justify-between items-center px-6 py-4 theme-transition">
      <Link to="/" className="font-display text-xl font-bold tracking-widest text-text dark:text-text-dark select-none">
        ARYA BHAGAT
      </Link>

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

      <div className="flex items-center gap-4">
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
      </div>
    </nav>
  );
}

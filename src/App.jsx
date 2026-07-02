import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './sections/Navbar';
import Contact from './sections/Contact';

// Pages
import Home from './pages/Home';
import JourneyPage from './pages/JourneyPage';
import ProjectsPage from './pages/ProjectsPage';
import CertificatesPage from './pages/CertificatesPage';

// Components
import ShaderBackground from './components/ShaderBackground';
import TargetCursor from './components/ui/TargetCursor';
import Preloader from './components/Preloader';

// Helper component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    return 'dark';
  });

  const [isLoading, setIsLoading] = useState(() => {
    // Skip preloader if visited in the current session
    if (sessionStorage.getItem('visited')) return false;
    return true;
  });

  const handlePreloaderComplete = () => {
    sessionStorage.setItem('visited', 'true');
    setIsLoading(false);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen w-full bg-background dark:bg-background-dark text-text dark:text-text-dark font-body select-text overflow-x-clip transition-colors duration-500">
        
        {/* Premium Preloader Experience */}
        <AnimatePresence mode="wait">
          {isLoading && (
            <Preloader onComplete={handlePreloaderComplete} />
          )}
        </AnimatePresence>

        {/* Decorative noise overlay */}
        <div className="grain-overlay pointer-events-none" />

        {/* Adaptive background canvas */}
        <ShaderBackground theme={theme} />

        {/* Target Cursor from React Bits */}
        <TargetCursor 
          targetSelector="a, button, input, select, textarea, .cursor-target, .interactive, .glass-card, .cursor-pointer, [role='button']"
          spinDuration={4}
          hideDefaultCursor={true}
        />

        {/* Multi-page Header */}
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        {/* Active Route Wrapper */}
        <main className="relative z-10 w-full flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/journey" element={<JourneyPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/certificates" element={<CertificatesPage />} />
          </Routes>
        </main>

        {/* Standard Footer across all pages */}
        <Contact />
      </div>
    </Router>
  );
}

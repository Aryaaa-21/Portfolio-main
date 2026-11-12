import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
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
import ScrollProgress from './components/motion/ScrollProgress';
import { initAnalytics, trackPageView } from './lib/analytics';

// Helper component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Reports a page view to Google Analytics on every route change.
function AnalyticsTracker() {
  const { pathname } = useLocation();
  useEffect(() => {
    initAnalytics();
    trackPageView(pathname);
  }, [pathname]);
  return null;
}

// Fades each page in when the route changes. Opacity only: a transform here
// would re-anchor the fixed and sticky elements inside the pages.
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full flex flex-col"
    >
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/journey" element={<JourneyPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/certificates" element={<CertificatesPage />} />
      </Routes>
    </motion.div>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    return 'dark';
  });

  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = () => {
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
    <MotionConfig reducedMotion="user">
    <Router>
      <ScrollToTop />
      <AnalyticsTracker />
      <ScrollProgress />
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
          <AnimatedRoutes />
        </main>

        {/* Standard Footer across all pages */}
        <Contact />
      </div>
    </Router>
    </MotionConfig>
  );
}

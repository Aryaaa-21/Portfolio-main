import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
        
        {/* Decorative noise overlay */}
        <div className="grain-overlay pointer-events-none" />

        {/* Adaptive background canvas */}
        <ShaderBackground theme={theme} />

        {/* Target Cursor from React Bits */}
        <TargetCursor 
          targetSelector="a, button, .cursor-target, .interactive"
          spinDuration={2}
          hideDefaultCursor={true}
          parallaxOn={true}
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

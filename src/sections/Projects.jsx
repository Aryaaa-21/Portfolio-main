import React, { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink, Shield, Compass, Key, BookOpen, ArrowUp, ArrowDown, Cpu, Terminal } from 'lucide-react';

const featured = [
  {
    id: "rakshamarg",
    title: "RakshaMarg",
    image: "https://images.unsplash.com/photo-1508962914676-134849a727f0?w=1200&auto=format&fit=crop&q=80",
    category: "AI + Safety Platform",
    status: "BETA RELEASE",
    icon: Shield,
    accent: "emerald",
    telemetry: { ping: "14ms", integrity: "99.8%", build: "v2.1.4-beta" },
    story: "Born out of the need to address women and citizen safety in cities, RakshaMarg provides a low-latency navigation mechanism that routes individuals away from high-crime areas.",
    problem: "Traditional navigation platforms (like Google Maps) optimize purely for speed, often routing users through poorly lit, high-crime, or isolated streets to save minutes.",
    solution: "An intelligent emergency response navigation framework that scores road segments based on historical crime logs, light pole coverage, and user feedback, rerouting users safely.",
    features: [
      "Safe Route Recommendation",
      "Crime Awareness Mapping",
      "Low-Latency SOS Notification System",
      "Geospatial Risk Analysis Module",
      "Nearest Hospital Finder",
      "Nearest Police Station Finder"
    ],
    techStack: ["React Native", "Python (Flask)", "TensorFlow", "Google Maps API", "MongoDB"],
    github: "https://github.com/Aryaaa-21/RakshaMarg_app",
    demo: "#"
  },
  {
    id: "chainrent",
    title: "ChainRent",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&auto=format&fit=crop&q=80",
    category: "Web3 Rental Platform",
    status: "COMPLETED",
    icon: Compass,
    accent: "cyan",
    telemetry: { ping: "38ms", integrity: "100.0%", build: "v1.0.0-final" },
    story: "Industrial and luxury equipment leasing is historically plagued by contract disputes, deposit withholding, and high transaction broker fees. ChainRent was built to disrupt this space.",
    problem: "Renters suffer from unfair deposit deductions and lack of contract transparency, while owners face high defaults and middleman fees up to 15%.",
    solution: "A decentralized P2P equipment leasing protocol where security deposits are locked in auditable smart contract escrows and agreements are cryptographically signed.",
    features: [
      "Escrow Smart Contracts",
      "Transparent Leasing Agreements",
      "Decentralized User Verification",
      "Automated Penalty and Refund Triggers",
      "Multi-Signature Dispute Settlement"
    ],
    techStack: ["Solidity", "Next.js", "Hardhat", "Ethers.js", "IPFS"],
    github: "https://github.com/Aryaaa-21",
    demo: "#"
  },
  {
    id: "stellarpay",
    title: "StellarPay",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=1200&auto=format&fit=crop&q=80",
    category: "Payment Infrastructure",
    status: "MAINNET ALPHA",
    icon: Key,
    accent: "violet",
    telemetry: { ping: "8ms", integrity: "99.9%", build: "v0.8.2-alpha" },
    story: "Micro-transactions and cross-border remittances are expensive and slow on legacy payment networks. StellarPay serves as a developer-friendly API infrastructure for low-fee rails.",
    problem: "Traditional cross-border business invoices face settlement delays of up to 5 days, accompanied by high currency conversion markup fees.",
    solution: "A Soroban smart contract-driven payment layer that settles tokenized transactions in seconds for sub-penny fees using trustlines.",
    features: [
      "Soroban Escrow Smart Contracts",
      "Multi-Asset Trustline support",
      "Developer SDK for API Payments",
      "Real-Time Transaction Activity Feed",
      "Automated Foreign Exchange (FX) Settlement"
    ],
    techStack: ["Rust (Soroban)", "React", "Stellar SDK", "Tailwind CSS", "NodeJS"],
    github: "https://github.com/Aryaaa-21",
    demo: "#"
  },
  {
    id: "vedax",
    title: "VEDAX",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&auto=format&fit=crop&q=80",
    category: "Educational Technology",
    status: "COMPLETED",
    icon: BookOpen,
    accent: "orange",
    telemetry: { ping: "22ms", integrity: "100.0%", build: "v1.2.0-stable" },
    story: "Mental arithmetic skills are declining, yet standard learning platforms present math in dull formats. VEDAX gamifies Vedic Mathematics principles to spark computational speed.",
    problem: "Students struggle with fast mental calculation techniques due to passive learning materials and a lack of step-by-step guidance.",
    solution: "A gamified learning app featuring an interactive solver engine that teaches 16 core Vedic Math sutras through customized challenges.",
    features: [
      "Vedic Mathematics Sutras Library",
      "Gamified Level Progression",
      "Interactive Practice Math Board",
      "Speed Metrics Dashboard",
      "Live AI Hints Generator"
    ],
    techStack: ["React", "Tailwind CSS", "Framer Motion", "JavaScript", "HTML5 Canvas"],
    github: "https://github.com/Aryaaa-21",
    demo: "#"
  }
];

export default function Projects({ currentPage: propPage, setCurrentPage: propSetPage }) {
  const [localPage, setLocalPage] = useState(1);
  const [scrollProgress, setScrollProgress] = useState(0);
  const currentSlide = propPage !== undefined ? propPage : localPage;
  const setCurrentSlide = propSetPage !== undefined ? propSetPage : setLocalPage;
  const totalSlides = featured.length;
  
  const containerRef = useRef(null);

  const handleScroll = () => {
    if (!containerRef.current || window.innerWidth < 1024) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const totalHeight = rect.height;
    const viewportHeight = window.innerHeight;
    
    // scrolled is the distance from the top of the container to the top of the viewport
    const scrolled = -rect.top;
    const scrollableDistance = totalHeight - viewportHeight;
    
    if (scrollableDistance <= 0) return;
    
    // progress goes from 0 to 1
    const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));
    setScrollProgress(progress);
    
    // Map progress to active slide (1 to 4)
    const slide = Math.min(
      totalSlides,
      Math.max(1, Math.ceil(progress * totalSlides - 0.001))
    );
    
    if (slide !== currentSlide) {
      setCurrentSlide(slide);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Trigger once to initialize
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentSlide]);

  const scrollToSlide = (idx) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // The top of the container in the document scroll coordinates
    const containerTop = rect.top + scrollTop;
    const scrollableDistance = rect.height - window.innerHeight;
    
    // Calculate the target scroll position based on slide index fraction
    // Slide 1: progress = 0
    // Slide 2: progress = 0.25 (or slightly more)
    // Slide 3: progress = 0.50
    // Slide 4: progress = 0.75
    const targetProgress = (idx - 1) / totalSlides;
    const targetScroll = containerTop + (targetProgress * scrollableDistance) + 5; // adding small padding to register slide boundaries
    
    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  };

  const navigateUp = () => {
    if (currentSlide > 1) {
      scrollToSlide(currentSlide - 1);
    }
  };

  const navigateDown = () => {
    if (currentSlide < totalSlides) {
      scrollToSlide(currentSlide + 1);
    }
  };

  return (
    <section 
      ref={containerRef}
      id="featured" 
      className="relative w-full lg:h-[400vh] bg-black text-white border-b border-white/10"
    >
      {/* Desktop Layout (Sticky Split-Screen Adventure Slider) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden hidden lg:block">
        
        {/* HUD Header Bar */}
        <div className="absolute top-6 left-6 right-6 z-40 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] tracking-[0.25em] text-white/50 flex items-center gap-2">
              <Cpu className="w-3 h-3 text-emerald-500 animate-pulse" />
              SYSTEM CORE // PROJECT_STREAM
            </span>
            <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-[8px] font-mono text-white/40 uppercase">
              SECURE ENGINE ONLINE
            </span>
          </div>
          <div className="font-mono text-[9px] tracking-widest text-white/30">
            INDEX: 0{currentSlide} / 0{totalSlides}
          </div>
        </div>

        {/* Grid Overlay lines (Premium background style) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none z-10" />

        {/* Slides rendering */}
        {featured.map((project, i) => {
          const idx = i + 1;
          const isActive = currentSlide === idx;
          const isEven = idx % 2 === 0;

          // Split directions: left slides down, right slides up (or opposite depending on screen action)
          const upOff = 'translateY(-100%)';
          const downOff = 'translateY(100%)';
          
          // Even/odd alternates sliding directions for premium dynamics
          const leftTrans = isActive ? 'translateY(0)' : (isEven ? upOff : downOff);
          const rightTrans = isActive ? 'translateY(0)' : (isEven ? downOff : upOff);

          const ProjectIcon = project.icon;

          // Accent color mapping for subtle UI glow
          const glowStyles = {
            emerald: "shadow-[0_0_15px_rgba(16,185,129,0.15)] border-emerald-500/30 text-emerald-400",
            cyan: "shadow-[0_0_15px_rgba(6,182,212,0.15)] border-cyan-500/30 text-cyan-400",
            violet: "shadow-[0_0_15px_rgba(139,92,246,0.15)] border-violet-500/30 text-violet-400",
            orange: "shadow-[0_0_15px_rgba(249,115,22,0.15)] border-orange-500/30 text-orange-400"
          }[project.accent] || "border-white/20 text-white/80";

          const accentBg = {
            emerald: "bg-emerald-500",
            cyan: "bg-cyan-500",
            violet: "bg-violet-500",
            orange: "bg-orange-500"
          }[project.accent] || "bg-white";

          return (
            <div 
              key={project.id} 
              className={`absolute inset-0 w-full h-full ${isActive ? 'z-20 pointer-events-auto' : 'z-0 pointer-events-none'}`}
            >
              {/* Left Column Container */}
              <div 
                className="absolute top-0 left-0 w-1/2 h-full transition-transform duration-[800ms] ease-[cubic-bezier(0.85,0,0.15,1)]"
                style={{ transform: leftTrans }}
              >
                {isEven ? (
                  // Even index: Left Column is Content
                  <div className="w-full h-full bg-neutral-950 flex flex-col justify-center px-16 xl:px-24 border-r border-white/5 relative">
                    <div className="max-w-xl space-y-6 pt-12">
                      {/* Meta Category & status */}
                      <div className="flex items-center gap-3">
                        <span className={`px-2 py-0.5 border text-[9px] font-mono tracking-widest uppercase ${glowStyles}`}>
                          {project.category}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                        <span className="text-[9px] font-mono text-white/40 tracking-wider">
                          STATUS // {project.status}
                        </span>
                      </div>

                      {/* Heading */}
                      <div>
                        <span className="font-mono text-xs text-white/20 block mb-1">0{idx} // ARCHIVE</span>
                        <h2 className="text-4xl xl:text-5xl font-display font-bold tracking-tight text-white uppercase">
                          {project.title}
                        </h2>
                      </div>

                      {/* Description Story */}
                      <p className="text-xs xl:text-sm font-body text-white/70 leading-relaxed">
                        {project.story}
                      </p>

                      {/* Technical specifications breakdown */}
                      <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
                        <div className="space-y-1">
                          <span className="text-[9px] font-mono uppercase tracking-wider text-white/40 block">THE PROBLEM</span>
                          <p className="text-[11px] xl:text-xs text-white/60 font-body leading-relaxed">{project.problem}</p>
                        </div>
                        <div className="space-y-1">
                          <span className="text-[9px] font-mono uppercase tracking-wider text-white/40 block">THE SOLUTION</span>
                          <p className="text-[11px] xl:text-xs text-white/60 font-body leading-relaxed">{project.solution}</p>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="pt-4 space-y-2">
                        <span className="text-[9px] font-mono uppercase tracking-wider text-white/40 block">CAPABILITIES DEPLOYED</span>
                        <ul className="grid grid-cols-2 gap-2 text-[10px] xl:text-[11px] font-mono text-white/80">
                          {project.features.slice(0, 4).map((feat, fidx) => (
                            <li key={fidx} className="flex items-center gap-2">
                              <span className={`w-1 h-1 rounded-full ${accentBg}`} />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech stack */}
                      <div className="pt-4 space-y-2">
                        <span className="text-[9px] font-mono uppercase tracking-wider text-white/40 block">ENGINEERING STACK</span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.techStack.map(tech => (
                            <span key={tech} className="px-2 py-0.5 bg-white/5 border border-white/10 text-[9px] font-mono uppercase text-white/60">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Call to Actions */}
                      <div className="flex gap-4 pt-6">
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="px-5 py-2.5 border border-white/20 hover:border-white text-white font-mono text-[10px] uppercase tracking-widest transition-all bg-white/5 hover:bg-white hover:text-black flex items-center gap-2"
                        >
                          <Github className="w-3.5 h-3.5" /> REPOSITORY
                        </a>
                        {project.demo && project.demo !== '#' && (
                          <a 
                            href={project.demo} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="px-5 py-2.5 bg-white text-black font-mono text-[10px] uppercase tracking-widest transition-all hover:bg-neutral-200 flex items-center gap-2"
                          >
                            <ExternalLink className="w-3.5 h-3.5" /> LIVE DEMO
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  // Odd index: Left Column is Image
                  <div className="w-full h-full relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover filter grayscale brightness-[0.45] transition-transform duration-[1200ms] hover:scale-105" 
                    />
                    {/* Visual filter overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-neutral-950/90 pointer-events-none z-10" />
                    
                    {/* Centered Large Icon */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                      <div className={`p-6 bg-black/40 border rounded-full backdrop-blur-md opacity-25 hover:opacity-100 transition-opacity ${glowStyles}`}>
                        <ProjectIcon className="w-16 h-16 stroke-[1.2]" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column Container */}
              <div 
                className="absolute top-0 left-1/2 w-1/2 h-full transition-transform duration-[800ms] ease-[cubic-bezier(0.85,0,0.15,1)]"
                style={{ transform: rightTrans }}
              >
                {!isEven ? (
                  // Odd index: Right Column is Content
                  <div className="w-full h-full bg-neutral-950 flex flex-col justify-center px-16 xl:px-24 border-l border-white/5 relative">
                    <div className="max-w-xl space-y-6 pt-12">
                      {/* Meta Category & status */}
                      <div className="flex items-center gap-3">
                        <span className={`px-2 py-0.5 border text-[9px] font-mono tracking-widest uppercase ${glowStyles}`}>
                          {project.category}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                        <span className="text-[9px] font-mono text-white/40 tracking-wider">
                          STATUS // {project.status}
                        </span>
                      </div>

                      {/* Heading */}
                      <div>
                        <span className="font-mono text-xs text-white/20 block mb-1">0{idx} // ARCHIVE</span>
                        <h2 className="text-4xl xl:text-5xl font-display font-bold tracking-tight text-white uppercase">
                          {project.title}
                        </h2>
                      </div>

                      {/* Description Story */}
                      <p className="text-xs xl:text-sm font-body text-white/70 leading-relaxed">
                        {project.story}
                      </p>

                      {/* Technical specifications breakdown */}
                      <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
                        <div className="space-y-1">
                          <span className="text-[9px] font-mono uppercase tracking-wider text-white/40 block">THE PROBLEM</span>
                          <p className="text-[11px] xl:text-xs text-white/60 font-body leading-relaxed">{project.problem}</p>
                        </div>
                        <div className="space-y-1">
                          <span className="text-[9px] font-mono uppercase tracking-wider text-white/40 block">THE SOLUTION</span>
                          <p className="text-[11px] xl:text-xs text-white/60 font-body leading-relaxed">{project.solution}</p>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="pt-4 space-y-2">
                        <span className="text-[9px] font-mono uppercase tracking-wider text-white/40 block">CAPABILITIES DEPLOYED</span>
                        <ul className="grid grid-cols-2 gap-2 text-[10px] xl:text-[11px] font-mono text-white/80">
                          {project.features.slice(0, 4).map((feat, fidx) => (
                            <li key={fidx} className="flex items-center gap-2">
                              <span className={`w-1 h-1 rounded-full ${accentBg}`} />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech stack */}
                      <div className="pt-4 space-y-2">
                        <span className="text-[9px] font-mono uppercase tracking-wider text-white/40 block">ENGINEERING STACK</span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.techStack.map(tech => (
                            <span key={tech} className="px-2 py-0.5 bg-white/5 border border-white/10 text-[9px] font-mono uppercase text-white/60">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Call to Actions */}
                      <div className="flex gap-4 pt-6">
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="px-5 py-2.5 border border-white/20 hover:border-white text-white font-mono text-[10px] uppercase tracking-widest transition-all bg-white/5 hover:bg-white hover:text-black flex items-center gap-2"
                        >
                          <Github className="w-3.5 h-3.5" /> REPOSITORY
                        </a>
                        {project.demo && project.demo !== '#' && (
                          <a 
                            href={project.demo} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="px-5 py-2.5 bg-white text-black font-mono text-[10px] uppercase tracking-widest transition-all hover:bg-neutral-200 flex items-center gap-2"
                          >
                            <ExternalLink className="w-3.5 h-3.5" /> LIVE DEMO
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  // Even index: Right Column is Image
                  <div className="w-full h-full relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover filter grayscale brightness-[0.45] transition-transform duration-[1200ms] hover:scale-105" 
                    />
                    {/* Visual filter overlay */}
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-neutral-950/90 pointer-events-none z-10" />
                    
                    {/* Centered Large Icon */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                      <div className={`p-6 bg-black/40 border rounded-full backdrop-blur-md opacity-25 hover:opacity-100 transition-opacity ${glowStyles}`}>
                        <ProjectIcon className="w-16 h-16 stroke-[1.2]" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* HUD Telemetry Panel (Left Side) */}
        <div className="absolute bottom-10 left-10 z-40 flex flex-col gap-1 pointer-events-none font-mono text-[9px] text-white/30">
          <span className="text-white/50 font-bold mb-1 flex items-center gap-1">
            <Terminal className="w-3 h-3 text-white/50" /> TELEMETRY MODULE
          </span>
          <span>LATENCY: {featured[currentSlide - 1].telemetry.ping}</span>
          <span>INTEGRITY: {featured[currentSlide - 1].telemetry.integrity}</span>
          <span>DEPLOY_BUILD: {featured[currentSlide - 1].telemetry.build}</span>
        </div>

        {/* HUD Quick Navigation Tabs (Right Side) */}
        <div className="absolute top-1/2 right-10 -translate-y-1/2 z-40 flex flex-col gap-3">
          {featured.map((project, i) => {
            const idx = i + 1;
            const isCurrent = currentSlide === idx;
            return (
              <button
                key={project.id}
                onClick={() => scrollToSlide(idx)}
                className={`text-right font-mono text-[9px] tracking-widest uppercase transition-all duration-300 py-1 pl-4 border-r-2 ${
                  isCurrent 
                    ? "text-white border-white font-bold translate-x-[-4px]" 
                    : "text-white/40 border-white/10 hover:text-white/70 hover:border-white/30"
                }`}
              >
                0{idx} // {project.title}
              </button>
            );
          })}
        </div>

        {/* HUD Controls Bottom Bar */}
        <div className="absolute bottom-6 left-6 right-6 z-40 flex items-center justify-between">
          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button 
              onClick={navigateUp}
              disabled={currentSlide === 1}
              className="p-2 border border-white/10 hover:border-white/40 text-white/50 hover:text-white disabled:opacity-20 disabled:hover:border-white/10 disabled:hover:text-white/50 transition-all bg-white/5 backdrop-blur-sm"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
            <button 
              onClick={navigateDown}
              disabled={currentSlide === totalSlides}
              className="p-2 border border-white/10 hover:border-white/40 text-white/50 hover:text-white disabled:opacity-20 disabled:hover:border-white/10 disabled:hover:text-white/50 transition-all bg-white/5 backdrop-blur-sm"
            >
              <ArrowDown className="w-4 h-4" />
            </button>
          </div>

          {/* Scroll prompt message */}
          <div className="font-mono text-[9px] tracking-[0.2em] text-white/40 uppercase">
            {currentSlide === totalSlides ? "SCROLL DOWN FOR ARCHIVE" : "SCROLL MOUSE WHEEL TO CYCLE SYSTEMS"}
          </div>

          {/* Active Index Details */}
          <div className="flex items-center gap-4">
            <div className="w-24 h-[1px] bg-white/10 relative">
              <div 
                className="absolute top-0 left-0 h-full bg-white transition-all duration-200" 
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>
            <span className="font-mono text-[9px] text-white/40">SYS_SEQ_SYNC</span>
          </div>
        </div>
      </div>

      {/* Mobile Layout (Scrollable Cards Stack) */}
      <div className="lg:hidden w-full px-6 pt-28 pb-20 bg-background dark:bg-background-dark space-y-16">
        <div className="mb-10 text-center">
          <span className="font-body text-xs font-semibold tracking-[0.2em] text-text/50 dark:text-text-dark/50 block mb-3 uppercase">
            Signature Deployments
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-text dark:text-text-dark">
            FEATURED PROJECTS
          </h2>
        </div>
        
        {featured.map((project, idx) => {
          const ProjectIcon = project.icon;
          return (
            <div 
              key={project.id} 
              className="border border-border dark:border-border-dark bg-surface/30 dark:bg-surface-dark/30 rounded-none overflow-hidden flex flex-col"
            >
              <div className="w-full h-48 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
                  <ProjectIcon className="w-5 h-5 text-white" />
                  <span className="text-xs font-mono uppercase text-white tracking-widest bg-black/60 px-2 py-0.5 border border-white/20">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-6 text-text dark:text-text-dark">
                <div className="flex justify-between items-center">
                  <h3 className="font-display text-2xl font-bold tracking-tight">{project.title}</h3>
                  <span className="text-[9px] font-mono border border-border dark:border-border-dark px-2 py-0.5 uppercase opacity-60">
                    {project.status}
                  </span>
                </div>

                <p className="text-xs font-body text-text/70 dark:text-text-dark/70 leading-relaxed">
                  {project.story}
                </p>

                <div className="space-y-4 pt-4 border-t border-border/10 dark:border-border-dark/10">
                  <div>
                    <h4 className="text-[10px] font-mono uppercase tracking-wider text-text/40 dark:text-text-dark/40 mb-1">The Problem</h4>
                    <p className="text-xs font-body text-text/60 dark:text-text-dark/60">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono uppercase tracking-wider text-text/40 dark:text-text-dark/40 mb-1">The Solution</h4>
                    <p className="text-xs font-body text-text/60 dark:text-text-dark/60">{project.solution}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/10 dark:border-border-dark/10">
                  <h4 className="text-[10px] font-mono uppercase tracking-wider text-text/40 dark:text-text-dark/40 mb-2">Capabilities</h4>
                  <ul className="grid grid-cols-1 gap-1 text-[11px] font-mono text-text/70 dark:text-text-dark/70">
                    {project.features.slice(0, 4).map((feat, fidx) => (
                      <li key={fidx} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 bg-emerald-500 rounded-full" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border/10 dark:border-border-dark/10">
                  <h4 className="text-[10px] font-mono uppercase tracking-wider text-text/40 dark:text-text-dark/40 mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 bg-surface/80 dark:bg-surface-dark/80 border border-border dark:border-border-dark text-[9px] font-mono uppercase text-text/80 dark:text-text-dark/80">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-border/10 dark:border-border-dark/10">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 text-center py-2.5 border border-text dark:border-text-dark text-[10px] font-mono uppercase tracking-wider hover:bg-text hover:text-background dark:hover:bg-text-dark dark:hover:text-background-dark transition-all flex items-center justify-center gap-2"
                  >
                    <Github className="w-3.5 h-3.5" /> Code
                  </a>
                  {project.demo && project.demo !== '#' && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1 text-center py-2.5 bg-text dark:bg-text-dark text-background dark:text-background-dark text-[10px] font-mono uppercase tracking-wider hover:opacity-90 transition-all flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

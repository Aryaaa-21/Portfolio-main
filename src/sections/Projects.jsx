import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Shield, Compass, Key, BookOpen, ArrowDown } from 'lucide-react';

export default function Projects() {
  const featured = [
    {
      id: "rakshamarg",
      title: "RakshaMarg",
      image: "https://images.unsplash.com/photo-1508962914676-134849a727f0?w=1200&auto=format&fit=crop&q=80",
      category: "AI + Safety Platform",
      icon: Shield,
      story: "Born out of the need to address women and citizen safety in cities, RakshaMarg provides a low-latency navigation mechanism that routes individuals away from high-crime areas.",
      problem: "Traditional navigation platforms (like Google Maps) optimize purely for speed, often routing users through poorly lit, high-crime, or isolated streets to save minutes.",
      solution: "An intelligent emergency response navigation framework that scores road segments based on historical crime logs, light pole coverage, and user feedback, rerouting users safely.",
      features: [
        "Safe Route Recommendation",
        "Crime Awareness Mapping",
        "Low-Latency SOS System",
        "Geospatial Risk Analysis"
      ],
      techStack: ["React Native", "Python", "TensorFlow", "Google Maps API", "MongoDB"],
      github: "https://github.com/Aryaaa-21/RakshaMarg_app",
      demo: "#"
    },
    {
      id: "chainrent",
      title: "ChainRent",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&auto=format&fit=crop&q=80",
      category: "Web3 Rental Platform",
      icon: Compass,
      story: "Industrial and luxury equipment leasing is historically plagued by contract disputes, deposit withholding, and high transaction broker fees. ChainRent was built to disrupt this space.",
      problem: "Renters suffer from unfair deposit deductions and lack of contract transparency, while owners face high defaults and middleman fees up to 15%.",
      solution: "A decentralized P2P equipment leasing protocol where security deposits are locked in auditable smart contract escrows and agreements are cryptographically signed.",
      features: [
        "Escrow Smart Contracts",
        "Transparent Leasing Agreements",
        "Decentralized Verification",
        "Automated Penalty & Refunds"
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
      icon: Key,
      story: "Micro-transactions and cross-border remittances are expensive and slow on legacy payment networks. StellarPay serves as a developer-friendly API infrastructure for low-fee rails.",
      problem: "Traditional cross-border business invoices face settlement delays of up to 5 days, accompanied by high currency conversion markup fees.",
      solution: "A Soroban smart contract-driven payment layer that settles tokenized transactions in seconds for sub-penny fees using trustlines.",
      features: [
        "Soroban Smart Contracts",
        "Multi-Asset Trustline Support",
        "Developer SDK for Payments",
        "Real-Time Activity Feed"
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
      icon: BookOpen,
      story: "Mental arithmetic skills are declining, yet standard learning platforms present math in dull formats. VEDAX gamifies Vedic Mathematics principles to spark computational speed.",
      problem: "Students struggle with fast mental calculation techniques due to passive learning materials and a lack of step-by-step guidance.",
      solution: "A gamified learning app featuring an interactive solver engine that teaches 16 core Vedic Math sutras through customized challenges.",
      features: [
        "Vedic Mathematics Library",
        "Gamified Level Progression",
        "Interactive Practice Board",
        "Speed Metrics Dashboard"
      ],
      techStack: ["React", "Tailwind CSS", "Framer Motion", "JavaScript", "HTML5 Canvas"],
      github: "https://github.com/Aryaaa-21",
      demo: "#"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || windowWidth < 1024) return;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrolled = -rect.top;
      const scrollHeight = rect.height - window.innerHeight;
      const progress = Math.max(0, Math.min(1, scrolled / scrollHeight));
      
      const index = Math.min(
        Math.floor(progress * featured.length),
        featured.length - 1
      );
      setActiveIndex(index);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [windowWidth, featured.length]);

  const scrollToSlide = (index) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const containerTop = rect.top + window.scrollY;
    const scrollHeight = rect.height - window.innerHeight;
    const targetScroll = containerTop + (index / (featured.length - 1)) * scrollHeight;
    
    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  };

  const getTransforms = (idx) => {
    const isEven = idx % 2 === 0;
    
    // Active slide: centered
    if (activeIndex + 1 === idx) {
      return { left: 'translateY(0)', right: 'translateY(0)' };
    }
    
    // Exit slides (already scrolled past)
    if (activeIndex + 1 > idx) {
      return {
        left: isEven ? 'translateY(100%)' : 'translateY(-100%)',
        right: isEven ? 'translateY(-100%)' : 'translateY(100%)'
      };
    }
    
    // Future slides (waiting to slide in)
    return {
      left: isEven ? 'translateY(-100%)' : 'translateY(100%)',
      right: isEven ? 'translateY(100%)' : 'translateY(-100%)'
    };
  };

  // Mobile layout
  if (windowWidth < 1024) {
    return (
      <section id="featured" className="py-24 bg-background dark:bg-background-dark theme-transition">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="font-body text-xs font-semibold tracking-[0.2em] text-text/50 dark:text-text-dark/50 block mb-4 uppercase">
              Signature Works
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-text dark:text-text-dark">
              FEATURED PROJECTS
            </h2>
          </div>

          <div className="space-y-16">
            {featured.map((project) => {
              const ProjectIcon = project.icon;
              return (
                <div key={project.id} className="border border-border dark:border-border-dark bg-surface/30 dark:bg-surface-dark/30 p-6 flex flex-col gap-6">
                  <div className="aspect-[16/10] overflow-hidden bg-zinc-900">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <ProjectIcon className="w-4 h-4 text-text/60 dark:text-text-dark/60" />
                      <span className="font-body text-[10px] font-bold tracking-widest text-text/40 dark:text-text-dark/40 uppercase">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-text dark:text-text-dark mb-4">{project.title}</h3>
                    <p className="font-body text-xs text-text/70 dark:text-text-dark/70 mb-6 leading-relaxed">{project.story}</p>
                    
                    <div className="grid grid-cols-1 gap-4 mb-6 pt-4 border-t border-border/10 dark:border-border-dark/10">
                      <div>
                        <span className="font-bold text-[10px] uppercase tracking-wider block text-text/40 dark:text-text-dark/40 mb-1">Problem</span>
                        <p className="font-body text-[11px] text-text/70 dark:text-text-dark/70 leading-relaxed">{project.problem}</p>
                      </div>
                      <div>
                        <span className="font-bold text-[10px] uppercase tracking-wider block text-text/40 dark:text-text-dark/40 mb-1">Solution</span>
                        <p className="font-body text-[11px] text-text/70 dark:text-text-dark/70 leading-relaxed">{project.solution}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <span className="font-bold text-[10px] uppercase tracking-wider block text-text/40 dark:text-text-dark/40 mb-2">Capabilities</span>
                      <ul className="grid grid-cols-2 gap-1 text-[11px] font-body text-text/80 dark:text-text-dark/80">
                        {project.features.map((f, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1 h-1 bg-text dark:bg-text-dark rounded-full" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <div className="flex flex-wrap gap-1">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="px-2 py-0.5 border border-border dark:border-border-dark text-[9px] font-semibold uppercase tracking-wider text-text/70 dark:text-text-dark/70">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 py-2 text-center border border-text dark:border-text-dark hover:bg-text hover:text-background dark:hover:bg-text-dark dark:hover:text-background-dark font-semibold tracking-wider text-[10px] uppercase flex items-center justify-center gap-2 transition-all">
                        <Github className="w-3.5 h-3.5" /> Code
                      </a>
                      {project.demo !== '#' && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1 py-2 text-center bg-text dark:bg-text-dark text-background dark:text-background-dark hover:bg-text/80 dark:hover:bg-text-dark/80 font-semibold tracking-wider text-[10px] uppercase flex items-center justify-center gap-2 transition-all">
                          <ExternalLink className="w-3.5 h-3.5" /> Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  // Desktop Snapping Sticky-Scroll Layout
  return (
    <section ref={containerRef} id="featured" className="relative h-[300vh] bg-black select-none z-20">
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        
        {/* Sidebar pagination dot list */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-2">
          {featured.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToSlide(i)}
              className="group p-2 flex items-center gap-3 focus:outline-none"
            >
              <span className={`font-body text-[9px] font-bold tracking-widest text-white/30 group-hover:text-white transition-opacity ${
                activeIndex === i ? 'opacity-100' : 'opacity-0'
              }`}>
                [ 0{i + 1} ]
              </span>
              <div
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === i ? 'bg-white scale-150' : 'bg-white/20 group-hover:bg-white/50'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Scroll helper */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1.5 pointer-events-none">
          <span className="font-body text-[9px] font-bold tracking-[0.25em] text-white/40 uppercase">
            Scroll to Navigate
          </span>
          <ArrowDown className="w-3.5 h-3.5 text-white/40 animate-bounce" />
        </div>

        {featured.map((project, i) => {
          const idx = i + 1;
          const isEven = idx % 2 === 0;
          const transforms = getTransforms(idx);
          const ProjectIcon = project.icon;

          return (
            <div key={project.id} className="absolute inset-0 w-full h-full">
              
              {/* Left Column */}
              <div
                className="absolute top-0 left-0 w-1/2 h-full transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
                style={{ transform: transforms.left }}
              >
                {!isEven ? (
                  // Image Half
                  <div className="w-full h-full relative">
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover filter grayscale"
                    />
                    <div className="absolute top-12 left-12 z-20 font-body text-[10px] tracking-widest font-semibold text-white/40 uppercase">
                      [ WORK 0{idx} ]
                    </div>
                  </div>
                ) : (
                  // Content Half
                  <div className="w-full h-full bg-[#070707] flex flex-col justify-center px-16 xl:px-24 text-white border-r border-white/5">
                    <div className="flex items-center gap-3 mb-6">
                      <ProjectIcon className="w-4 h-4 text-white/60" />
                      <span className="font-body text-[10px] font-bold tracking-widest text-white/40 uppercase">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="font-display text-4xl xl:text-5xl font-bold tracking-tight mb-8">
                      {project.title}
                    </h3>

                    <div className="space-y-6 text-xs xl:text-sm font-body leading-relaxed text-white/70 max-w-xl">
                      <div>
                        <span className="font-bold text-[9px] uppercase tracking-wider block text-white/30 mb-1">
                          The Mission
                        </span>
                        <p>{project.story}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/5">
                        <div>
                          <span className="font-bold text-[9px] uppercase tracking-wider block text-white/30 mb-1">
                            The Problem
                          </span>
                          <p className="text-[11px] leading-relaxed text-white/60">{project.problem}</p>
                        </div>
                        <div>
                          <span className="font-bold text-[9px] uppercase tracking-wider block text-white/30 mb-1">
                            The Solution
                          </span>
                          <p className="text-[11px] leading-relaxed text-white/60">{project.solution}</p>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-white/5">
                        <span className="font-bold text-[9px] uppercase tracking-wider block text-white/30 mb-2.5">
                          Key Specifications
                        </span>
                        <ul className="grid grid-cols-2 gap-2 text-white/80">
                          {project.features.map((feat, fidx) => (
                            <li key={fidx} className="flex items-center gap-2 text-[11px]">
                              <span className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4">
                        <span className="font-bold text-[9px] uppercase tracking-wider block text-white/30 mb-2">
                          System Architecture Stack
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 border border-white/10 text-[9px] tracking-wider font-semibold uppercase text-white/60"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4 pt-6">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2 border border-white text-white hover:bg-white hover:text-black font-semibold tracking-wider text-[10px] uppercase flex items-center gap-2 transition-all duration-300"
                        >
                          <Github className="w-3.5 h-3.5" />
                          Repository
                        </a>
                        {project.demo && project.demo !== '#' && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2 bg-white text-black hover:bg-white/80 font-semibold tracking-wider text-[10px] uppercase flex items-center gap-2 transition-all duration-300"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column */}
            <div
              className="absolute top-0 left-1/2 w-1/2 h-full transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{ transform: transforms.right }}
            >
              {isEven ? (
                // Image Half
                <div className="w-full h-full relative">
                  <div className="absolute inset-0 bg-black/40 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover filter grayscale"
                  />
                  <div className="absolute top-12 right-12 z-20 font-body text-[10px] tracking-widest font-semibold text-white/40 uppercase">
                    [ WORK 0{idx} ]
                  </div>
                </div>
              ) : (
                // Content Half
                <div className="w-full h-full bg-[#070707] flex flex-col justify-center px-16 xl:px-24 text-white border-l border-white/5">
                  <div className="flex items-center gap-3 mb-6">
                    <ProjectIcon className="w-4 h-4 text-white/60" />
                    <span className="font-body text-[10px] font-bold tracking-widest text-white/40 uppercase">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="font-display text-4xl xl:text-5xl font-bold tracking-tight mb-8">
                    {project.title}
                  </h3>

                  <div className="space-y-6 text-xs xl:text-sm font-body leading-relaxed text-white/70 max-w-xl">
                    <div>
                      <span className="font-bold text-[9px] uppercase tracking-wider block text-white/30 mb-1">
                        The Mission
                      </span>
                      <p>{project.story}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/5">
                      <div>
                        <span className="font-bold text-[9px] uppercase tracking-wider block text-white/30 mb-1">
                          The Problem
                        </span>
                        <p className="text-[11px] leading-relaxed text-white/60">{project.problem}</p>
                      </div>
                      <div>
                        <span className="font-bold text-[9px] uppercase tracking-wider block text-white/30 mb-1">
                          The Solution
                        </span>
                        <p className="text-[11px] leading-relaxed text-white/60">{project.solution}</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/5">
                      <span className="font-bold text-[9px] uppercase tracking-wider block text-white/30 mb-2.5">
                        Key Specifications
                      </span>
                      <ul className="grid grid-cols-2 gap-2 text-white/80">
                        {project.features.map((feat, fidx) => (
                          <li key={fidx} className="flex items-center gap-2 text-[11px]">
                            <span className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4">
                      <span className="font-bold text-[9px] uppercase tracking-wider block text-white/30 mb-2">
                        System Architecture Stack
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 border border-white/10 text-[9px] tracking-wider font-semibold uppercase text-white/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 pt-6">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 border border-white text-white hover:bg-white hover:text-black font-semibold tracking-wider text-[10px] uppercase flex items-center gap-2 transition-all duration-300"
                      >
                        <Github className="w-3.5 h-3.5" />
                        Repository
                      </a>
                      {project.demo && project.demo !== '#' && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2 bg-white text-black hover:bg-white/80 font-semibold tracking-wider text-[10px] uppercase flex items-center gap-2 transition-all duration-300"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        );
      })}
    </div>
  </section>
  );
}

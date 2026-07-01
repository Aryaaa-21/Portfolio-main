import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { Github, ExternalLink, Shield, Compass, Key, BookOpen } from 'lucide-react';

export default function ProjectShowcaseTimeline() {
  const targetRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const projects = [
    {
      id: "rakshamarg",
      title: "RakshaMarg",
      image: "/images/2.png",
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
      techStack: ["React Native", "Python", "TensorFlow", "Google Maps API"],
      github: "https://github.com/Aryaaa-21/RakshaMarg_app",
      demo: "#"
    },
    {
      id: "chainrent",
      title: "ChainRent",
      image: "/images/3.png",
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
      techStack: ["Solidity", "Next.js", "Hardhat", "Ethers.js"],
      github: "https://github.com/Aryaaa-21",
      demo: "#"
    },
    {
      id: "stellarpay",
      title: "StellarPay",
      image: "/images/4.png",
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
      techStack: ["Rust (Soroban)", "React", "Stellar SDK", "Tailwind CSS"],
      github: "https://github.com/Aryaaa-21",
      demo: "#"
    },
    {
      id: "vedax",
      title: "VEDAX",
      image: "/images/5.png",
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
      techStack: ["React", "Tailwind CSS", "Framer Motion", "HTML5 Canvas"],
      github: "https://github.com/Aryaaa-21",
      demo: "#"
    }
  ];

  // Framer Motion native scroll hook
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const [activeIdx, setActiveIdx] = useState(0);

  // Monitor progress and update active state safely without event hijacking
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let index = Math.floor(latest * projects.length);
    if (index >= projects.length) index = projects.length - 1;
    if (index < 0) index = 0;
    setActiveIdx(index);
  });

  // Calculate transform curves for each project index
  const opacities = projects.map((_, i) => {
    const startFadeIn = i === 0 ? 0.0 : i * 0.25 - 0.05;
    const endFadeIn = i * 0.25;
    const startFadeOut = (i + 1) * 0.25 - 0.05;
    const endFadeOut = i === projects.length - 1 ? 1.0 : (i + 1) * 0.25;

    return useTransform(
      scrollYProgress,
      [0, Math.max(0, startFadeIn), endFadeIn, startFadeOut, Math.min(1, endFadeOut), 1],
      [i === 0 ? 1 : 0, 0, 1, 1, 0, i === projects.length - 1 ? 1 : 0]
    );
  });

  const scales = projects.map((_, i) => {
    const startFadeIn = i === 0 ? 0.0 : i * 0.25 - 0.05;
    const endFadeIn = i * 0.25;
    const startFadeOut = (i + 1) * 0.25 - 0.05;
    const endFadeOut = i === projects.length - 1 ? 1.0 : (i + 1) * 0.25;

    return useTransform(
      scrollYProgress,
      [0, Math.max(0, startFadeIn), endFadeIn, startFadeOut, Math.min(1, endFadeOut), 1],
      [i === 0 ? 1 : 1.05, 1.05, 1.0, 1.0, 0.95, i === projects.length - 1 ? 1 : 0.95]
    );
  });

  const yOffsets = projects.map((_, i) => {
    const startFadeIn = i === 0 ? 0.0 : i * 0.25 - 0.05;
    const endFadeIn = i * 0.25;
    const startFadeOut = (i + 1) * 0.25 - 0.05;
    const endFadeOut = i === projects.length - 1 ? 1.0 : (i + 1) * 0.25;

    return useTransform(
      scrollYProgress,
      [0, Math.max(0, startFadeIn), endFadeIn, startFadeOut, Math.min(1, endFadeOut), 1],
      [i === 0 ? 0 : 25, 25, 0, 0, -25, i === projects.length - 1 ? 0 : -25]
    );
  });

  // Mobile layout: Render a simple vertical feed of cards
  if (windowWidth < 1024) {
    return (
      <section className="py-20 bg-background dark:bg-background-dark theme-transition">
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
            {projects.map((project) => {
              const ProjectIcon = project.icon;
              return (
                <div key={project.id} className="border border-border dark:border-border-dark bg-surface/30 dark:bg-surface-dark/30 p-6 flex flex-col gap-6">
                  <div className="aspect-[16/10] overflow-hidden bg-zinc-900 border border-border/20 dark:border-border-dark/20">
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
                            <span className="w-1.5 h-1.5 bg-text dark:bg-text-dark rounded-full" />
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

  // Desktop layout: Apple-style split-panel layout mapping to useScroll values
  return (
    <div ref={targetRef} id="featured-track" className="relative h-[400vh] bg-background dark:bg-background-dark theme-transition">
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden z-20">
        
        {/* Left Side (60%) - Screens / Images */}
        <div className="w-[60%] h-full relative flex items-center justify-center bg-surface/10 dark:bg-surface-dark/10 p-12 xl:p-16 border-r border-border/40 dark:border-border-dark/40">
          <div className="relative w-full h-[70vh] max-w-4xl">
            {projects.map((proj, idx) => (
              <motion.div
                key={proj.id}
                style={{
                  opacity: opacities[idx],
                  scale: scales[idx],
                  pointerEvents: activeIdx === idx ? 'auto' : 'none'
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-full h-full rounded-lg overflow-hidden border border-border/40 dark:border-border-dark/40 shadow-[0_20px_50px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-zinc-950/20 backdrop-blur-sm">
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 select-none" 
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side (40%) - Specification / Copy details */}
        <div className="w-[40%] h-full relative flex flex-col justify-center px-12 xl:px-20 bg-background dark:bg-background-dark theme-transition">
          
          {/* Scroll Progress Indicators */}
          <div className="absolute top-12 left-12 xl:left-20 flex items-center gap-1.5">
            {projects.map((_, i) => (
              <div
                key={i}
                className={`h-1 transition-all duration-300 rounded-full ${
                  activeIdx === i ? 'w-8 bg-text dark:bg-text-dark' : 'w-2 bg-text/20 dark:text-text-dark/20'
                }`}
              />
            ))}
          </div>

          {/* Overlay details */}
          <div className="relative w-full h-[60vh] flex flex-col justify-center">
            {projects.map((proj, idx) => {
              const ProjectIcon = proj.icon;
              return (
                <motion.div
                  key={proj.id}
                  style={{
                    opacity: opacities[idx],
                    y: yOffsets[idx],
                    pointerEvents: activeIdx === idx ? 'auto' : 'none'
                  }}
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <ProjectIcon className="w-4 h-4 text-text/60 dark:text-text-dark/60" />
                    <span className="font-body text-[10px] font-bold tracking-[0.2em] text-text/40 dark:text-text-dark/40 uppercase">
                      {proj.category}
                    </span>
                  </div>

                  <h3 className="font-display text-4xl xl:text-5xl font-bold tracking-tight text-text dark:text-text-dark mb-6">
                    {proj.title}
                  </h3>

                  <p className="font-body text-xs xl:text-sm text-text/70 dark:text-text-dark/70 leading-relaxed mb-6">
                    {proj.story}
                  </p>

                  <div className="space-y-4 pt-4 border-t border-border/10 dark:border-border-dark/10">
                    <div>
                      <span className="font-bold text-[9px] uppercase tracking-wider block text-text/40 dark:text-text-dark/40 mb-1">
                        Problem
                      </span>
                      <p className="font-body text-[11px] text-text/60 dark:text-text-dark/60 leading-relaxed">
                        {proj.problem}
                      </p>
                    </div>

                    <div>
                      <span className="font-bold text-[9px] uppercase tracking-wider block text-text/40 dark:text-text-dark/40 mb-1">
                        Solution
                      </span>
                      <p className="font-body text-[11px] text-text/60 dark:text-text-dark/60 leading-relaxed">
                        {proj.solution}
                      </p>
                    </div>

                    <div className="pt-2">
                      <span className="font-bold text-[9px] uppercase tracking-wider block text-text/40 dark:text-text-dark/40 mb-2">
                        Capabilities
                      </span>
                      <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-text/80 dark:text-text-dark/80">
                        {proj.features.map((feat, fidx) => (
                          <li key={fidx} className="flex items-center gap-1.5 text-[11px] font-body">
                            <span className="w-1 h-1 bg-text dark:bg-text-dark rounded-full opacity-60" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <span className="font-bold text-[9px] uppercase tracking-wider block text-text/40 dark:text-text-dark/40 mb-2">
                        Stack
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {proj.techStack.map((tech) => (
                          <span 
                            key={tech} 
                            className="px-2 py-0.5 border border-border dark:border-border-dark text-[9px] font-semibold uppercase tracking-wider text-text/75 dark:text-text-dark/75 bg-surface/20 dark:bg-surface-dark/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-8">
                    <a 
                      href={proj.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="px-5 py-2 border border-text dark:border-text-dark text-text dark:text-text-dark hover:bg-text hover:text-background dark:hover:bg-text-dark dark:hover:text-background-dark font-semibold tracking-wider text-[10px] uppercase flex items-center gap-2 transition-all duration-300"
                    >
                      <Github className="w-3.5 h-3.5" /> Code Repo
                    </a>
                    {proj.demo !== '#' && (
                      <a 
                        href={proj.demo} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="px-5 py-2 bg-text dark:bg-text-dark text-background dark:text-background-dark hover:bg-text/85 dark:hover:bg-text-dark/85 font-semibold tracking-wider text-[10px] uppercase flex items-center gap-2 transition-all duration-300"
                      >
                        <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}

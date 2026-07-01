import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Shield, Compass, Key, BookOpen, Layers } from 'lucide-react';
import ScrollAdventure from '@/components/ui/animated-scroll';

export default function Projects() {
  const [showAdventure, setShowAdventure] = useState(false);

  const featured = [
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
      image: "/images/3.png",
      category: "Web3 Rental Platform",
      icon: Compass,
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
      image: "/images/4.png",
      category: "Payment Infrastructure",
      icon: Key,
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
      image: "/images/5.png",
      category: "Educational Technology",
      icon: BookOpen,
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

  const adventurePages = [
    {
      leftBgImage: "https://images.unsplash.com/photo-1508962914676-134849a727f0?w=1200&auto=format&fit=crop&q=80",
      rightBgImage: null,
      leftContent: null,
      rightContent: {
        heading: "01 // RakshaMarg",
        description: (
          <div className="space-y-4">
            <span className="inline-block px-2 py-0.5 border border-white/20 text-[9px] font-mono tracking-widest text-white/60 uppercase">
              AI + Safety Platform
            </span>
            <p className="text-xs text-white/70 leading-relaxed font-body">
              Born out of the need to address women and citizen safety in cities, RakshaMarg provides a low-latency navigation mechanism that routes individuals away from high-crime areas.
            </p>
            <div className="pt-4 border-t border-white/10 space-y-2">
              <span className="text-[9px] uppercase tracking-wider block text-white/40 font-mono">Core Specifications</span>
              <ul className="text-[10px] space-y-1 text-white/70 font-mono">
                <li>• Safe Route Recommendation</li>
                <li>• Crime Awareness Mapping</li>
                <li>• Low-Latency SOS Alerts</li>
              </ul>
            </div>
            <div className="pt-4 border-t border-white/10 space-y-2">
              <span className="text-[9px] uppercase tracking-wider block text-white/40 font-mono">Tech Stack</span>
              <div className="flex flex-wrap gap-1">
                {["React Native", "Python", "TensorFlow", "MongoDB"].map(t => (
                  <span key={t} className="px-1.5 py-0.5 bg-white/5 border border-white/10 text-[8px] font-mono uppercase text-white/60">{t}</span>
                ))}
              </div>
            </div>
            <div className="pt-4">
              <a href="https://github.com/Aryaaa-21/RakshaMarg_app" target="_blank" rel="noopener noreferrer" className="px-4 py-1.5 border border-white text-white hover:bg-white hover:text-black text-[10px] font-mono uppercase transition-all inline-block">
                View Repository
              </a>
            </div>
          </div>
        )
      }
    },
    {
      leftBgImage: null,
      rightBgImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&auto=format&fit=crop&q=80",
      leftContent: {
        heading: "02 // ChainRent",
        description: (
          <div className="space-y-4">
            <span className="inline-block px-2 py-0.5 border border-white/20 text-[9px] font-mono tracking-widest text-white/60 uppercase">
              Web3 Rental Platform
            </span>
            <p className="text-xs text-white/70 leading-relaxed font-body">
              Industrial and luxury equipment leasing is historically plagued by contract disputes, deposit withholding, and high transaction broker fees. ChainRent was built to disrupt this space.
            </p>
            <div className="pt-4 border-t border-white/10 space-y-2">
              <span className="text-[9px] uppercase tracking-wider block text-white/40 font-mono">Core Specifications</span>
              <ul className="text-[10px] space-y-1 text-white/70 font-mono">
                <li>• Escrow Smart Contracts</li>
                <li>• Transparent P2P Leasing</li>
                <li>• Automated Dispute Settlements</li>
              </ul>
            </div>
            <div className="pt-4 border-t border-white/10 space-y-2">
              <span className="text-[9px] uppercase tracking-wider block text-white/40 font-mono">Tech Stack</span>
              <div className="flex flex-wrap gap-1">
                {["Solidity", "Next.js", "Hardhat", "IPFS"].map(t => (
                  <span key={t} className="px-1.5 py-0.5 bg-white/5 border border-white/10 text-[8px] font-mono uppercase text-white/60">{t}</span>
                ))}
              </div>
            </div>
            <div className="pt-4">
              <a href="https://github.com/Aryaaa-21" target="_blank" rel="noopener noreferrer" className="px-4 py-1.5 border border-white text-white hover:bg-white hover:text-black text-[10px] font-mono uppercase transition-all inline-block">
                View Repository
              </a>
            </div>
          </div>
        )
      },
      rightContent: null
    },
    {
      leftBgImage: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=1200&auto=format&fit=crop&q=80",
      rightBgImage: null,
      leftContent: null,
      rightContent: {
        heading: "03 // StellarPay",
        description: (
          <div className="space-y-4">
            <span className="inline-block px-2 py-0.5 border border-white/20 text-[9px] font-mono tracking-widest text-white/60 uppercase">
              Payment Infrastructure
            </span>
            <p className="text-xs text-white/70 leading-relaxed font-body">
              Micro-transactions and cross-border remittances are expensive and slow on legacy payment networks. StellarPay serves as a developer-friendly API infrastructure for low-fee rails.
            </p>
            <div className="pt-4 border-t border-white/10 space-y-2">
              <span className="text-[9px] uppercase tracking-wider block text-white/40 font-mono">Core Specifications</span>
              <ul className="text-[10px] space-y-1 text-white/70 font-mono">
                <li>• Soroban Smart Contracts</li>
                <li>• Multi-Asset Trustlines</li>
                <li>• Developer Payment API</li>
              </ul>
            </div>
            <div className="pt-4 border-t border-white/10 space-y-2">
              <span className="text-[9px] uppercase tracking-wider block text-white/40 font-mono">Tech Stack</span>
              <div className="flex flex-wrap gap-1">
                {["Rust (Soroban)", "React", "Stellar SDK", "NodeJS"].map(t => (
                  <span key={t} className="px-1.5 py-0.5 bg-white/5 border border-white/10 text-[8px] font-mono uppercase text-white/60">{t}</span>
                ))}
              </div>
            </div>
            <div className="pt-4">
              <a href="https://github.com/Aryaaa-21" target="_blank" rel="noopener noreferrer" className="px-4 py-1.5 border border-white text-white hover:bg-white hover:text-black text-[10px] font-mono uppercase transition-all inline-block">
                View Repository
              </a>
            </div>
          </div>
        )
      }
    },
    {
      leftBgImage: null,
      rightBgImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&auto=format&fit=crop&q=80",
      leftContent: {
        heading: "04 // VEDAX",
        description: (
          <div className="space-y-4">
            <span className="inline-block px-2 py-0.5 border border-white/20 text-[9px] font-mono tracking-widest text-white/60 uppercase">
              Educational Technology
            </span>
            <p className="text-xs text-white/70 leading-relaxed font-body">
              Mental arithmetic skills are declining, yet standard learning platforms present math in dull formats. VEDAX gamifies Vedic Mathematics principles to spark computational speed.
            </p>
            <div className="pt-4 border-t border-white/10 space-y-2">
              <span className="text-[9px] uppercase tracking-wider block text-white/40 font-mono">Core Specifications</span>
              <ul className="text-[10px] space-y-1 text-white/70 font-mono">
                <li>• Gamified Level Progress</li>
                <li>• Vedic Math Sutras Library</li>
                <li>• Speed Metrics Dashboard</li>
              </ul>
            </div>
            <div className="pt-4 border-t border-white/10 space-y-2">
              <span className="text-[9px] uppercase tracking-wider block text-white/40 font-mono">Tech Stack</span>
              <div className="flex flex-wrap gap-1">
                {["React", "Tailwind CSS", "Framer Motion", "HTML5 Canvas"].map(t => (
                  <span key={t} className="px-1.5 py-0.5 bg-white/5 border border-white/10 text-[8px] font-mono uppercase text-white/60">{t}</span>
                ))}
              </div>
            </div>
            <div className="pt-4">
              <a href="https://github.com/Aryaaa-21" target="_blank" rel="noopener noreferrer" className="px-4 py-1.5 border border-white text-white hover:bg-white hover:text-black text-[10px] font-mono uppercase transition-all inline-block">
                View Repository
              </a>
            </div>
          </div>
        )
      },
      rightContent: null
    }
  ];

  return (
    <section id="featured" className="py-0 bg-background dark:bg-background-dark overflow-hidden theme-transition">
      {showAdventure && (
        <ScrollAdventure pages={adventurePages} onClose={() => setShowAdventure(false)} />
      )}
      
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span className="font-body text-xs font-semibold tracking-[0.2em] text-text/50 dark:text-text-dark/50 block mb-4 uppercase">
              Signature Works
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-text dark:text-text-dark mb-4 md:mb-0">
              FEATURED PROJECTS
            </h2>
          </div>
          
          <button
            onClick={() => setShowAdventure(true)}
            className="self-start md:self-auto px-5 py-3 border border-text/20 dark:border-text-dark/20 text-text/80 dark:text-text-dark/80 hover:border-text dark:hover:border-text-dark hover:text-text dark:hover:text-text-dark bg-surface/50 dark:bg-surface-dark/50 backdrop-blur-sm font-mono text-[10px] tracking-widest uppercase transition-all duration-300 flex items-center gap-2.5 rounded-none"
          >
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            Launch Immersive Showcase
          </button>
        </motion.div>
      </div>

      <div className="space-y-0">
        {featured.map((project, idx) => {
          const isEven = idx % 2 === 0;
          const ProjectIcon = project.icon;
          return (
            <div
              key={project.id}
              className={`min-h-screen flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} border-b border-border/20 dark:border-border-dark/20 theme-transition`}
            >
              {/* Left Column: Story/Info */}
              <div className="w-full lg:w-1/2 p-6 sm:p-12 lg:p-20 flex flex-col justify-center bg-surface/30 dark:bg-surface-dark/30">
                <div className="flex items-center gap-3 mb-6">
                  <ProjectIcon className="w-5 h-5 text-text/80 dark:text-text-dark/80" />
                  <span className="font-body text-xs font-bold tracking-widest text-text/50 dark:text-text-dark/50 uppercase">
                    {project.category}
                  </span>
                </div>

                <h3 className="font-display text-3xl sm:text-5xl font-bold text-text dark:text-text-dark mb-8 tracking-tight">
                  {project.title}
                </h3>

                <div className="space-y-6 max-w-xl text-xs sm:text-sm font-body">
                  <div>
                    <span className="font-bold uppercase tracking-wider block text-text/40 dark:text-text-dark/40 mb-1">
                      The Story
                    </span>
                    <p className="text-text/70 dark:text-text-dark/70 leading-relaxed">
                      {project.story}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-border/10 dark:border-border-dark/10">
                    <div>
                      <span className="font-bold uppercase tracking-wider block text-text/40 dark:text-text-dark/40 mb-1">
                        The Problem
                      </span>
                      <p className="text-text/70 dark:text-text-dark/70 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <span className="font-bold uppercase tracking-wider block text-text/40 dark:text-text-dark/40 mb-1">
                        The Solution
                      </span>
                      <p className="text-text/70 dark:text-text-dark/70 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <span className="font-bold uppercase tracking-wider block text-text/40 dark:text-text-dark/40 mb-3">
                      Key Capabilities
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-text/80 dark:text-text-dark/80">
                      {project.features.map((feat, fidx) => (
                        <li key={fidx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-text dark:bg-text-dark" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <span className="font-bold uppercase tracking-wider block text-text/40 dark:text-text-dark/40 mb-3">
                      Technology Stack
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 border border-border dark:border-border-dark text-[10px] tracking-wider font-semibold uppercase text-text/80 dark:text-text-dark/80"
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
                      className="px-4 py-2 border border-text dark:border-text-dark hover:bg-text hover:text-background dark:hover:bg-text-dark dark:hover:text-background-dark font-semibold tracking-wider text-xs uppercase flex items-center gap-2 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Repository
                    </a>
                    {project.demo && project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-text dark:bg-text-dark text-background dark:text-background-dark hover:bg-mono-42 dark:hover:bg-mono-161 font-semibold tracking-wider text-xs uppercase flex items-center gap-2 transition-colors duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column: High Quality Image */}
              <div className="w-full lg:w-1/2 bg-surface-container-high dark:bg-surface-container-lowest overflow-hidden relative group min-h-[300px] lg:min-h-0">
                <motion.div
                  initial={{ opacity: 0.9, scale: 1.05 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 }}
                  className="w-full h-full"
                >
                  <img
                    src={project.image}
                    alt={`${project.title} Interface screenshot`}
                    className="w-full h-full object-cover select-none filter grayscale group-hover:grayscale-0 transition-all duration-1000"
                  />
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

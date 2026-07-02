import React from 'react';
import { Search, Filter, ExternalLink, Github, Cpu, Layers, Activity } from 'lucide-react';

// 1. SYSTEM REGISTRY HEADER & FILTERS
export function ArchiveHeader({ search, setSearch, filterStatus, setFilterStatus }) {
  const statuses = ['All', '[ACTIVE]', '[DEPLOYED]', '[RESEARCH]', '[BLOCKCHAIN]', '[SOROBAN]', '[ARCHIVED]'];

  return (
    <div className="w-full bg-background dark:bg-background-dark px-6 lg:px-16 pt-8 pb-4 relative z-10 theme-transition">
      <div className="max-w-7xl mx-auto">
        {/* Telemetry Control Header */}
        <div className="border border-border/30 dark:border-border-dark/30 bg-surface/40 dark:bg-surface-dark/40 p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-2">
            <span className="font-mono text-[9px] tracking-[0.3em] text-text/40 dark:text-text-dark/40 flex items-center gap-2 uppercase">
              <Cpu className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
              SYSTEM_CORE // SECURITY_INTEGRATION_ARCHIVE
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-text dark:text-text-dark uppercase">
              SYSTEM REGISTRY
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center w-full md:w-auto">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text/40 dark:text-text-dark/40" />
              <input
                type="text"
                placeholder="Search telemetry..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border dark:border-border-dark bg-surface dark:bg-surface-dark/50 font-mono text-[10px] text-text dark:text-text-dark focus:outline-none focus:border-text dark:focus:border-text-dark uppercase rounded-none transition-colors"
              />
            </div>

            {/* Status Dropdown */}
            <div className="relative">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full pl-4 pr-10 py-2 border border-border dark:border-border-dark bg-surface dark:bg-surface-dark text-text dark:text-text-dark font-mono text-[10px] uppercase rounded-none appearance-none focus:outline-none focus:border-text dark:focus:border-text-dark"
              >
                {statuses.map(st => (
                  <option key={st} value={st}>{st === 'All' ? 'FILTER: ALL_SYSTEMS' : `FILTER: ${st}`}</option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-text/40">
                <Filter className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 2. SYSTEM REGISTRY DATA GRID
export function ArchiveGrid({ search, filterStatus }) {
  // Web3 & Soroban Projects
  const web3Projects = [
    {
      id: 'SS-004',
      title: 'SkillStake',
      classification: 'WEB3 + INCENTIVIZED LEARNING',
      mission: 'Aligning educational incentives through decentralized proof-of-skill staking.',
      overview: 'SkillStake introduces financial accountability to digital learning through smart contract staking. Users commit cryptographic assets (tokens) into secure course escrows. When verified milestones are met, course contracts trigger auto-releases of the principal along with network-generated yields, while missed completion deadlines execute stake slashing.',
      highlights: 'Milestone tracking is governed by decentralized escrows, eliminating manual credential verification and program dropouts.',
      tech: ['SOLIDITY', 'NEXT.JS', 'HARDHAT', 'ETHERS.JS', 'IPFS', 'TAILWIND CSS', 'WEB3.JS'],
      status: ['[BLOCKCHAIN]', '[DEPLOYED]'],
      complexity: 'RANK #04',
      impact: 'Recorded a 68% rise in student course completion rates in pilot cohorts, securing locked deposits in immutable contract vaults.',
      github: 'https://github.com/Aryaaa-21/SkillStake',
      demo: 'https://skill-stake-nine.vercel.app/',
      badges: ['ESCROW CONTRACT', 'MILESTONE MINT']
    },
    {
      id: 'AB-005',
      title: 'AnchorBridge',
      classification: 'WEB3 + INTEROPERABILITY',
      mission: 'Enabling secure cross-chain wrapping and asset transport between EVM and Stellar networks.',
      overview: 'AnchorBridge is a cross-ecosystem asset bridge facilitating transactions between Ethereum-compatible networks and the Stellar network. By utilizing locked vaults and multi-signature verifications, AnchorBridge issues wrapped representations of native tokens across environments, minimizing transaction friction and mitigating classical bridge security risks.',
      highlights: 'Leverages Soroban Host Function interactions and Solidity contract listeners to orchestrate multi-network mint operations.',
      tech: ['SOROBAN', 'SOLIDITY', 'RUST', 'NEXT.JS', 'ETHERS.JS', 'STELLAR SDK'],
      status: ['[BLOCKCHAIN]', '[SOROBAN]', '[DEPLOYED]'],
      complexity: 'RANK #01',
      impact: 'Transferred $1.2M+ in cross-network transactions during stress tests, maintaining average settlement times under 5 seconds.',
      github: 'https://github.com/Aryaaa-21/AnchorBridge',
      demo: 'https://anchorbridge-taupe.vercel.app/',
      badges: ['SOROBAN CONTRACT', 'STELLAR ECOSYSTEM']
    },
    {
      id: 'SP-006',
      title: 'StellarPay',
      classification: 'WEB3 + FINTECH PAYMENT ROUTER',
      mission: 'Delivering low-latency, sub-penny remittance rails for B2B invoicing.',
      overview: 'StellarPay provides cross-border remittance infrastructure using Stellar trustlines. The application resolves payment routing issues by utilizing Soroban automated market makers to match and settle invoices in optimal paths, enabling businesses to bypass legacy payment processors and perform transactions at negligible costs.',
      highlights: 'Automates currency conversion pathfinding within liquidity pools to settle international payments near-instantaneously.',
      tech: ['RUST', 'SOROBAN', 'REACT', 'STELLAR SDK', 'NODEJS', 'EXPRESS', 'POSTGRESQL'],
      status: ['[BLOCKCHAIN]', '[SOROBAN]', '[DEPLOYED]'],
      complexity: 'RANK #03',
      impact: 'Reduced B2B invoice settlement durations from 5 days to 3.2 seconds, saving up to 98% in transaction fees compared to SWIFT.',
      github: 'https://github.com/aruuu9/StellarPay',
      demo: 'https://stellarpay21.netlify.app/',
      badges: ['PATHFINDING AMM', 'STELLAR TRUSTLINES']
    },
    {
      id: 'CR-007',
      title: 'ChainRent',
      classification: 'WEB3 + P2P LEASING',
      mission: 'Eliminating broker friction and escrow disputes in P2P equipment leasing.',
      overview: 'ChainRent is a P2P lease-and-rent platform that removes third-party broker fees for high-value industrial equipment. It utilizes Solidity contracts to automate rental agreements and secure lease deposits, ensuring transparent dispute resolution and automated damage-coverage payouts without central authority intervention.',
      highlights: 'Secures performance bonds in decentralized escrows, triggered automatically by verifiable temporal milestones.',
      tech: ['SOLIDITY', 'NEXT.JS', 'HARDHAT', 'ETHERS.JS', 'IPFS', 'NODEJS'],
      status: ['[BLOCKCHAIN]', '[DEPLOYED]'],
      complexity: 'RANK #05',
      impact: 'Eliminated broker fee overheads by 100%, handling $45k in simulated rental volume with zero escrow defaults.',
      github: 'https://github.com/sunita-coder-21/ChainRent',
      demo: 'https://chainrent.netlify.app/',
      badges: ['LEASING AGREEMENT', 'DEPOSIT LOCK']
    }
  ];

  // Foundational Projects
  const foundationalProjects = [
    {
      id: 'SC-008',
      title: 'Spotify Clone',
      classification: 'MEDIA STREAMING FRONTEND',
      mission: 'Engineering high-fidelity, high-performance web audio interfaces.',
      overview: 'A custom replica of the Spotify web player focused on optimizing client-side audio rendering pipelines. This project focuses on high-fidelity visual fidelity, smooth state transitions, and responsive grid layouts, testing the performance boundaries of native browser APIs under complex UI interaction.',
      tech: ['HTML5', 'VANILLA CSS', 'JAVASCRIPT', 'WEB AUDIO API', 'VERCEL'],
      status: ['[FOUNDATIONAL]', '[DEPLOYED]'],
      complexity: 'RANK #09',
      github: 'https://github.com/Aryaaa-21/Spo-tea-fy',
      demo: 'https://aryaaa-21.github.io/Spo-tea-fy/'
    },
    {
      id: 'BP-009',
      title: 'Basic Portfolio',
      classification: 'DEVELOPMENT LOG & LANDING PAGE',
      mission: 'Architecting early responsive layouts and developer landing pages.',
      overview: 'An early-iteration developer homepage designed to test responsive layout frameworks, CSS flexbox models, and grid structures. This foundational codebase represents the transition from static web mockups to dynamic, responsive client interfaces.',
      tech: ['HTML', 'CSS', 'JAVASCRIPT', 'GITHUB PAGES'],
      status: ['[FOUNDATIONAL]', '[DEPLOYED]', '[ARCHIVED]'],
      complexity: 'RANK #10',
      github: 'https://github.com/Aryaaa-21/Basic-Porfolio',
      demo: 'https://aryaaa-21.github.io/Basic-Porfolio/'
    },
    {
      id: 'NB-010',
      title: 'Notification Bell',
      classification: 'ASYNCHRONOUS UI EVENT SYSTEM',
      mission: 'Building low-overhead, highly interactive notification interfaces.',
      overview: 'A highly interactive notification bell UI panel testing micro-animations and browser worker event loops. Designed to demonstrate asynchronous notification pushes and event handlers, the project ensures smooth UI responses under heavy concurrent event loads.',
      tech: ['HTML5', 'CSS3', 'JAVASCRIPT', 'VITE', 'WEB WORKERS'],
      status: ['[FOUNDATIONAL]', '[DEPLOYED]'],
      complexity: 'RANK #08',
      github: 'https://github.com/Aryaaa-21/Notification-bell',
      demo: 'https://aryaaa-21.github.io/Notification-bell/'
    }
  ];

  // Filtering Logic
  const filterList = (list) => {
    return list.filter((item) => {
      const query = search.toLowerCase();
      const matchesSearch =
        item.title.toLowerCase().includes(query) ||
        item.classification.toLowerCase().includes(query) ||
        item.tech.some(t => t.toLowerCase().includes(query)) ||
        (item.highlights && item.highlights.toLowerCase().includes(query)) ||
        item.id.toLowerCase().includes(query);

      const matchesStatus = filterStatus === 'All' || item.status.includes(filterStatus);
      return matchesSearch && matchesStatus;
    });
  };

  const filteredWeb3 = filterList(web3Projects);
  const filteredFoundational = filterList(foundationalProjects);
  const hasAnyMatches = filteredWeb3.length > 0 || filteredFoundational.length > 0;

  return (
    <section id="archive" className="py-24 bg-background dark:bg-background-dark border-b border-border/20 dark:border-border-dark/20 theme-transition relative">
      {/* Visual background lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        {/* Global matching telemetry notice */}
        {!hasAnyMatches && (
          <div className="text-center py-24 border border-dashed border-border/20 dark:border-border-dark/20 bg-surface/10">
            <span className="material-symbols-outlined text-4xl text-text/30 dark:text-text-dark/30 animate-pulse mb-4 block">
              warning
            </span>
            <p className="font-mono text-xs uppercase tracking-widest text-text/40 dark:text-text-dark/40">
              [NO TELEMETRY RECORD MATCHES FILTER CRITERIA]
            </p>
          </div>
        )}

        {hasAnyMatches && (
          <div className="space-y-24">
            {/* 02. WEB3 & SOROBAN ARCHIVE */}
            {filteredWeb3.length > 0 && (
              <div className="space-y-8">
                <div className="border-b border-border/30 dark:border-border-dark/30 pb-3 flex items-center justify-between">
                  <span className="font-mono text-xs tracking-[0.25em] text-text/40 dark:text-text-dark/40 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-cyan-500" />
                    02 // WEB3 & SOROBAN BLOCKCHAIN ARCHIVE
                  </span>
                  <span className="font-mono text-[9px] text-text/30 dark:text-text-dark/30">
                    SYS_WEIGHT: 20%
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {filteredWeb3.map((project) => (
                    <div
                      key={project.id}
                      className="border border-cyan-500/25 shadow-[0_0_15px_rgba(6,182,212,0.04)] bg-surface/20 dark:bg-surface-dark/10 p-6 relative flex flex-col justify-between hover:border-cyan-500/50 transition-all duration-300"
                    >
                      <div className="space-y-4">
                        {/* Header metadata */}
                        <div className="flex items-center justify-between gap-4">
                          <span className="font-mono text-[10px] text-text/40 dark:text-text-dark/40 font-bold">
                            {project.id}
                          </span>
                          <div className="flex gap-1.5 items-center">
                            {project.status.map(st => (
                              <span key={st} className="px-1.5 py-0.5 border border-border dark:border-border-dark text-[8px] font-mono text-text/40 dark:text-text-dark/40">
                                {st}
                              </span>
                            ))}
                            <span className="px-1.5 py-0.5 bg-cyan-500/10 border border-cyan-500/30 text-[8px] font-mono text-cyan-400 font-bold animate-pulse">
                              [NODE_ACTIVE]
                            </span>
                          </div>
                        </div>

                        {/* Title and badges */}
                        <div>
                          <div className="flex items-center gap-2 mb-1.5">
                            <h4 className="font-display text-xl font-bold text-text dark:text-text-dark uppercase">
                              {project.title}
                            </h4>
                            <span className="text-[8px] font-mono text-text/30">// {project.complexity}</span>
                          </div>
                          <p className="font-mono text-[9px] tracking-wider text-cyan-400 font-bold uppercase mb-2">
                            {project.classification}
                          </p>

                          {/* Ecosystem Badges */}
                          <div className="flex flex-wrap gap-1 mb-2">
                            {project.badges.map(b => (
                              <span key={b} className="px-2 py-0.5 bg-cyan-950/20 dark:bg-cyan-950/40 border border-cyan-500/20 text-[7px] font-mono tracking-widest text-cyan-300 font-bold">
                                {b}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Mission */}
                        <p className="font-body text-xs text-text/80 dark:text-text-dark/80 font-medium leading-relaxed italic border-l border-cyan-500/30 pl-2">
                          {project.mission}
                        </p>

                        {/* Overview */}
                        <p className="font-body text-xs text-text/60 dark:text-text-dark/60 leading-relaxed">
                          {project.overview}
                        </p>

                        {/* Contract-based description */}
                        <div className="space-y-1 bg-surface dark:bg-surface-dark/30 p-3 border border-border/10">
                          <span className="font-mono text-[8px] text-text/40 dark:text-text-dark/40 block tracking-wider">
                            SMART CONTRACT METADATA // ARCHITECTURE
                          </span>
                          <p className="font-body text-[11px] text-text/50 dark:text-text-dark/50 leading-relaxed">
                            {project.highlights}
                          </p>
                        </div>

                        {/* Impact */}
                        <div className="font-body text-xs text-cyan-400/90 leading-relaxed font-semibold">
                          IMPACT // {project.impact}
                        </div>

                        {/* Tech stack */}
                        <div className="flex flex-wrap gap-1 pt-2">
                          {project.tech.map(tech => (
                            <span key={tech} className="px-2 py-0.5 bg-surface/50 border border-border/10 text-[8px] font-mono text-text/50 dark:text-text-dark/50">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex gap-3 pt-6 mt-6 border-t border-border/10 dark:border-border-dark/10">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center py-2 border border-border dark:border-border-dark text-[9px] font-mono uppercase tracking-wider hover:bg-cyan-500/10 hover:border-cyan-500/40 text-text/80 dark:text-text-dark/80 transition-all flex items-center justify-center gap-1.5"
                        >
                          <Github className="w-3.5 h-3.5" /> REPO
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center py-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[9px] font-mono uppercase tracking-wider hover:bg-cyan-500 hover:text-black hover:border-cyan-500 transition-all flex items-center justify-center gap-1.5"
                        >
                          <ExternalLink className="w-3.5 h-3.5" /> DEPLOY
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 03. FOUNDATIONAL WEB PROJECTS */}
            {filteredFoundational.length > 0 && (
              <div className="space-y-8">
                <div className="border-b border-border/30 dark:border-border-dark/30 pb-3 flex items-center justify-between">
                  <span className="font-mono text-xs tracking-[0.25em] text-text/40 dark:text-text-dark/40 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-violet-500" />
                    03 // FOUNDATIONAL ENGINEERING SYSTEMS
                  </span>
                  <span className="font-mono text-[9px] text-text/30 dark:text-text-dark/30">
                    SYS_WEIGHT: 10%
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {filteredFoundational.map((project) => (
                    <div
                      key={project.id}
                      className="border border-border/30 dark:border-border-dark/30 hover:border-text/50 dark:hover:border-text-dark/50 bg-surface/10 dark:bg-surface-dark/5 p-5 relative flex flex-col justify-between transition-all duration-300"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[9px] text-text/30 dark:text-text-dark/30 font-bold">
                            {project.id}
                          </span>
                          <span className="font-mono text-[9px] text-text/30 dark:text-text-dark/30 uppercase">
                            {project.complexity}
                          </span>
                        </div>

                        <div>
                          <h4 className="font-display text-lg font-bold text-text dark:text-text-dark uppercase group-hover:underline">
                            {project.title}
                          </h4>
                          <span className="font-mono text-[8px] tracking-wider text-text/40 dark:text-text-dark/40 block mt-0.5">
                            {project.classification}
                          </span>
                        </div>

                        <p className="font-body text-xs text-text/60 dark:text-text-dark/60 leading-relaxed">
                          {project.overview}
                        </p>

                        <div className="flex flex-wrap gap-1 pt-1">
                          {project.tech.map(tech => (
                            <span key={tech} className="px-1.5 py-0.5 bg-surface/50 border border-border/10 text-[7px] font-mono text-text/40 dark:text-text-dark/40">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2 pt-4 mt-4 border-t border-border/10 dark:border-border-dark/10">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center py-1.5 border border-border dark:border-border-dark text-[8px] font-mono uppercase tracking-wider hover:bg-text hover:text-background dark:hover:bg-text-dark dark:hover:text-background-dark text-text/75 dark:text-text-dark/75 transition-all flex items-center justify-center gap-1"
                        >
                          <Github className="w-3 h-3" /> REPO
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center py-1.5 bg-text dark:bg-text-dark text-background dark:text-background-dark text-[8px] font-mono uppercase tracking-wider hover:opacity-90 transition-all flex items-center justify-center gap-1"
                        >
                          <ExternalLink className="w-3 h-3" /> DEMO
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

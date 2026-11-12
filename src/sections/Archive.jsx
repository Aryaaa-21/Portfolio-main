import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Search, Filter, ExternalLink, Github, Cpu, Layers, Activity, Users, AlertTriangle } from 'lucide-react';
import SpotlightCard from '../components/motion/SpotlightCard';
import ScrambleText from '../components/motion/ScrambleText';

// 1. SYSTEM REGISTRY HEADER & FILTERS
export function ArchiveHeader({ search, setSearch, filterStatus, setFilterStatus }) {
  const statuses = ['All', '[ACTIVE]', '[DEPLOYED]', '[RESEARCH]', '[BLOCKCHAIN]', '[SOROBAN]', '[TEAM]', '[ARCHIVED]'];

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

// Team builds published under the RAL LETS GitHub organisation
const ralLetsProjects = [
  {
    id: 'GL-011',
    title: 'GrantLink',
    classification: 'STELLAR + GRANT MANAGEMENT',
    mission: 'Every grant. Every milestone. On-chain.',
    overview: 'GrantLink is a decentralized grant management platform on Stellar and Soroban. Funders publish grants on-chain, applicants submit proposals with milestones, and funds sit in an escrow contract that releases each phase only after the grant owner verifies it.',
    highlights: 'Three Soroban contracts (GrantRegistry, GrantApplication, GrantEscrow) with Freighter and Albedo wallet login, a live ledger event feed, and a CI pipeline that runs contract and frontend tests.',
    tech: ['SOROBAN', 'RUST', 'REACT', 'TYPESCRIPT', 'TAILWIND CSS', 'ZUSTAND', 'VITEST'],
    status: ['[BLOCKCHAIN]', '[SOROBAN]', '[DEPLOYED]', '[TEAM]'],
    github: 'https://github.com/RAL-LETS/grantlink-nivpandey',
    demo: 'https://grantlink-niv.netlify.app',
    badges: ['ESCROW CONTRACT', 'MILESTONE RELEASE']
  },
  {
    id: 'TC-012',
    title: 'TaskChain Mini',
    classification: 'STELLAR + ON-CHAIN PRODUCTIVITY',
    mission: 'A personal task list where every task lives on the Stellar testnet.',
    overview: 'TaskChain Mini is an end-to-end Soroban mini-dApp. A Rust contract stores tasks per wallet, and a React frontend lets you connect Freighter, create tasks, and toggle them complete on-chain with clear progress and error feedback.',
    highlights: 'Contract methods for creating, toggling, and reading wallet-specific tasks, a light local cache for reads, contract tests, and a deployed testnet contract.',
    tech: ['SOROBAN', 'RUST', 'REACT', 'VITE', 'STELLAR SDK', 'FREIGHTER'],
    status: ['[BLOCKCHAIN]', '[SOROBAN]', '[DEPLOYED]', '[TEAM]'],
    github: 'https://github.com/RAL-LETS/TaskChain-Mini-master',
    demo: 'https://taskchainmini.vercel.app',
    badges: ['SOROBAN CONTRACT', 'STELLAR TESTNET']
  },
  {
    id: 'CX-013',
    title: 'CrowdfundX',
    classification: 'STELLAR + CROWDFUNDING',
    mission: 'Launch a campaign, take donations, and watch them arrive on-chain.',
    overview: 'CrowdfundX is a crowdfunding dApp on Stellar. Creators launch campaigns, backers donate from their own wallet, and a dashboard follows contract events as contributions land.',
    highlights: 'Wallet adapters for Freighter, Albedo and xBull, a contract event stream, form validation, and tests covering campaigns, donations, and wallet flows.',
    tech: ['STELLAR', 'SOROBAN', 'REACT', 'TYPESCRIPT', 'VITEST'],
    status: ['[BLOCKCHAIN]', '[SOROBAN]', '[TEAM]'],
    github: 'https://github.com/RAL-LETS/crowdfundx-nivritip27',
    demo: '',
    badges: ['MULTI-WALLET', 'EVENT STREAM']
  },
  {
    id: 'TS-014',
    title: 'TransparenSee',
    classification: 'GOVERNANCE + IMPACT TRACKING',
    mission: 'Track every rupee. Verify every outcome.',
    overview: 'TransparenSee is a governance and impact platform for following public and NGO funding from disbursement to outcome. It covers project creation, milestone evidence from NGOs, auditor review, beneficiary feedback, and impact analytics.',
    highlights: 'A multi-role React interface with an admin overview, auditor workspace, NGO evidence portal, and charts for institutional impact.',
    tech: ['REACT', 'TYPESCRIPT', 'TAILWIND CSS', 'REACT QUERY', 'RECHARTS', 'ZOD'],
    status: ['[RESEARCH]', '[TEAM]'],
    github: 'https://github.com/RAL-LETS/TransparenSee',
    demo: '',
    badges: ['AUDIT TRAIL', 'IMPACT ANALYTICS']
  }
];

const ACCENTS = {
  cyan: {
    card: 'border-cyan-500/25 hover:border-cyan-500/60',
    text: 'text-cyan-600 dark:text-cyan-400',
    rule: 'border-cyan-500/40',
    badge: 'bg-cyan-500/10 border-cyan-500/25 text-cyan-700 dark:text-cyan-300',
    primary: 'bg-cyan-500/10 border-cyan-500/40 text-cyan-700 dark:text-cyan-400 hover:bg-cyan-500 hover:text-black hover:border-cyan-500',
    icon: 'text-cyan-500',
  },
  amber: {
    card: 'border-amber-500/25 hover:border-amber-500/60',
    text: 'text-amber-600 dark:text-amber-400',
    rule: 'border-amber-500/40',
    badge: 'bg-amber-500/10 border-amber-500/25 text-amber-700 dark:text-amber-300',
    primary: 'bg-amber-500/10 border-amber-500/40 text-amber-700 dark:text-amber-400 hover:bg-amber-500 hover:text-black hover:border-amber-500',
    icon: 'text-amber-500',
  },
  mono: {
    card: 'border-border dark:border-border-dark hover:border-text/50 dark:hover:border-text-dark/50',
    text: 'text-text/50 dark:text-text-dark/50',
    rule: 'border-border dark:border-border-dark',
    badge: 'border-border dark:border-border-dark text-text/60 dark:text-text-dark/60',
    primary: 'bg-text border-text text-background dark:bg-text-dark dark:border-text-dark dark:text-background-dark hover:opacity-85',
    icon: 'text-violet-500',
  },
};

const GROUPS = [
  {
    key: 'web3',
    label: 'WEB3 & SOROBAN BLOCKCHAIN ARCHIVE',
    icon: Layers,
    accent: 'cyan',
    columns: 'lg:grid-cols-2',
    entrance: 'decrypt',
    projects: web3Projects,
  },
  {
    key: 'ral-lets',
    label: 'RAL LETS // STELLAR TEAM BUILDS',
    icon: Users,
    accent: 'amber',
    columns: 'lg:grid-cols-2',
    projects: ralLetsProjects,
    note: 'Built with the team under the RAL LETS GitHub organisation.',
  },
  {
    key: 'foundational',
    label: 'FOUNDATIONAL ENGINEERING SYSTEMS',
    icon: Activity,
    accent: 'mono',
    columns: 'md:grid-cols-3',
    compact: true,
    projects: foundationalProjects,
  },
];

const EASE = [0.22, 1, 0.36, 1];

// How a card arrives. "rise" is the default fade-up. "decrypt" is the Web3 one:
// the card swings in from its side in 3D while it is unmasked from the top,
// a scan line runs down it, and the title resolves out of hash noise.
const ENTRANCES = {
  rise: (index) => ({
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.65, ease: EASE, delay: (index % 3) * 0.08 },
  }),
  decrypt: (index) => {
    const fromLeft = index % 2 === 0;
    return {
      initial: {
        opacity: 0,
        x: fromLeft ? -70 : 70,
        rotateY: fromLeft ? 22 : -22,
        clipPath: 'inset(-24px -24px 100% -24px)',
      },
      whileInView: { opacity: 1, x: 0, rotateY: 0, clipPath: 'inset(-24px -24px -24px -24px)' },
      transition: { duration: 1, ease: EASE, delay: (index % 2) * 0.15 },
      style: { transformPerspective: 1400 },
    };
  },
};

const ProjectCard = React.forwardRef(function ProjectCard({ project, accent, compact, index, entrance = 'rise' }, ref) {
  const tone = ACCENTS[accent];
  const hasDemo = Boolean(project.demo);
  const isDecrypt = entrance === 'decrypt';
  const motionProps = ENTRANCES[entrance](index);
  const revealDelay = (index % 2) * 0.15;

  return (
    <motion.div
      ref={ref}
      layout
      {...motionProps}
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
      className="relative h-full"
    >
      {isDecrypt && (
        <motion.span
          aria-hidden="true"
          initial={{ top: '0%', opacity: 0 }}
          whileInView={{ top: ['0%', '100%'], opacity: [0, 1, 1, 0] }}
          viewport={{ once: true, margin: '0px 0px -60px 0px' }}
          transition={{ duration: 1.1, ease: 'easeInOut', delay: revealDelay }}
          className="absolute left-0 right-0 h-px z-20 pointer-events-none bg-cyan-400 shadow-[0_0_14px_2px_rgba(34,211,238,0.7)]"
        />
      )}
      <SpotlightCard
        whileHover={{ y: -5 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        className={`cursor-target group h-full border bg-surface/40 dark:bg-surface-dark/40 flex flex-col justify-between transition-colors duration-300 ${tone.card} ${
          compact ? 'p-5' : 'p-6'
        }`}
      >
        <div className={compact ? 'space-y-3' : 'space-y-4'}>
          {/* Header metadata */}
          <div className="flex items-start justify-between gap-4">
            <span className="font-mono text-[10px] text-text/40 dark:text-text-dark/40 font-bold">{project.id}</span>
            <div className="flex flex-wrap justify-end gap-1.5">
              {project.status.map((st) => (
                <span
                  key={st}
                  className="px-1.5 py-0.5 border border-border dark:border-border-dark text-[8px] font-mono text-text/45 dark:text-text-dark/45"
                >
                  {st}
                </span>
              ))}
            </div>
          </div>

          {/* Title */}
          <div>
            <div className="flex flex-wrap items-baseline gap-2 mb-1.5">
              <h4 className={`font-display font-bold text-text dark:text-text-dark uppercase ${compact ? 'text-lg' : 'text-xl'}`}>
                {isDecrypt ? <ScrambleText text={project.title} delay={revealDelay * 1000 + 250} /> : project.title}
              </h4>
              {project.complexity && (
                <span className="text-[8px] font-mono text-text/35 dark:text-text-dark/35">// {project.complexity}</span>
              )}
            </div>
            <p className={`font-mono text-[9px] tracking-wider font-bold uppercase ${tone.text}`}>{project.classification}</p>
            {project.badges && (
              <div className="flex flex-wrap gap-1 mt-2">
                {project.badges.map((badge) => (
                  <span key={badge} className={`px-2 py-0.5 border text-[7px] font-mono tracking-widest font-bold ${tone.badge}`}>
                    {badge}
                  </span>
                ))}
              </div>
            )}
          </div>

          {!compact && project.mission && (
            <p className={`font-body text-xs text-text/80 dark:text-text-dark/80 font-medium leading-relaxed italic border-l pl-2 ${tone.rule}`}>
              {project.mission}
            </p>
          )}

          <p className="font-body text-xs text-text/60 dark:text-text-dark/60 leading-relaxed">{project.overview}</p>

          {!compact && project.highlights && (
            <div className="space-y-1 bg-background/60 dark:bg-background-dark/60 p-3 border border-border/60 dark:border-border-dark">
              <span className="font-mono text-[8px] text-text/40 dark:text-text-dark/40 block tracking-wider">
                ARCHITECTURE NOTES
              </span>
              <p className="font-body text-[11px] text-text/55 dark:text-text-dark/55 leading-relaxed">{project.highlights}</p>
            </div>
          )}

          {!compact && project.impact && (
            <p className={`font-body text-xs leading-relaxed font-semibold ${tone.text}`}>IMPACT // {project.impact}</p>
          )}

          <div className="flex flex-wrap gap-1 pt-1">
            {project.tech.map((tech, techIdx) => (
              <motion.span
                key={tech}
                initial={isDecrypt ? { opacity: 0, y: 8 } : false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: isDecrypt ? 0.6 + revealDelay + techIdx * 0.05 : 0 }}
                className="px-2 py-0.5 border border-border/70 dark:border-border-dark text-[8px] font-mono text-text/50 dark:text-text-dark/50"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className={`relative z-10 flex gap-3 border-t border-border/60 dark:border-border-dark ${compact ? 'pt-4 mt-4' : 'pt-6 mt-6'}`}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 border border-border dark:border-border-dark text-[9px] font-mono uppercase tracking-wider text-text/80 dark:text-text-dark/80 hover:border-text dark:hover:border-text-dark hover:text-text dark:hover:text-text-dark transition-colors flex items-center justify-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5" /> Repo
          </a>
          {hasDemo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 text-center py-2 border text-[9px] font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${tone.primary}`}
            >
              <ExternalLink className="w-3.5 h-3.5" /> Live
            </a>
          )}
        </div>
      </SpotlightCard>
    </motion.div>
  );
});

// 2. SYSTEM REGISTRY DATA GRID
export function ArchiveGrid({ search, filterStatus }) {
  const query = search.trim().toLowerCase();

  const matches = (item) => {
    const matchesSearch =
      !query ||
      item.title.toLowerCase().includes(query) ||
      item.classification.toLowerCase().includes(query) ||
      item.tech.some((t) => t.toLowerCase().includes(query)) ||
      (item.highlights && item.highlights.toLowerCase().includes(query)) ||
      item.id.toLowerCase().includes(query);
    const matchesStatus = filterStatus === 'All' || item.status.includes(filterStatus);
    return matchesSearch && matchesStatus;
  };

  const visibleGroups = GROUPS.map((group) => ({ ...group, visible: group.projects.filter(matches) })).filter(
    (group) => group.visible.length > 0
  );

  return (
    <section id="archive" className="py-24 bg-background dark:bg-background-dark border-b border-border/20 dark:border-border-dark/20 theme-transition relative">
      {/* Visual background lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        {visibleGroups.length === 0 && (
          <div className="text-center py-24 border border-dashed border-border dark:border-border-dark">
            <AlertTriangle className="w-8 h-8 mx-auto mb-4 text-text/30 dark:text-text-dark/30" />
            <p className="font-mono text-xs uppercase tracking-widest text-text/50 dark:text-text-dark/50">
              No projects match that search or filter.
            </p>
          </div>
        )}

        <div className="space-y-24">
          {visibleGroups.map((group, groupIdx) => {
            const GroupIcon = group.icon;
            const tone = ACCENTS[group.accent];
            return (
              <div key={group.key} className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="border-b border-border dark:border-border-dark pb-3 flex flex-wrap items-center justify-between gap-3"
                >
                  <span className="font-mono text-xs tracking-[0.25em] text-text/50 dark:text-text-dark/50 flex items-center gap-2">
                    <GroupIcon className={`w-4 h-4 ${tone.icon}`} />
                    {String(groupIdx + 2).padStart(2, '0')} // {group.label}
                  </span>
                  <span className="font-mono text-[9px] text-text/40 dark:text-text-dark/40">
                    {String(group.visible.length).padStart(2, '0')} {group.visible.length === 1 ? 'SYSTEM' : 'SYSTEMS'}
                  </span>
                </motion.div>

                {group.note && (
                  <p className="font-body text-xs text-text/55 dark:text-text-dark/55 -mt-4">{group.note}</p>
                )}

                <div className={`grid grid-cols-1 ${group.columns} gap-6`}>
                  <AnimatePresence mode="popLayout">
                    {group.visible.map((project, idx) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        accent={group.accent}
                        compact={group.compact}
                        entrance={group.entrance}
                        index={idx}
                      />
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

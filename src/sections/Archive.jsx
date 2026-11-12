import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Search, Filter, ExternalLink, Github, Cpu, Layers, Activity, Users, AlertTriangle, ArrowUpRight, ChevronLeft, ChevronRight, Lock, X } from 'lucide-react';
import SpotlightCard from '../components/motion/SpotlightCard';
import ScrambleText from '../components/motion/ScrambleText';

// 1. SYSTEM REGISTRY HEADER & FILTERS
export function ArchiveHeader({ search, setSearch, filterStatus, setFilterStatus }) {
  const statuses = ['All', '[ACTIVE]', '[DEPLOYED]', '[RESEARCH]', '[BLOCKCHAIN]', '[SOROBAN]', '[TEAM]', '[ARCHIVED]'];

  return (
    <div className="w-full bg-background dark:bg-background-dark px-6 lg:px-16 pt-8 pb-4 relative z-10 theme-transition">
      <div className="max-w-7xl mx-auto">
        {/* Search and filter */}
        <div className="border border-border/30 dark:border-border-dark/30 bg-surface/40 dark:bg-surface-dark/40 p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-2">
            <span className="font-mono text-xs tracking-[0.3em] text-text/40 dark:text-text-dark/40 flex items-center gap-2 uppercase">
              <Cpu className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
              Everything else I have built
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-text dark:text-text-dark uppercase">
              ALL PROJECTS
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center w-full md:w-auto">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text/40 dark:text-text-dark/40" />
              <input
                type="text"
                placeholder="Search projects..." aria-label="Search projects"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border dark:border-border-dark bg-surface dark:bg-surface-dark/50 font-mono text-xs text-text dark:text-text-dark focus:outline-none focus:border-text dark:focus:border-text-dark uppercase rounded-none transition-colors"
              />
            </div>

            {/* Status Dropdown */}
            <div className="relative">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full pl-4 pr-10 py-2 border border-border dark:border-border-dark bg-surface dark:bg-surface-dark text-text dark:text-text-dark font-mono text-xs uppercase rounded-none appearance-none focus:outline-none focus:border-text dark:focus:border-text-dark"
              >
                {statuses.map(st => (
                  <option key={st} value={st}>{st === 'All' ? 'Filter: all' : `Filter: ${st.replace(/[\[\]]/g, '').toLowerCase()}`}</option>
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
    classification: 'STELLAR + ACCOUNTABILITY STAKING',
    mission: 'Stake XLM. Achieve goals. Earn rewards.',
    overview: 'SkillStake is an accountability protocol on Stellar. You lock XLM in escrow against a time-bound habit or milestone, validators review your proof, and the contract either returns your stake or sends it to the shared reward pool.',
    highlights: 'Soroban escrow with custom deadlines, stake sizes and validator thresholds. Ready-made challenge templates (gym, clean coding, DSA, board exams), on-chain proof logs, and Freighter or Albedo sign-in.',
    tech: ['SOROBAN', 'RUST', 'REACT', 'TYPESCRIPT', 'STELLAR SDK', 'PLAYWRIGHT', 'VITEST'],
    status: ['[BLOCKCHAIN]', '[SOROBAN]', '[DEPLOYED]'],
    github: 'https://github.com/Aryaaa-21/SkillStake',
    demo: 'https://skill-stake-nine.vercel.app/',
    badges: ['STAKE ESCROW', 'VALIDATOR CONSENSUS']
  },
  {
    id: 'AB-005',
    title: 'AnchorBridge',
    classification: 'STELLAR + MILESTONE ESCROW',
    mission: 'Trustless milestone escrow between clients and freelancers.',
    overview: 'AnchorBridge is a milestone-based escrow platform on Stellar. A client locks funds in a Soroban contract, the freelancer delivers milestone by milestone, and each payment releases on approval, with no marketplace holding the money or taking a cut.',
    highlights: 'Funds stay locked until a milestone is approved and remain secured during disputes. Freighter sign-in, a real-time feed driven by Soroban events, and a responsive dashboard with charts.',
    tech: ['SOROBAN', 'RUST', 'REACT', 'TYPESCRIPT', 'TAILWIND CSS', 'ZUSTAND', 'RECHARTS'],
    status: ['[BLOCKCHAIN]', '[SOROBAN]', '[DEPLOYED]'],
    github: 'https://github.com/Aryaaa-21/AnchorBridge',
    demo: 'https://anchorbridge-taupe.vercel.app/',
    badges: ['MILESTONE ESCROW', 'DISPUTE HOLD']
  },
  {
    id: 'SP-006',
    title: 'StellarPay',
    classification: 'STELLAR + ESCROW PAYMENTS',
    mission: 'Lock, release or refund XLM under an agreement both sides can see.',
    overview: 'StellarPay is an escrow platform on the Stellar testnet. Users lock XLM into an escrow agreement, release or refund it, raise disputes, and build an on-chain reputation score from how their deals end.',
    highlights: 'An escrow contract paired with a reputation contract. Freighter, Albedo and xBull wallets, a trust leaderboard, an analytics dashboard, a live event feed, and CI that runs frontend and contract tests.',
    tech: ['SOROBAN', 'RUST', 'REACT', 'VITE', 'TAILWIND CSS', 'STELLAR SDK', 'FRAMER MOTION'],
    status: ['[BLOCKCHAIN]', '[SOROBAN]', '[DEPLOYED]'],
    github: 'https://github.com/aruuu9/StellarPay',
    demo: 'https://stellarpay21.netlify.app/',
    badges: ['ESCROW CONTRACT', 'ON-CHAIN REPUTATION']
  },
  {
    id: 'CR-007',
    title: 'ChainRent',
    classification: 'STELLAR + RENTAL AGREEMENTS',
    mission: 'Secure rental agreements. Trustless deposits.',
    overview: 'ChainRent puts residential rental agreements on Stellar. The security deposit sits in a Soroban contract instead of with the landlord, rent and refunds follow the lease terms, and both sides share one tamper-proof record of what was agreed and paid.',
    highlights: 'Lease terms and payment history are read from contract state. Freighter and xBull sign-in, live balances, and step-by-step status for each ledger transaction.',
    tech: ['SOROBAN', 'RUST', 'REACT', 'TYPESCRIPT', 'TAILWIND CSS', 'FRAMER MOTION'],
    status: ['[BLOCKCHAIN]', '[SOROBAN]', '[DEPLOYED]'],
    github: 'https://github.com/sunita-coder-21/ChainRent',
    demo: 'https://chainrent.netlify.app/',
    badges: ['DEPOSIT ESCROW', 'LEASE LEDGER']
  }
];

// Foundational Projects
const foundationalProjects = [
  {
    id: 'SC-008',
    title: 'Spotify Clone',
    classification: 'HTML + CSS LAYOUT PRACTICE',
    mission: 'Rebuilding the Spotify web player screen by hand to learn layout.',
    overview: 'A static copy of the Spotify web player home screen, written in plain HTML and CSS. I used it to practise flexbox, grid, sticky sidebars and matching spacing and type to a real product.',
    tech: ['HTML', 'CSS', 'GITHUB PAGES'],
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

// Stellar / Soroban builds from the RAL LETS organisation. Most of these repos
// are private, so they carry a live link only and no repository link.
const stellarProjects = [
  {
    id: 'FF-015',
    title: 'FundForge',
    classification: 'STELLAR + CROWDFUNDING',
    mission: 'Raise funds in the open, with every contribution held in an on-chain escrow.',
    overview: 'FundForge is a decentralized crowdfunding platform on Stellar. Creators, startups and NGOs launch campaigns that each get their own escrow contract, and backers contribute in XLM or custom Stellar tokens while activity streams in live.',
    highlights: 'A factory registry deploys a dedicated escrow per campaign. Freighter and Albedo sign-in, a Horizon event stream instead of polling, a transaction centre, a Recharts analytics panel, and upgradeable contracts.',
    tech: ['SOROBAN', 'RUST', 'REACT', 'TYPESCRIPT', 'TAILWIND CSS', 'ZUSTAND', 'RECHARTS', 'VITEST'],
    status: ['[BLOCKCHAIN]', '[SOROBAN]', '[DEPLOYED]'],
    github: '',
    demo: 'https://fund-forge.netlify.app/',
    badges: ['ESCROW FACTORY', 'LIVE EVENT STREAM']
  },
  {
    id: 'SR-016',
    title: 'StellaRaise',
    classification: 'STELLAR + CROWDFUNDING',
    mission: 'Crowdfunding where the smart contract, not a platform, holds the money.',
    overview: 'StellaRaise lets creators and organisations raise funds transparently on Stellar. Campaigns are backed by Soroban escrow contracts, contributions arrive in XLM or custom tokens, and a dashboard tracks every transaction.',
    highlights: 'Multi-wallet sign-in through Stellar Wallets Kit, per-campaign escrow, real-time activity, and contribution analytics, tested with Vitest.',
    tech: ['SOROBAN', 'RUST', 'REACT', 'TYPESCRIPT', 'TAILWIND CSS', 'ZUSTAND', 'RECHARTS'],
    status: ['[BLOCKCHAIN]', '[SOROBAN]', '[DEPLOYED]'],
    github: '',
    demo: 'https://stellaraise.vercel.app',
    badges: ['CAMPAIGN ESCROW', 'MULTI-WALLET']
  },
  {
    id: 'IX-017',
    title: 'InvoiceX',
    classification: 'STELLAR + INVOICING',
    mission: 'Create. Send. Get paid. On Stellar.',
    overview: 'InvoiceX is a billing and settlement protocol on Soroban. A freelancer or business writes an invoice to the ledger, shares its link, and the client pays it directly, with the record of who paid what kept on-chain.',
    highlights: 'Invoices live in persistent contract state with pending, paid and cancelled filters. Payment is routed from client to creator through a cross-contract call that settles atomically. Runs in a sandbox mode or against the testnet.',
    tech: ['SOROBAN', 'RUST', 'REACT', 'TYPESCRIPT', 'TAILWIND CSS', 'FRAMER MOTION', 'VITEST'],
    status: ['[BLOCKCHAIN]', '[SOROBAN]', '[DEPLOYED]'],
    github: 'https://github.com/Aryaaa-21/InvoiceX',
    demo: 'https://invoicex.vercel.app',
    badges: ['ATOMIC SETTLEMENT', 'SHAREABLE INVOICES']
  },
  {
    id: 'SB-018',
    title: 'SkillBounty',
    classification: 'STELLAR + BOUNTY MARKETPLACE',
    mission: 'Build. Contribute. Earn.',
    overview: 'SkillBounty is a freelancing and development bounty board on Stellar. Project owners lock reward funds in an on-chain escrow, contributors submit work, and payment releases once the milestone is verified, with no platform holding the money in between.',
    highlights: 'Post work, lock XLM, pay on delivery. Soroban escrow contracts, Freighter sign-in, React Query for chain data, and Zustand for live state.',
    tech: ['SOROBAN', 'RUST', 'REACT', 'TYPESCRIPT', 'TAILWIND CSS', 'REACT QUERY', 'ZUSTAND'],
    status: ['[BLOCKCHAIN]', '[SOROBAN]', '[DEPLOYED]'],
    github: '',
    demo: 'https://skillbounty.vercel.app',
    badges: ['REWARD ESCROW', 'MILESTONE PAYOUT']
  },
  {
    id: 'BB-019',
    title: 'BountyBridge',
    classification: 'STELLAR + TASK BOUNTIES',
    mission: 'Create, fund, and complete bounties on Stellar.',
    overview: 'BountyBridge is a dApp for launching and managing task bounties backed by smart contracts. Funders pay straight into escrow and contributors are paid on validated milestones, which removes the fees, payout delays and account freezes of centralized freelancing sites.',
    highlights: 'BountyEscrow and SubmissionRegistry contracts working together, Freighter, Albedo and xBull wallets, and on-screen feedback for each transaction as it is submitted.',
    tech: ['SOROBAN', 'RUST', 'REACT', 'TYPESCRIPT', 'TAILWIND CSS', 'REACT QUERY', 'ZUSTAND'],
    status: ['[BLOCKCHAIN]', '[SOROBAN]', '[DEPLOYED]'],
    github: '',
    demo: 'https://bounty-bridge-three.vercel.app',
    badges: ['BOUNTY ESCROW', 'SUBMISSION REGISTRY']
  },
  {
    id: 'TK-020',
    title: 'TicketChain',
    classification: 'STELLAR + EVENT TICKETING',
    mission: 'Fraud-proof event tickets, enforced by contract instead of a ticketing company.',
    overview: 'TicketChain issues every ticket as a verified on-chain token. Ownership cannot be forged, transfers are permissioned, resale happens peer to peer at a validated price, and a ticket checked in at the gate cannot be used twice.',
    highlights: 'Ticket funds sit in an escrow contract and are released when the event completes or refunded if it is cancelled. Includes a resale marketplace, an organiser dashboard, and ticket passes with QR codes.',
    tech: ['SOROBAN', 'RUST', 'REACT', 'TYPESCRIPT', 'TAILWIND CSS', 'REACT QUERY', 'ZUSTAND', 'VITEST'],
    status: ['[BLOCKCHAIN]', '[SOROBAN]', '[DEPLOYED]'],
    github: '',
    demo: 'https://ticketchain1.netlify.app/',
    badges: ['RESALE MARKET', 'GATE VERIFICATION']
  },
  {
    id: 'VS-021',
    title: 'VoteSphere',
    classification: 'STELLAR + GOVERNANCE',
    mission: 'Trust every vote. Verify every decision.',
    overview: 'VoteSphere is a voting and governance platform on Stellar. Admins create elections with any number of candidates, each wallet can vote once, and results tally in real time from the ledger.',
    highlights: 'Separate election registry, voting and results contracts. One wallet, one vote is enforced on-chain. Freighter, Albedo and xBull support, event streaming over Soroban RPC, and Playwright end-to-end tests.',
    tech: ['SOROBAN', 'RUST', 'REACT', 'TYPESCRIPT', 'REACT QUERY', 'ZUSTAND', 'PLAYWRIGHT'],
    status: ['[BLOCKCHAIN]', '[SOROBAN]', '[DEPLOYED]'],
    github: '',
    demo: 'https://vote-sphere1.netlify.app/',
    badges: ['ONE WALLET ONE VOTE', 'LIVE TALLY']
  },
  {
    id: 'SW-022',
    title: 'StellarPay Wallet',
    classification: 'STELLAR + STUDENT FINTECH',
    mission: 'A student wallet where rewards are paid out by contract.',
    overview: 'A decentralized student wallet and milestone reward gateway on Stellar. Students connect a wallet, track their balance, and receive rewards that the contract only releases to students registered on-chain.',
    highlights: 'Freighter and Albedo sign-in plus locally generated keys, a cross-contract registry check before any reward is distributed, a live ledger event log, and an explorer for querying registry entries.',
    tech: ['SOROBAN', 'RUST', 'REACT', 'TYPESCRIPT', 'TAILWIND CSS', 'STELLAR SDK'],
    status: ['[BLOCKCHAIN]', '[SOROBAN]', '[DEPLOYED]'],
    github: '',
    demo: 'https://stellarpay-phi.vercel.app',
    badges: ['REWARD GATEWAY', 'ON-CHAIN REGISTRY']
  },
  {
    id: 'SP-023',
    title: 'SplitPay',
    classification: 'STELLAR + EXPENSE SPLITTING',
    mission: 'Split expenses. Settle instantly.',
    overview: 'SplitPay is a group expense manager on Stellar. Groups register on-chain, expenses are split evenly, by percentage or by custom amounts, and the contract nets everyone\'s debts down to the fewest payments before settling in XLM.',
    highlights: 'An on-chain group registry with admin permissions, a debt-netting settlement algorithm in the contract, contract events shown as a live activity feed, and a simulator mode when no wallet is installed.',
    tech: ['SOROBAN', 'RUST', 'REACT', 'TYPESCRIPT', 'TAILWIND CSS', 'VITEST'],
    status: ['[BLOCKCHAIN]', '[SOROBAN]'],
    github: '',
    demo: '',
    badges: ['DEBT NETTING', 'GROUP REGISTRY']
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
    line: 'bg-cyan-500',
  },
  mono: {
    card: 'border-border dark:border-border-dark hover:border-text/50 dark:hover:border-text-dark/50',
    text: 'text-text/50 dark:text-text-dark/50',
    rule: 'border-border dark:border-border-dark',
    badge: 'border-border dark:border-border-dark text-text/60 dark:text-text-dark/60',
    primary: 'bg-text border-text text-background dark:bg-text-dark dark:border-text-dark dark:text-background-dark hover:opacity-85',
    icon: 'text-violet-500',
    line: 'bg-text dark:bg-text-dark',
  },
};

// Team builds sit in the same Web3 group as the solo ones; the [TEAM] tag tells them apart.
const GROUPS = [
  {
    key: 'web3',
    label: 'WEB3, SOROBAN & STELLAR BUILDS',
    icon: Layers,
    accent: 'cyan',
    entrance: 'decrypt',
    projects: [...web3Projects, ...stellarProjects, ...ralLetsProjects],
    // Shown first; the rest sit behind a "show all" button so the list is not a wall of similar apps.
    highlightIds: ['SS-004', 'AB-005', 'TK-020', 'VS-021', 'IX-017', 'FF-015'],
  },
  {
    key: 'foundational',
    label: 'EARLY AND FOUNDATIONAL PROJECTS',
    icon: Activity,
    accent: 'mono',
    entrance: 'rise',
    projects: foundationalProjects,
  },
];

const EASE = [0.22, 1, 0.36, 1];
const MAX_CHIPS = 3;

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
    const column = index % 3;
    const direction = column === 0 ? -1 : column === 2 ? 1 : 0;
    return {
      initial: {
        opacity: 0,
        x: direction * 60,
        y: direction === 0 ? 40 : 0,
        rotateY: direction * -20,
        clipPath: 'inset(-24px -24px 100% -24px)',
      },
      whileInView: { opacity: 1, x: 0, y: 0, rotateY: 0, clipPath: 'inset(-24px -24px -24px -24px)' },
      transition: { duration: 0.9, ease: EASE, delay: column * 0.12 },
      style: { transformPerspective: 1400 },
    };
  },
};

// A compact tile: name, one line, a few tags. The whole tile opens the full write-up.
const ProjectCard = React.forwardRef(function ProjectCard({ project, accent, index, entrance = 'rise', onOpen }, ref) {
  const tone = ACCENTS[accent];
  const isDecrypt = entrance === 'decrypt';
  const revealDelay = (index % 3) * 0.12;
  const isTeam = project.status.includes('[TEAM]');
  const isLive = Boolean(project.demo);
  const extraTech = project.tech.length - MAX_CHIPS;

  return (
    <motion.div
      ref={ref}
      layout
      {...ENTRANCES[entrance](index)}
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
          transition={{ duration: 1, ease: 'easeInOut', delay: revealDelay }}
          className="absolute left-0 right-0 h-px z-20 pointer-events-none bg-cyan-400 shadow-[0_0_14px_2px_rgba(34,211,238,0.7)]"
        />
      )}
      <SpotlightCard
        as="button"
        type="button"
        onClick={() => onOpen(project)}
        aria-label={`Open project: ${project.title}`}
        whileHover={{ y: -6 }}
        whileTap={{ scale: 0.985 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        className={`cursor-target group w-full h-full text-left border bg-surface/40 dark:bg-surface-dark/40 p-5 flex flex-col gap-4 overflow-hidden transition-colors duration-300 ${tone.card}`}
      >
        {/* accent line that draws across the top on hover */}
        <span
          aria-hidden="true"
          className={`absolute top-0 left-0 h-[2px] w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out ${tone.line}`}
        />

        <div className="h-5 flex items-center justify-between gap-3 font-mono text-xs text-text/45 dark:text-text-dark/45">
          <span className="font-bold tracking-wider">{project.id}</span>
          <span className="flex items-center gap-2">
            {isTeam && <span className="px-1.5 py-0.5 border border-border dark:border-border-dark flex items-center gap-1"><Users className="w-2.5 h-2.5" /> TEAM</span>}
            <span className="flex items-center gap-1.5">
              <span className={`w-1.5 h-1.5 rounded-full ${isLive ? 'bg-emerald-500' : 'bg-text/25 dark:bg-text-dark/25'}`} />
              {isLive ? 'LIVE' : project.github ? 'REPO' : project.linkLabel || 'PRIVATE'}
            </span>
          </span>
        </div>

        <div>
          <h4 className="font-display text-xl font-bold text-text dark:text-text-dark uppercase leading-tight mb-1.5">
            {isDecrypt ? <ScrambleText text={project.title} delay={revealDelay * 1000 + 250} /> : project.title}
          </h4>
          <p className={`font-mono text-xs tracking-wider font-bold uppercase ${tone.text}`}>{project.classification}</p>
        </div>

        <p className="font-body text-xs text-text/60 dark:text-text-dark/60 leading-relaxed line-clamp-2">
          {project.mission || project.overview}
        </p>

        <div className="mt-auto pt-4 border-t border-border/60 dark:border-border-dark flex items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1 min-w-0">
            {project.tech.slice(0, MAX_CHIPS).map((tech) => (
              <span key={tech} className="px-1.5 py-0.5 border border-border/70 dark:border-border-dark text-xs font-mono text-text/50 dark:text-text-dark/50">
                {tech}
              </span>
            ))}
            {extraTech > 0 && (
              <span className="px-1.5 py-0.5 text-xs font-mono text-text/40 dark:text-text-dark/40">+{extraTech}</span>
            )}
          </div>
          <ArrowUpRight className="w-4 h-4 shrink-0 text-text/40 dark:text-text-dark/40 transition-all duration-300 group-hover:text-text dark:group-hover:text-text-dark group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </SpotlightCard>
    </motion.div>
  );
});

// Full write-up for one project. Arrows and the left/right keys step through `list`.
function ProjectModal({ project, accent, list, onChange, onClose }) {
  const index = project ? list.findIndex((item) => item.id === project.id) : -1;
  const canStep = list.length > 1 && index !== -1;
  const step = (direction) => {
    if (canStep) onChange(list[(index + direction + list.length) % list.length]);
  };

  useEffect(() => {
    if (!project) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') step(1);
      if (event.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  });

  const tone = ACCENTS[accent] || ACCENTS.mono;
  const navButton =
    'cursor-target p-2 border border-border dark:border-border-dark text-text/60 dark:text-text-dark/60 hover:bg-text hover:text-background dark:hover:bg-text-dark dark:hover:text-background-dark transition-colors duration-300';

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="project-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[10000] bg-[#050505]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-2xl max-h-full overflow-y-auto border border-border dark:border-border-dark bg-surface dark:bg-surface-dark"
          >
            <span aria-hidden="true" className={`absolute top-0 left-0 h-[2px] w-full ${tone.line}`} />

            {/* Header */}
            <div className="flex items-start justify-between gap-6 p-5 sm:p-7 border-b border-border dark:border-border-dark">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-1.5 mb-3">
                  <span className="font-mono text-xs font-bold text-text/45 dark:text-text-dark/45 mr-1.5">{project.id}</span>
                  {project.status.map((st) => (
                    <span key={st} className="px-1.5 py-0.5 border border-border dark:border-border-dark text-xs font-mono text-text/50 dark:text-text-dark/50">
                      {st}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-text dark:text-text-dark uppercase leading-tight">
                  {project.title}
                </h3>
                <p className={`font-mono text-xs tracking-wider font-bold uppercase mt-2 ${tone.text}`}>{project.classification}</p>
              </div>
              <button type="button" onClick={onClose} aria-label="Close project" className={`${navButton} shrink-0`}>
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body: re-keyed so the content fades when stepping between projects */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.2 }}
                className="p-5 sm:p-7 space-y-5"
              >
                {project.mission && (
                  <p className={`font-body text-sm text-text/85 dark:text-text-dark/85 font-medium leading-relaxed italic border-l-2 pl-3 ${tone.rule}`}>
                    {project.mission}
                  </p>
                )}

                <p className="font-body text-sm text-text/65 dark:text-text-dark/65 leading-relaxed">{project.overview}</p>

                {project.highlights && (
                  <div className="space-y-1.5 bg-background/60 dark:bg-background-dark/60 p-4 border border-border/60 dark:border-border-dark">
                    <span className="font-mono text-xs text-text/40 dark:text-text-dark/40 block tracking-wider">HOW IT IS BUILT</span>
                    <p className="font-body text-xs text-text/60 dark:text-text-dark/60 leading-relaxed">{project.highlights}</p>
                  </div>
                )}

                {project.impact && (
                  <div className="space-y-1.5">
                    <span className="font-mono text-xs text-text/40 dark:text-text-dark/40 block tracking-wider">IMPACT</span>
                    <p className={`font-body text-xs leading-relaxed font-semibold ${tone.text}`}>{project.impact}</p>
                  </div>
                )}

                <div className="space-y-2">
                  <span className="font-mono text-xs text-text/40 dark:text-text-dark/40 block tracking-wider">STACK</span>
                  <div className="flex flex-wrap gap-1.5">
                    {(project.badges || []).map((badge) => (
                      <span key={badge} className={`px-2 py-1 border text-xs font-mono tracking-widest font-bold ${tone.badge}`}>
                        {badge}
                      </span>
                    ))}
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 border border-border/70 dark:border-border-dark text-xs font-mono text-text/60 dark:text-text-dark/60">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Links */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-5 sm:p-7 border-t border-border dark:border-border-dark">
              <div className="flex flex-wrap gap-3">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 border border-border dark:border-border-dark text-xs font-mono uppercase tracking-widest text-text dark:text-text-dark hover:bg-text hover:text-background dark:hover:bg-text-dark dark:hover:text-background-dark transition-colors duration-300 flex items-center gap-2"
                  >
                    <Github className="w-3.5 h-3.5" /> Repository
                  </a>
                ) : (
                  <span className="px-4 py-2.5 border border-dashed border-border dark:border-border-dark text-xs font-mono uppercase tracking-widest text-text/45 dark:text-text-dark/45 flex items-center gap-2">
                    <Lock className="w-3.5 h-3.5" /> {project.linkNote || 'Private Repository'}
                  </span>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2.5 border text-xs font-mono uppercase tracking-widest transition-all flex items-center gap-2 ${tone.primary}`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Live Site
                  </a>
                )}
              </div>
              {canStep && (
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-text/40 dark:text-text-dark/40 tabular-nums">
                    {String(index + 1).padStart(2, '0')} / {String(list.length).padStart(2, '0')}
                  </span>
                  <button type="button" onClick={() => step(-1)} aria-label="Previous project" className={navButton}>
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button type="button" onClick={() => step(1)} aria-label="Next project" className={navButton}>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// 2. SYSTEM REGISTRY DATA GRID
export function ArchiveGrid({ search, filterStatus }) {
  const [selected, setSelected] = useState(null);
  const [expanded, setExpanded] = useState(false);
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

  // While searching or filtering, look through everything; otherwise show the highlights first.
  const browsing = !query && filterStatus === 'All';
  const visibleGroups = GROUPS.map((group) => {
    const matching = group.projects.filter(matches);
    const collapsed = browsing && !expanded && group.highlightIds;
    const visible = collapsed
      ? group.highlightIds.map((id) => matching.find((item) => item.id === id)).filter(Boolean)
      : matching;
    return { ...group, visible, hiddenCount: matching.length - visible.length, canCollapse: Boolean(browsing && group.highlightIds) };
  }).filter((group) => group.visible.length > 0);

  // The viewer steps through everything currently on screen, across groups.
  const visibleProjects = visibleGroups.flatMap((group) => group.visible);
  const accentOf = (project) =>
    project ? (GROUPS.find((group) => group.projects.includes(project)) || {}).accent : undefined;

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
                  <span className="font-mono text-xs text-text/40 dark:text-text-dark/40">
                    {group.visible.length} {group.visible.length === 1 ? 'PROJECT' : 'PROJECTS'} &middot; CLICK A CARD FOR DETAILS
                  </span>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  <AnimatePresence mode="popLayout">
                    {group.visible.map((project, idx) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        accent={group.accent}
                        entrance={group.entrance}
                        index={idx}
                        onOpen={setSelected}
                      />
                    ))}
                  </AnimatePresence>
                </div>

                {group.canCollapse && (group.hiddenCount > 0 || expanded) && (
                  <div className="flex justify-center pt-2">
                    <button
                      type="button"
                      onClick={() => setExpanded((value) => !value)}
                      aria-expanded={expanded}
                      className="cursor-target px-6 py-3 border border-border dark:border-border-dark font-mono text-xs uppercase tracking-wider text-text/70 dark:text-text-dark/70 hover:border-text dark:hover:border-text-dark hover:text-text dark:hover:text-text-dark transition-colors duration-300"
                    >
                      {expanded ? 'Show fewer' : `Show ${group.hiddenCount} more Web3 builds`}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <ProjectModal
        project={selected}
        accent={accentOf(selected)}
        list={visibleProjects.includes(selected) ? visibleProjects : selected ? [selected] : []}
        onChange={setSelected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}

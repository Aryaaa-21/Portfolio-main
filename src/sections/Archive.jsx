import React, { useState } from 'react';
import { Search, Filter, ExternalLink, X, Tag } from 'lucide-react';

export default function Archive() {
  const archiveData = [
    {
      year: '2026',
      title: 'StellarPay',
      category: 'Web3 / Fintech',
      tech: ['Rust', 'Soroban', 'React'],
      status: 'Mainnet Alpha',
      github: 'https://github.com/Aryaaa-21',
      description: 'Soroban smart contract payment rails designed for cross-border invoice settlements with sub-penny fees.',
    },
    {
      year: '2026',
      title: 'VEDAX',
      category: 'EdTech',
      tech: ['React', 'Tailwind', 'Canvas'],
      status: 'Completed',
      github: 'https://github.com/Aryaaa-21',
      description: 'A gamified computational engine teaching Vedic Mathematics sutras through interactive boards.',
    },
    {
      year: '2026',
      title: 'AnchorBridge',
      category: 'Web3 / DeFi',
      tech: ['Soroban', 'Solidity', 'Rust'],
      status: 'Completed',
      github: 'https://github.com/Aryaaa-21',
      description: 'A cross-chain asset wrapping escrow bridge built for token interoperability between EVM and Stellar ecosystem.',
    },
    {
      year: '2026',
      title: 'RakshaMarg',
      category: 'AI / Spatial safety',
      tech: ['Flask', 'TensorFlow', 'Maps API'],
      status: 'Beta',
      github: 'https://github.com/Aryaaa-21/RakshaMarg_app',
      description: 'An AI-driven emergency routing dashboard score-evaluating path segments on historical urban crime trends.',
    },
    {
      year: '2025',
      title: 'Swasthi Chatbot',
      category: 'AI / Healthcare',
      tech: ['JavaScript', 'NLP', 'HTML5'],
      status: 'Completed',
      github: 'https://github.com/Aryaaa-21/Swasthi',
      description: 'A multilingual health-query parsing chatbot supporting 12 Indian regional languages.',
    },
    {
      year: '2025',
      title: 'Spotify Clone',
      category: 'Frontend',
      tech: ['HTML', 'CSS', 'Vanilla JS'],
      status: 'Completed',
      github: 'https://github.com/Aryaaa-21/Spo-tea-fy',
      description: 'A pixel-perfect visual replicate of Spotify web application player UI designed to practice layouts.',
    },
    {
      year: '2025',
      title: 'Basic Portfolio',
      category: 'Frontend',
      tech: ['HTML', 'CSS', 'JS'],
      status: 'Legacy',
      github: 'https://github.com/Aryaaa-21/Basic-Porfolio',
      description: 'Arya\'s very first student landing page showcasing early responsive layout techniques.',
    },
    {
      year: '2025',
      title: 'Notification Bell',
      category: 'UI Components',
      tech: ['CSS', 'JS', 'HTML'],
      status: 'Prototype',
      github: 'https://github.com/Aryaaa-21/Notification-bell',
      description: 'Interactive and animated notification system panel prototype for real-time notification pushes.',
    }
  ];

  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const statuses = ['All', 'Completed', 'Mainnet Alpha', 'Beta', 'Prototype', 'Legacy'];

  const filtered = archiveData.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase()) ||
      item.tech.some(t => t.toLowerCase().includes(search.toLowerCase()));
    
    const matchesStatus = filterStatus === 'All' || item.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <section id="archive" className="py-32 bg-background dark:bg-background-dark border-b border-border/20 dark:border-border-dark/20 theme-transition">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* Title and Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div>
            <span className="font-body text-xs font-semibold tracking-[0.2em] text-text/50 dark:text-text-dark/50 block mb-4 uppercase">
              Full Project Registry
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-text dark:text-text-dark">
              PROJECT ARCHIVE
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center w-full lg:w-auto">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text/40 dark:text-text-dark/40" />
              <input
                type="text"
                placeholder="Search archive..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border dark:border-border-dark bg-surface dark:bg-surface-dark/50 font-body text-xs font-semibold text-text dark:text-text-dark focus:outline-none focus:border-text dark:focus:border-text-dark tracking-wide uppercase rounded-none transition-colors"
              />
            </div>

            {/* Status Dropdown */}
            <div className="relative">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full pl-4 pr-10 py-2 border border-border dark:border-border-dark bg-surface dark:bg-surface-dark text-text dark:text-text-dark font-body text-xs font-semibold uppercase tracking-wider rounded-none appearance-none focus:outline-none focus:border-text dark:focus:border-text-dark"
              >
                {statuses.map(st => (
                  <option key={st} value={st}>{st === 'All' ? 'STATUS: ALL' : st.toUpperCase()}</option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-text/40">
                <Filter className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>

        {/* Command Center Registry Table */}
        <div className="border border-border dark:border-border-dark overflow-x-auto">
          <div className="min-w-[700px] divide-y divide-border/20 dark:divide-border-dark/20 font-body text-xs">
            
            {/* Table Header */}
            <div className="grid grid-cols-12 p-4 bg-surface dark:bg-surface-dark/80 font-bold uppercase tracking-widest text-text/50 dark:text-text-dark/50 border-b border-border dark:border-border-dark">
              <div className="col-span-1">Year</div>
              <div className="col-span-3">Project Title</div>
              <div className="col-span-2">Category</div>
              <div className="col-span-3">Technologies</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-1 text-right">View</div>
            </div>

            {/* Table Rows */}
            {filtered.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedProject(item)}
                className="grid grid-cols-12 p-4 items-center hover:bg-surface/50 dark:hover:bg-surface-dark/50 transition-colors cursor-pointer group text-text/80 dark:text-text-dark/80 border-b border-border/10 dark:border-border-dark/10"
              >
                <div className="col-span-1 text-text/50 font-bold">{item.year}</div>
                <div className="col-span-3 font-display text-sm font-bold text-text dark:text-text-dark group-hover:underline">
                  {item.title}
                </div>
                <div className="col-span-2 uppercase font-semibold text-[10px] tracking-wide text-text/60 dark:text-text-dark/60">
                  {item.category}
                </div>
                <div className="col-span-3 flex flex-wrap gap-1">
                  {item.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 border border-border dark:border-border-dark text-[9px] tracking-wider font-semibold uppercase text-text/50 dark:text-text-dark/50"
                    >
                      {t}
                    </span>
                  ))}
                  {item.tech.length > 3 && (
                    <span className="text-[9px] text-text/30 self-center">+{item.tech.length - 3}</span>
                  )}
                </div>
                <div className="col-span-2">
                  <span className={`inline-block px-2 py-0.5 border text-[9px] font-bold uppercase tracking-wider ${
                    item.status === 'Mainnet Alpha' || item.status === 'Completed'
                      ? 'border-text/30 text-text dark:border-text-dark/30 dark:text-text-dark'
                      : 'border-border dark:border-border-dark text-text/40 dark:text-text-dark/40'
                  }`}>
                    {item.status}
                  </span>
                </div>
                <div className="col-span-1 text-right">
                  <span className="material-symbols-outlined text-text/40 group-hover:text-text dark:group-hover:text-text-dark group-hover:translate-x-1.5 transition-all text-sm">
                    arrow_forward
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-text/40 dark:text-text-dark/40 font-body text-xs uppercase tracking-wider">
            No projects found matching the criteria.
          </div>
        )}
      </div>

      {/* Drawer / Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[9999] bg-[#050505]/95 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg border border-border dark:border-border-dark bg-surface dark:bg-surface-dark p-6 sm:p-8 flex flex-col gap-6">
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 border border-border dark:border-border-dark text-text/60 dark:text-text-dark/60 hover:text-text dark:hover:text-text-dark transition-colors"
              aria-label="Close details"
            >
              <X className="w-4 h-4" />
            </button>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-body text-[9px] font-bold tracking-widest text-text/40 dark:text-text-dark/40 uppercase">
                  {selectedProject.category}
                </span>
                <span className="text-text/20">&bull;</span>
                <span className="font-body text-[9px] font-bold tracking-widest text-text/40 dark:text-text-dark/40 uppercase">
                  {selectedProject.year}
                </span>
              </div>
              <h3 className="font-display text-3xl font-bold text-text dark:text-text-dark">
                {selectedProject.title}
              </h3>
            </div>

            <div>
              <span className="font-body text-[10px] font-bold tracking-widest text-text/40 dark:text-text-dark/40 uppercase block mb-2">
                Project Summary
              </span>
              <p className="font-body text-xs text-text/70 dark:text-text-dark/70 leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            <div>
              <span className="font-body text-[10px] font-bold tracking-widest text-text/40 dark:text-text-dark/40 uppercase block mb-3">
                Tech Stack
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 border border-border dark:border-border-dark text-[9px] tracking-wider font-semibold uppercase text-text dark:text-text-dark"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-border/10 dark:border-border-dark/10">
              <div>
                <span className="font-body text-[9px] font-bold tracking-widest text-text/40 dark:text-text-dark/40 uppercase block mb-1">
                  Status
                </span>
                <span className="px-2 py-0.5 border border-border dark:border-border-dark text-[9px] font-bold uppercase tracking-wider text-text dark:text-text-dark">
                  {selectedProject.status}
                </span>
              </div>

              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-text dark:bg-text-dark text-background dark:text-background-dark font-body text-[10px] font-bold tracking-widest uppercase flex items-center gap-2 hover:bg-mono-42 dark:hover:bg-mono-161 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Repository
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

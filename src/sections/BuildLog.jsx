import React from 'react';
import { GitCommit, Calendar, Tag } from 'lucide-react';

export default function BuildLog() {
  const logs = [
    {
      date: "June 2026",
      version: "v1.4.0",
      title: "Entered Stellar Ecosystem & Built AnchorBridge",
      badge: "Soroban / Rust",
      changes: [
        "Architected multi-party escrow contracts on Soroban platform for cross-chain wrapping.",
        "Created smart contract unit tests in Rust, hitting 95% line coverage.",
        "Consolidated Level 1-3 requirements documentation for Stellar review validation."
      ]
    },
    {
      date: "May 2026",
      version: "v1.3.0",
      title: "Deployed StellarPay Core Infrastructure",
      badge: "Payment rails",
      changes: [
        "Wired React application directly to Soroban testnet endpoints via Stellar SDK.",
        "Implemented real-time transaction activity feed panel utilizing trustline channels.",
        "Integrated dark/light layout themes mapping pure monochromatic colors."
      ]
    },
    {
      date: "April 2026",
      version: "v1.2.0",
      title: "Created VEDAX Mathematics Solver Engine",
      badge: "EdTech",
      changes: [
        "Created an interactive SVG practice board teaching 16 Vedic Mathematics sutras.",
        "Configured levels progression backend scoring calculations speed metrics.",
        "Integrated Framer Motion transition reveals to enhance mental math gamification."
      ]
    },
    {
      date: "March 2026",
      version: "v1.1.0",
      title: "Started ChainRent Smart Contracts",
      badge: "Solidity / NextJS",
      changes: [
        "Wrote solidity security deposit escrows enforcing transparent release/penalty terms.",
        "Designed NextJS dashboard tracking active leases, deposits, and landlord listings.",
        "Configured Hardhat testing suites executing multi-sig arbitration routines."
      ]
    },
    {
      date: "January 2026",
      version: "v1.0.0",
      title: "Built RakshaMarg Public Safety MVP",
      badge: "AI / Navigation",
      changes: [
        "Deployed Flask routing API backend score-evaluating path segment safety coefficients.",
        "Configured TensorFlow neural net training on raw crime data log coordinates.",
        "Integrated React Native map client rendering police/hospital telemetry locations."
      ]
    }
  ];

  return (
    <section id="build-log" className="py-32 bg-surface dark:bg-surface-dark border-b border-border/20 dark:border-border-dark/20 theme-transition">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-left mb-20">
          <span className="font-body text-xs font-semibold tracking-[0.2em] text-text/50 dark:text-text-dark/50 block mb-4 uppercase">
            Product Chronology
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-text dark:text-text-dark mb-4">
            BUILD LOG
          </h2>
          <p className="font-body text-xs uppercase tracking-wider text-text/40 dark:text-text-dark/40">
            A chronological changelog documenting features shipped, repos refactored, and live deployments.
          </p>
        </div>

        {/* Changelog Timeline */}
        <div className="space-y-12 relative before:absolute before:left-3 sm:before:left-4 before:top-4 before:bottom-4 before:w-[1px] before:bg-border dark:before:bg-border-dark">
          {logs.map((log, idx) => (
            <div key={idx} className="relative pl-10 sm:pl-16 group">
              {/* Commit Dot */}
              <div className="absolute left-1.5 sm:left-2.5 top-2.5 w-3.5 h-3.5 bg-background dark:bg-background-dark border border-text dark:border-text-dark rounded-full z-10 flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                <div className="w-1.5 h-1.5 bg-text dark:bg-text-dark rounded-full" />
              </div>

              {/* Log Card */}
              <div className="p-6 sm:p-8 border border-border dark:border-border-dark bg-background dark:bg-background-dark/50 hover:border-text/30 dark:hover:border-text-dark/30 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-body text-[10px] font-bold px-2 py-0.5 border border-border dark:border-border-dark text-text/60 dark:text-text-dark/60 uppercase">
                      {log.version}
                    </span>
                    <span className="flex items-center gap-1 font-body text-[10px] font-semibold text-text/40 dark:text-text-dark/40 uppercase">
                      <Calendar className="w-3 h-3" />
                      {log.date}
                    </span>
                  </div>
                  
                  <span className="font-body text-[9px] font-bold px-2 py-0.5 bg-text dark:bg-text-dark text-background dark:text-background-dark uppercase tracking-wider">
                    {log.badge}
                  </span>
                </div>

                <h3 className="font-display text-lg sm:text-xl font-bold text-text dark:text-text-dark mb-4 group-hover:underline">
                  {log.title}
                </h3>

                <ul className="space-y-2.5 font-body text-xs text-text/75 dark:text-text-dark/75 list-disc pl-4 leading-relaxed">
                  {log.changes.map((change, cidx) => (
                    <li key={cidx} className="marker:text-text/30 dark:marker:text-text-dark/30">
                      {change}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { wins } from '../lib/site';

function Row({ hidden = false }) {
  return (
    <ul className="marquee-row flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {wins.map((win) => (
        <li key={win.id} className="flex items-center">
          <Link
            to={`/certificates?id=${win.id}`}
            tabIndex={hidden ? -1 : undefined}
            className="group flex items-baseline gap-3 px-8 py-5 whitespace-nowrap"
          >
            <span className="font-display text-xl sm:text-2xl font-bold italic text-text dark:text-text-dark">
              {win.place}
            </span>
            <span className="font-body text-sm text-text/55 dark:text-text-dark/55 group-hover:text-text dark:group-hover:text-text-dark transition-colors">
              {win.event}
            </span>
          </Link>
          <span aria-hidden="true" className="w-1.5 h-1.5 rotate-45 bg-text/30 dark:bg-text-dark/30" />
        </li>
      ))}
    </ul>
  );
}

// A slow band of hackathon results. Each one opens its certificate.
export default function Marquee() {
  return (
    <section aria-label="Hackathon results" className="marquee relative overflow-hidden border-y border-border dark:border-border-dark bg-surface dark:bg-surface-dark theme-transition">
      <div className="marquee-track flex w-max">
        <Row />
        <Row hidden />
      </div>
    </section>
  );
}

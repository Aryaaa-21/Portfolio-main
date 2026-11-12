import React from 'react';
import { ArrowUpRight, BadgeCheck, Eye, Trophy } from 'lucide-react';
import SpotlightCard from './motion/SpotlightCard';

// One certificate, shown as a framed, tilting card. The whole card is the button.
export default function CertificateCard({ cert, onOpen, compact = false }) {
  const number = String(cert.number).padStart(2, '0');

  return (
    <SpotlightCard
      as="button"
      type="button"
      tilt
      onClick={() => onOpen(cert)}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      aria-label={`View certificate: ${cert.title}`}
      className="group cursor-target w-full h-full text-left flex flex-col overflow-hidden border border-border dark:border-border-dark bg-surface dark:bg-surface-dark shadow-[0_1px_0_rgba(0,0,0,0.04)] hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.55)] transition-shadow duration-500"
    >
      {/* Certificate image */}
      <div className="relative w-full aspect-[7/5] overflow-hidden bg-mono-11 border-b border-border dark:border-border-dark">
        <img
          src={cert.thumbnail}
          alt=""
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="cert-shine" />

        <span className="absolute top-3 left-3 px-2 py-1 bg-black/70 backdrop-blur-sm text-white font-body text-xs font-bold tracking-[0.2em]">
          N&deg; {number}
        </span>

        {cert.award && (
          <span className="absolute top-3 right-3 px-2 py-1 bg-white text-black font-body text-xs font-bold tracking-[0.18em] uppercase flex items-center gap-1.5">
            <Trophy className="w-3 h-3" />
            Award
          </span>
        )}

        <span className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white text-black flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          <Eye className="w-4 h-4" />
        </span>
      </div>

      {/* Details */}
      <div className={`flex-1 flex flex-col ${compact ? 'p-4 gap-2' : 'p-5 gap-3'}`}>
        <div className="flex items-center justify-between gap-3 font-body text-xs font-bold tracking-[0.2em] uppercase text-text/45 dark:text-text-dark/45">
          <span>{cert.category}</span>
          <span>{cert.year}</span>
        </div>

        <h3
          className={`font-display font-bold leading-snug text-text dark:text-text-dark line-clamp-2 ${
            compact ? 'text-base' : 'text-lg'
          }`}
        >
          {cert.title}
        </h3>

        <div className="mt-auto pt-3 border-t border-border/70 dark:border-border-dark flex items-center justify-between gap-3">
          <span className="font-body text-xs text-text/55 dark:text-text-dark/55 truncate flex items-center gap-1.5 min-w-0">
            {cert.verificationLink && <BadgeCheck className="w-3.5 h-3.5 shrink-0 text-emerald-500" aria-label="Verifiable with issuer" />}
            <span className="truncate">{cert.issuer}</span>
          </span>
          <ArrowUpRight className="w-4 h-4 shrink-0 text-text/40 dark:text-text-dark/40 transition-all duration-300 group-hover:text-text dark:group-hover:text-text-dark group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </SpotlightCard>
  );
}

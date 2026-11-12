import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Download, ExternalLink, Share2, Trophy, X } from 'lucide-react';

// Full-screen certificate viewer. `list` is the set being browsed, so the
// arrows (and the left/right keys) step through whatever filter is active.
export default function CertificateModal({ cert, list, onChange, onClose }) {
  const [copied, setCopied] = useState(false);
  const index = cert ? list.findIndex((item) => item.id === cert.id) : -1;
  const canStep = list.length > 1 && index !== -1;

  const step = (direction) => {
    if (!canStep) return;
    onChange(list[(index + direction + list.length) % list.length]);
  };

  useEffect(() => {
    if (!cert) return undefined;
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

  useEffect(() => setCopied(false), [cert?.id]);

  const share = () => {
    const url = `${window.location.origin}${window.location.pathname}#/certificates?id=${cert.id}`;
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const arrowClass =
    'cursor-target absolute top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/70 text-white border border-white/20 hover:bg-white hover:text-black transition-colors duration-300';

  return (
    <AnimatePresence>
      {cert && (
        <motion.div
          key="certificate-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[10000] bg-[#050505]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={cert.title}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-4xl max-h-full overflow-y-auto border border-border dark:border-border-dark bg-surface dark:bg-surface-dark"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-6 p-5 sm:p-7 border-b border-border dark:border-border-dark">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-3 font-body text-[9px] font-bold tracking-[0.2em] uppercase text-text/45 dark:text-text-dark/45">
                  <span>N&deg; {String(cert.number).padStart(2, '0')}</span>
                  <span className="w-1 h-1 rounded-full bg-current" />
                  <span>{cert.category}</span>
                  {cert.award && (
                    <span className="px-2 py-0.5 bg-text text-background dark:bg-text-dark dark:text-background-dark flex items-center gap-1.5">
                      <Trophy className="w-3 h-3" /> Award
                    </span>
                  )}
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-text dark:text-text-dark mt-2 leading-snug">
                  {cert.title}
                </h3>
                <p className="font-body text-xs text-text/55 dark:text-text-dark/55 mt-1.5">
                  Issued by {cert.issuer} &bull; {cert.date}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close certificate"
                className="cursor-target shrink-0 p-2 border border-border dark:border-border-dark text-text/60 dark:text-text-dark/60 hover:bg-text hover:text-background dark:hover:bg-text-dark dark:hover:text-background-dark transition-colors duration-300"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Image */}
            <div className="relative bg-mono-11 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                <motion.img
                  key={cert.id}
                  src={cert.thumbnail}
                  alt={cert.title}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="w-full max-h-[58vh] object-contain"
                />
              </AnimatePresence>
              {canStep && (
                <>
                  <button type="button" onClick={() => step(-1)} aria-label="Previous certificate" className={`${arrowClass} left-3`}>
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button type="button" onClick={() => step(1)} aria-label="Next certificate" className={`${arrowClass} right-3`}>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-5 sm:p-7 border-t border-border dark:border-border-dark">
              <div className="flex flex-wrap gap-3">
                <a
                  href={cert.verificationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-text dark:bg-text-dark text-background dark:text-background-dark font-body text-[10px] font-bold tracking-widest uppercase flex items-center gap-2 hover:opacity-85 transition-opacity"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Verify
                </a>
                <a
                  href={cert.downloadLink}
                  download
                  className="px-4 py-2.5 border border-border dark:border-border-dark text-text dark:text-text-dark font-body text-[10px] font-bold tracking-widest uppercase flex items-center gap-2 hover:bg-text hover:text-background dark:hover:bg-text-dark dark:hover:text-background-dark transition-colors duration-300"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download
                </a>
                <button
                  type="button"
                  onClick={share}
                  className="px-4 py-2.5 border border-border dark:border-border-dark text-text/70 dark:text-text-dark/70 hover:text-text dark:hover:text-text-dark font-body text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  {copied ? 'Link Copied' : 'Share Link'}
                </button>
              </div>
              {canStep && (
                <span className="font-body text-[10px] font-bold tracking-[0.2em] text-text/40 dark:text-text-dark/40 tabular-nums">
                  {String(index + 1).padStart(2, '0')} / {String(list.length).padStart(2, '0')}
                </span>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

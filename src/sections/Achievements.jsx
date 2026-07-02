import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ExternalLink, Download, X } from 'lucide-react';
import { certificates } from '../data/certificates';

export default function Achievements() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [selectedCert, setSelectedCert] = useState(null);

  const categories = ['All', 'Hackathons', 'Web3', 'Development', 'Academic', 'Cloud'];

  const filtered = certificates.filter((cert) => {
    const matchesSearch =
      cert.title.toLowerCase().includes(search.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || cert.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="credentials" className="py-32 bg-surface dark:bg-surface-dark border-b border-border/20 dark:border-border-dark/20 theme-transition">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Header and Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <span className="font-body text-xs font-semibold tracking-[0.2em] text-text/50 dark:text-text-dark/50 block mb-4 uppercase">
              RECOGNITIONS & CERTIFICATIONS
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-text dark:text-text-dark">
              CREDENTIAL LEDGER
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center w-full lg:w-auto">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text/40 dark:text-text-dark/40" />
              <input
                type="text"
                placeholder="Search credentials..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border dark:border-border-dark bg-background dark:bg-background-dark/50 font-body text-xs font-semibold text-text dark:text-text-dark focus:outline-none focus:border-text dark:focus:border-text-dark tracking-wide uppercase rounded-none transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Category Pill Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((catName) => {
            const isActive = category === catName;
            return (
              <button
                key={catName}
                onClick={() => setCategory(catName)}
                className={`px-4 py-1.5 border text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                  isActive
                    ? 'bg-text border-text text-background dark:bg-text-dark dark:border-text-dark dark:text-background-dark'
                    : 'border-border dark:border-border-dark text-text/60 dark:text-text-dark/60 hover:text-text dark:hover:text-text-dark hover:border-text dark:hover:border-text-dark'
                }`}
              >
                {catName}
              </button>
            );
          })}
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((cert) => (
            <motion.div
              layout
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="glass-card group cursor-pointer border border-border dark:border-border-dark flex flex-col justify-between overflow-hidden hover:border-text/40 dark:hover:border-text-dark/40 transition-colors duration-300"
            >
              {/* Image Preview Window */}
              <div className="aspect-video relative bg-[#111] overflow-hidden border-b border-border dark:border-border-dark">
                <img
                  src={cert.thumbnail}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-all duration-700"
                />
              </div>

              {/* Text Meta info */}
              <div className="p-6">
                <span className="font-body text-[9px] font-bold tracking-widest text-text/40 dark:text-text-dark/40 uppercase block mb-1">
                  {cert.category}
                </span>
                <h4 className="font-display text-lg font-bold text-text dark:text-text-dark group-hover:text-mono-255 dark:group-hover:text-mono-255 transition-colors mb-2 line-clamp-1">
                  {cert.title}
                </h4>
                <div className="flex justify-between items-center text-[11px] font-body text-text/50 dark:text-text-dark/50">
                  <span>{cert.issuer}</span>
                  <span>{cert.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-text/40 dark:text-text-dark/40 font-body text-xs uppercase tracking-wider">
            No matching credentials found in the archive.
          </div>
        )}
      </div>

      {/* Premium Modal Backdrop */}
      {selectedCert && (
        <div className="fixed inset-0 z-[9999] bg-[#050505]/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl border border-border dark:border-border-dark bg-surface dark:bg-surface-dark p-6 sm:p-8 flex flex-col gap-6">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-2 border border-border dark:border-border-dark text-text/60 dark:text-text-dark/60 hover:text-text dark:hover:text-text-dark transition-colors"
              aria-label="Close Preview"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Certificate Details */}
            <div>
              <span className="font-body text-[9px] font-bold tracking-widest text-text/40 dark:text-text-dark/40 uppercase">
                {selectedCert.category}
              </span>
              <h3 className="font-display text-2xl font-bold text-text dark:text-text-dark mt-1">
                {selectedCert.title}
              </h3>
              <p className="font-body text-xs text-text/50 dark:text-text-dark/50 mt-1">
                Issued by {selectedCert.issuer} &bull; {selectedCert.date}
              </p>
            </div>

            {/* Main Preview Image */}
            <div className="w-full aspect-video border border-border dark:border-border-dark overflow-hidden bg-[#111] flex items-center justify-center">
              <img
                src={selectedCert.thumbnail}
                alt={selectedCert.title}
                className="max-h-full object-contain"
              />
            </div>

            {/* Action buttons */}
            <div className="flex gap-4 items-center">
              <a
                href={selectedCert.verificationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-text dark:bg-text-dark text-background dark:text-background-dark font-body text-[10px] font-bold tracking-widest uppercase flex items-center gap-2 hover:bg-mono-42 dark:hover:bg-mono-161 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Verify Link
              </a>
              <a
                href={selectedCert.downloadLink}
                download
                className="px-4 py-2 border border-border dark:border-border-dark text-text dark:text-text-dark font-body text-[10px] font-bold tracking-widest uppercase flex items-center gap-2 hover:bg-text hover:text-background dark:hover:bg-text-dark dark:hover:text-background-dark transition-all duration-300"
              >
                <Download className="w-3.5 h-3.5" />
                Download
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

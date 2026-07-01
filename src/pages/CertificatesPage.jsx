import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ExternalLink, Download, Share2, X, Trophy, Award, Landmark, Eye } from 'lucide-react';
import { certificates } from '../data/certificates';

export default function CertificatesPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [selectedCert, setSelectedCert] = useState(null);
  const [shareSuccess, setShareSuccess] = useState(false);

  const categories = ['All', 'Hackathons', 'Web3', 'Development', 'Academic', 'Cloud', 'Leadership', 'Volunteering'];

  const stats = [
    { label: "Certificates Earned", value: "25+", icon: Award },
    { label: "Hackathons Won", value: "6", icon: Trophy },
    { label: "Prize Money", value: "₹15K+", icon: Landmark },
    { label: "Events Attended", value: "12+", icon: Filter }
  ];

  const filtered = certificates.filter((cert) => {
    const query = search.toLowerCase();
    const matchesSearch =
      cert.title.toLowerCase().includes(query) ||
      cert.issuer.toLowerCase().includes(query) ||
      cert.year.includes(query) ||
      cert.category.toLowerCase().includes(query);
    
    const matchesCategory = category === 'All' || cert.category === category;
    return matchesSearch && matchesCategory;
  });

  const handleShare = (cert) => {
    const url = `${window.location.origin}/#/certificates?id=${cert.id}`;
    navigator.clipboard.writeText(url).then(() => {
      setShareSuccess(true);
      setTimeout(() => setShareSuccess(false), 2000);
    });
  };

  return (
    <div className="w-full min-h-screen bg-background dark:bg-background-dark pt-32 pb-24 theme-transition">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* Page Hero */}
        <div className="mb-16">
          <span className="font-body text-xs font-semibold tracking-[0.2em] text-text/50 dark:text-text-dark/50 block mb-4 uppercase">
            Milestone Vault
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-text dark:text-text-dark mb-4">
            CERTIFICATE VAULT
          </h1>
          <p className="font-body text-xs sm:text-sm uppercase tracking-widest text-text/60 dark:text-text-dark/60">
            Every milestone tells a story.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="border border-border dark:border-border-dark bg-surface dark:bg-surface-dark p-6 flex items-center justify-between">
                <div>
                  <span className="font-body text-[10px] font-bold tracking-widest text-text/40 dark:text-text-dark/40 uppercase block mb-1">
                    {stat.label}
                  </span>
                  <span className="font-display text-2xl sm:text-3xl font-bold text-text dark:text-text-dark">
                    {stat.value}
                  </span>
                </div>
                <Icon className="w-8 h-8 text-text/25 dark:text-text-dark/25" />
              </div>
            );
          })}
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
          {/* Search bar */}
          <div className="relative w-full lg:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text/40 dark:text-text-dark/40" />
            <input
              type="text"
              placeholder="Search by Title, Issuer, Year, Category..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-border dark:border-border-dark bg-surface dark:bg-surface-dark/50 font-body text-xs font-semibold text-text dark:text-text-dark focus:outline-none focus:border-text dark:focus:border-text-dark tracking-wide uppercase rounded-none transition-colors"
            />
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = category === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-3 py-1.5 border text-[9px] font-bold uppercase tracking-widest transition-all duration-300 ${
                    isActive
                      ? 'bg-text border-text text-background dark:bg-text-dark dark:border-text-dark dark:text-background-dark'
                      : 'border-border dark:border-border-dark text-text/60 dark:text-text-dark/60 hover:text-text dark:hover:text-text-dark'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((cert) => (
            <motion.div
              layout
              key={cert.id}
              className="glass-card group border border-border dark:border-border-dark flex flex-col justify-between overflow-hidden"
            >
              {/* Thumbnail Container */}
              <div className="aspect-video relative bg-[#111] overflow-hidden border-b border-border dark:border-border-dark">
                <img
                  src={cert.thumbnail}
                  alt={cert.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700"
                />
              </div>

              {/* Card Meta details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-body text-[8px] font-bold tracking-widest text-text/40 dark:text-text-dark/40 uppercase block mb-1">
                    {cert.category}
                  </span>
                  <h3 className="font-display text-lg font-bold text-text dark:text-text-dark mb-4 group-hover:underline">
                    {cert.title}
                  </h3>
                  <div className="font-body text-xs text-text/50 dark:text-text-dark/50 flex justify-between mb-6">
                    <span>{cert.issuer}</span>
                    <span>{cert.date}</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedCert(cert)}
                  className="w-full py-2.5 border border-text/40 dark:border-text-dark/40 text-text/80 dark:text-text-dark/80 group-hover:bg-text group-hover:border-text group-hover:text-background dark:group-hover:bg-text-dark dark:group-hover:border-text-dark dark:group-hover:text-background-dark font-body text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <Eye className="w-3.5 h-3.5" />
                  View Certificate
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-text/40 dark:text-text-dark/40 font-body text-xs uppercase tracking-wider">
            No matching credentials located.
          </div>
        )}
      </div>

      {/* Modal View details */}
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
            <div className="flex flex-wrap gap-4 items-center justify-between">
              <div className="flex gap-4">
                <a
                  href={selectedCert.verificationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-text dark:bg-text-dark text-background dark:text-background-dark font-body text-[10px] font-bold tracking-widest uppercase flex items-center gap-2 hover:bg-mono-42 dark:hover:bg-mono-161 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Verification Link
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

              <button
                onClick={() => handleShare(selectedCert)}
                className="px-4 py-2 border border-border dark:border-border-dark text-text/60 dark:text-text-dark/60 hover:text-text dark:hover:text-text-dark font-body text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 transition-all"
              >
                <Share2 className="w-3.5 h-3.5" />
                {shareSuccess ? 'Link Copied!' : 'Share Link'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

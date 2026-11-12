import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { Award, BadgeCheck, CalendarCheck, Search, Trophy, X } from 'lucide-react';
import { certificates, certificateCategories } from '../data/certificates';
import CertificateCard from '../components/CertificateCard';
import CertificateModal from '../components/CertificateModal';
import CountUp from '../components/motion/CountUp';
import Reveal, { RevealText } from '../components/motion/Reveal';
import SpotlightCard from '../components/motion/SpotlightCard';
import { trackEvent } from '../lib/analytics';

const EASE = [0.22, 1, 0.36, 1];

const inCategory = (cert, category) =>
  category === 'All' || (category === 'Awards' ? cert.award : cert.category === category);

export default function CertificatesPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [searchParams, setSearchParams] = useSearchParams();

  // The open certificate lives in the URL (?id=cert-7) so shared links open it directly.
  const selectedCert = certificates.find((cert) => cert.id === searchParams.get('id')) || null;
  const openCert = (cert) => {
    trackEvent('view_certificate', { certificate_id: cert.id, certificate_title: cert.title });
    setSearchParams({ id: cert.id }, { replace: true });
  };
  const closeCert = () => setSearchParams({}, { replace: true });

  // Every number here is counted from the certificates below, so each one can be checked on this page.
  const stats = [
    { label: 'Certificates', value: String(certificates.length), icon: Award, filter: 'All' },
    { label: 'Award Certificates', value: String(certificates.filter((cert) => cert.award).length), icon: Trophy, filter: 'Awards' },
    { label: 'Hackathon Certificates', value: String(certificates.filter((cert) => cert.category === 'Hackathons').length), icon: CalendarCheck, filter: 'Hackathons' },
    { label: 'Verifiable With Issuer', value: String(certificates.filter((cert) => cert.verificationLink).length), icon: BadgeCheck, filter: null },
  ];

  const counts = useMemo(
    () =>
      Object.fromEntries(
        certificateCategories.map((name) => [name, certificates.filter((cert) => inCategory(cert, name)).length])
      ),
    []
  );

  const query = search.trim().toLowerCase();
  const filtered = certificates.filter((cert) => {
    const matchesSearch =
      !query ||
      [cert.title, cert.issuer, cert.year, cert.category, cert.date].some((field) =>
        field.toLowerCase().includes(query)
      );
    return matchesSearch && inCategory(cert, category);
  });

  return (
    <div className="w-full min-h-screen bg-background dark:bg-background-dark pt-32 pb-24 theme-transition">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Page Hero */}
        <div className="mb-16">
          <Reveal y={12}>
            <span className="font-body text-xs font-semibold tracking-[0.2em] text-text/50 dark:text-text-dark/50 block mb-4 uppercase">
              Recognitions &amp; Certifications
            </span>
          </Reveal>
          <RevealText
            as="h1"
            text="CREDENTIAL LEDGER"
            className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-text dark:text-text-dark mb-4"
          />
          <Reveal delay={0.25} y={12}>
            <p className="font-body text-xs sm:text-sm uppercase tracking-widest text-text/60 dark:text-text-dark/60">
              Every milestone tells a story.
            </p>
          </Reveal>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <Reveal key={stat.label} delay={idx * 0.08}>
                <SpotlightCard
                  as={stat.filter ? 'button' : 'div'}
                  {...(stat.filter ? { type: 'button', onClick: () => setCategory(stat.filter), 'aria-label': `Show ${stat.label}` } : {})}
                  className="cursor-target w-full h-full text-left border border-border dark:border-border-dark bg-surface dark:bg-surface-dark p-5 sm:p-6 flex items-center justify-between gap-4"
                >
                  <div>
                    <span className="font-body text-xs font-bold tracking-widest text-text/40 dark:text-text-dark/40 uppercase block mb-1">
                      {stat.label}
                    </span>
                    <CountUp
                      value={stat.value}
                      className="font-display text-2xl sm:text-4xl font-bold text-text dark:text-text-dark"
                    />
                  </div>
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 text-text/25 dark:text-text-dark/25" />
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>

        {/* Filters and Controls */}
        <Reveal className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6">
          <div className="relative w-full lg:max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text/40 dark:text-text-dark/40" />
            <input
              type="text"
              placeholder="Search title, issuer, year..."
              aria-label="Search certificates"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 border border-border dark:border-border-dark bg-surface dark:bg-surface-dark/50 font-body text-xs font-semibold text-text dark:text-text-dark placeholder:text-text/35 dark:placeholder:text-text-dark/35 focus:outline-none focus:border-text dark:focus:border-text-dark tracking-wide rounded-none transition-colors"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                aria-label="Clear search"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-text/40 dark:text-text-dark/40 hover:text-text dark:hover:text-text-dark"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <LayoutGroup id="certificate-filters">
            <div className="flex flex-wrap gap-2">
              {certificateCategories.map((name) => {
                const isActive = category === name;
                return (
                  <button
                    key={name}
                    type="button"
                    onClick={() => setCategory(name)}
                    aria-pressed={isActive}
                    className={`relative px-3 py-1.5 border text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
                      isActive
                        ? 'border-text dark:border-text-dark text-background dark:text-background-dark'
                        : 'border-border dark:border-border-dark text-text/60 dark:text-text-dark/60 hover:text-text dark:hover:text-text-dark hover:border-text/50 dark:hover:border-text-dark/50'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="certificate-filter-active"
                        className="absolute inset-0 bg-text dark:bg-text-dark"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">
                      {name}
                      <span className="ml-1.5 opacity-60 tabular-nums">{counts[name]}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </LayoutGroup>
        </Reveal>

        <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-text/40 dark:text-text-dark/40 mb-8" aria-live="polite">
          Showing {filtered.length} of {certificates.length}
        </p>

        {/* Certificates Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((cert, idx) => (
              <motion.div
                layout
                key={cert.id}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '0px 0px -40px 0px' }}
                exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.2 } }}
                transition={{ duration: 0.6, ease: EASE, delay: (idx % 3) * 0.07 }}
              >
                <CertificateCard cert={cert} onOpen={openCert} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 border border-dashed border-border dark:border-border-dark"
          >
            <p className="font-body text-xs uppercase tracking-wider text-text/50 dark:text-text-dark/50 mb-4">
              No certificates match that search.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch('');
                setCategory('All');
              }}
              className="px-4 py-2 border border-text dark:border-text-dark font-body text-xs font-bold uppercase tracking-widest hover:bg-text hover:text-background dark:hover:bg-text-dark dark:hover:text-background-dark transition-colors duration-300"
            >
              Show all certificates
            </button>
          </motion.div>
        )}
      </div>

      <CertificateModal
        cert={selectedCert}
        list={filtered.some((cert) => cert.id === selectedCert?.id) ? filtered : certificates}
        onChange={openCert}
        onClose={closeCert}
      />
    </div>
  );
}

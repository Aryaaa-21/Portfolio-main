import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Award } from 'lucide-react';
import Hero from '../sections/Hero';
import Identity from '../sections/Identity';
import Skills from '../sections/Skills';
import Impact from '../sections/Impact';
import { certificates } from '../data/certificates';

export default function Home() {
  // Extract top 5 certificates for showcase preview
  const topCertificates = certificates.slice(0, 5);

  return (
    <div className="w-full flex flex-col">
      {/* Hero section */}
      <Hero />

      {/* Identity section */}
      <Identity />

      {/* Tech Ecosystem section */}
      <Skills />

      {/* Top Certificates Showcase Section */}
      <section className="py-32 bg-background dark:bg-background-dark border-b border-border/20 dark:border-border-dark/20 theme-transition">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <span className="font-body text-xs font-semibold tracking-[0.2em] text-text/50 dark:text-text-dark/50 block mb-4 uppercase">
                Featured Recognitions
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-text dark:text-text-dark">
                BEST CERTIFICATES
              </h2>
            </div>
            <Link
              to="/certificates"
              className="group inline-flex items-center gap-2 font-body text-xs font-bold tracking-widest uppercase text-text dark:text-text-dark hover:opacity-80 transition-opacity"
            >
              View All Certificates
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Top 5 Certificates Flex Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {topCertificates.map((cert) => (
              <div
                key={cert.id}
                className="glass-card border border-border dark:border-border-dark p-6 flex flex-col justify-between hover:border-text/30 dark:hover:border-text-dark/30 transition-all duration-300 group"
              >
                <div className="aspect-video mb-4 overflow-hidden bg-surface dark:bg-surface-dark border border-border dark:border-border-dark">
                  <img
                    src={cert.thumbnail}
                    alt={cert.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-750"
                  />
                </div>
                <div>
                  <span className="font-body text-[8px] font-bold tracking-widest text-text/40 dark:text-text-dark/40 uppercase block mb-1">
                    {cert.category}
                  </span>
                  <h4 className="font-display text-sm font-bold text-text dark:text-text-dark line-clamp-1 mb-2">
                    {cert.title}
                  </h4>
                  <div className="font-body text-[10px] text-text/50 dark:text-text-dark/50 flex justify-between">
                    <span>{cert.issuer}</span>
                    <span>{cert.date.split(' ')[1]}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact stats section */}
      <Impact />
    </div>
  );
}

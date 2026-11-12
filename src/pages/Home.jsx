import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Impact from '../sections/Impact';
import { certificates, featuredCertificates } from '../data/certificates';
import CertificateCard from '../components/CertificateCard';
import Reveal, { RevealText } from '../components/motion/Reveal';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col">
      {/* Hero section */}
      <Hero />

      {/* About section */}
      <About />

      {/* Tech Ecosystem section */}
      <Skills />

      {/* Top Certificates Showcase Section */}
      <section className="py-32 bg-background dark:bg-background-dark border-b border-border/20 dark:border-border-dark/20 theme-transition">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <Reveal y={12}>
                <span className="font-body text-xs font-semibold tracking-[0.2em] text-text/50 dark:text-text-dark/50 block mb-4 uppercase">
                  Featured Recognitions
                </span>
              </Reveal>
              <RevealText
                text="BEST CERTIFICATES"
                className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-text dark:text-text-dark"
              />
            </div>
            <Reveal delay={0.2} y={12}>
              <Link
                to="/certificates"
                className="group inline-flex items-center gap-2 font-body text-xs font-bold tracking-widest uppercase text-text dark:text-text-dark hover:opacity-80 transition-opacity"
              >
                View All {certificates.length} Certificates
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCertificates.map((cert, idx) => (
              <Reveal key={cert.id} delay={idx * 0.1} className="h-full">
                <CertificateCard
                  cert={cert}
                  compact
                  onOpen={(selected) => navigate(`/certificates?id=${selected.id}`)}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact stats section */}
      <Impact />
    </div>
  );
}

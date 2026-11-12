import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Impact from '../sections/Impact';
import SelectedWork from '../sections/SelectedWork';
import Marquee from '../components/Marquee';
import { TOTAL_PROJECTS } from '../lib/site';
import { certificates, featuredCertificates } from '../data/certificates';
import CertificateCard from '../components/CertificateCard';
import Reveal, { RevealText } from '../components/motion/Reveal';

// The skills section is a 3D scene (three.js, about 1 MB). It is fetched only
// when the reader scrolls near it, so it never delays the first screen.
const Skills = lazy(() => import('../sections/Skills'));

function DeferredSkills() {
  const ref = useRef(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setNear(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          observer.disconnect();
        }
      },
      { rootMargin: '800px 0px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const placeholder = <div className="min-h-screen bg-background dark:bg-background-dark" aria-hidden="true" />;
  return <div ref={ref}>{near ? <Suspense fallback={placeholder}><Skills /></Suspense> : placeholder}</div>;
}

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col">
      {/* Hero section */}
      <Hero />

      {/* Hackathon results */}
      <Marquee />

      {/* Main projects */}
      <SelectedWork total={TOTAL_PROJECTS} />

      {/* About section */}
      <About />

      {/* Tech Ecosystem section */}
      <DeferredSkills />

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

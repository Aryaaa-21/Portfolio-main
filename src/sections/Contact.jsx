import React, { useState } from 'react';
import { ArrowUp, ArrowUpRight, Check, Copy } from 'lucide-react';
import Magnetic from '../components/motion/Magnetic';
import { RevealText } from '../components/motion/Reveal';
import useKolkataTime from '../components/motion/useKolkataTime';
import { EMAIL, GITHUB_URL, LINKEDIN_URL, RESUME_URL } from '../lib/site';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const time = useKolkataTime();

  const links = [
    { label: 'GitHub', href: GITHUB_URL },
    { label: 'LinkedIn', href: LINKEDIN_URL },
    { label: 'Resume', href: RESUME_URL, download: 'Arya_Bhagat_Resume.pdf' },
  ];

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <footer id="contact" className="relative z-10 pt-24 lg:pt-36 pb-8 bg-background dark:bg-background-dark border-t border-border dark:border-border-dark theme-transition">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <RevealText
          text="LET'S BUILD SOMETHING MEANINGFUL"
          className="font-display font-bold tracking-tight leading-[0.95] text-text dark:text-text-dark text-[11vw] sm:text-7xl lg:text-8xl max-w-5xl"
        />

        <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <p className="font-body text-lg text-text/70 dark:text-text-dark/70 max-w-md mb-6">
              I'm looking for a software engineering internship. If you think I'd be useful on your team, write to me.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Magnetic strength={0.2}>
                <a
                  href={`mailto:${EMAIL}`}
                  className="group inline-flex items-center gap-3 px-6 py-4 bg-text text-background dark:bg-text-dark dark:text-background-dark font-body text-base sm:text-lg font-semibold break-all"
                >
                  {EMAIL}
                  <ArrowUpRight className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:rotate-45" />
                </a>
              </Magnetic>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-5 py-4 border border-border dark:border-border-dark hover:border-text dark:hover:border-text-dark font-body text-sm font-semibold text-text dark:text-text-dark transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                <span aria-live="polite">{copied ? 'Copied' : 'Copy address'}</span>
              </button>
            </div>
          </div>

          <ul className="lg:col-span-5 flex flex-wrap lg:justify-end gap-x-8 gap-y-3">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  download={link.download}
                  target={link.download ? undefined : '_blank'}
                  rel={link.download ? undefined : 'noopener noreferrer'}
                  className="group inline-flex items-center gap-1.5 font-display text-2xl font-bold text-text/70 dark:text-text-dark/70 hover:text-text dark:hover:text-text-dark transition-colors"
                >
                  {link.label}
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 lg:mt-24 pt-6 border-t border-border dark:border-border-dark flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-body text-sm text-text/50 dark:text-text-dark/50">
          <span>&copy; {new Date().getFullYear()} Arya Bhagat</span>
          <span className="tabular-nums">Kolkata, India, {time} IST</span>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-1.5 hover:text-text dark:hover:text-text-dark transition-colors"
          >
            Back to top
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

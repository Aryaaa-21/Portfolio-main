import React from 'react';
import { Github, Linkedin, Mail, FileText, ArrowUp } from 'lucide-react';

export default function Contact() {
  const socialLinks = [
    { label: 'GitHub', icon: Github, href: 'https://github.com/Aryaaa-21' },
    { label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/arya-bhagat-2102np' },
    { label: 'Email', icon: Mail, href: 'mailto:aryabhagat2102@gmail.com' },
    { label: 'Resume', icon: FileText, href: '/images/certs/blank.png', download: true },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-24 bg-background dark:bg-background-dark border-t border-border/20 dark:border-border-dark/20 theme-transition">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col items-center justify-center text-center">
        
        <span className="font-body text-xs font-semibold tracking-[0.2em] text-text/40 dark:text-text-dark/40 uppercase mb-4">
          Open For Opportunities
        </span>

        <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-text dark:text-text-dark mb-12 max-w-2xl leading-tight">
          LET'S BUILD SOMETHING MEANINGFUL
        </h2>

        {/* Link clusters */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                download={link.download}
                target={link.download ? undefined : "_blank"}
                rel={link.download ? undefined : "noopener noreferrer"}
                className="px-6 py-3 border border-border dark:border-border-dark bg-surface dark:bg-surface-dark hover:bg-text hover:text-background dark:hover:bg-text-dark dark:hover:text-background-dark font-body text-xs font-semibold tracking-wider uppercase flex items-center gap-2 transition-all duration-300"
              >
                <Icon className="w-4 h-4" />
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Footer Bottom elements */}
        <div className="w-full pt-8 border-t border-border/10 dark:border-border-dark/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-[10px] font-body text-text/40 dark:text-text-dark/40 uppercase tracking-widest">
          <div>
            &copy; {new Date().getFullYear()} Arya Bhagat. Digital Identity Archive.
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-text dark:hover:text-text-dark transition-colors duration-300"
          >
            Back to Top
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

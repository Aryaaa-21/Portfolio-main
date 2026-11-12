import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Award, Copy, CornerDownLeft, Download, ExternalLink, FolderKanban, Github, Home, Linkedin, Mail, Milestone, Search, SunMoon,
} from 'lucide-react';
import { featured } from '../data/featured';
import { EMAIL, GITHUB_URL, LINKEDIN_URL, RESUME_URL } from '../lib/site';

// A keyboard-first menu (Ctrl+K or Cmd+K) for getting anywhere on the site.
export default function CommandMenu({ toggleTheme }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [index, setIndex] = useState(0);
  const [notice, setNotice] = useState('');
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const items = useMemo(() => {
    const go = (path) => () => navigate(path);
    const visit = (url) => () => window.open(url, '_blank', 'noopener,noreferrer');
    return [
      { group: 'Pages', label: 'Home', icon: Home, run: go('/') },
      { group: 'Pages', label: 'Projects', icon: FolderKanban, run: go('/projects') },
      { group: 'Pages', label: 'Journey', icon: Milestone, run: go('/journey') },
      { group: 'Pages', label: 'Certificates and awards', icon: Award, run: go('/certificates') },
      ...featured
        .filter((project) => project.demo)
        .map((project) => ({
          group: 'Live projects',
          label: `Open ${project.title}`,
          hint: project.summary,
          icon: ExternalLink,
          run: visit(project.demo),
        })),
      {
        group: 'Contact',
        label: 'Copy email address',
        hint: EMAIL,
        icon: Copy,
        keepOpen: true,
        run: async () => {
          try {
            await navigator.clipboard.writeText(EMAIL);
            setNotice('Email address copied');
          } catch {
            setNotice(EMAIL);
          }
        },
      },
      { group: 'Contact', label: 'Write an email', icon: Mail, run: () => { window.location.href = `mailto:${EMAIL}`; } },
      {
        group: 'Contact',
        label: 'Download resume',
        hint: 'PDF, one page',
        icon: Download,
        run: () => {
          const link = document.createElement('a');
          link.href = RESUME_URL;
          link.download = 'Arya_Bhagat_Resume.pdf';
          link.click();
        },
      },
      { group: 'Contact', label: 'GitHub', icon: Github, run: visit(GITHUB_URL) },
      { group: 'Contact', label: 'LinkedIn', icon: Linkedin, run: visit(LINKEDIN_URL) },
      { group: 'Settings', label: 'Switch between light and dark', icon: SunMoon, keepOpen: true, run: toggleTheme },
    ];
  }, [navigate, toggleTheme]);

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return items;
    return items.filter((item) => `${item.label} ${item.hint || ''} ${item.group}`.toLowerCase().includes(needle));
  }, [items, query]);

  // Open with Ctrl+K / Cmd+K, or when another part of the site asks.
  useEffect(() => {
    const onKey = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen((value) => !value);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener('keydown', onKey);
    window.addEventListener('open-command-menu', onOpen);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('open-command-menu', onOpen);
    };
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    setQuery('');
    setIndex(0);
    setNotice('');
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const id = requestAnimationFrame(() => inputRef.current?.focus());
    return () => {
      cancelAnimationFrame(id);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => setIndex(0), [query]);

  useEffect(() => {
    listRef.current?.querySelector('[data-active="true"]')?.scrollIntoView({ block: 'nearest' });
  }, [index]);

  const choose = (item) => {
    if (!item) return;
    item.run();
    if (!item.keepOpen) setOpen(false);
  };

  const onKeyDown = (event) => {
    if (event.key === 'Escape') setOpen(false);
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setIndex((value) => (results.length ? (value + 1) % results.length : 0));
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setIndex((value) => (results.length ? (value - 1 + results.length) % results.length : 0));
    }
    if (event.key === 'Enter') {
      event.preventDefault();
      choose(results[index]);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="command-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-[10001] bg-[#050505]/70 backdrop-blur-sm flex items-start justify-center px-4 pt-[14vh]"
          onClick={() => setOpen(false)}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Quick menu"
            initial={{ opacity: 0, y: -14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
            onKeyDown={onKeyDown}
            className="w-full max-w-xl border border-border dark:border-border-dark bg-surface dark:bg-surface-dark shadow-[0_40px_120px_-20px_rgba(0,0,0,0.7)]"
          >
            <div className="flex items-center gap-3 px-5 border-b border-border dark:border-border-dark">
              <Search className="w-4 h-4 shrink-0 text-text/45 dark:text-text-dark/45" />
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Where do you want to go?"
                aria-label="Search the site"
                className="w-full py-4 bg-transparent outline-none font-body text-base text-text dark:text-text-dark placeholder:text-text/40 dark:placeholder:text-text-dark/40"
              />
              <kbd className="shrink-0 px-1.5 py-0.5 border border-border dark:border-border-dark font-body text-xs text-text/50 dark:text-text-dark/50">
                Esc
              </kbd>
            </div>

            <ul ref={listRef} className="max-h-[52vh] overflow-y-auto py-2">
              {results.length === 0 && (
                <li className="px-5 py-6 font-body text-sm text-text/55 dark:text-text-dark/55">
                  Nothing matches "{query}". Try "projects", "resume" or "email".
                </li>
              )}
              {results.map((item, idx) => {
                const Icon = item.icon;
                const isActive = idx === index;
                const showGroup = idx === 0 || results[idx - 1].group !== item.group;
                return (
                  <li key={item.label}>
                    {showGroup && (
                      <div className="px-5 pt-3 pb-1 font-body text-xs font-semibold text-text/40 dark:text-text-dark/40">
                        {item.group}
                      </div>
                    )}
                    <button
                      type="button"
                      data-active={isActive}
                      onClick={() => choose(item)}
                      onPointerMove={() => setIndex(idx)}
                      className={`w-full flex items-center gap-3 px-5 py-2.5 text-left font-body text-sm transition-colors ${
                        isActive
                          ? 'bg-text text-background dark:bg-text-dark dark:text-background-dark'
                          : 'text-text dark:text-text-dark'
                      }`}
                    >
                      <Icon className="w-4 h-4 shrink-0 opacity-70" />
                      <span className="font-semibold shrink-0">{item.label}</span>
                      {item.hint && <span className="truncate opacity-55">{item.hint}</span>}
                      {isActive && <CornerDownLeft className="w-3.5 h-3.5 ml-auto shrink-0 opacity-60" />}
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="px-5 py-3 border-t border-border dark:border-border-dark font-body text-xs text-text/50 dark:text-text-dark/50" aria-live="polite">
              {notice || 'Arrow keys to move, Enter to choose'}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

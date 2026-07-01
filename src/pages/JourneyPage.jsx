import React, { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Calendar, Compass, Award, Frown, BookOpen, Rocket, CheckCircle, Flame } from 'lucide-react';

export default function JourneyPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeYear = parseInt(searchParams.get('year') || '1', 10);
  const milestonesContainerRef = useRef(null);

  const handleYearChange = (year) => {
    setSearchParams({ year: year.toString() });
  };

  useEffect(() => {
    // Scroll to top of timeline upon year toggle
    const el = document.getElementById('timeline-header');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeYear]);

  // Scroll Progress tracking for the "ray passing" moving line
  const { scrollYProgress } = useScroll({
    target: milestonesContainerRef,
    offset: ["start center", "end center"]
  });

  const rayHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const rayDotTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const year1Milestones = [
    {
      date: "July 31, 2025",
      title: "Beginning of the Journey",
      icon: Compass,
      points: [
        "Took admission in JIS University.",
        "Started the first chapter of engineering life."
      ]
    },
    {
      date: "August 22, 2025",
      title: "First Day of College",
      icon: Calendar,
      points: [
        "Officially entered engineering life at JIS University."
      ]
    },
    {
      date: "August 29, 2025",
      title: "Induction Program",
      icon: Award,
      points: [
        "Attended induction ceremony at Dhono Dhanyo Auditorium.",
        "First exposure to college opportunities and networking."
      ]
    },
    {
      date: "September 16–17, 2025",
      title: "First Hackathon",
      icon: Rocket,
      points: [
        "Participated in CodeSprint 2.0.",
        "Team Sprinter secured Rank 13.",
        "Learned teamwork, pitching and problem solving."
      ]
    },
    {
      date: "October 2025",
      title: "Academic Milestone",
      icon: BookOpen,
      points: [
        "Appeared for first Mid Semester examinations."
      ]
    },
    {
      date: "October–November 2025",
      title: "Leadership & Volunteering",
      icon: CheckCircle,
      points: [
        "Selected as Volunteer for IIC Regional Meet.",
        "First experience contributing to large scale events."
      ]
    },
    {
      date: "November 2025",
      title: "Major Turning Point",
      icon: Flame,
      points: [
        "Migrated from JIS University to Narula Institute of Technology.",
        "Joined with Deep Saha.",
        "Started a new chapter."
      ]
    },
    {
      date: "November 27, 2025",
      title: "Freshers Welcome",
      icon: Calendar,
      points: [
        "Officially became part of the Narula community."
      ]
    },
    {
      date: "December 2025",
      title: "Campus Life & Exposure",
      icon: Compass,
      points: [
        "Participated in college activities.",
        "Assisted Arya Ghosh and Nivriti Pandey.",
        "Visited Surtech College.",
        "Expanded network."
      ]
    },
    {
      date: "Dec 2025 – Jan 2026",
      title: "Building RakshaMarg",
      icon: Rocket,
      points: [
        "Started developing RakshaMarg MVP safety routing.",
        "Formed Team DNA Coded.",
        "Entered real world problem solving."
      ]
    },
    {
      date: "January 17, 2026",
      title: "First Offline Hackathon Victory",
      icon: Award,
      points: [
        "Techno Main Salt Lake.",
        "Team DNA Coded secured 2nd Runner Up."
      ]
    },
    {
      date: "January–February 2026",
      title: "Online Winning Streak",
      icon: Flame,
      points: [
        "Multiple victories across Devpost platforms.",
        "Multiple victories across Hack2Skill challenges."
      ]
    },
    {
      date: "February 2026",
      title: "1st Semester Examinations",
      icon: BookOpen,
      points: [
        "Balanced academics and hackathon builds."
      ]
    },
    {
      date: "March 2026",
      title: "The Rejection That Changed Everything",
      icon: Frown,
      points: [
        "Heritage Institute of Technology.",
        "Finished 6th - missed qualification.",
        "Turned disappointment into motivation."
      ]
    },
    {
      date: "March–April 2026",
      title: "Breaking Barriers",
      icon: Compass,
      points: [
        "Team DNA Coded reached HackONIT AI Utkarsh."
      ]
    },
    {
      date: "April–May 2026",
      title: "Major Achievement",
      icon: Award,
      points: [
        "Jadavpur University Bengal IT Hub Event.",
        "Won 3rd Prize (₹15,000 Prize Pool)."
      ]
    },
    {
      date: "May–June 2026",
      title: "Focus Shift",
      icon: BookOpen,
      points: [
        "Reduced hackathons.",
        "Prioritized academics."
      ]
    },
    {
      date: "June 2026",
      title: "2nd Semester Exam",
      icon: BookOpen,
      points: [
        "Fully focus on study"
      ]
    }
  ];

  return (
    <div className="w-full min-h-screen bg-background dark:bg-background-dark pt-32 pb-24 theme-transition relative overflow-hidden">

      {/* Background Watermark Faded Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <span className="text-[12vw] font-bold text-mono-42/5 dark:text-mono-161/5 whitespace-nowrap tracking-wider font-display">
          2025 &rarr; 2029
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">

        {/* Page Hero */}
        <div className="text-center mb-20">

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-text dark:text-text-dark mb-4">
            MY ENGINEERING JOURNEY
          </h1>
          <p className="font-body text-xs sm:text-sm uppercase tracking-widest text-text/60 dark:text-text-dark/60 max-w-xl mx-auto">
            Four years of learning, building, failing, winning and growing.
          </p>
        </div>

        {/* Year Tabs Navigation */}
        <div id="timeline-header" className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 max-w-4xl mx-auto">
          {[1, 2, 3, 4].map((year) => {
            const isActive = activeYear === year;
            return (
              <button
                key={year}
                onClick={() => handleYearChange(year)}
                className={`py-6 border font-body text-xs font-bold tracking-widest uppercase transition-all duration-500 ${isActive
                  ? 'bg-text border-text text-background dark:bg-text-dark dark:border-text-dark dark:text-background-dark scale-[1.02]'
                  : 'border-border dark:border-border-dark text-text/50 dark:text-text-dark/50 hover:text-text dark:hover:text-text-dark hover:border-text dark:hover:border-text-dark'
                  }`}
              >
                [ YEAR {year} ]
              </button>
            );
          })}
        </div>

        {/* Animate Tab Content */}
        <AnimatePresence mode="wait">
          {activeYear === 1 ? (
            <motion.div
              key="year-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              {/* Year Intro Header */}
              <div className="text-center mb-24 max-w-2xl mx-auto border border-border dark:border-border-dark bg-surface/50 dark:bg-surface-dark/50 p-8 cursor-target">
                <span className="font-body text-xs font-bold text-text/40 dark:text-text-dark/40 uppercase tracking-widest">
                  2025 — 2026
                </span>
                <h2 className="font-display text-3xl font-bold mt-2 mb-4">
                  FIRST YEAR
                </h2>
                <p className="font-body text-xs text-text/60 dark:text-text-dark/60 uppercase tracking-wide">
                  From uncertainty to becoming a builder.
                </p>
              </div>

              {/* Milestone Timeline Connected Path */}
              <div ref={milestonesContainerRef} className="relative max-w-4xl mx-auto pl-8 sm:pl-0">
                {/* Connecting Line (Base Background) */}
                <div className="absolute left-3 sm:left-1/2 -translate-x-[0.5px] top-0 bottom-0 w-[1px] bg-border/40 dark:bg-border-dark/40 pointer-events-none" />

                {/* Ray Passing Progress Line */}
                <motion.div 
                  className="absolute left-3 sm:left-1/2 -translate-x-[0.5px] top-0 w-[1px] bg-text dark:bg-text-dark origin-top pointer-events-none"
                  style={{ scaleY: rayHeight, height: "100%" }}
                />

                {/* Traveling Glow Dot */}
                <motion.div 
                  className="absolute left-3 sm:left-1/2 -translate-x-[6px] w-3 h-3 rounded-full bg-text dark:bg-text-dark shadow-[0_0_12px_rgba(255,255,255,0.8)] pointer-events-none z-20"
                  style={{ top: rayDotTop }}
                />

                <div className="space-y-12">
                  {year1Milestones.map((milestone, idx) => {
                    const isEven = idx % 2 === 0;
                    return (
                      <div key={idx} className="relative flex flex-col sm:flex-row items-stretch">

                        {/* Left Column (Desktop Offset) */}
                        <div className={`flex-1 hidden sm:flex ${isEven ? 'justify-end' : 'justify-start'} order-2 sm:order-1`}>
                          {isEven && (
                            <div className="w-full max-w-md p-6 border border-border dark:border-border-dark bg-surface dark:bg-surface-dark text-right cursor-target">
                              <span className="font-body text-[10px] font-bold text-text/40 dark:text-text-dark/40 uppercase tracking-widest block mb-2">
                                {milestone.date}
                              </span>
                              <h3 className="font-display text-base font-bold text-text dark:text-text-dark mb-4">
                                {milestone.title}
                              </h3>
                              <ul className="space-y-2 text-xs font-body text-text/60 dark:text-text-dark/60 list-none">
                                {milestone.points.map((p, pidx) => (
                                  <li key={pidx}>{p}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>

                        {/* Center Path Circle Node */}
                        <div className="absolute left-3 sm:left-1/2 -translate-x-[7px] sm:-translate-x-[6px] top-6 w-3.5 h-3.5 bg-background dark:bg-background-dark border-4 border-text dark:border-text-dark z-10 rounded-full flex items-center justify-center" />

                        {/* Right Column (Desktop Offset) */}
                        <div className={`flex-1 flex ${!isEven ? 'justify-start' : 'justify-end'} pl-8 sm:pl-16 order-3 sm:order-2`}>
                          {(!isEven || window.innerWidth < 640) && (
                            <div className="w-full max-w-md p-6 border border-border dark:border-border-dark bg-surface dark:bg-surface-dark text-left cursor-target">
                              <span className="font-body text-[10px] font-bold text-text/40 dark:text-text-dark/40 uppercase tracking-widest block mb-2">
                                {milestone.date}
                              </span>
                              <h3 className="font-display text-base font-bold text-text dark:text-text-dark mb-4">
                                {milestone.title}
                              </h3>
                              <ul className="space-y-2 text-xs font-body text-text/60 dark:text-text-dark/60 list-none">
                                {milestone.points.map((p, pidx) => (
                                  <li key={pidx}>{p}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>

                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Year End Summary Dashboard */}
              <div className="max-w-4xl mx-auto mt-24">
                <div className="border border-border dark:border-border-dark bg-surface/30 dark:bg-surface-dark/30 p-8 sm:p-12 cursor-target">
                  <h3 className="font-display text-xl font-bold mb-8 uppercase tracking-widest text-center border-b border-border/10 pb-4">
                    YEAR END SUMMARY
                  </h3>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div className="p-4 border border-border dark:border-border-dark cursor-target">
                      <span className="font-display text-3xl font-bold block mb-1">25+</span>
                      <span className="font-body text-[9px] font-bold uppercase tracking-widest text-text/40">Certificates</span>
                    </div>
                    <div className="p-4 border border-border dark:border-border-dark cursor-target">
                      <span className="font-display text-3xl font-bold block mb-1">6</span>
                      <span className="font-body text-[9px] font-bold uppercase tracking-widest text-text/40">Hackathons Won</span>
                    </div>
                    <div className="p-4 border border-border dark:border-border-dark cursor-target">
                      <span className="font-display text-3xl font-bold block mb-1">4</span>
                      <span className="font-body text-[9px] font-bold uppercase tracking-widest text-text/40">Online Wins</span>
                    </div>
                    <div className="p-4 border border-border dark:border-border-dark cursor-target">
                      <span className="font-display text-3xl font-bold block mb-1">2</span>
                      <span className="font-body text-[9px] font-bold uppercase tracking-widest text-text/40">Offline Wins</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6 text-center">
                    <div className="p-4 border border-border dark:border-border-dark cursor-target">
                      <span className="font-display text-sm font-bold block mb-1">RakshaMarg</span>
                      <span className="font-body text-[9px] font-bold uppercase tracking-widest text-text/40">Built MVP</span>
                    </div>
                    <div className="p-4 border border-border dark:border-border-dark cursor-target">
                      <span className="font-display text-sm font-bold block mb-1">5 Colleges</span>
                      <span className="font-body text-[9px] font-bold uppercase tracking-widest text-text/40">Explored Network</span>
                    </div>
                    <div className="p-4 border border-border dark:border-border-dark cursor-target">
                      <span className="font-display text-sm font-bold block mb-1">DNA Coded</span>
                      <span className="font-body text-[9px] font-bold uppercase tracking-widest text-text/40">Formed Team</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Final Card - Transformation */}
              <div className="max-w-4xl mx-auto mt-12 border border-border dark:border-border-dark bg-surface dark:bg-surface-dark p-8 sm:p-12 text-center cursor-target">
                <span className="font-body text-[10px] font-bold tracking-widest text-text/40 dark:text-text-dark/40 uppercase block mb-3">
                  Transformation
                </span>
                <p className="font-display text-lg sm:text-xl font-bold text-text dark:text-text-dark max-w-2xl mx-auto leading-relaxed mb-6">
                  From uncertainty to becoming a builder, problem solver, hackathon participant and lifelong learner.
                </p>
                <div className="border-t border-border/10 pt-6 max-w-lg mx-auto">
                  <p className="font-body text-xs italic text-text/50 dark:text-text-dark/50">
                    "The first year wasn't about becoming the best. It was about becoming better than the person I was when I started."
                  </p>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={`coming-soon-year-${activeYear}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5 }}
              className="max-w-xl mx-auto border border-border dark:border-border-dark bg-surface dark:bg-surface-dark p-12 text-center"
            >
              <span className="material-symbols-outlined text-4xl mb-4 opacity-30">
                lock
              </span>
              <h2 className="font-display text-2xl font-bold text-text dark:text-text-dark mb-2">
                COMING SOON
              </h2>
              <p className="font-body text-xs uppercase tracking-wider text-text/50 dark:text-text-dark/50">
                Future Chapters Under Construction
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

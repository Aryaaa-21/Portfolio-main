import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Calendar, Compass, Award, Frown, BookOpen, Rocket, CheckCircle, Flame } from 'lucide-react';

export default function JourneyPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeSection = searchParams.get('section') || 'academic'; // 'academic' or 'engineering'
  const activeYear = parseInt(searchParams.get('year') || '1', 10);
  
  const [collegesExpanded, setCollegesExpanded] = useState(false);
  const [sprintersExpanded, setSprintersExpanded] = useState(false);
  const [dnaExpanded, setDnaExpanded] = useState(false);
  const milestonesContainerRef = useRef(null);
  const academicContainerRef = useRef(null);

  const handleSectionChange = (section) => {
    setSearchParams({ section, year: '1' });
  };

  const handleYearChange = (year) => {
    setSearchParams({ section: 'engineering', year: year.toString() });
  };

  useEffect(() => {
    // Scroll to top of timeline upon section or year toggle
    const el = document.getElementById('timeline-header');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeYear, activeSection]);

  // Scroll Progress tracking for the Engineering "ray passing" line
  const { scrollYProgress } = useScroll({
    target: milestonesContainerRef,
    offset: ["start center", "end center"]
  });

  const rayHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const rayDotTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Scroll Progress tracking for the Academic "ray passing" line
  const { scrollYProgress: academicScrollProgress } = useScroll({
    target: academicContainerRef,
    offset: ["start center", "end center"]
  });

  const academicRayHeight = useTransform(academicScrollProgress, [0, 1], ["0%", "100%"]);
  const academicRayDotTop = useTransform(academicScrollProgress, [0, 1], ["0%", "100%"]);

  const academicMilestones = [
    {
      date: "February 21, 2006",
      title: "THE BEGINNING",
      icon: Compass,
      points: [
        "Born on 21st February 2006",
        "Started a journey that would eventually lead into technology and engineering"
      ]
    },
    {
      date: "2008",
      title: "FIRST STEPS IN EDUCATION",
      icon: Calendar,
      details: {
        institution: "Rose Valley School",
        location: "Salkia, Howrah",
        classes: "Playhouse & Nursery"
      },
      points: [
        "First introduction to structured learning",
        "Developed basic social and communication skills",
        "Began the foundation of academic life"
      ]
    },
    {
      date: "2010",
      title: "A NEW CHAPTER",
      icon: BookOpen,
      details: {
        institution: "IP Memorial School",
        location: "Liluah",
        classes: "LKG to Class 3",
        duration: "2010 – 2014"
      },
      points: [
        "Built strong academic fundamentals",
        "Developed early curiosity towards learning",
        "Learned discipline and classroom culture"
      ]
    },
    {
      date: "2015",
      title: "LONGEST SCHOOL JOURNEY",
      icon: Award,
      details: {
        institution: "St. Helen's School",
        location: "Howrah",
        classes: "Class 4 to Class 10",
        duration: "2015 – 2023"
      },
      points: [
        "Spent most of school life here",
        "Built lifelong friendships",
        "Developed resilience and maturity"
      ]
    },
    {
      date: "2020",
      title: "THE SETBACK",
      icon: Frown,
      details: {
        class: "Class 8 Detention"
      },
      points: [
        "Detained in Class 8",
        "Understood the importance of consistency",
        "Learned that setbacks are temporary",
        "Became mentally stronger through failure"
      ]
    },
    {
      date: "2023",
      title: "FIRST MAJOR ACADEMIC ACHIEVEMENT",
      icon: CheckCircle,
      details: {
        institution: "St. Helen's School",
        board: "ICSE",
        stream: "Commercial Applications",
        result: "89.8%"
      },
      points: [
        "Successfully completed Class 10 Board Examinations",
        "Achieved one of the strongest academic performances of school life"
      ]
    },
    {
      date: "2023",
      title: "HIGHER SECONDARY JOURNEY BEGINS",
      icon: Calendar,
      details: {
        institution: "Sudhir Memorial Institute",
        location: "Liluah",
        classes: "11 & 12",
        duration: "2023 – 2025"
      },
      points: [
        "Transitioned into Science stream",
        "Developed analytical thinking",
        "Prepared for engineering entrance journey"
      ]
    },
    {
      date: "2025",
      title: "HIGHER SECONDARY COMPLETION",
      icon: Award,
      details: {
        board: "Board Examination",
        result: "76%"
      },
      points: [
        "Successfully completed Class 12",
        "Finished higher secondary education with PCM"
      ]
    },
    {
      date: "August 2025",
      title: "ENGINEERING JOURNEY BEGINS",
      icon: Rocket,
      details: {
        institution: "JIS University",
        branch: "Computer Science & Engineering",
        duration: "17 August 2025 to 25 November 2025"
      },
      points: [
        "First step into engineering",
        "Introduction to programming and technical education"
      ]
    },
    {
      date: "November 2025",
      title: "A BOLD DECISION",
      icon: Flame,
      details: {
        institution: "Narula Institute of Technology",
        branch: "Information Technology",
        duration: "November 2025 – Present",
        reason: "Better opportunities, stronger technical ecosystem, better growth environment"
      },
      points: [
        "Started fresh with new goals",
        "Built Team DNA Coded",
        "Entered hackathon ecosystem",
        "Started building real-world projects"
      ]
    }
  ];

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
      date: "December 2025 – January 2026",
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
      title: "VEDAX Development",
      icon: Rocket,
      points: [
        "Started building VEDAX - a gamified Vedic mathematics engine.",
        "Designed interactive computational boards and core logic."
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
        <span className="text-[10vw] font-bold text-mono-42/5 dark:text-mono-161/5 whitespace-nowrap tracking-wider font-display uppercase">
          {activeSection === 'engineering' ? '2025 \u2192 2029' : 'THE ROAD THAT BUILT ME'}
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">

        {/* Page Hero */}
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-text dark:text-text-dark mb-4">
            {activeSection === 'engineering' ? 'MY ENGINEERING JOURNEY' : 'ACADEMIC JOURNEY'}
          </h1>
          <p className="font-body text-xs sm:text-sm uppercase tracking-widest text-text/60 dark:text-text-dark/60 max-w-xl mx-auto">
            {activeSection === 'engineering' 
              ? 'Four years of learning, building, failing, winning and growing.'
              : 'Every institution shaped a different part of who I am today.'}
          </p>
        </div>

        {/* Journey Type Tabs */}
        <div id="timeline-header" className="flex flex-col sm:flex-row justify-center gap-4 mb-16 max-w-2xl mx-auto">
          <button
            onClick={() => handleSectionChange('academic')}
            className={`flex-1 py-4 border font-body text-xs font-bold tracking-widest uppercase transition-all duration-300 ${activeSection === 'academic'
              ? 'bg-text border-text text-background dark:bg-text-dark dark:border-text-dark dark:text-background-dark scale-[1.02]'
              : 'border-border dark:border-border-dark text-text/50 dark:text-text-dark/50 hover:text-text dark:hover:text-text-dark hover:border-text dark:hover:border-text-dark'
              }`}
          >
            [ Academic Journey ]
          </button>
          <button
            onClick={() => handleSectionChange('engineering')}
            className={`flex-1 py-4 border font-body text-xs font-bold tracking-widest uppercase transition-all duration-300 ${activeSection === 'engineering'
              ? 'bg-text border-text text-background dark:bg-text-dark dark:border-text-dark dark:text-background-dark scale-[1.02]'
              : 'border-border dark:border-border-dark text-text/50 dark:text-text-dark/50 hover:text-text dark:hover:text-text-dark hover:border-text dark:hover:border-text-dark'
              }`}
          >
            [ Engineering Journey ]
          </button>
        </div>

        {/* Animate Section Content */}
        <AnimatePresence mode="wait">
          {activeSection === 'engineering' ? (
            <motion.div
              key="engineering-timeline"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              {/* Year Tabs Navigation */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 max-w-4xl mx-auto">
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

              {activeYear === 1 ? (
                <div className="w-full">
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
                    <div className="absolute left-3 sm:left-1/2 -translate-x-[0.5px] top-0 bottom-0 w-[1px] bg-border/40 dark:bg-border-dark/40 pointer-events-none" />
                    
                    <motion.div 
                      className="absolute left-3 sm:left-1/2 -translate-x-[0.5px] top-0 w-[1px] bg-text dark:bg-text-dark origin-top pointer-events-none"
                      style={{ scaleY: rayHeight, height: "100%" }}
                    />

                    <motion.div 
                      className="absolute left-3 sm:left-1/2 -translate-x-[6px] w-3 h-3 rounded-full bg-text dark:bg-text-dark shadow-[0_0_12px_rgba(255,255,255,0.8)] pointer-events-none z-20"
                      style={{ top: rayDotTop }}
                    />

                    <div className="space-y-12">
                      {year1Milestones.map((milestone, idx) => {
                        const isEven = idx % 2 === 0;
                        const IconComp = milestone.icon;
                        return (
                          <div key={idx} className="relative flex flex-col sm:flex-row items-stretch">
                            <div className={`flex-1 hidden sm:flex ${isEven ? 'justify-end' : 'justify-start'} order-2 sm:order-1`}>
                              {isEven && (
                                <div className="w-full max-w-md p-6 border border-border dark:border-border-dark bg-surface dark:bg-surface-dark text-right cursor-target">
                                  <div className="flex items-center justify-end gap-3 mb-2">
                                    <span className="font-body text-[10px] font-bold text-text/40 dark:text-text-dark/40 uppercase tracking-widest block">
                                      {milestone.date}
                                    </span>
                                    <IconComp className="w-4 h-4 text-text/60 dark:text-text-dark/60" />
                                  </div>
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

                            <div className="absolute left-3 sm:left-1/2 -translate-x-[7px] sm:-translate-x-[6px] top-6 w-3.5 h-3.5 bg-background dark:bg-background-dark border-4 border-text dark:border-text-dark z-10 rounded-full flex items-center justify-center" />

                            <div className={`flex-1 flex ${!isEven ? 'justify-start' : 'justify-end'} pl-8 sm:pl-16 order-3 sm:order-2`}>
                              {(!isEven || window.innerWidth < 640) && (
                                <div className="w-full max-w-md p-6 border border-border dark:border-border-dark bg-surface dark:bg-surface-dark text-left cursor-target">
                                  <div className="flex items-center gap-3 mb-2">
                                    <IconComp className="w-4 h-4 text-text/60 dark:text-text-dark/60" />
                                    <span className="font-body text-[10px] font-bold text-text/40 dark:text-text-dark/40 uppercase tracking-widest block">
                                      {milestone.date}
                                    </span>
                                  </div>
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
                          <span className="font-display text-3xl font-bold block mb-1">20+</span>
                          <span className="font-body text-[9px] font-bold uppercase tracking-widest text-text/60 dark:text-text-dark/60">Certificates</span>
                        </div>
                        <div className="p-4 border border-border dark:border-border-dark cursor-target">
                          <span className="font-display text-3xl font-bold block mb-1">6</span>
                          <span className="font-body text-[9px] font-bold uppercase tracking-widest text-text/60 dark:text-text-dark/60">Hackathons Won</span>
                        </div>
                        <div className="p-4 border border-border dark:border-border-dark cursor-target">
                          <span className="font-display text-3xl font-bold block mb-1">4</span>
                          <span className="font-body text-[9px] font-bold uppercase tracking-widest text-text/60 dark:text-text-dark/60">Online Wins</span>
                        </div>
                        <div className="p-4 border border-border dark:border-border-dark cursor-target">
                          <span className="font-display text-3xl font-bold block mb-1">2</span>
                          <span className="font-body text-[9px] font-bold uppercase tracking-widest text-text/60 dark:text-text-dark/60">Offline Wins</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6 text-center">
                        <div 
                          onClick={() => setSprintersExpanded(!sprintersExpanded)}
                          className="p-4 border border-border dark:border-border-dark cursor-pointer select-none transition-colors hover:bg-white/5 relative"
                        >
                          <div className="flex items-center justify-center gap-1.5">
                            <span className="font-display text-sm font-bold block mb-1">Sprinters</span>
                            <span className="text-[8px] opacity-60">{sprintersExpanded ? '▲' : '▼'}</span>
                          </div>
                          <span className="font-body text-[9px] font-bold uppercase tracking-widest text-text/60 dark:text-text-dark/60">Formed Team</span>
                          {sprintersExpanded && (
                            <div className="mt-3 pt-3 border-t border-border/10 text-left font-mono text-[9px] leading-relaxed text-text/70 dark:text-text-dark/70 space-y-1">
                              <div className="text-[8px] uppercase tracking-wider text-text/40 dark:text-text-dark/40 mb-1">JIS University</div>
                              <div>• Dipak Kumar Agrahari</div>
                              <div>• Deep Saha</div>
                              <div>• Adiba Ali</div>
                            </div>
                          )}
                        </div>
                        <div 
                          onClick={() => setCollegesExpanded(!collegesExpanded)}
                          className="p-4 border border-border dark:border-border-dark cursor-pointer select-none transition-colors hover:bg-white/5 relative"
                        >
                          <div className="flex items-center justify-center gap-1.5">
                            <span className="font-display text-sm font-bold block mb-1">6 Colleges</span>
                            <span className="text-[8px] opacity-60">{collegesExpanded ? '▲' : '▼'}</span>
                          </div>
                          <span className="font-body text-[9px] font-bold uppercase tracking-widest text-text/60 dark:text-text-dark/60">Explored Network</span>
                          {collegesExpanded && (
                            <div className="mt-3 pt-3 border-t border-border/10 text-left font-mono text-[9px] leading-relaxed text-text/70 dark:text-text-dark/70 space-y-1">
                              <div>• JIS University</div>
                              <div>• Narula Institute of Technology</div>
                              <div>• Techno Main Saltlake</div>
                              <div>• Surtech</div>
                              <div>• Heritage Institute of Technology</div>
                              <div>• Jadavpur University</div>
                            </div>
                          )}
                        </div>
                        <div 
                          onClick={() => setDnaExpanded(!dnaExpanded)}
                          className="p-4 border border-border dark:border-border-dark cursor-pointer select-none transition-colors hover:bg-white/5 relative"
                        >
                          <div className="flex items-center justify-center gap-1.5">
                            <span className="font-display text-sm font-bold block mb-1">DNA Coded</span>
                            <span className="text-[8px] opacity-60">{dnaExpanded ? '▲' : '▼'}</span>
                          </div>
                          <span className="font-body text-[9px] font-bold uppercase tracking-widest text-text/60 dark:text-text-dark/60">Formed Team</span>
                          {dnaExpanded && (
                            <div className="mt-3 pt-3 border-t border-border/10 text-left font-mono text-[9px] leading-relaxed text-text/70 dark:text-text-dark/70 space-y-1">
                              <div className="text-[8px] uppercase tracking-wider text-text/40 dark:text-text-dark/40 mb-1">Narula Institute of Tech</div>
                              <div>• Deep Saha</div>
                              <div>• Nivriti Pandey</div>
                              <div>• Aman Raj Bharti</div>
                              <div>• Pranjal Gupta</div>
                            </div>
                          )}
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
                    <div className="border-t border-border/10 pt-6 max-w-lg mx-auto mb-8">
                      <p className="font-body text-xs italic text-text/50 dark:text-text-dark/50">
                        "The first year wasn't about becoming the best. It was about becoming better than the person I was when I started."
                      </p>
                    </div>
                    <div className="flex justify-center pt-4 border-t border-border/10">
                      <button
                        onClick={() => handleYearChange(2)}
                        className="px-6 py-3 border border-text dark:border-text-dark hover:bg-text hover:text-background dark:hover:bg-text-dark dark:hover:text-background-dark font-mono text-[10px] uppercase tracking-widest transition-all duration-300 flex items-center gap-2 group cursor-pointer"
                      >
                        Unlock Year 2 Timeline <span className="transition-transform group-hover:translate-x-1">→</span>
                      </button>
                    </div>
                  </div>
                </div>
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
            </motion.div>
          ) : (
            <motion.div
              key="academic-timeline"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              {/* Academic Year Intro Header */}
              <div className="text-center mb-24 max-w-2xl mx-auto border border-border dark:border-border-dark bg-surface/50 dark:bg-surface-dark/50 p-8 cursor-target">
                <span className="font-body text-xs font-bold text-text/40 dark:text-text-dark/40 uppercase tracking-widest">
                  2006 — 2025
                </span>
                <h2 className="font-display text-3xl font-bold mt-2 mb-4">
                  THE ROAD THAT BUILT ME
                </h2>
                <p className="font-body text-xs text-text/60 dark:text-text-dark/60 uppercase tracking-wide">
                  Before becoming an engineering student, hackathon participant, and builder, there was a long journey through different schools, experiences, successes, and setbacks that laid the foundation for everything that followed.
                </p>
              </div>

              {/* Academic Milestone Timeline Connected Path */}
              <div ref={academicContainerRef} className="relative max-w-4xl mx-auto pl-8 sm:pl-0">
                <div className="absolute left-3 sm:left-1/2 -translate-x-[0.5px] top-0 bottom-0 w-[1px] bg-border/40 dark:bg-border-dark/40 pointer-events-none" />
                
                <motion.div 
                  className="absolute left-3 sm:left-1/2 -translate-x-[0.5px] top-0 w-[1px] bg-text dark:bg-text-dark origin-top pointer-events-none"
                  style={{ scaleY: academicRayHeight, height: "100%" }}
                />

                <motion.div 
                  className="absolute left-3 sm:left-1/2 -translate-x-[6px] w-3 h-3 rounded-full bg-text dark:bg-text-dark shadow-[0_0_12px_rgba(255,255,255,0.8)] pointer-events-none z-20"
                  style={{ top: academicRayDotTop }}
                />

                <div className="space-y-12">
                  {academicMilestones.map((milestone, idx) => {
                    const isEven = idx % 2 === 0;
                    const IconComp = milestone.icon;
                    return (
                      <div key={idx} className="relative flex flex-col sm:flex-row items-stretch">
                        <div className={`flex-1 hidden sm:flex ${isEven ? 'justify-end' : 'justify-start'} order-2 sm:order-1`}>
                          {isEven && (
                            <div className="w-full max-w-md p-6 border border-border dark:border-border-dark bg-surface dark:bg-surface-dark text-right cursor-target">
                              <div className="flex items-center justify-end gap-3 mb-2">
                                <span className="font-body text-[10px] font-bold text-text/40 dark:text-text-dark/40 uppercase tracking-widest block">
                                  {milestone.date}
                                </span>
                                <IconComp className="w-4 h-4 text-text/60 dark:text-text-dark/60" />
                              </div>
                              <h3 className="font-display text-base font-bold text-text dark:text-text-dark mb-3 uppercase tracking-tight">
                                {milestone.title}
                              </h3>

                              {milestone.details && (
                                <div className="mb-4 text-[9px] uppercase font-bold tracking-widest text-text/40 dark:text-text-dark/40 border-r border-border dark:border-border-dark/30 pr-3 space-y-1 text-right">
                                  {milestone.details.institution && <div>Institution: <span className="text-text dark:text-text-dark">{milestone.details.institution}</span></div>}
                                  {milestone.details.location && <div>Location: <span className="text-text dark:text-text-dark">{milestone.details.location}</span></div>}
                                  {milestone.details.classes && <div>Classes: <span className="text-text dark:text-text-dark">{milestone.details.classes}</span></div>}
                                  {milestone.details.duration && <div>Duration: <span className="text-text dark:text-text-dark">{milestone.details.duration}</span></div>}
                                  {milestone.details.board && <div>Board: <span className="text-text dark:text-text-dark">{milestone.details.board}</span></div>}
                                  {milestone.details.stream && <div>Stream: <span className="text-text dark:text-text-dark">{milestone.details.stream}</span></div>}
                                  {milestone.details.class && <div>Class: <span className="text-text dark:text-text-dark">{milestone.details.class}</span></div>}
                                  {milestone.details.result && <div>Result: <span className="text-text dark:text-text-dark font-display text-xs px-2 py-0.5 border border-border dark:border-border-dark inline-block mt-1 font-bold">{milestone.details.result}</span></div>}
                                  {milestone.details.subjects && <div>Subjects: <span className="text-text dark:text-text-dark">{milestone.details.subjects}</span></div>}
                                  {milestone.details.branch && <div>Branch: <span className="text-text dark:text-text-dark">{milestone.details.branch}</span></div>}
                                  {milestone.details.reason && <div className="mt-2">Reason: <span className="text-text dark:text-text-dark italic normal-case">{milestone.details.reason}</span></div>}
                                </div>
                              )}

                              <ul className="space-y-2 text-xs font-body text-text/60 dark:text-text-dark/60 list-none">
                                {milestone.points.map((p, pidx) => (
                                  <li key={pidx}>{p}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>

                        <div className="absolute left-3 sm:left-1/2 -translate-x-[7px] sm:-translate-x-[6px] top-6 w-3.5 h-3.5 bg-background dark:bg-background-dark border-4 border-text dark:border-text-dark z-10 rounded-full flex items-center justify-center" />

                        <div className={`flex-1 flex ${!isEven ? 'justify-start' : 'justify-end'} pl-8 sm:pl-16 order-3 sm:order-2`}>
                          {(!isEven || window.innerWidth < 640) && (
                            <div className="w-full max-w-md p-6 border border-border dark:border-border-dark bg-surface dark:bg-surface-dark text-left cursor-target">
                              <div className="flex items-center gap-3 mb-2">
                                <IconComp className="w-4 h-4 text-text/60 dark:text-text-dark/60" />
                                <span className="font-body text-[10px] font-bold text-text/40 dark:text-text-dark/40 uppercase tracking-widest block">
                                  {milestone.date}
                                </span>
                              </div>
                              <h3 className="font-display text-base font-bold text-text dark:text-text-dark mb-3 uppercase tracking-tight">
                                {milestone.title}
                              </h3>

                              {milestone.details && (
                                <div className="mb-4 text-[9px] uppercase font-bold tracking-widest text-text/40 dark:text-text-dark/40 border-l border-border dark:border-border-dark/30 pl-3 space-y-1 text-left">
                                  {milestone.details.institution && <div>Institution: <span className="text-text dark:text-text-dark">{milestone.details.institution}</span></div>}
                                  {milestone.details.location && <div>Location: <span className="text-text dark:text-text-dark">{milestone.details.location}</span></div>}
                                  {milestone.details.classes && <div>Classes: <span className="text-text dark:text-text-dark">{milestone.details.classes}</span></div>}
                                  {milestone.details.duration && <div>Duration: <span className="text-text dark:text-text-dark">{milestone.details.duration}</span></div>}
                                  {milestone.details.board && <div>Board: <span className="text-text dark:text-text-dark">{milestone.details.board}</span></div>}
                                  {milestone.details.stream && <div>Stream: <span className="text-text dark:text-text-dark">{milestone.details.stream}</span></div>}
                                  {milestone.details.class && <div>Class: <span className="text-text dark:text-text-dark">{milestone.details.class}</span></div>}
                                  {milestone.details.result && <div>Result: <span className="text-text dark:text-text-dark font-display text-xs px-2 py-0.5 border border-border dark:border-border-dark inline-block mt-1 font-bold">{milestone.details.result}</span></div>}
                                  {milestone.details.subjects && <div>Subjects: <span className="text-text dark:text-text-dark">{milestone.details.subjects}</span></div>}
                                  {milestone.details.branch && <div>Branch: <span className="text-text dark:text-text-dark">{milestone.details.branch}</span></div>}
                                  {milestone.details.reason && <div className="mt-2">Reason: <span className="text-text dark:text-text-dark italic normal-case">{milestone.details.reason}</span></div>}
                                </div>
                              )}

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

              {/* Final Card - Transformation */}
              <div className="max-w-4xl mx-auto mt-16 border border-border dark:border-border-dark bg-surface dark:bg-surface-dark p-8 sm:p-12 text-center cursor-target">
                <span className="font-body text-[10px] font-bold tracking-widest text-text/40 dark:text-text-dark/40 uppercase block mb-3">
                  Final Transformation
                </span>
                <p className="font-display text-lg sm:text-xl font-bold text-text dark:text-text-dark max-w-2xl mx-auto leading-relaxed mb-6">
                  From a child learning the alphabet in a classroom to an engineering student building products, participating in hackathons, and preparing for a career in technology.
                </p>
                <div className="border-t border-border/10 pt-6 max-w-lg mx-auto mb-8">
                  <p className="font-body text-xs italic text-text/50 dark:text-text-dark/50">
                    "The journey was never perfect. Every success, failure, transfer, and setback became a lesson that shaped who I am today."
                  </p>
                </div>
                <div className="flex justify-center pt-4 border-t border-border/10">
                  <button
                    onClick={() => handleSectionChange('engineering')}
                    className="px-6 py-3 border border-text dark:border-text-dark hover:bg-text hover:text-background dark:hover:bg-text-dark dark:hover:text-background-dark font-mono text-[10px] uppercase tracking-widest transition-all duration-300 flex items-center gap-2 group cursor-pointer"
                  >
                    Proceed to Engineering Journey <span className="transition-transform group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

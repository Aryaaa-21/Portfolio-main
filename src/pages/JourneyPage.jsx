import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Cpu, Terminal, ArrowDown, Lock, Code, Award, Calendar, Shield, Users } from 'lucide-react';

const year1Milestones = [
  {
    id: "y1-1",
    date: "July 31 2025",
    title: "Beginning of the Journey",
    points: [
      "Took admission in JIS University",
      "Started the first chapter of engineering life"
    ]
  },
  {
    id: "y1-2",
    date: "August 22 2025",
    title: "First Day of College",
    points: [
      "Officially entered engineering life"
    ]
  },
  {
    id: "y1-3",
    date: "August 29 2025",
    title: "Induction Program",
    points: [
      "Dhono Dhanyo Auditorium",
      "First exposure to networking"
    ]
  },
  {
    id: "y1-4",
    date: "September 16–17 2025",
    title: "First Hackathon",
    points: [
      "CodeSprint 2.0",
      "Team Sprinter",
      "Rank 13"
    ]
  },
  {
    id: "y1-5",
    date: "October 2025",
    title: "Academic Milestone",
    points: [
      "First Mid Semester Examination"
    ]
  },
  {
    id: "y1-6",
    date: "October–November 2025",
    title: "Leadership & Volunteering",
    points: [
      "IIC Regional Meet Volunteer"
    ]
  },
  {
    id: "y1-7",
    date: "November 2025",
    title: "Major Turning Point",
    points: [
      "Migrated to Narula Institute of Technology"
    ]
  },
  {
    id: "y1-8",
    date: "November 27 2025",
    title: "Freshers Welcome",
    points: [
      "Officially welcomed into Nit community"
    ]
  },
  {
    id: "y1-9",
    date: "December 2025",
    title: "Campus Life & Exposure",
    points: [
      "Explored campus activities and established initial builder network"
    ]
  },
  {
    id: "y1-10",
    date: "December 2025 – January 2026",
    title: "Building RakshaMarg",
    points: [
      "Formed Team DNA Coded",
      "Engineered low-latency safety routing MVP"
    ]
  },
  {
    id: "y1-11",
    date: "January 17 2026",
    title: "First Offline Hackathon Victory",
    points: [
      "Techno Main Salt Lake",
      "Team DNA Coded",
      "2nd Runner Up"
    ]
  },
  {
    id: "y1-12",
    date: "January–February 2026",
    title: "Online Winning Streak",
    points: [
      "Secured victories across multiple global online build challenges"
    ]
  },
  {
    id: "y1-13",
    date: "February 2026",
    title: "Semester Examinations",
    points: [
      "Completed first semester university examinations"
    ]
  },
  {
    id: "y1-14",
    date: "March 2026",
    title: "The Rejection That Changed Everything",
    points: [
      "Heritage Institute of Technology Hackathon",
      "Finished 6th",
      "Used failure to refine engineering workflows"
    ]
  },
  {
    id: "y1-15",
    date: "March–April 2026",
    title: "Breaking Barriers",
    points: [
      "Competed at HackONIT AI Utkarsh"
    ]
  },
  {
    id: "y1-16",
    date: "April–May 2026",
    title: "Major Achievement",
    points: [
      "Jadavpur University Bengal IT Hub",
      "3rd Prize",
      "₹15,000 Prize Pool"
    ]
  },
  {
    id: "y1-17",
    date: "April–May 2026",
    title: "Focus Shift",
    points: [
      "Academics First",
      "Prioritized second semester prep and core systems theory"
    ]
  }
];

function MilestoneRow({ milestone, index, isActive, onInView }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-25% 0px -45% 0px"
  });

  useEffect(() => {
    if (isInView) {
      onInView(milestone.id);
    }
  }, [isInView, milestone.id, onInView]);

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-0 relative items-center min-h-[140px]">
      
      {/* Center column line node */}
      <div className="hidden lg:flex col-span-1 justify-center relative h-full">
        <div className={`w-3 h-3 rounded-full border-2 transition-all duration-[600ms] absolute top-1/2 -translate-y-1/2 z-20 ${
          isInView 
            ? "bg-white border-white shadow-[0_0_12px_rgba(255,255,255,1)] scale-125" 
            : "bg-[#050505] border-white/20 scale-100"
        }`} />
      </div>

      {/* Right column card */}
      <div className="col-span-11 py-6 pl-6 lg:pl-0">
        <motion.div
          initial={{ opacity: 0.15, y: 25, scale: 0.98 }}
          animate={{ 
            opacity: isInView ? 1 : 0.15,
            y: isInView ? 0 : 25,
            scale: isInView ? 1 : 0.98,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`p-6 border bg-[#0B0B0B] text-white transition-colors duration-500 relative select-none ${
            isInView ? "border-white/25" : "border-white/5"
          }`}
        >
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[9px] text-[#A1A1A1] tracking-widest uppercase block mb-1">
              {milestone.date}
            </span>
            <h3 className="text-base font-display font-bold uppercase tracking-tight text-white mb-3">
              {milestone.title}
            </h3>
            <ul className="space-y-1.5 text-xs font-body text-[#A1A1A1]">
              {milestone.points.map((p, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-white/30 mt-0.5">•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function JourneyPage() {
  const [activeYear, setActiveYear] = useState(1);
  const [activeMilestoneId, setActiveMilestoneId] = useState(null);
  
  const timelineRef = useRef(null);
  const yearRefs = {
    1: useRef(null),
    2: useRef(null),
    3: useRef(null),
    4: useRef(null),
  };

  // Scroll Progress calculations for Center Column Line
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  const progressLineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const handleYearScrollDetect = () => {
    const viewportMiddle = window.innerHeight / 2.5;
    let currentYear = 1;

    [1, 2, 3, 4].forEach((year) => {
      const el = yearRefs[year].current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top <= viewportMiddle && rect.bottom >= viewportMiddle) {
        currentYear = year;
      }
    });

    if (currentYear !== activeYear) {
      setActiveYear(currentYear);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleYearScrollDetect);
    handleYearScrollDetect(); // run once to initialize
    return () => window.removeEventListener('scroll', handleYearScrollDetect);
  }, [activeYear]);

  const scrollToYear = (year) => {
    const el = yearRefs[year].current;
    if (el) {
      const yOffset = -120; 
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#050505] text-white pt-32 pb-24 relative overflow-hidden">
      {/* Ambient background lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* Page Hero */}
        <section className="h-[calc(100vh-200px)] flex flex-col justify-center items-center text-center relative mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="font-mono text-xs tracking-[0.25em] text-[#A1A1A1] uppercase block">
              CHRONOLOGY MODULE // REGISTRY
            </span>
            <h1 className="font-display text-5xl sm:text-7xl font-bold tracking-tight text-white uppercase">
              MY ENGINEERING JOURNEY
            </h1>
            <p className="font-display text-lg sm:text-xl text-[#A1A1A1] max-w-2xl mx-auto font-medium">
              From uncertainty to becoming a builder.
            </p>
            <p className="font-body text-xs sm:text-sm text-[#A1A1A1]/60 max-w-xl mx-auto uppercase tracking-wider">
              A year-by-year record of growth, failures, victories, hackathons, projects and learning.
            </p>

            {/* Scroll Indicator */}
            <div className="flex flex-col items-center justify-center gap-3 pt-12">
              <span className="font-mono text-[9px] tracking-[0.3em] text-[#A1A1A1]/40 uppercase">
                SCROLL TO EXPLORE
              </span>
              <div className="w-6 h-10 border border-white/10 rounded-full flex justify-center p-1.5">
                <motion.div 
                  animate={{
                    y: [0, 14, 0],
                  }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-1.5 h-1.5 bg-white rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Sticky Scroll Experience grid wrapper */}
        <div ref={timelineRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative mt-16">
          
          {/* Left Column: Year Navigation (Sticky) */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-32 flex flex-col gap-4 select-none lg:pr-8">
              <div className="flex items-center gap-2 mb-4">
                <Cpu className="w-4 h-4 text-white/50" />
                <span className="font-mono text-[9px] tracking-[0.2em] text-[#A1A1A1] uppercase">
                  TIMELINE NAVIGATION
                </span>
              </div>
              
              {[1, 2, 3, 4].map((year) => {
                const isActive = activeYear === year;
                return (
                  <button
                    key={year}
                    onClick={() => scrollToYear(year)}
                    className="group flex flex-col items-start text-left transition-all duration-500 py-2 border-b border-white/5"
                  >
                    <span className={`font-mono text-[10px] tracking-widest uppercase mb-1 transition-all ${
                      isActive ? "text-white" : "text-[#A1A1A1]/30 group-hover:text-[#A1A1A1]"
                    }`}>
                      CHAPTER 0{year}
                    </span>
                    <span className={`font-display text-3xl font-extrabold tracking-wider transition-all ${
                      isActive ? "text-white scale-100" : "text-[#A1A1A1]/10 group-hover:text-[#A1A1A1]/30 scale-95 origin-left"
                    }`}>
                      YEAR {year}
                    </span>
                  </button>
                );
              })}

              <div className="mt-8 hidden lg:flex flex-col gap-1 font-mono text-[9px] text-white/20">
                <span>SYSTEM: COMPILING</span>
                <span>STATUS: STABLE</span>
                <span>TARGET: BUILD_SUCCESS</span>
              </div>
            </div>
          </div>

          {/* Right portion: Center Column (Progress Line) + Right Column (Milestones) */}
          <div className="lg:col-span-8 relative">
            
            {/* Center column progress line (positioned relative to Right portion) */}
            <div className="absolute left-0 lg:left-[4.16%] top-0 bottom-0 w-[1px] bg-white/5 hidden lg:block" />
            <motion.div 
              className="absolute left-0 lg:left-[4.16%] top-0 w-[1px] bg-white origin-top hidden lg:block"
              style={{ scaleY: scrollYProgress, height: "100%" }}
            />

            {/* Chapters rendering */}
            <div className="space-y-32">
              
              {/* YEAR 1 */}
              <div ref={yearRefs[1]} className="space-y-16">
                
                {/* Year 1 Header Card */}
                <div className="p-8 border border-white/10 bg-[#0B0B0B] relative overflow-hidden select-none">
                  <div className="absolute top-2 right-2 font-mono text-[8px] text-white/25">
                    CHAPTER_01 // ACTIVE
                  </div>
                  <span className="font-mono text-xs font-bold text-[#A1A1A1] uppercase tracking-widest block mb-2">
                    2025 — 2026
                  </span>
                  <h2 className="font-display text-3xl font-extrabold text-white tracking-tight uppercase">
                    FIRST YEAR
                  </h2>
                  <p className="font-body text-xs text-[#A1A1A1] mt-2 uppercase tracking-wide">
                    The year everything started.
                  </p>
                </div>

                {/* Year 1 Milestones stack */}
                <div className="space-y-6">
                  {year1Milestones.map((milestone, idx) => (
                    <MilestoneRow 
                      key={milestone.id}
                      milestone={milestone}
                      index={idx}
                      isActive={activeMilestoneId === milestone.id}
                      onInView={setActiveMilestoneId}
                    />
                  ))}
                </div>

                {/* Year 1 End Summary Dashboard */}
                <div className="p-8 border border-white/10 bg-[#0B0B0B] relative overflow-hidden select-none mt-20">
                  <div className="absolute top-2 left-2 font-mono text-[8px] text-white/25">
                    LOG_SYS // METRICS
                  </div>
                  <h3 className="font-display text-lg font-bold tracking-widest text-white uppercase text-center mb-8 pb-4 border-b border-white/5">
                    YEAR END SUMMARY
                  </h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-6 border border-white/5 bg-[#111111] flex flex-col justify-between">
                      <span className="font-mono text-3xl font-bold text-white block">25+</span>
                      <span className="font-mono text-[8px] tracking-wider text-[#A1A1A1] uppercase mt-2">Certificates</span>
                    </div>
                    <div className="p-6 border border-white/5 bg-[#111111] flex flex-col justify-between">
                      <span className="font-mono text-3xl font-bold text-white block">6</span>
                      <span className="font-mono text-[8px] tracking-wider text-[#A1A1A1] uppercase mt-2">Hackathons Won</span>
                    </div>
                    <div className="p-6 border border-white/5 bg-[#111111] flex flex-col justify-between">
                      <span className="font-mono text-3xl font-bold text-white block">4</span>
                      <span className="font-mono text-[8px] tracking-wider text-[#A1A1A1] uppercase mt-2">Online Wins</span>
                    </div>
                    <div className="p-6 border border-white/5 bg-[#111111] flex flex-col justify-between">
                      <span className="font-mono text-3xl font-bold text-white block">2</span>
                      <span className="font-mono text-[8px] tracking-wider text-[#A1A1A1] uppercase mt-2">Offline Wins</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="p-6 border border-white/5 bg-[#111111] flex flex-col justify-between">
                      <span className="font-display text-sm font-bold text-white block uppercase">RakshaMarg</span>
                      <span className="font-mono text-[8px] tracking-wider text-[#A1A1A1] uppercase mt-1">Built MVP</span>
                    </div>
                    <div className="p-6 border border-white/5 bg-[#111111] flex flex-col justify-between">
                      <span className="font-display text-sm font-bold text-white block uppercase">5 Colleges</span>
                      <span className="font-mono text-[8px] tracking-wider text-[#A1A1A1] uppercase mt-1">Explored Network</span>
                    </div>
                    <div className="p-6 border border-white/5 bg-[#111111] flex flex-col justify-between">
                      <span className="font-display text-sm font-bold text-white block uppercase">DNA Coded</span>
                      <span className="font-mono text-[8px] tracking-wider text-[#A1A1A1] uppercase mt-1">Formed Team</span>
                    </div>
                  </div>
                </div>

                {/* Final Card - Transformation */}
                <div className="p-8 sm:p-12 border border-white/10 bg-[#111111] text-center relative select-none mt-6">
                  <div className="absolute top-2 left-2 font-mono text-[8px] text-white/20">
                    LOG_OUTPUT // TRANSFORMATION
                  </div>
                  <span className="font-mono text-[9px] tracking-widest text-[#A1A1A1] uppercase block mb-3">
                    Chapter 01 Transformation Card
                  </span>
                  <p className="font-display text-lg sm:text-xl font-bold text-white max-w-xl mx-auto leading-relaxed mb-6">
                    "The first year wasn't about becoming the best. It was about becoming better than the person I was when I started."
                  </p>
                </div>

              </div>

              {/* YEAR 2 */}
              <div ref={yearRefs[2]} className="space-y-8 pt-12">
                <div className="p-8 border border-white/5 bg-[#0B0B0B] relative overflow-hidden select-none flex flex-col items-center justify-center text-center min-h-[300px]">
                  <Lock className="w-8 h-8 text-white/20 mb-4" />
                  <span className="font-mono text-xs font-bold text-[#A1A1A1] uppercase tracking-widest block mb-1">
                    YEAR 2 // LOCKED
                  </span>
                  <h2 className="font-display text-2xl font-bold text-white tracking-tight uppercase mb-2">
                    COMING SOON
                  </h2>
                  <p className="font-body text-xs text-[#A1A1A1]/40 uppercase tracking-wider">
                    The story continues...
                  </p>
                </div>
              </div>

              {/* YEAR 3 */}
              <div ref={yearRefs[3]} className="space-y-8 pt-12">
                <div className="p-8 border border-white/5 bg-[#0B0B0B] relative overflow-hidden select-none flex flex-col items-center justify-center text-center min-h-[300px]">
                  <Lock className="w-8 h-8 text-white/20 mb-4" />
                  <span className="font-mono text-xs font-bold text-[#A1A1A1] uppercase tracking-widest block mb-1">
                    YEAR 3 // LOCKED
                  </span>
                  <h2 className="font-display text-2xl font-bold text-white tracking-tight uppercase">
                    COMING SOON
                  </h2>
                </div>
              </div>

              {/* YEAR 4 */}
              <div ref={yearRefs[4]} className="space-y-8 pt-12">
                <div className="p-8 border border-white/5 bg-[#0B0B0B] relative overflow-hidden select-none flex flex-col items-center justify-center text-center min-h-[300px]">
                  <Lock className="w-8 h-8 text-white/20 mb-4" />
                  <span className="font-mono text-xs font-bold text-[#A1A1A1] uppercase tracking-widest block mb-1">
                    YEAR 4 // LOCKED
                  </span>
                  <h2 className="font-display text-2xl font-bold text-white tracking-tight uppercase">
                    COMING SOON
                  </h2>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

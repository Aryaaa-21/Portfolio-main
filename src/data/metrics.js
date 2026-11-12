import { certificates } from './certificates';

// Home page numbers. Each one is counted from what is on this site (or is a
// plain fact), so a visitor can check it by clicking through.
export const metrics = [
  {
    value: "3",
    label: "HACKATHON PODIUMS",
    description: "AI for Bharat 2026, Pragati Bengal Hackfest 2026 and TechSprint, all in first year."
  },
  {
    // 2 main projects + 6 highlighted Web3 builds + 3 early projects with a live link
    value: "11",
    label: "LIVE PROJECTS",
    description: "Deployed apps you can open right now from the projects page."
  },
  {
    value: String(certificates.length),
    label: "CERTIFICATES",
    description: "Every one is shown in full on the achievements page."
  }
];

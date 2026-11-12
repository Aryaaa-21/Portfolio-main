// Contact details and links used in more than one place.
export const EMAIL = 'aryabhagat2102@gmail.com';
export const RESUME_URL = '/Arya_Bhagat_Resume.pdf';
export const GITHUB_URL = 'https://github.com/Aryaaa-21';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/arya-bhagat-2102np';

export const wins = [
  { place: 'First Prize', event: 'AI for Bharat 2026', id: 'cert-13' },
  { place: 'Champion Title', event: 'Pragati, The Bengal Hackfest 2026', id: 'cert-19' },
  { place: '2nd Runner Up', event: 'Pragati, The Bengal Hackfest 2026', id: 'cert-16' },
  { place: '3rd Position', event: 'TechSprint, GDG on Campus', id: 'cert-18' },
  { place: 'Top 30 Teams', event: 'Hack Among Us', id: 'cert-11' },
  { place: 'Grand Finalist', event: 'Hack-O-NiT 2026', id: 'cert-21' },
];

// 3 main projects + 20 in the full list on the projects page (src/sections/Archive.jsx).
export const TOTAL_PROJECTS = 23;

// Any part of the site can ask for the quick menu to open.
export const openCommandMenu = () => window.dispatchEvent(new Event('open-command-menu'));

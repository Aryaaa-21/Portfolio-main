import React from 'react';
import Projects from '../sections/Projects';
import Archive from '../sections/Archive';
import BuildLog from '../sections/BuildLog';

export default function ProjectsPage() {
  return (
    <div className="w-full flex flex-col">
      {/* Featured Projects Showcase Blocks */}
      <Projects />

      {/* Developer Command Center Archive */}
      <Archive />

      {/* Chronological Build Log Changelog */}
      <BuildLog />
    </div>
  );
}

import React from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectGrid({ items }) {
  if (!items?.length) return <div className="opacity-70">No projects yet.</div>;
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map(p => <ProjectCard key={p._id} p={p} />)}
    </div>
  );
}

import React from 'react';
import ProjectCard from './ProjectCard';


export default function ProjectGrid({ items }) {
  if (!items?.length) {
    return (
      <div className="flex items-center justify-center h-64 text-zinc-500 dark:text-zinc-400">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <p>No projects available yet</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map(p => <ProjectCard key={p._id} p={p} />)}
    </div>
  );
}

// export default function ProjectGrid({ items }) {
//   if (!items?.length) return <div className="opacity-70">No projects yet.</div>;
//   return (
//     <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {items.map(p => <ProjectCard key={p._id} p={p} />)}
//     </div>
//   );
// }

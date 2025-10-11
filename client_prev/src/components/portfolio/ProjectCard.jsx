import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ p }) {
  return (
    <Link to={`/projects/${p.slug}`} className="group card overflow-hidden block">
      <div className="relative">
        <img src={p.imageUrl} alt={p.title} className="w-full aspect-[16/9] object-cover transition group-hover:scale-[1.02]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-semibold tracking-tight">{p.title}</h3>
          {p.liveUrl && (
            <span className="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800">Live</span>
          )}
        </div>
        <p className="text-sm opacity-80 mt-1 line-clamp-2">{p.summary}</p>
        {p.techStack?.length ? (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {p.techStack.slice(0, 5).map(t => (
              <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">{t}</span>
            ))}
            {p.techStack.length > 5 && <span className="text-[11px] px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">+{p.techStack.length-5}</span>}
          </div>
        ) : null}
      </div>
    </Link>
  );
}

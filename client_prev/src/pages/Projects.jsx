import React, { useEffect, useMemo, useState } from 'react';
import { api } from '../lib/api';
import ProjectGrid from '../components/portfolio/ProjectGrid';

export default function Projects(){
  const [items,setItems] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(()=>{ api.get('/projects?published=true').then(r=>setItems(r.data)); },[]);
  const allTags = useMemo(() => {
    const s = new Set();
    items.forEach(p => (p.techStack||[]).forEach(t => s.add(t)));
    return ['All', ...Array.from(s).sort()];
  }, [items]);

  const visible = useMemo(() => {
    if (filter === 'All') return items;
    return items.filter(p => p.techStack?.includes(filter));
  }, [items, filter]);

  return (
    <section className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Projects</h2>
          <p className="opacity-70">Selected work demonstrating back-end depth and full-stack polish.</p>
        </div>
        <div className="flex gap-2 overflow-x-auto">
          {allTags.map(t => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-3 py-1.5 rounded-full text-sm border transition ${filter===t ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900' : 'hover:bg-zinc-100 dark:hover:bg-zinc-900/60'}`}
            >{t}</button>
          ))}
        </div>
      </div>
      <ProjectGrid items={visible} />
    </section>
  );
}


// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { api } from '../lib/api';

// export default function Projects(){
//   const [items,setItems] = useState([]);
//   useEffect(()=>{ api.get('/projects?published=true').then(r=>setItems(r.data)); },[]);
//   return (
//     <section>
//       <h2 className="text-2xl font-semibold mb-6">Projects</h2>
//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {items.map(p => (
//           <Link key={p._id} to={`/projects/${p.slug}`} className="rounded-2xl border overflow-hidden hover:shadow-lg transition">
//             <img src={p.imageUrl} alt={p.title} className="w-full aspect-video object-cover"/>
//             <div className="p-4">
//               <div className="font-semibold">{p.title}</div>
//               <p className="text-sm opacity-80 mt-1">{p.summary}</p>
//               <div className="mt-2 text-xs opacity-70">{(p.techStack||[]).join(' · ')}</div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// }

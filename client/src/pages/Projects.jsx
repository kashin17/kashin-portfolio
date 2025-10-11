import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { api } from '../lib/api';
import ProjectGrid from '../components/portfolio/ProjectGrid';

export default function Projects() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setIsLoading(true);
    api.get('/projects?published=true')
      .then(r => {
        setItems(r.data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  const allTags = useMemo(() => {
    const s = new Set();
    items.forEach(p => (p.techStack || []).forEach(t => s.add(t)));
    return ['All', ...Array.from(s).sort()];
  }, [items]);

  const visible = useMemo(() => {
    let filtered = items;
    
    // Filter by tag
    if (filter !== 'All') {
      filtered = filtered.filter(p => p.techStack?.includes(filter));
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.title?.toLowerCase().includes(query) ||
        p.summary?.toLowerCase().includes(query) ||
        p.techStack?.some(t => t.toLowerCase().includes(query))
      );
    }
    
    return filtered;
  }, [items, filter, searchQuery]);

  return (
    <div className="min-h-screen">
      {/* Animated background gradients */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-50 via-transparent to-transparent dark:from-blue-950/20 dark:via-transparent blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-50 via-transparent to-transparent dark:from-emerald-950/20 dark:via-transparent blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="pt-1 pb-2"
        >
          <div className="space-y-6">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400"
            >
              <a href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Home
              </a>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="font-medium text-zinc-900 dark:text-zinc-100">Projects</span>
            </motion.div>

            {/* Title & Description */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
              >
                <span className="bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">
                  Featured Projects
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed"
              >
                Real systems with production considerations: auth, data models, performance, and developer experience. Each project showcases end-to-end problem solving.
              </motion.p>
            </div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-6"
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-950/50 dark:to-blue-900/30 border border-blue-200 dark:border-blue-900 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                    {items.length}
                  </div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-400">
                    Total Projects
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-50 dark:from-emerald-950/50 dark:to-emerald-900/30 border border-emerald-200 dark:border-emerald-900 flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                    {allTags.length - 1}
                  </div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-400">
                    Technologies
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-950/50 dark:to-purple-900/30 border border-purple-200 dark:border-purple-900 flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                    {items.filter(p => p.liveUrl).length}
                  </div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-400">
                    Live Demos
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Filters & Search Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="space-y-4"
        >
          {/* Search Bar */}
          <div className="relative max-w-md">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-3.5 pl-12 rounded-xl bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 dark:placeholder-zinc-400 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all outline-none"
            />
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Filter Tags */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-zinc-600 dark:text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              <span className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">
                Filter by Technology
              </span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <AnimatePresence mode="popLayout">
                {allTags.map((t, i) => (
                  <motion.button
                    key={t}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2, delay: i * 0.02 }}
                    onClick={() => setFilter(t)}
                    className={`
                      px-4 py-2 rounded-xl text-sm font-medium border-2 
                      transition-all duration-300 hover:scale-105
                      ${filter === t
                        ? 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white border-transparent shadow-lg shadow-blue-500/30'
                        : 'bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md'
                      }
                    `}
                  >
                    {t}
                    {t !== 'All' && (
                      <span className={`ml-1.5 ${filter === t ? 'text-white/80' : 'text-zinc-500'}`}>
                        ({items.filter(p => p.techStack?.includes(t)).length})
                      </span>
                    )}
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Results Info */}
          <div className="flex items-center justify-between pt-2">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {visible.length === items.length ? (
                <>Showing all <span className="font-semibold text-zinc-900 dark:text-zinc-100">{items.length}</span> projects</>
              ) : (
                <>Showing <span className="font-semibold text-zinc-900 dark:text-zinc-100">{visible.length}</span> of {items.length} projects</>
              )}
            </p>
            
            {(filter !== 'All' || searchQuery) && (
              <button
                onClick={() => {
                  setFilter('All');
                  setSearchQuery('');
                }}
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                Clear filters
              </button>
            )}
          </div>
        </motion.section>

        {/* Projects Grid */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {isLoading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="space-y-4">
                  <div className="aspect-[16/9] rounded-2xl skeleton" />
                  <div className="space-y-2">
                    <div className="h-6 w-3/4 rounded skeleton" />
                    <div className="h-4 w-full rounded skeleton" />
                    <div className="h-4 w-2/3 rounded skeleton" />
                  </div>
                </div>
              ))}
            </div>
          ) : visible.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <div className="w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                <svg className="w-10 h-10 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                No projects found
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-md">
                Try adjusting your filters or search query to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setFilter('All');
                  setSearchQuery('');
                }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:scale-105 transition-all"
              >
                Clear all filters
              </button>
            </motion.div>
          ) : (
            <ProjectGrid items={visible} />
          )}
        </motion.section>
      </div>
    </div>
  );
}

// import React, { useEffect, useMemo, useState } from 'react';
// import { api } from '../lib/api';
// import ProjectGrid from '../components/portfolio/ProjectGrid';

// export default function Projects(){
//   const [items,setItems] = useState([]);
//   const [filter, setFilter] = useState('All');

//   useEffect(()=>{ api.get('/projects?published=true').then(r=>setItems(r.data)); },[]);
//   const allTags = useMemo(() => {
//     const s = new Set();
//     items.forEach(p => (p.techStack||[]).forEach(t => s.add(t)));
//     return ['All', ...Array.from(s).sort()];
//   }, [items]);

//   const visible = useMemo(() => {
//     if (filter === 'All') return items;
//     return items.filter(p => p.techStack?.includes(filter));
//   }, [items, filter]);

//   return (
//     <section className="space-y-6">
//       <div className="flex items-end justify-between gap-4">
//         <div>
//           <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Projects</h2>
//           <p className="opacity-70">Real systems with production considerations: auth, data models, performance, and DX.</p>
//         </div>
//         {/* <div className="flex gap-2 overflow-x-auto">
//           {allTags.map(t => (
//             <button
//               key={t}
//               onClick={() => setFilter(t)}
//               className={`px-3 py-1.5 rounded-full text-sm border transition ${filter===t ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900' : 'hover:bg-zinc-100 dark:hover:bg-zinc-900/60'}`}
//             >{t}</button>
//           ))}
//         </div> */}
//       </div>
//       <ProjectGrid items={visible} />
//     </section>
//   );
// }

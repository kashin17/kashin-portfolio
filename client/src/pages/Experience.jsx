import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { api } from '../lib/api';

export default function Experience() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCompany, setSelectedCompany] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    api.get('/experience')
      .then(r => {
        setItems(r.data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  // Calculate total years of experience
  // const totalYears = items.length > 0 
  //   ? Math.max(...items.map(x => {
  //       const end = x.endDate || new Date();
  //       const start = new Date(x.startDate);
  //       return (new Date(end) - start) / (1000 * 60 * 60 * 24 * 365);
  //     })).toFixed(1)
  //   : 0;
  const totalYears = 2;

  return (
    <div className="min-h-screen">
      {/* Animated background gradients */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[900px] h-[900px] bg-gradient-to-br from-purple-50 via-transparent to-transparent dark:from-purple-950/20 dark:via-transparent blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-blue-50 via-transparent to-transparent dark:from-blue-950/20 dark:via-transparent blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
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
              <span className="font-medium text-zinc-900 dark:text-zinc-100">Experience</span>
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
                  Work Experience
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed"
              >
                A journey through roles that shaped my expertise in backend architecture, full-stack development, and building scalable systems.
              </motion.p>
            </div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-950/50 dark:to-blue-900/30 border border-blue-200 dark:border-blue-900 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                    {items.length}
                  </div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-400">
                    Companies
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-950/50 dark:to-purple-900/30 border border-purple-200 dark:border-purple-900 flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                    {totalYears}+
                  </div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-400">
                    Years Experience
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-50 dark:from-emerald-950/50 dark:to-emerald-900/30 border border-emerald-200 dark:border-emerald-900 flex items-center justify-center">
                  <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                    {items.reduce((acc, x) => acc + (x.bullets?.length || 0), 0)}
                  </div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-400">
                    Key Achievements
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Timeline */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative"
        >
          {isLoading ? (
            <div className="space-y-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="relative">
                  <div className="absolute left-0 md:left-8 top-8 w-px h-full bg-zinc-200 dark:bg-zinc-800" />
                  <div className="flex gap-6 md:gap-8">
                    <div className="hidden md:block w-16 pt-8">
                      <div className="w-4 h-4 rounded-full skeleton" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div className="h-8 w-3/4 rounded skeleton" />
                      <div className="h-20 w-full rounded-2xl skeleton" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : items.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <div className="w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                <svg className="w-10 h-10 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                No experience data yet
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Experience information will appear here once available.
              </p>
            </motion.div>
          ) : (
            <div className="space-y-12">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 via-purple-200 to-emerald-200 dark:from-blue-900 dark:via-purple-900 dark:to-emerald-900" />

              {items.map((x, idx) => (
                <motion.div
                  key={x._id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative flex gap-6 md:gap-8 group"
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex w-16 pt-2 items-start justify-center relative z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.1 + 0.2 }}
                      className="relative"
                    >
                      <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 shadow-lg shadow-blue-500/30 group-hover:shadow-xl group-hover:shadow-blue-500/50 transition-shadow duration-300" />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-emerald-400 animate-ping opacity-20" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 border border-zinc-200/50 dark:border-zinc-800/50 p-6 md:p-8 shadow-lg shadow-zinc-900/5 dark:shadow-black/20 transition-all duration-500 hover:shadow-2xl hover:shadow-zinc-900/10 dark:hover:shadow-black/40 hover:border-zinc-300/50 dark:hover:border-zinc-700/50"
                    >
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Header */}
                      <div className="relative space-y-4 mb-6">
                        <div className="flex items-start justify-between gap-4 flex-wrap">
                          <div className="space-y-2 flex-1">
                            <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                              {x.role}
                            </h3>
                            <div className="flex items-center gap-2 text-lg font-semibold text-zinc-700 dark:text-zinc-300">
                              <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                              {x.company}
                            </div>
                          </div>

                          {/* Location & Date badge */}
                          <div className="flex flex-col items-end gap-2">
                            {x.location && (
                              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                                <svg className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                                  {x.location}
                                </span>
                              </div>
                            )}
                            {(x.startDate || x.endDate) && (
                              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900">
                                <svg className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span className="text-xs font-medium text-blue-700 dark:text-blue-300">
                                  {/* {x.startDate && new Date(x.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                                  {x.startDate && (x.endDate || ' - Present')}
                                  {x.endDate && ` - ${new Date(x.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}`} */}
                                  {x.startDate && new Date(x.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} –{' '}
                                  {x.endDate
                                    ? new Date(x.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
                                    : 'Present'}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Description */}
                        {x.description && (
                          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            {x.description}
                          </p>
                        )}
                      </div>

                      {/* Key Achievements */}
                      {x.bullets && x.bullets.length > 0 && (
                        <div className="relative space-y-3">
                          <h4 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-4 flex items-center gap-2">
                            <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                            Key Achievements
                          </h4>
                          <ul className="space-y-3">
                            {x.bullets.map((b, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: i * 0.05 }}
                                className="flex gap-3 text-zinc-700 dark:text-zinc-300 leading-relaxed"
                              >
                                <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{b}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Tech Stack Tags */}
                      {x.techStack && x.techStack.length > 0 && (
                        <div className="relative mt-6 pt-6 border-t border-zinc-200/50 dark:border-zinc-800/50">
                          <div className="flex flex-wrap gap-2">
                            {x.techStack.map((tech, i) => (
                              <span
                                key={i}
                                className="text-xs px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.section>
      </div>
    </div>
  );
}

// import React, { useEffect, useState } from 'react';
// import { api } from '../lib/api';

// export default function Experience(){
//   const [items,setItems] = useState([]);
//   useEffect(()=>{ api.get('/experience').then(r=>setItems(r.data)); },[]);
//   return (
//     <section className="space-y-8">
//       <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Experience</h2>
//       <div className="space-y-4">
//         {items.map(x => (
//           <div key={x._id} className="card p-4 md:p-6">
//             <div className="flex items-center justify-between gap-4 flex-wrap">
//               <div className="font-semibold text-lg">{x.role} — {x.company}</div>
//               <div className="text-sm opacity-70">{x.location}</div>
//             </div>
//             <ul className="mt-3 grid gap-2 list-disc pl-5">
//               {(x.bullets||[]).map((b,i)=> <li key={i}>{b}</li>)}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

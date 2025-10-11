import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProjectCard({ p, index = 0 }) {
  const [imgError, setImgError] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="group relative"
    >
      <Link 
        to={`/projects/${p.slug}`} 
        className="block relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 border border-zinc-200/50 dark:border-zinc-800/50 shadow-lg shadow-zinc-900/5 dark:shadow-black/20 transition-all duration-500 hover:shadow-2xl hover:shadow-zinc-900/10 dark:hover:shadow-black/40 hover:border-zinc-300/50 dark:hover:border-zinc-700/50"
      >
        {/* Image Container */}
        <div className="relative aspect-[16/9] overflow-hidden bg-zinc-100 dark:bg-zinc-900">
          {Boolean(p.imageUrl?.trim()) && !imgError ? (
            <>
              <img 
                src={p.imageUrl} 
                alt={p.title}
                onError={() => setImgError(true)}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </>
          ) : (
            /* Premium Placeholder */
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50 dark:from-blue-950/30 dark:via-zinc-900 dark:to-emerald-950/30">
              {/* Animated gradient orbs */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-emerald-400/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
              
              {/* Grid pattern overlay */}
              <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
                backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                                  linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }} />
              
              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Rotating ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-300 dark:border-blue-700 animate-spin" style={{ animationDuration: '20s' }} />
                  
                  {/* Icon container */}
                  <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-800 dark:to-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <svg 
                      className="w-12 h-12 text-zinc-400 dark:text-zinc-600" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1.5} 
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                      />
                    </svg>
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </div>
              
              {/* Floating particles */}
              <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-blue-400/40 dark:bg-blue-600/40 animate-float" style={{ animationDelay: '0s', animationDuration: '8s' }} />
              <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-emerald-400/40 dark:bg-emerald-600/40 animate-float" style={{ animationDelay: '2s', animationDuration: '10s' }} />
              <div className="absolute bottom-1/3 left-1/3 w-1 h-1 rounded-full bg-blue-400/40 dark:bg-blue-600/40 animate-float" style={{ animationDelay: '4s', animationDuration: '12s' }} />
              
              {/* Bottom gradient for blend */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent dark:from-black/20" />
            </div>
          )}
          
          {/* Live Badge - Top Right */}
          {p.liveUrl && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute top-3 right-3 z-10"
            >
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border border-emerald-200 dark:border-emerald-900/50 shadow-lg shadow-emerald-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                  Live
                </span>
              </div>
            </motion.div>
          )}
          
          {/* Tech Stack - Bottom Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <div className="flex gap-2 flex-wrap">
              {(p.techStack || []).slice(0, 4).map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-xs px-3 py-1.5 rounded-full bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl text-zinc-900 dark:text-zinc-100 border border-zinc-200/50 dark:border-zinc-800/50 font-medium shadow-lg"
                >
                  {t}
                </motion.span>
              ))}
              {(p.techStack || []).length > 4 && (
                <span className="text-xs px-3 py-1.5 rounded-full bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl text-zinc-600 dark:text-zinc-400 border border-zinc-200/50 dark:border-zinc-800/50 font-medium shadow-lg">
                  +{(p.techStack || []).length - 4}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-1">
              {p.title}
            </h3>
            
            {/* Arrow Icon */}
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
              <svg 
                className="w-4 h-4 text-blue-600 dark:text-blue-400" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </div>
          </div>
          
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-2">
            {p.summary}
          </p>
          
          {/* Metadata Footer */}
          {(p.category || p.year) && (
            <div className="flex items-center gap-3 mt-4 pt-4 border-t border-zinc-200/50 dark:border-zinc-800/50">
              {p.category && (
                <span className="text-xs font-medium text-zinc-500 dark:text-zinc-500">
                  {p.category}
                </span>
              )}
              {p.year && (
                <>
                  <span className="text-zinc-300 dark:text-zinc-700">•</span>
                  <span className="text-xs font-medium text-zinc-500 dark:text-zinc-500">
                    {p.year}
                  </span>
                </>
              )}
            </div>
          )}
        </div>

        {/* Hover Shine Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-emerald-500/5" />
        </div>
      </Link>
    </motion.div>
  );
}



// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function ProjectCard({ p }) {
//   return (
//     <Link to={`/projects/${p.slug}`} className="group card overflow-hidden block hover:shadow-elevated transition">
//       <div className="relative">
//         <img src={p.imageUrl} alt={p.title} className="w-full aspect-[16/9] object-cover transition group-hover:scale-[1.02]" />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
//         <div className="absolute bottom-2 left-2 right-2 flex gap-2 flex-wrap">
//           {(p.techStack||[]).slice(0,3).map(t => (
//             <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-white/90 text-zinc-900 border border-zinc-200">{t}</span>
//           ))}
//         </div>
//       </div>
//       <div className="p-4">
//         <div className="flex items-center justify-between gap-3">
//           <h3 className="font-semibold tracking-tight">{p.title}</h3>
//           {p.liveUrl && (
//             <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800">Live</span>
//           )}
//         </div>
//         <p className="text-sm opacity-80 mt-1 line-clamp-2">{p.summary}</p>
//       </div>
//     </Link>
//   );
// }

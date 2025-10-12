import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { api } from '../lib/api';
import { useParams, Link } from 'react-router-dom';

export default function ProjectDetail() {
  const { slug } = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imgError, setImgError] = React.useState(false);

  useEffect(() => {
    setIsLoading(true);
    api.get(`/projects/slug/${slug}?publishedOnly=true`)
      .then(r => {
        setItem(r.data);
        setIsLoading(false);
      })
      .catch(() => {
        setItem(null);
        setIsLoading(false);
      });
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-emerald-500 animate-pulse" />
          <p className="text-zinc-600 dark:text-zinc-400">Loading project...</p>
        </div>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
            <svg className="w-10 h-10 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Project not found</h3>
          <Link to="/projects" className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const allMedia = [
    ...(item.galleryImages || []).map(src => ({ type: 'image', src })),
    ...(item.galleryVideos || []).map(src => ({ type: 'video', src }))
  ];

  return (
    <div className="min-h-screen">
      {/* Animated background gradients */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[900px] h-[900px] bg-gradient-to-br from-blue-50 via-transparent to-transparent dark:from-blue-950/20 dark:via-transparent blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-emerald-50 via-transparent to-transparent dark:from-emerald-950/20 dark:via-transparent blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Breadcrumb Navigation */}
        <motion.nav
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400"
        >
          <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Home
          </Link>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <Link to="/projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Projects
          </Link>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="font-medium text-zinc-900 dark:text-zinc-100">{item.title}</span>
        </motion.nav>

        {/* Hero Section */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid lg:grid-cols-2 gap-8 items-start"
        >
          {/* Featured Image */}
          <div className="relative group">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-2xl shadow-2xl"
            >
              {Boolean(item.imageUrl?.trim()) && !imgError ? (
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  onError={() => setImgError(true)} 
                  className="w-full aspect-video object-cover"
                />
              ) : (
                <div className="w-full aspect-video bg-gradient-to-br from-blue-50 via-white to-emerald-50 dark:from-blue-950/30 dark:via-zinc-900 dark:to-emerald-950/30 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-800 dark:to-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-2xl flex items-center justify-center">
                    <svg className="w-12 h-12 text-zinc-400 dark:text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          </div>

          {/* Project Info */}
          <div className="space-y-6">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-zinc-900 dark:text-zinc-100"
              >
                {item.title}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed"
              >
                {item.summary}
              </motion.p>
            </div>

            {/* Tech Stack */}
            {item.techStack?.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-3"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-zinc-600 dark:text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <span className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">Technology Stack</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.techStack.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.05 }}
                      className="px-3 py-1.5 rounded-xl text-sm font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 hover:scale-105 hover:shadow-md transition-all duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              {item.liveUrl && (
                <a
                  href={item.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  View Live Demo
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              )}
              
              {item.repoUrl && (
                <a
                  href={item.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl border-2 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 font-semibold hover:border-zinc-300 dark:hover:border-zinc-700 hover:scale-105 hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  View Code
                </a>
              )}
            </motion.div>

            {/* Project Metadata */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-800"
            >
              {item.category && (
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">{item.category}</span>
                </div>
              )}
              {item.year && (
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">{item.year}</span>
                </div>
              )}
            </motion.div>
          </div>
        </motion.header>

        {/* Description Section */}
        {item.description && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 rounded-full bg-gradient-to-b from-blue-600 to-emerald-500" />
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">Overview</h2>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 border border-zinc-200/50 dark:border-zinc-800/50 p-8 shadow-lg shadow-zinc-900/5 dark:shadow-black/20">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-emerald-500/5" />
              <div className="relative prose prose-zinc dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.section>
        )}

        {/* Gallery Section */}
        {allMedia.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 rounded-full bg-gradient-to-b from-purple-600 to-pink-500" />
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">Gallery</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allMedia.map((media, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  {media.type === 'image' ? (
                    <div
                      onClick={() => setSelectedImage(media.src)}
                      className="cursor-pointer"
                    >
                      <img
                        src={media.src}
                        alt={`Gallery ${i + 1}`}
                        className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                          <svg className="w-6 h-6 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <video
                      controls
                      src={media.src}
                      className="w-full aspect-video object-cover bg-zinc-900"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Back to Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center pt-8"
        >
          <Link
            to="/projects"
            className="group px-8 py-4 rounded-xl border-2 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 font-semibold hover:border-zinc-300 dark:hover:border-zinc-700 hover:scale-105 hover:shadow-lg transition-all duration-300 flex items-center gap-2"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to All Projects
          </Link>
        </motion.div>
      </div>

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-6xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Full size"
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all hover:scale-110"
              >
                <svg className="w-6 h-6 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// import React, { useEffect, useState } from 'react';
// import { api } from '../lib/api';
// import { useParams, Link } from 'react-router-dom';

// export default function ProjectDetail(){
//   const { slug } = useParams();
//   const [item,setItem] = useState(null);
//   useEffect(()=>{ api.get(`/projects/slug/${slug}?publishedOnly=true`).then(r=>setItem(r.data)).catch(()=>setItem(null)); },[slug]);
//   if(!item) return <div>Loading…</div>;

//   return (
//     <article className="space-y-10">
//       <nav className="text-sm opacity-70">
//         <Link to="/projects" className="hover:underline">Projects</Link> <span>›</span> <span className="opacity-100">{item.title}</span>
//       </nav>

//       <header className="grid md:grid-cols-2 gap-6 items-start">
//         <img src={item.imageUrl} alt={item.title} className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-800" />
//         <div className="space-y-4">
//           <h1 className="text-3xl font-bold tracking-tight">{item.title}</h1>
//           <p className="text-lg opacity-80">{item.summary}</p>
//           {item.techStack?.length ? (
//             <div className="flex flex-wrap gap-2">
//               {item.techStack.map(t => <span key={t} className="text-xs px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">{t}</span>)}
//             </div>
//           ) : null}
//           <div className="flex gap-3">
//             {item.repoUrl && <a className="btn btn-outline" href={item.repoUrl} target="_blank" rel="noreferrer">GitHub</a>}
//             {item.liveUrl && <a className="btn btn-primary" href={item.liveUrl} target="_blank" rel="noreferrer">Live</a>}
//           </div>
//         </div>
//       </header>

//       {item.description && (
//         <section className="prose dark:prose-invert">
//           <h3>Overview</h3>
//           <p>{item.description}</p>
//         </section>
//       )}

//       {(item.galleryImages?.length || item.galleryVideos?.length) ? (
//         <section className="space-y-3">
//           <h3 className="text-xl font-semibold">Gallery</h3>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
//             {(item.galleryImages||[]).map((src,i)=>(
//               <img key={i} src={src} alt={"img-"+i} className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-800" />
//             ))}
//             {(item.galleryVideos||[]).map((src,i)=>(
//               <video key={i} controls src={src} className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-800"></video>
//             ))}
//           </div>
//         </section>
//       ) : null}
//     </article>
//   );
// }

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import StatStrip from '../components/sections/StatStrip';
import LogoCloud from '../components/sections/LogoCloud';
import { api } from '../lib/api';
import ProjectGrid from '../components/portfolio/ProjectGrid';

export default function Home(){
  const [items,setItems] = useState([]);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.85]);

  useEffect(()=>{ api.get('/projects?published=true').then(r=>setItems(r.data.slice(0,6))); },[]);

   return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Animated background gradients */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-50 via-transparent to-transparent dark:from-blue-950/20 dark:via-transparent blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-emerald-50 via-transparent to-transparent dark:from-emerald-950/20 dark:via-transparent blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        {/* Hero Section */}
        <motion.section style={{ y, opacity }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="pt-1 md:pt-1 pb-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-emerald-200 dark:border-emerald-900/50 px-4 py-2 text-sm font-medium mb-8 bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-950/30 dark:to-blue-950/30 backdrop-blur-xl shadow-lg shadow-emerald-500/10"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="bg-gradient-to-r from-emerald-700 to-blue-700 dark:from-emerald-400 dark:to-blue-400 bg-clip-text text-transparent font-semibold">
                Open to backend / full-stack projects
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-8"
            >
              I design and build{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500 bg-clip-text text-transparent">
                  reliable web platforms
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-200 to-emerald-200 dark:from-blue-900/30 dark:to-emerald-900/30 -z-10"
                  style={{ transformOrigin: 'left' }}
                />
              </span>
              <br />
              — from API to UX.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed mb-10"
            >
              Full‑Stack Developer with a backend edge. Comfortable owning services, data models, and clean UIs. Strong in Node.js, Python/Django, Java and React.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/projects"
                className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold text-lg shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore my work
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              {[
                { label: 'Email', href: 'mailto:karora504@gmail.com', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
                { label: 'GitHub', href: 'https://github.com/kashin17', icon: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' },
                { label: 'LinkedIn', href: 'https://linkedin.com/in/kashin-arora', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z' }
              ].map((btn, i) => (
                <a
                  key={i}
                  href={btn.href}
                  target={btn.href.startsWith('http') ? '_blank' : undefined}
                  rel={btn.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="group px-8 py-4 rounded-xl border-2 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={btn.icon} />
                  </svg>
                  {btn.label}
                </a>
              ))}
            </motion.div>
          </motion.div>
        </motion.section>

        <StatStrip />
        <LogoCloud />

        {/* Projects Section */}
        <section className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-end justify-between"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent mb-2">
                Selected Projects
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400">
                Showcasing real-world applications and technical expertise
              </p>
            </div>
            <Link
              to="/projects"
              className="group hidden sm:flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all duration-300"
            >
              View all projects
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

          <ProjectGrid items={items} />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center pt-4 sm:hidden"
          >
            <Link
              to="/projects"
              className="group flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all duration-300"
            >
              View all projects
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </section>
      </div>
    </div>
  );

  // return (
  //   <section className="space-y-12">
  //     <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.4}} className="pt-8 md:pt-14">
  //       <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 px-3 py-1 text-xs mb-4 bg-white/60 dark:bg-zinc-950/40 backdrop-blur">
  //         <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
  //         Open to backend / full-stack roles
  //       </div>
  //       <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
  //         I design and build <span className="bg-gradient-to-r from-brand-600 to-emerald-500 bg-clip-text text-transparent">reliable web platforms</span> — from API to UX.
  //       </h1>
  //       <p className="mt-4 text-lg md:text-xl opacity-80 max-w-3xl">
  //         Full‑Stack Developer with a backend edge. Comfortable owning services, data models, and clean UIs. Strong in Node.js, Python/Django, Java, React, and MongoDB.
  //       </p>
  //       <div className="mt-6 flex flex-wrap gap-3">
  //         <Link className="btn btn-primary ring-gradient" to="/projects">Explore my work</Link>
  //         <a className="btn btn-outline" href="mailto:karora504@gmail.com">Email</a>
  //         <a className="btn btn-outline" href="https://github.com/kashin17" target="_blank" rel="noreferrer">GitHub</a>
  //         <a className="btn btn-outline" href="https://linkedin.com/in/kashin-arora" target="_blank" rel="noreferrer">LinkedIn</a>
  //       </div>
  //     </motion.div>

  //     <StatStrip />
  //     <LogoCloud />

  //     <div className="space-y-4">
  //       <div className="flex items-end justify-between">
  //         <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Selected Projects</h2>
  //         <Link to="/projects" className="text-sm underline opacity-80 hover:opacity-100">View all</Link>
  //       </div>
  //       <ProjectGrid items={items} />
  //     </div>
  //   </section>
  // );
}

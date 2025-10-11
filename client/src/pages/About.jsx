import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const focusAreas = [
    {
      icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
      title: 'Backend Architecture',
      description: 'Designing modular backends (Node, Django) with well‑documented APIs',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4',
      title: 'Data Modeling',
      description: 'MongoDB/MySQL/Postgres expertise with pagination, indexing, and performance optimization',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      title: 'Modern UI Development',
      description: 'Clean, responsive interfaces with React and Tailwind CSS',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
      title: 'DevOps & CI/CD',
      description: 'CI‑friendly codebases with clear environments and repeatable setups',
      color: 'from-orange-500 to-amber-500'
    }
  ];

  const achievements = [
    {
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'Timeline Backend',
      description: 'Real‑time audit logging system for enterprise applications',
      color: 'bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-900 text-blue-600 dark:text-blue-400'
    },
    {
      icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
      title: 'No‑Code Form Builder',
      description: 'Intuitive drag-and-drop interface with dynamic validation',
      color: 'bg-purple-50 dark:bg-purple-950/50 border-purple-200 dark:border-purple-900 text-purple-600 dark:text-purple-400'
    },
    {
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      title: 'AI Expense Audit Tool',
      description: 'Machine learning-powered expense validation and categorization',
      color: 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-900 text-emerald-600 dark:text-emerald-400'
    },
    {
      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
      title: 'GPS Attendance App',
      description: 'Location-validated check-in system with offline support',
      color: 'bg-orange-50 dark:bg-orange-950/50 border-orange-200 dark:border-orange-900 text-orange-600 dark:text-orange-400'
    }
  ];

  const values = [
    { label: 'Maintainability', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
    { label: 'Observability', icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' },
    { label: 'Developer Experience', icon: 'M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5' }
  ];

  return (
    <div className="min-h-screen">
      {/* Animated background gradients */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[900px] h-[900px] bg-gradient-to-br from-blue-50 via-transparent to-transparent dark:from-blue-950/20 dark:via-transparent blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-purple-50 via-transparent to-transparent dark:from-purple-950/20 dark:via-transparent blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="pt-1"
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
              <span className="font-medium text-zinc-900 dark:text-zinc-100">About</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            >
              <span className="bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">
                About Me
              </span>
            </motion.h1>
          </div>
        </motion.section>

        {/* Introduction Card */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 border border-zinc-200/50 dark:border-zinc-800/50 p-8 md:p-10 shadow-xl shadow-zinc-900/5 dark:shadow-black/20">
            {/* Decorative gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-emerald-500/5" />
            
            <div className="relative space-y-6">
              {/* Profile Section */}
              <div className="flex items-start gap-6">
                <div className="hidden sm:block">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <span className="text-4xl font-bold text-white">KA</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
                    Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">Kashin Arora</span>
                  </h2>
                  <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    A Full‑Stack Developer who enjoys turning ambiguous product ideas into reliable, scalable software.
                  </p>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent" />

              {/* Main Description */}
              <div className="space-y-4 text-zinc-700 dark:text-zinc-300 text-base leading-relaxed">
                <p>
                  My sweet spot is <strong className="text-zinc-900 dark:text-zinc-100">backend architecture</strong>—designing clean APIs, data models, and services—then bringing it to life with a practical, minimal UI.
                </p>
                <p>
                  I've delivered production work across startups and enterprises, building systems that handle real-world complexity with elegance and reliability.
                </p>
              </div>

              {/* Core Values */}
              <div className="flex flex-wrap gap-3 pt-4">
                {values.map((value, i) => (
                  <motion.div
                    key={value.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700"
                  >
                    <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                    </svg>
                    <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      {value.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Key Projects */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 rounded-full bg-gradient-to-b from-blue-600 to-emerald-500" />
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
              Notable Projects
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {achievements.map((achievement, i) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`
                  relative overflow-hidden rounded-xl p-6 border-2
                  transition-all duration-300 hover:shadow-lg
                  ${achievement.color}
                `}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 flex items-center justify-center shadow-md flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={achievement.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Focus Areas */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 rounded-full bg-gradient-to-b from-purple-600 to-pink-500" />
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
              Focus Areas
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {focusAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 border border-zinc-200/50 dark:border-zinc-800/50 p-6 shadow-lg shadow-zinc-900/5 dark:shadow-black/20 transition-all duration-500 hover:shadow-xl hover:shadow-zinc-900/10 dark:hover:shadow-black/30"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={area.icon} />
                  </svg>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                  {area.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {area.description}
                </p>

                {/* Hover gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Closing Statement */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-purple-50 to-emerald-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-emerald-950/20 border border-blue-200/50 dark:border-blue-900/50 p-8 md:p-10">
            <div className="relative z-10 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-2xl mx-auto">
                Outside of work, I enjoy learning new stacks and refining the craft of shipping reliable software. Always curious, always building.
              </p>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-emerald-400/20 to-transparent rounded-full blur-3xl" />
          </div>
        </motion.section>
      </div>
    </div>
  );
}



// import React from 'react';

// export default function About(){
//   return (
//     <section className="prose dark:prose-invert max-w-3xl">
//       <h1>About</h1>
//       <p>
//         I’m <strong>Kashin Arora</strong>, a Full‑Stack Developer who enjoys turning ambiguous product ideas into reliable, scalable software.
//         My sweet spot is backend architecture—designing clean APIs, data models, and services—then bringing it to life with a practical, minimal UI.
//       </p>
//       <p>
//         I’ve delivered production work across startups and enterprises, including a timeline backend with real‑time audit logging, a no‑code form builder,
//         an AI‑assisted expense audit tool, and a GPS‑validated attendance app. I value maintainability, observability, and thoughtful developer experience.
//       </p>
//       <h2>Focus Areas</h2>
//       <ul>
//         <li>Designing modular backends (Node, Django) with well‑documented APIs</li>
//         <li>Data modeling with MongoDB/MySQL/Postgres; pagination, indexing, performance</li>
//         <li>Clean, responsive UIs with React and Tailwind</li>
//         <li>CI‑friendly codebases with clear environments and repeatable setups</li>
//       </ul>
//       <p>Outside of work, I enjoy learning new stacks and refining the craft of shipping reliable software.</p>
//     </section>
//   );
// }

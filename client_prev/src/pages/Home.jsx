import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home(){
  return (
    <section className="pt-10 md:pt-16 space-y-10">
      <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.4}}>
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 px-3 py-1 text-xs mb-4 bg-white/60 dark:bg-zinc-950/40 backdrop-blur">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          Available for opportunities
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Building <span className="bg-gradient-to-r from-brand-600 to-emerald-500 bg-clip-text text-transparent">scalable software</span> you can ship with confidence.
        </h1>
        <p className="mt-4 text-lg md:text-xl opacity-80 max-w-2xl">
          Full-Stack Developer focused on clean architecture, performance, and DX. Node.js, Python/Django, Java, React, MongoDB.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link className="btn btn-primary" to="/projects">View Projects</Link>
          <a className="btn btn-outline" href="mailto:karora504@gmail.com">Email me</a>
          <a className="btn btn-outline" href="https://github.com/kashin17" target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn btn-outline" href="https://linkedin.com/in/kashin-arora" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {['Node.js','Django','React','MongoDB','Java','Prisma','Tailwind','PostgreSQL'].map(tag => (
          <div key={tag} className="card py-3 text-center text-sm">{tag}</div>
        ))}
      </div>
    </section>
  );
}


// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';

// export default function Home(){
//   return (
//     <section className="space-y-8">
//       <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.4}}>
//         <h1 className="text-3xl md:text-5xl font-bold">Full‑Stack Developer</h1>
//         <p className="mt-3 text-lg max-w-2xl">I build scalable, high‑performance applications with clean, maintainable code. Proficient in Node.js, Python/Django, Java, React, and MongoDB.</p>
//         <div className="mt-6 flex gap-3">
//           <Link className="px-4 py-2 rounded-xl bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900" to="/projects">View Projects</Link>
//           <a className="px-4 py-2 rounded-xl border" href="mailto:karora504@gmail.com">Contact</a>
//           <a className="px-4 py-2 rounded-xl border" href="https://github.com/kashin17" target="_blank">GitHub</a>
//           <a className="px-4 py-2 rounded-xl border" href="https://linkedin.com/in/kashin-arora" target="_blank">LinkedIn</a>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

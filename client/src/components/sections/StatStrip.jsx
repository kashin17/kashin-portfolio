import React from 'react';
import { motion } from 'framer-motion';

export default function StatStrip() {
  const stats = [
    { k: '4+', v: 'Industry Projects', s: 'Forescribe, Escorts, NHPC, sbPowerDev' },
    { k: '8+', v: 'Production Projects', s: 'APIs, dashboards, mobile & web' },
    { k: '5+', v: 'Core Stacks', s: 'Node, Django, React, Spring, Flutter' },
  ];
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      {stats.map((x, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          whileHover={{ y: -4 }}
          className="relative group"
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 border border-zinc-200/50 dark:border-zinc-800/50 p-8 text-center shadow-lg shadow-zinc-900/5 dark:shadow-black/20 transition-all duration-500 hover:shadow-xl hover:shadow-zinc-900/10 dark:hover:shadow-black/30 hover:border-zinc-300/50 dark:hover:border-zinc-700/50">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="text-5xl font-bold tracking-tight bg-gradient-to-br from-blue-600 to-emerald-500 bg-clip-text text-transparent mb-2">
                {x.k}
              </div>
              <div className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                {x.v}
              </div>
              <div className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {x.s}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
// export default function StatStrip(){
//   const stats = [
//     { k: '4+', v: 'Internships', s:'Forescribe, Escorts, NHPC, sbPowerDev' },
//     { k: '8+', v: 'Production Projects', s:'APIs, dashboards, mobile & web' },
//     { k: '5+', v: 'Core Stacks', s:'Node, Django, React, Spring, Flutter' },
//   ];
//   return (
//     <div className="grid grid-cols-3 gap-3">
//       {stats.map((x,i)=>(
//         <div key={i} className="surface p-4 text-center">
//           <div className="text-2xl font-bold tracking-tight">{x.k}</div>
//           <div className="text-sm opacity-80">{x.v}</div>
//           <div className="text-xs opacity-60 mt-1">{x.s}</div>
//         </div>
//       ))}
//     </div>
//   );
// }

import React from 'react';
import { motion } from 'framer-motion';

export default function LogoCloud() {
  const logos = ['Forescribe', 'Escorts Kubota', 'NHPC', 'sbPowerDev'];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 border border-zinc-200/50 dark:border-zinc-800/50 p-8 md:p-10 shadow-lg shadow-zinc-900/5 dark:shadow-black/20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.05),transparent_50%)]" />
      <div className="relative">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-8 rounded-full bg-gradient-to-b from-blue-600 to-emerald-500" />
          <h3 className="text-xs uppercase tracking-widest font-semibold text-zinc-600 dark:text-zinc-400">
            Trusted by Industry Leaders
          </h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {logos.map((l, i) => (
            <motion.div
              key={l}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="h-16 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 flex items-center justify-center text-sm font-medium text-zinc-700 dark:text-zinc-300 transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-lg"
            >
              {l}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// export default function LogoCloud(){
//   const logos = ['Forescribe','Escorts Kubota','NHPC','Power Platform'];
//   return (
//     <div className="surface p-4 md:p-6">
//       <div className="text-xs uppercase tracking-wider opacity-60 mb-3">Experience with</div>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
//         {logos.map((l)=> (
//           <div key={l} className="h-12 rounded-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-sm opacity-80">{l}</div>
//         ))}
//       </div>
//     </div>
//   );
// }

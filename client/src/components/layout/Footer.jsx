import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/kashin17',
      icon: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/kashin-arora',
      icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z'
    },
    {
      name: 'Email',
      href: 'mailto:karora504@gmail.com',
      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
    }
  ];

  return (
    <footer className="mt-24 border-t border-zinc-200/50 dark:border-zinc-800/50">
      {/* Decorative gradient line */}
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left side - Copyright and Tech Stack */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
            <div className="text-zinc-600 dark:text-zinc-400">
              © {currentYear} <span className="font-semibold text-zinc-900 dark:text-zinc-100">Kashin Arora</span>
            </div>
            {/* <span className="hidden md:inline text-zinc-300 dark:text-zinc-700">•</span>
            <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-500">
              <span>Node</span>
              <span>·</span>
              <span>Django</span>
              <span>·</span>
              <span>React</span>
              <span>·</span>
              <span>MongoDB</span>
            </div> */}
          </div>

          {/* Right side - Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-9 h-9 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500 flex items-center justify-center transition-all hover:scale-110"
                aria-label={social.name}
              >
                <svg className="w-4 h-4 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// import React from 'react';

// export default function Footer(){
//   return (
//     <footer className="mt-20">
//       <div className="hr"></div>
//       <div className="container py-8 text-sm flex flex-col md:flex-row items-center justify-between gap-2">
//         <div className="opacity-80">© {new Date().getFullYear()} Kashin Arora</div>
//         <div className="opacity-60">Node · Django · React · MongoDB</div>
//       </div>
//     </footer>
//   );
// }

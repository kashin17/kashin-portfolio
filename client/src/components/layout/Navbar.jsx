import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const NavItem = ({ to, children, mobile = false }) => {
  const location = useLocation();
  const isActive = location.pathname === to || location.pathname.startsWith(to + '/');
  
  return (
    <NavLink
      to={to}
      className={({ isActive: routerActive }) => {
        const active = routerActive || isActive;
        return `
          relative px-5 py-2.5 rounded-xl font-medium text-base transition-all duration-300
          ${active 
            ? 'text-blue-600 dark:text-blue-400' 
            : 'text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100'
          }
          ${mobile ? 'block text-lg py-3.5' : ''}
          hover:bg-zinc-100 dark:hover:bg-zinc-800/60
        `;
      }}
    >
      {({ isActive: routerActive }) => {
        const active = routerActive || isActive;
        return (
          <>
            {children}
            {active && !mobile && (
              <motion.div
                layoutId="navbar-indicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-emerald-500"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </>
        );
      }}
    </NavLink>
  );
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on a link
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { to: '/projects', label: 'Projects', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
    { to: '/experience', label: 'Experience', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { to: '/skills', label: 'Skills', icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
    { to: '/about', label: 'About', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { to: '/contact', label: 'Contact', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' }
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`
          sticky top-0 z-50 
          backdrop-blur-xl bg-white/80 dark:bg-zinc-950/80
          border-b transition-all duration-300
          ${isScrolled 
            ? 'border-zinc-200/50 dark:border-zinc-800/50 shadow-lg shadow-zinc-900/5 dark:shadow-black/20' 
            : 'border-zinc-200/30 dark:border-zinc-800/30'
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link 
              to="/" 
              className="group flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-emerald-500 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-xl group-hover:shadow-blue-500/40 transition-shadow">
                  <span className="text-white text-base font-bold">KA</span>
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400 to-emerald-400 blur opacity-30 group-hover:opacity-50 transition-opacity" />
              </motion.div>
              
              <div className="hidden sm:block">
                <div className="text-xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                    Kashin
                  </span>
                  <span className="text-zinc-900 dark:text-zinc-100"> Arora</span>
                </div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400 -mt-0.5">
                  Full-Stack Developer
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <NavItem key={item.to} to={item.to}>
                  {item.label}
                </NavItem>
              ))}
              
              <a
                href="mailto:karora504@gmail.com"
                className="ml-3 group relative px-7 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 text-white text-base font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Hire Me
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-zinc-700 dark:text-zinc-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-white dark:bg-zinc-950 shadow-2xl lg:hidden overflow-y-auto"
            >
              <div className="p-6 space-y-6">
                {/* Mobile Header */}
                <div className="flex items-center justify-between pb-6 border-b border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-emerald-500 flex items-center justify-center shadow-lg">
                      <span className="text-white text-sm font-bold">KA</span>
                    </div>
                    <div>
                      <div className="text-base font-bold">
                        <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                          Kashin
                        </span>
                        <span className="text-zinc-900 dark:text-zinc-100"> Arora</span>
                      </div>
                      <div className="text-xs text-zinc-600 dark:text-zinc-400">
                        Full-Stack Developer
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Mobile Navigation */}
                <nav className="space-y-2">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.to}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <NavItem to={item.to} mobile>
                        <div className="flex items-center gap-3">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                          </svg>
                          {item.label}
                        </div>
                      </NavItem>
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-6 border-t border-zinc-200 dark:border-zinc-800"
                >
                  <a
                    href="mailto:karora504@gmail.com"
                    className="group block w-full px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 text-white text-center font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Hire Me
                    </span>
                  </a>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-3"
                >
                  <div className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">
                    Connect
                  </div>
                  <div className="flex gap-3">
                    {[
                      { href: 'https://github.com/kashin17', icon: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22', label: 'GitHub' },
                      { href: 'https://linkedin.com/in/kashin-arora', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z', label: 'LinkedIn' }
                    ].map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 p-3 rounded-xl border-2 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all flex items-center justify-center"
                        aria-label={social.label}
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={social.icon} />
                        </svg>
                      </a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// import React from 'react';
// import { Link, NavLink } from 'react-router-dom';

// const LinkCls = ({ to, children }) => (
//   <NavLink
//     to={to}
//     className={({ isActive }) =>
//       `px-3 py-2 rounded-lg transition hover:bg-zinc-100 dark:hover:bg-zinc-800/60 ${isActive ? 'text-brand-700 dark:text-brand-400' : 'text-zinc-700 dark:text-zinc-300'}`
//     }
//   >
//     {children}
//   </NavLink>
// );

// export default function Navbar() {
//   return (
//     <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 supports-[backdrop-filter]:dark:bg-zinc-950/50 border-b border-zinc-200 dark:border-zinc-900">
//       <div className="container h-16 flex items-center justify-between">
//         <Link to="/" className="font-semibold text-lg tracking-tight flex items-center gap-2">
//           <span className="inline-flex h-7 w-7 rounded-lg items-center justify-center bg-brand-600 text-white text-sm">KA</span>
//           <span className="hidden sm:block"><span className="text-brand-600">Kashin</span> Arora</span>
//         </Link>
//         <nav className="flex gap-1 items-center">
//           <LinkCls to="/projects">Projects</LinkCls>
//           <LinkCls to="/experience">Experience</LinkCls>
//           <LinkCls to="/skills">Skills</LinkCls>
//           <LinkCls to="/about">About</LinkCls>
//           <LinkCls to="/contact">Contact</LinkCls>
//           <a href="mailto:karora504@gmail.com" className="ml-2 btn btn-primary ring-gradient">Hire me</a>
//         </nav>
//       </div>
//     </header>
//   );
// }

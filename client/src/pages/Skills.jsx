import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { api } from '../lib/api';

// Icon mapping for different skill categories
const categoryIcons = {
  language: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  framework: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
  database: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
  tool: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
  cloud: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
  devops: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
  frontend: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  backend: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
  mobile: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
  other: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z',
};

// Color schemes for different categories
const categoryColors = {
  languages: { from: 'from-blue-500', to: 'to-cyan-500', bg: 'bg-blue-50 dark:bg-blue-950/50', border: 'border-blue-200 dark:border-blue-900', text: 'text-blue-600 dark:text-blue-400' },
  frameworks: { from: 'from-purple-500', to: 'to-pink-500', bg: 'bg-purple-50 dark:bg-purple-950/50', border: 'border-purple-200 dark:border-purple-900', text: 'text-purple-600 dark:text-purple-400' },
  databases: { from: 'from-emerald-500', to: 'to-teal-500', bg: 'bg-emerald-50 dark:bg-emerald-950/50', border: 'border-emerald-200 dark:border-emerald-900', text: 'text-emerald-600 dark:text-emerald-400' },
  tools: { from: 'from-orange-500', to: 'to-amber-500', bg: 'bg-orange-50 dark:bg-orange-950/50', border: 'border-orange-200 dark:border-orange-900', text: 'text-orange-600 dark:text-orange-400' },
  cloud: { from: 'from-sky-500', to: 'to-blue-500', bg: 'bg-sky-50 dark:bg-sky-950/50', border: 'border-sky-200 dark:border-sky-900', text: 'text-sky-600 dark:text-sky-400' },
  devops: { from: 'from-red-500', to: 'to-rose-500', bg: 'bg-red-50 dark:bg-red-950/50', border: 'border-red-200 dark:border-red-900', text: 'text-red-600 dark:text-red-400' },
  frontend: { from: 'from-indigo-500', to: 'to-purple-500', bg: 'bg-indigo-50 dark:bg-indigo-950/50', border: 'border-indigo-200 dark:border-indigo-900', text: 'text-indigo-600 dark:text-indigo-400' },
  backend: { from: 'from-slate-500', to: 'to-gray-500', bg: 'bg-slate-50 dark:bg-slate-950/50', border: 'border-slate-200 dark:border-slate-900', text: 'text-slate-600 dark:text-slate-400' },
  mobile: { from: 'from-green-500', to: 'to-emerald-500', bg: 'bg-green-50 dark:bg-green-950/50', border: 'border-green-200 dark:border-green-900', text: 'text-green-600 dark:text-green-400' },
  other: { from: 'from-zinc-500', to: 'to-gray-500', bg: 'bg-zinc-50 dark:bg-zinc-950/50', border: 'border-zinc-200 dark:border-zinc-900', text: 'text-zinc-600 dark:text-zinc-400' },
};

export default function Skills() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setIsLoading(true);
    api.get('/skills')
      .then(r => {
        setItems(r.data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  const groups = useMemo(() => {
    return items.reduce((acc, s) => {
      const group = s.group?.toLowerCase() || 'other';
      (acc[group] ||= []).push(s);
      return acc;
    }, {});
  }, [items]);

  const filteredGroups = useMemo(() => {
    let filtered = { ...groups };
    
    if (selectedCategory !== 'all') {
      filtered = { [selectedCategory]: groups[selectedCategory] || [] };
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = Object.entries(filtered).reduce((acc, [key, skills]) => {
        const matchingSkills = skills.filter(s => 
          s.name?.toLowerCase().includes(query)
        );
        if (matchingSkills.length > 0) {
          acc[key] = matchingSkills;
        }
        return acc;
      }, {});
    }
    
    return filtered;
  }, [groups, selectedCategory, searchQuery]);

  const totalSkills = items.length;
  const categoryCount = Object.keys(groups).length;

  return (
    <div className="min-h-screen">
      {/* Animated background gradients */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-indigo-50 via-transparent to-transparent dark:from-indigo-950/20 dark:via-transparent blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-cyan-50 via-transparent to-transparent dark:from-cyan-950/20 dark:via-transparent blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
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
              <span className="font-medium text-zinc-900 dark:text-zinc-100">Skills</span>
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
                  Technical Skills
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed"
              >
                A comprehensive overview of technologies, frameworks, and tools I work with to build robust, scalable applications.
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                    {totalSkills}
                  </div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-400">
                    Total Skills
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-950/50 dark:to-purple-900/30 border border-purple-200 dark:border-purple-900 flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                    {categoryCount}
                  </div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-400">
                    Categories
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-50 dark:from-emerald-950/50 dark:to-emerald-900/30 border border-emerald-200 dark:border-emerald-900 flex items-center justify-center">
                  <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                    {Object.values(groups).flat().filter(s => s.level === 'expert' || s.proficiency > 80).length}
                  </div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-400">
                    Expert Level
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Filters Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="space-y-4"
        >
          {/* Search Bar */}
          <div className="relative max-w-md">
            <input
              type="text"
              placeholder="Search skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-3.5 pl-12 rounded-xl bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 dark:placeholder-zinc-400 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all outline-none"
            />
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Category Filters */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-zinc-600 dark:text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              <span className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">
                Filter by Category
              </span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={() => setSelectedCategory('all')}
                className={`
                  px-4 py-2 rounded-xl text-sm font-medium border-2 
                  transition-all duration-300 hover:scale-105
                  ${selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white border-transparent shadow-lg shadow-blue-500/30'
                    : 'bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md'
                  }
                `}
              >
                All Skills
                <span className={`ml-1.5 ${selectedCategory === 'all' ? 'text-white/80' : 'text-zinc-500'}`}>
                  ({totalSkills})
                </span>
              </motion.button>
              
              {Object.keys(groups).sort().map((cat, i) => (
                <motion.button
                  key={cat}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: (i + 1) * 0.02 }}
                  onClick={() => setSelectedCategory(cat)}
                  className={`
                    px-4 py-2 rounded-xl text-sm font-medium border-2 capitalize
                    transition-all duration-300 hover:scale-105
                    ${selectedCategory === cat
                      ? 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white border-transparent shadow-lg shadow-blue-500/30'
                      : 'bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md'
                    }
                  `}
                >
                  {cat}
                  <span className={`ml-1.5 ${selectedCategory === cat ? 'text-white/80' : 'text-zinc-500'}`}>
                    ({groups[cat].length})
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Results Info */}
          {(selectedCategory !== 'all' || searchQuery) && (
            <div className="flex items-center justify-between pt-2">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Showing <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                  {Object.values(filteredGroups).flat().length}
                </span> of {totalSkills} skills
              </p>
              
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </motion.section>

        {/* Skills Grid */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-8"
        >
          {isLoading ? (
            <div className="space-y-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="space-y-4">
                  <div className="h-8 w-48 rounded skeleton" />
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {[1, 2, 3, 4, 5, 6].map(j => (
                      <div key={j} className="h-12 rounded-xl skeleton" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : Object.keys(filteredGroups).length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <div className="w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                <svg className="w-10 h-10 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                No skills found
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-md">
                Try adjusting your filters or search query to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:scale-105 transition-all"
              >
                Clear all filters
              </button>
            </motion.div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory + searchQuery}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {Object.entries(filteredGroups).sort().map(([group, skills], idx) => {
                  const colors = categoryColors[group] || categoryColors.other;
                  const icon = categoryIcons[group] || categoryIcons.other;
                  
                  return (
                    <motion.div
                      key={group}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="group"
                    >
                      <motion.div
                        whileHover={{ y: -2 }}
                        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 border border-zinc-200/50 dark:border-zinc-800/50 p-6 md:p-8 shadow-lg shadow-zinc-900/5 dark:shadow-black/20 transition-all duration-500 hover:shadow-xl hover:shadow-zinc-900/10 dark:hover:shadow-black/30 hover:border-zinc-300/50 dark:hover:border-zinc-700/50"
                      >
                        {/* Category Header */}
                        <div className="flex items-center gap-3 mb-6">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.from} ${colors.to} flex items-center justify-center shadow-lg`}>
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 capitalize">
                              {group}
                            </h3>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400">
                              {skills.length} {skills.length === 1 ? 'skill' : 'skills'}
                            </p>
                          </div>
                        </div>

                        {/* Skills Grid */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                          {skills.map((skill, i) => (
                            <motion.div
                              key={skill._id}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: i * 0.03 }}
                              whileHover={{ scale: 1.05, y: -2 }}
                              className={`
                                relative px-4 py-3 rounded-xl 
                                ${colors.bg} ${colors.border}
                                border-2 font-medium text-sm
                                transition-all duration-300
                                hover:shadow-lg cursor-default
                                group/skill overflow-hidden
                              `}
                            >
                              {/* Skill Name */}
                              <div className="relative z-10 flex items-center justify-between gap-2">
                                <span className={`${colors.text} font-semibold`}>
                                  {skill.name}
                                </span>
                                
                                {/* Proficiency Indicator */}
                                {skill.proficiency && (
                                  <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, idx) => (
                                      <div
                                        key={idx}
                                        className={`w-1 h-1 rounded-full transition-all ${
                                          idx < Math.ceil(skill.proficiency / 20)
                                            ? `bg-gradient-to-r ${colors.from} ${colors.to}`
                                            : 'bg-zinc-300 dark:bg-zinc-700'
                                        }`}
                                      />
                                    ))}
                                  </div>
                                )}
                                
                                {/* Level Badge */}
                                {skill.level && (
                                  <span className={`text-xs px-2 py-0.5 rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}>
                                    {skill.level}
                                  </span>
                                )}
                              </div>

                              {/* Hover shine effect */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/skill:translate-x-full transition-transform duration-700" />
                            </motion.div>
                          ))}
                        </div>

                        {/* Background gradient on hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${colors.from}/5 ${colors.to}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          )}
        </motion.section>

        {/* Additional Info Section */}
        {!isLoading && items.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-purple-50 to-emerald-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-emerald-950/20 border border-blue-200/50 dark:border-blue-900/50 p-8 md:p-10"
          >
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center shadow-lg flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                    Continuous Learning
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    This skill set is constantly evolving. I actively learn new technologies and stay updated with industry best practices to deliver modern, efficient solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-emerald-400/20 to-transparent rounded-full blur-3xl" />
          </motion.section>
        )}
      </div>
    </div>
  );
}


// import React, { useEffect, useState } from 'react';
// import { api } from '../lib/api';

// export default function Skills(){
//   const [items,setItems] = useState([]);
//   useEffect(()=>{ api.get('/skills').then(r=>setItems(r.data)); },[]);
//   const groups = items.reduce((acc, s) => { (acc[s.group] ||= []).push(s); return acc; }, {});
//   return (
//     <section className="space-y-6">
//       <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Skills</h2>
//       {Object.entries(groups).map(([g, arr]) => (
//         <div key={g} className="card p-4">
//           <div className="font-semibold capitalize mb-2">{g}</div>
//           <div className="flex flex-wrap gap-2">
//             {arr.map(s => <span key={s._id} className="px-3 py-1 border rounded-full text-sm">{s.name}</span>)}
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// }

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Cloud,
  Workflow,
  ShieldCheck,
  Database,
  Network,
  Cpu,
  Boxes,
  Terminal,
  Layers
} from 'lucide-react';
import { skillsCategories } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', ...skillsCategories.map((c) => c.title)];

  const getCategoryIcon = (title) => {
    switch (title) {
      case 'DevOps & CI/CD':
        return <Workflow className="w-5 h-5 text-cyan-400" />;
      case 'Cloud & Infrastructure':
        return <Cloud className="w-5 h-5 text-blue-400" />;
      case 'Security & Testing':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'Programming Languages':
        return <Code className="w-5 h-5 text-purple-400" />;
      case 'Databases & OS':
        return <Database className="w-5 h-5 text-amber-400" />;
      case 'Networking':
        return <Network className="w-5 h-5 text-indigo-400" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  const filteredCategories =
    activeTab === 'All'
      ? skillsCategories
      : skillsCategories.filter((c) => c.title === activeTab);

  return (
    <section id="skills" className="py-24 relative z-10 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>02. TECHNICAL SKILLS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-gray-100 tracking-tight"
          >
            DevOps, Cloud & Engineering Toolkit
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm sm:text-base"
          >
            Production-tested tools and technologies across cloud platforms, automated CI/CD pipelines, container orchestration, and IaC security.
          </motion.p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                activeTab === category
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20 scale-105'
                  : 'bg-slate-900/80 text-gray-400 border border-gray-800 hover:text-white hover:border-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((categoryGroup, index) => (
            <motion.div
              key={categoryGroup.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-panel p-6 sm:p-7 rounded-2xl border border-gray-800/80 hover:border-cyan-500/40 transition-all duration-300 group hover:shadow-[0_8px_30px_rgba(6,182,212,0.12)] flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-gray-800/80">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-gray-800 group-hover:scale-110 transition-transform duration-200">
                      {getCategoryIcon(categoryGroup.title)}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-100 text-base group-hover:text-cyan-400 transition-colors">
                        {categoryGroup.title}
                      </h3>
                      <p className="text-[11px] text-gray-400 font-mono">
                        {categoryGroup.skills.length} core competencies
                      </p>
                    </div>
                  </div>
                </div>

                {/* Clean Flex Badges Layout (No Progress Bars or Percentages) */}
                <div className="flex flex-wrap gap-2.5 pt-1">
                  {categoryGroup.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/90 border border-gray-800/90 hover:border-cyan-500/50 hover:bg-slate-800/80 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-200 group/badge cursor-default"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover/badge:scale-125 group-hover/badge:bg-cyan-300 transition-all" />
                      <span className="text-xs font-medium text-gray-200 group-hover/badge:text-cyan-300 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sub-description footer */}
              <div className="mt-6 pt-3 border-t border-gray-800/60 text-[11px] text-gray-500 font-mono italic">
                {categoryGroup.description}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

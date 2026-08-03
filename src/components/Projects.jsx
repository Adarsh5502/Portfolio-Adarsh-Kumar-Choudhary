import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FolderGit2,
  ExternalLink,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  Boxes,
  Maximize2
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { featuredProjects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'DevSecOps', 'Cloud & IaC', 'Full Stack'];

  const filteredProjects =
    activeCategory === 'All'
      ? featuredProjects
      : featuredProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative z-10 bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>03. FEATURED PROJECTS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-gray-100 tracking-tight"
          >
            Production-Grade Infrastructure & Applications
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm sm:text-base"
          >
            Real-world DevOps pipelines, modular Infrastructure-as-Code setups, multi-cloud architectures, and full-stack web platforms.
          </motion.p>
        </div>

        {/* Project Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20 scale-105'
                  : 'bg-slate-900/80 text-gray-400 border border-gray-800 hover:text-white hover:border-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-panel rounded-2xl border border-gray-800/80 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:shadow-[0_12px_40px_rgba(6,182,212,0.15)] hover:-translate-y-1"
            >
              {/* Card Header & Category Badge */}
              <div className="p-6 space-y-4">
                
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-gray-500">{project.year}</span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-bold text-gray-100 text-lg group-hover:text-cyan-400 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-cyan-400" />
                  </h3>
                  <p className="text-xs font-mono text-cyan-300/80 line-clamp-1">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-gray-300 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.slice(0, 5).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded bg-slate-900 text-gray-400 text-[11px] font-mono border border-gray-800"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 5 && (
                    <span className="px-2 py-0.5 rounded bg-slate-900 text-cyan-400 text-[11px] font-mono border border-gray-800">
                      +{project.tags.length - 5}
                    </span>
                  )}
                </div>

              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-4 bg-slate-900/60 border-t border-gray-800/80 flex items-center justify-between text-xs">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-mono font-semibold transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Architecture Details</span>
                </button>

                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub Repository"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Live Project Link"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

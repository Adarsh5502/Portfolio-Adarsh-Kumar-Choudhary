import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, ShieldCheck } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        
        {/* Backdrop overlay click */}
        <div className="fixed inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-3xl bg-[#0F172A] border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden z-10 my-8"
        >
          {/* Top Header Bar */}
          <div className="px-6 py-4 bg-slate-900 border-b border-gray-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold">
                {project.category}
              </span>
              <span className="text-xs font-mono text-gray-400">• {project.year}</span>
            </div>
            
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
            
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-100">
                {project.title}
              </h2>
              <p className="text-sm font-mono text-cyan-400 mt-1">
                {project.subtitle}
              </p>
            </div>

            {/* Architecture Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.metrics.map((metric, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-900/80 border border-gray-800 font-mono text-xs">
                  <div className="text-gray-500 text-[11px]">{metric.label}</div>
                  <div className="text-cyan-300 font-semibold mt-0.5">{metric.value}</div>
                </div>
              ))}
            </div>

            {/* Detailed Description */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider font-mono">
                Project Overview & Technical Breakdown
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line bg-slate-950/60 p-4 rounded-xl border border-gray-800 font-sans">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Technology Badges */}
            <div className="space-y-2">
              <h3 className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                Technologies & Tools Deployed
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-gray-800">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs bg-slate-800 text-gray-200 hover:bg-slate-700 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Source Repository</span>
              </a>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20 transition-all duration-200"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo / Docs</span>
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

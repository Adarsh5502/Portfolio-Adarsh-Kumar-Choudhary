import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Eye, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeSection({ onOpenResume }) {
  return (
    <section id="resume" className="py-24 relative z-10 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>06. RESUME & CREDENTIALS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-gray-100 tracking-tight"
          >
            Curriculum Vitae Preview
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm sm:text-base"
          >
            Structured overview of academic record, industrial certifications, DevOps projects, and technical skills.
          </motion.p>
        </div>

        {/* Main Resume Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass-panel p-8 sm:p-12 rounded-3xl border border-cyan-500/30 relative overflow-hidden shadow-2xl"
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-block px-3 py-1 rounded-lg bg-cyan-950 text-cyan-300 text-xs font-mono border border-cyan-500/30">
                Official Resume Document
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Adarsh Kumar Choudhary
              </h3>

              <p className="text-cyan-400 text-sm font-mono">
                B.Tech Computer Science and Engineering • Silicon University
              </p>

              <div className="space-y-2 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>DevOps Masters & AWS Masters Industrial Certifications</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Hands-on with EKS, ArgoCD GitOps, Terraform IaC, & DevSecOps</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Academic CGPA: 7.76 / 10 | Class of 2027</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={onOpenResume}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 transition-all duration-200"
                >
                  <Eye className="w-4 h-4" />
                  <span>Interactive Full Preview</span>
                </button>

                <button
                  onClick={onOpenResume}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-slate-900 text-gray-200 border border-gray-800 hover:bg-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-200"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </button>
              </div>
            </div>

            {/* Right Mock Preview Frame */}
            <div className="lg:col-span-5 relative">
              <div className="bg-[#0B0F19] p-5 rounded-2xl border border-gray-800 shadow-xl space-y-3 font-mono text-[10px] text-gray-400 hover:border-cyan-500/40 transition-colors cursor-pointer" onClick={onOpenResume}>
                <div className="flex justify-between items-center border-b border-gray-800 pb-2 text-cyan-400">
                  <span>RESUME.PDF</span>
                  <span className="text-gray-500">2 PAGE / ATS</span>
                </div>
                <div className="h-2 w-3/4 bg-gray-800 rounded" />
                <div className="h-2 w-1/2 bg-gray-800 rounded" />
                <div className="space-y-1 pt-2">
                  <div className="h-1.5 w-full bg-cyan-950 rounded" />
                  <div className="h-1.5 w-5/6 bg-cyan-950 rounded" />
                  <div className="h-1.5 w-4/6 bg-cyan-950 rounded" />
                </div>
                <div className="p-2.5 rounded bg-slate-950 border border-gray-900 text-cyan-300 font-sans text-[11px]">
                  Click to launch interactive viewer & print format
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

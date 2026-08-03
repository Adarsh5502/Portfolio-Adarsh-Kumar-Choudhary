import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, Calendar, MapPin, ShieldCheck, Sparkles } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative z-10 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono"
          >
            <Award className="w-3.5 h-3.5" />
            <span>04. CERTIFICATIONS & TRAINING</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-gray-100 tracking-tight"
          >
            Industrial Training & Technical Certifications
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm sm:text-base"
          >
            Specialized industrial training programs covering AWS cloud architecture, DevSecOps pipelines, and computer science foundations.
          </motion.p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-panel p-6 sm:p-7 rounded-2xl border border-gray-800/80 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_10px_35px_rgba(6,182,212,0.12)]"
            >
              <div className="space-y-4">
                
                {/* Badge Header */}
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${cert.badgeColor} text-slate-950 shadow-md font-bold`}>
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-500/30">
                    Verified Training
                  </span>
                </div>

                {/* Title & Issuer */}
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-gray-100 group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="text-xs font-mono text-gray-400 flex items-center gap-2">
                    <span className="text-cyan-400 font-semibold">{cert.issuer}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-gray-500" />
                      {cert.date}
                    </span>
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="space-y-2 pt-2 border-t border-gray-800/80 text-xs text-gray-300">
                  {cert.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Verified Skills Tags */}
              <div className="mt-6 pt-4 border-t border-gray-800/80 space-y-2">
                <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">
                  Skills Verified:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded bg-slate-900 text-gray-300 text-[10px] font-mono border border-gray-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import { educationTimeline } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative z-10 bg-slate-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>05. ACADEMIC TIMELINE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-gray-100 tracking-tight"
          >
            Education & Academic Foundation
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm sm:text-base"
          >
            Strong theoretical and practical background in Computer Science & Engineering.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-indigo-600 transform -translate-x-1/2 hidden sm:block opacity-40" />

          <div className="space-y-12">
            {educationTimeline.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.institution}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot Icon */}
                  <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-9 h-9 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 z-20 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                    <GraduationCap className="w-4 h-4" />
                  </div>

                  {/* Card Content */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                    <div className="glass-panel p-6 rounded-2xl border border-gray-800 hover:border-cyan-500/40 transition-all duration-300 group hover:shadow-[0_10px_30px_rgba(6,182,212,0.12)]">
                      
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded-md bg-cyan-950 text-cyan-300 text-xs font-mono font-semibold border border-cyan-500/30">
                          {item.score}
                        </span>
                        <span className="text-xs font-mono text-gray-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-gray-500" />
                          {item.period}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-100 group-hover:text-cyan-300 transition-colors">
                        {item.institution}
                      </h3>

                      <p className="text-sm font-semibold text-cyan-400 mt-0.5">
                        {item.degree}
                      </p>

                      <div className="text-xs font-mono text-gray-400 flex items-center gap-1 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-cyan-500" />
                        <span>{item.location}</span>
                      </div>

                      <p className="text-xs text-gray-300 mt-3 leading-relaxed border-t border-gray-800/80 pt-3">
                        {item.description}
                      </p>

                      <div className="space-y-1.5 mt-3 pt-2">
                        {item.achievements.map((ach, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Mail,
  Terminal,
  Cloud,
  Cpu,
  Boxes,
  ShieldCheck,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = personalInfo.roles;

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      }, 40);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }, 80);
    }

    if (!isDeleting && displayText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles]);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Glow Orbs in Background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Intro Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-md"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-cyan-300">
                Available for DevOps & Cloud Roles
              </span>
            </motion.div>

            {/* Main Name Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                  {personalInfo.name}
                </span>
              </h1>

              {/* Animated Typewriter Title */}
              <div className="h-10 flex items-center justify-center lg:justify-start">
                <span className="text-xl sm:text-2xl font-mono text-cyan-400 font-medium">
                  {displayText}
                  <span className="animate-pulse text-blue-400">|</span>
                </span>
              </div>
            </motion.div>

            {/* Bio Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-300 max-w-2xl font-normal leading-relaxed"
            >
              Computer Science student at <span className="text-gray-100 font-semibold">Silicon University</span> specializing in AWS cloud infrastructure, Kubernetes orchestration, modular Terraform IaC, and security-first CI/CD automation pipelines.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-slate-950 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-slate-900/80 text-gray-200 border border-gray-700/80 hover:bg-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 backdrop-blur-md transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </motion.div>

            {/* Social Icons Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-4 pt-4 border-t border-gray-800/80"
            >
              <span className="text-xs font-mono text-gray-400">Connect:</span>
              
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-lg bg-gray-900/80 border border-gray-800 text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-200"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-lg bg-gray-900/80 border border-gray-800 text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-200"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send Email"
                className="p-2.5 rounded-lg bg-gray-900/80 border border-gray-800 text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
              </a>
            </motion.div>

          </div>

          {/* Right Column: High-Tech Profile Card & Interactive Metrics */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-panel p-6 rounded-2xl border border-cyan-500/30 relative overflow-hidden shadow-2xl"
            >
              {/* Corner Ambient Light */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/15 rounded-full blur-2xl pointer-events-none" />

              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-gray-800 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="font-mono text-xs text-gray-400">
                  cloud-node-01.local
                </span>
              </div>

              {/* Profile Card Main Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-cyan-500/30">
                    AKC
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-100 text-lg">
                      Adarsh Kumar Choudhary
                    </h3>
                    <p className="text-xs text-cyan-400 font-mono">
                      Silicon University • B.Tech CSE (2027)
                    </p>
                  </div>
                </div>

                {/* Tech Highlights Pill Grid */}
                <div className="grid grid-cols-2 gap-2.5 pt-2">
                  <div className="p-2.5 rounded-xl bg-slate-950/70 border border-gray-800 flex items-center gap-2.5">
                    <Cloud className="w-4 h-4 text-cyan-400" />
                    <div>
                      <div className="text-[11px] text-gray-400">Cloud Stack</div>
                      <div className="text-xs font-semibold text-gray-200">AWS & Azure</div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-950/70 border border-gray-800 flex items-center gap-2.5">
                    <Boxes className="w-4 h-4 text-blue-400" />
                    <div>
                      <div className="text-[11px] text-gray-400">Container</div>
                      <div className="text-xs font-semibold text-gray-200">Docker / EKS</div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-950/70 border border-gray-800 flex items-center gap-2.5">
                    <Cpu className="w-4 h-4 text-indigo-400" />
                    <div>
                      <div className="text-[11px] text-gray-400">IaC Engine</div>
                      <div className="text-xs font-semibold text-gray-200">Terraform</div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-950/70 border border-gray-800 flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <div>
                      <div className="text-[11px] text-gray-400">Security</div>
                      <div className="text-xs font-semibold text-gray-200">tfsec & Trivy</div>
                    </div>
                  </div>
                </div>

                {/* Quick Academic Stat Banner */}
                <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-950/40 to-blue-950/40 border border-cyan-500/20 flex items-center justify-between text-xs">
                  <span className="text-gray-300 font-medium">B.Tech Academic CGPA</span>
                  <span className="font-mono font-bold text-cyan-300 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-500/30">
                    7.76 / 10.0
                  </span>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

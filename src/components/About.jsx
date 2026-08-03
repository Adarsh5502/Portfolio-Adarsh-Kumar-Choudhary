import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  User,
  GraduationCap,
  Award,
  Terminal as TerminalIcon,
  CheckCircle2,
  MapPin,
  Mail,
  Phone,
  Code2,
  Layers
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const [terminalInput, setTerminalInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([
    { cmd: 'adarsh --fetch-profile', output: 'Fetching Cloud & DevOps Engineer metadata...' },
    {
      cmd: '',
      output: `[STATUS]: Active CS Student @ Silicon University\n[SPECIALIZATION]: AWS Cloud, EKS Kubernetes, Terraform IaC, DevSecOps\n[LOCATION]: Jamshedpur / Bhubaneswar, India\n[CERTIFICATIONS]: DevOps Masters (2025), AWS Masters (2024), NPTEL`
    }
  ]);

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const trimmed = terminalInput.trim().toLowerCase();
    let response = '';

    switch (trimmed) {
      case 'help':
        response = `Available commands:\n  profile   - Display full bio overview\n  skills    - List top DevOps & Cloud skills\n  projects  - View major project highlights\n  contact   - Show contact information\n  clear     - Clear terminal screen`;
        break;
      case 'profile':
        response = `Adarsh Kumar Choudhary | B.Tech CSE @ Silicon University (CGPA 7.76)\nSpecialized in Kubernetes (EKS), Terraform, Docker, AWS, and GitOps.`;
        break;
      case 'skills':
        response = `Docker, Kubernetes (EKS), Terraform, AWS, Azure, ArgoCD, Helm, GitHub Actions, Java, Python, SQL, Linux`;
        break;
      case 'projects':
        response = `1. DevSecOps EKS Pipeline (ArgoCD + Sealed Secrets + Trivy)\n2. Terraform Modular CI/CD (ECS Fargate + Terratest)\n3. Azure High Availability Multi-Tier Web Architecture`;
        break;
      case 'contact':
        response = `Email: ${personalInfo.email}\nPhone: ${personalInfo.phone}\nLinkedIn: ${personalInfo.linkedin}`;
        break;
      case 'clear':
        setCommandHistory([]);
        setTerminalInput('');
        return;
      case '':
        return;
      default:
        response = `Command not recognized: '${trimmed}'. Type 'help' for commands.`;
    }

    setCommandHistory((prev) => [
      ...prev,
      { cmd: terminalInput, output: response }
    ]);
    setTerminalInput('');
  };

  return (
    <section id="about" className="py-24 relative z-10 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono"
          >
            <User className="w-3.5 h-3.5" />
            <span>01. ABOUT ME</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-gray-100 tracking-tight"
          >
            Bridging Development & Cloud Operations
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm sm:text-base"
          >
            Passionate about building self-healing infrastructure, declarative GitOps continuous delivery, and robust container orchestrations.
          </motion.p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Bio Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-gray-800 space-y-4">
              <h3 className="text-xl font-bold text-gray-100 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-cyan-400" />
                Computer Science & Engineering Student
              </h3>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {personalInfo.aboutBio}
              </p>

              <div className="space-y-2.5 pt-2 border-t border-gray-800">
                <h4 className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider">
                  Core Engineering Passion & Focus Areas:
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/60 border border-gray-800/80">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>Cloud Computing (AWS & Azure)</span>
                  </div>

                  <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/60 border border-gray-800/80">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>DevOps & Containerization</span>
                  </div>

                  <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/60 border border-gray-800/80">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>Infrastructure Automation (IaC)</span>
                  </div>

                  <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/60 border border-gray-800/80">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>Kubernetes & GitOps (ArgoCD)</span>
                  </div>

                  <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/60 border border-gray-800/80">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>Platform Engineering</span>
                  </div>

                  <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/60 border border-gray-800/80">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>DevSecOps & Code Scanning</span>
                  </div>
                </div>
              </div>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-800 text-xs">
                <div>
                  <span className="text-gray-500 block">University:</span>
                  <span className="text-gray-200 font-semibold">{personalInfo.education.university}</span>
                </div>

                <div>
                  <span className="text-gray-500 block">Current CGPA:</span>
                  <span className="text-cyan-400 font-mono font-bold">{personalInfo.education.cgpa}</span>
                </div>

                <div>
                  <span className="text-gray-500 block">Graduation Year:</span>
                  <span className="text-gray-200 font-semibold">June 2027</span>
                </div>

                <div>
                  <span className="text-gray-500 block">Location:</span>
                  <span className="text-gray-200 font-semibold">Odisha / Jharkhand</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="bg-[#0D1117] rounded-2xl border border-gray-800 shadow-2xl overflow-hidden font-mono text-xs">
              {/* Terminal Titlebar */}
              <div className="bg-slate-900 px-4 py-3 border-b border-gray-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs text-gray-400 font-mono flex items-center gap-1.5">
                    <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" /> bash ~ adarsh-cli
                  </span>
                </div>
                <span className="text-[10px] text-gray-500 bg-slate-950 px-2 py-0.5 rounded border border-gray-800">
                  Interactive
                </span>
              </div>

              {/* Terminal Logs Content */}
              <div className="p-4 sm:p-5 h-[320px] overflow-y-auto space-y-3 text-gray-300">
                <div className="text-gray-500 text-[11px]">
                  # Type 'help' for available CLI options or 'skills', 'projects', 'profile', 'clear'
                </div>

                {commandHistory.map((item, index) => (
                  <div key={index} className="space-y-1">
                    {item.cmd && (
                      <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                        <span className="text-gray-500">$</span>
                        <span>{item.cmd}</span>
                      </div>
                    )}
                    {item.output && (
                      <div className="text-gray-300 whitespace-pre-line pl-4 border-l-2 border-cyan-500/30 leading-relaxed text-[11px]">
                        {item.output}
                      </div>
                    )}
                  </div>
                ))}

                {/* Input Prompt */}
                <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 pt-2">
                  <span className="text-cyan-400 font-bold">$</span>
                  <input
                    type="text"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    placeholder="type a command..."
                    className="flex-1 bg-transparent text-gray-100 outline-none border-none text-xs focus:ring-0 placeholder-gray-600 font-mono"
                  />
                </form>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, Cloud, CheckCircle2 } from 'lucide-react';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing Infrastructure...');

  const steps = [
    { at: 20, text: 'Connecting to AWS EKS Cluster...' },
    { at: 45, text: 'Loading DevOps Modules & Terraform IaC...' },
    { at: 75, text: 'Verifying GitOps Pipelines & Sealed Secrets...' },
    { at: 95, text: 'Ready! Launching Portfolio...' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 400);
          return 100;
        }

        const next = prev + Math.floor(Math.random() * 8) + 4;
        const currentStep = steps.find((s) => s.at <= next && prev < s.at);
        if (currentStep) {
          setStatusText(currentStep.text);
        }

        return next > 100 ? 100 : next;
      });
    }, 80);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B0F19] text-white px-4"
    >
      <div className="w-full max-w-md p-6 glass-panel rounded-2xl border border-cyan-500/20 shadow-[0_0_50px_rgba(6,182,212,0.15)] relative overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />

        {/* Brand / Logo Header */}
        <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-cyan-500/25">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-semibold text-lg text-gray-100 tracking-wide">
                Adarsh Kumar Choudhary
              </h2>
              <p className="text-xs text-cyan-400 font-mono">DevOps & Cloud Engineer</p>
            </div>
          </div>
          <span className="font-mono text-xs text-gray-400 bg-gray-900/80 px-2.5 py-1 rounded-md border border-gray-800">
            v2.0.25
          </span>
        </div>

        {/* Progress Display */}
        <div className="space-y-4">
          <div className="flex justify-between items-center text-xs font-mono">
            <span className="text-cyan-400 flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 animate-spin" />
              {statusText}
            </span>
            <span className="text-gray-400">{progress}%</span>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2 bg-gray-900 rounded-full overflow-hidden border border-gray-800 p-0.5">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-full shadow-[0_0_12px_#06b6d4]"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut', duration: 0.1 }}
            />
          </div>

          {/* Terminal output mockup */}
          <div className="bg-slate-950/80 border border-gray-800/80 rounded-lg p-3 font-mono text-[11px] text-gray-400 space-y-1">
            <div className="text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3 h-3" /> System kernel: Linux x86_64
            </div>
            <div className="text-cyan-400 flex items-center gap-1.5">
              <Cloud className="w-3 h-3" /> EKS Cluster status: Operational
            </div>
            <div className="text-gray-500 text-[10px] pt-1 border-t border-gray-900">
              $ agy deploy --environment=production
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

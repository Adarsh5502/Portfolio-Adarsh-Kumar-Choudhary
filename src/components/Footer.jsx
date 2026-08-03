import React from 'react';
import { Terminal, Heart, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070A10] border-t border-gray-800/80 py-10 relative z-10 text-xs text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left Brand */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-bold">
            <Terminal className="w-3.5 h-3.5" />
          </div>
          <span className="font-semibold text-gray-200">
            Adarsh Kumar Choudhary
          </span>
          <span className="text-gray-600">•</span>
          <span className="font-mono text-cyan-400">DevOps & Cloud Engineer</span>
        </div>

        {/* Center Credits */}
        <div className="flex items-center gap-1 font-mono text-[11px] text-gray-400">
          <span>Built with React + Vite + Tailwind CSS</span>
        </div>

        {/* Right Copyright & Scroll Up */}
        <div className="flex items-center gap-4">
          <span className="font-mono text-[11px] text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </span>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-gray-900 border border-gray-800 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
            title="Back to Top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}

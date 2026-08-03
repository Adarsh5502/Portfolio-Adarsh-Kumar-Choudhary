import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-slate-900/90 text-cyan-400 border border-cyan-500/30 backdrop-blur-md shadow-lg hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300 transform hover:scale-110 group"
    >
      <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-200" />
    </button>
  );
}

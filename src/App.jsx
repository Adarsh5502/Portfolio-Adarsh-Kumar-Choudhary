import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import BackgroundCanvas from './components/BackgroundCanvas';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import ResumeSection from './components/ResumeSection';
import ResumeModal from './components/ResumeModal';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#0B0F19] text-gray-100 selection:bg-cyan-500 selection:text-slate-950 font-sans">
      
      {/* Loading Splash Screen */}
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          {/* Custom Glowing Cursor for Desktop */}
          <CustomCursor />

          {/* Scroll Progress Bar */}
          <ScrollProgress />

          {/* Dynamic Particle Canvas Background */}
          <BackgroundCanvas />

          {/* Header Navigation Bar */}
          <Navbar onOpenResume={() => setResumeOpen(true)} />

          {/* Main Content Sections */}
          <main className="relative z-10">
            <Hero onOpenResume={() => setResumeOpen(true)} />
            <About />
            <Skills />
            <Projects />
            <Certifications />
            <Education />
            <ResumeSection onOpenResume={() => setResumeOpen(true)} />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />

          {/* Back to Top Floating Action Button */}
          <BackToTop />

          {/* Interactive Resume View & Print Modal */}
          <ResumeModal
            isOpen={resumeOpen}
            onClose={() => setResumeOpen(false)}
          />
        </>
      )}
    </div>
  );
}

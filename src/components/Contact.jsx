import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  Copy,
  Check,
  MapPin,
  MessageSquare
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-slate-950/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>07. GET IN TOUCH</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-gray-100 tracking-tight"
          >
            Let's Build & Deploy Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm sm:text-base"
          >
            Open for internships, entry-level DevOps/Cloud Engineering roles, project collaborations, and technical discussions.
          </motion.p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-gray-800 space-y-6">
              
              <h3 className="text-xl font-bold text-gray-100">
                Contact Details
              </h3>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-gray-800 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-gray-400 font-mono block">Direct Email</span>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-sm font-semibold text-gray-200 hover:text-cyan-400 transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    title="Copy Email"
                    className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-cyan-400 hover:bg-gray-700 transition-colors"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-gray-800 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-gray-400 font-mono block">Phone Number</span>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-sm font-semibold text-gray-200 hover:text-cyan-400 transition-colors"
                  >
                    +91 {personalInfo.phone}
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-gray-800 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-gray-400 font-mono block">Location</span>
                  <span className="text-sm font-semibold text-gray-200">
                    Bhubaneswar, Odisha / Jamshedpur, Jharkhand
                  </span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-gray-800/80 space-y-3">
                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block">
                  Connect On Social Media
                </span>
                <div className="flex gap-3">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-900 border border-gray-800 text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all font-semibold text-xs"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-900 border border-gray-800 text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all font-semibold text-xs"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-gray-800 shadow-2xl relative">
              
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-gray-300 max-w-md mx-auto">
                    Thank you for getting in touch. I have received your message and will respond promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-100 mb-2">
                    Send a Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-gray-300">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-gray-800 text-gray-100 placeholder-gray-600 text-xs sm:text-sm focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 transition-colors font-sans"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-gray-300">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-gray-800 text-gray-100 placeholder-gray-600 text-xs sm:text-sm focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 transition-colors font-sans"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-gray-300">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="DevOps Opportunity / Project Inquiry"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-gray-800 text-gray-100 placeholder-gray-600 text-xs sm:text-sm focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 transition-colors font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-gray-300">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hello Adarsh, I saw your portfolio and would like to discuss..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-gray-800 text-gray-100 placeholder-gray-600 text-xs sm:text-sm focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 transition-colors font-sans resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-slate-950 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

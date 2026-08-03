import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, ExternalLink, CheckCircle2, FileText } from 'lucide-react';
import { personalInfo, certifications, featuredProjects } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
        <div className="fixed inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-4xl bg-[#0F172A] border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden z-10 my-6 max-h-[90vh] flex flex-col"
        >
          {/* Top Bar */}
          <div className="px-6 py-4 bg-slate-900 border-b border-gray-800 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-cyan-400" />
              <span className="font-bold text-gray-100 text-sm sm:text-base font-mono">
                Resume_Adarsh_Kumar_Choudhary.pdf
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-800 text-gray-300 hover:text-white text-xs font-mono transition-colors"
              >
                <Printer className="w-4 h-4" />
                <span>Print</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-gray-800 text-gray-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Content */}
          <div className="p-6 sm:p-10 overflow-y-auto text-gray-200 space-y-6 font-sans text-xs sm:text-sm bg-[#0B0F19]">
            
            {/* Header */}
            <div className="border-b border-gray-800 pb-6 text-center space-y-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {personalInfo.name}
              </h1>
              <p className="text-cyan-400 font-mono font-medium text-xs sm:text-sm">
                {personalInfo.phone} | {personalInfo.email} | linkedin.com/in/adarsh-kumar-choudhary-035153260 | github.com/Adarsh5502
              </p>
            </div>

            {/* Education */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest border-b border-gray-800 pb-1">
                EDUCATION
              </h2>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-gray-100">{personalInfo.education.university}</h3>
                  <p className="text-gray-300">{personalInfo.education.degree} | CGPA: {personalInfo.education.cgpa}</p>
                </div>
                <div className="text-right text-xs font-mono text-gray-400">
                  <p>Bhubaneswar, Odisha</p>
                  <p>{personalInfo.education.timeline}</p>
                </div>
              </div>

              <div className="flex justify-between items-start pt-2">
                <div>
                  <h3 className="font-bold text-gray-100">{personalInfo.education.school}</h3>
                  <p className="text-gray-300">{personalInfo.education.schoolDetails}</p>
                </div>
                <div className="text-right text-xs font-mono text-gray-400">
                  <p>Jamshedpur, Jharkhand</p>
                  <p>{personalInfo.education.schoolTimeline}</p>
                </div>
              </div>
            </div>

            {/* Certifications & Industrial Training */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest border-b border-gray-800 pb-1">
                CERTIFICATIONS & TECHNICAL TRAINING
              </h2>
              {certifications.map((cert) => (
                <div key={cert.id} className="space-y-1">
                  <div className="flex justify-between items-start font-semibold">
                    <span className="text-gray-100">{cert.title}</span>
                    <span className="text-xs font-mono text-gray-400">{cert.date}</span>
                  </div>
                  <div className="text-xs text-cyan-400 font-mono">{cert.issuer} ({cert.location})</div>
                  <ul className="list-disc list-inside text-gray-300 text-xs space-y-1 pl-1">
                    {cert.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Projects */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest border-b border-gray-800 pb-1">
                PROJECTS
              </h2>
              {featuredProjects.slice(0, 3).map((p) => (
                <div key={p.id} className="space-y-1">
                  <div className="flex justify-between items-start font-semibold">
                    <span className="text-gray-100">{p.title}</span>
                    <span className="text-xs font-mono text-gray-400">{p.year}</span>
                  </div>
                  <p className="text-xs font-mono text-cyan-400">{p.tags.join(' | ')}</p>
                  <p className="text-xs text-gray-300">{p.description}</p>
                </div>
              ))}
            </div>

            {/* Technical Skills */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest border-b border-gray-800 pb-1">
                TECHNICAL SKILLS
              </h2>
              <div className="grid grid-cols-1 gap-1.5 text-xs text-gray-300">
                <p><span className="font-semibold text-gray-100">Languages:</span> Java, Python, C, SQL, JavaScript, HTML/CSS</p>
                <p><span className="font-semibold text-gray-100">DevOps & CI/CD:</span> Docker, Kubernetes (EKS), ArgoCD, Helm, GitHub Actions, AWS CodePipeline/CodeBuild/CodeDeploy</p>
                <p><span className="font-semibold text-gray-100">Cloud & Infrastructure:</span> AWS (EC2, ECS, EKS, S3, IAM, VPC, Load Balancers, CloudWatch), Azure (VNet, App Gateway, VMs), Terraform (Modular IaC)</p>
                <p><span className="font-semibold text-gray-100">Security & Testing:</span> Trivy, tfsec, Terratest, Sealed Secrets</p>
                <p><span className="font-semibold text-gray-100">Developer Tools:</span> Git, VS Code, Postman, Linux, Nginx</p>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="px-6 py-4 bg-slate-900 border-t border-gray-800 flex items-center justify-between flex-shrink-0">
            <span className="text-xs text-gray-400 font-mono">
              Formatted for recruiter view & ATS compatibility
            </span>
            <button
              onClick={() => {
                alert('Resume download triggered!');
              }}
              className="flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 hover:from-cyan-400 hover:to-blue-500 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

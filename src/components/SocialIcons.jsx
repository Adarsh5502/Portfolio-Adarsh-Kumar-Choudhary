import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6';

export function GithubIcon({ className = "w-4 h-4" }) {
  return <FaGithub className={className} />;
}

export function LinkedinIcon({ className = "w-4 h-4" }) {
  return <FaLinkedin className={className} />;
}

export function MailIcon({ className = "w-4 h-4" }) {
  return <FaEnvelope className={className} />;
}

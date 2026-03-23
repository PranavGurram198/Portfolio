import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub, FiTwitter, FiMail, FiHeart } from 'react-icons/fi';

const socials = [
  { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FiTwitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: FiMail, href: 'mailto:alex@example.com', label: 'Email' },
];

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-surface/40">
      <div className="section-padding max-w-7xl mx-auto py-14">
        {/* Top row */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg glass-blue flex items-center justify-center glow-blue-sm">
                <span className="text-sm font-display font-bold text-gradient">AM</span>
              </div>
              <span className="font-display font-bold text-white text-lg tracking-tight">
                Alex<span className="text-blue-400">.</span>Morgan
              </span>
            </div>
            <p className="text-gray-600 text-sm font-body leading-relaxed max-w-xs">
              Full Stack Developer crafting immersive digital experiences with clean code and thoughtful engineering.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-white font-display font-semibold text-sm mb-4 tracking-wide">Quick Links</p>
            <ul className="flex flex-col gap-2">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-600 hover:text-blue-400 text-sm font-body transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-blue-500 group-hover:w-4 transition-all duration-300" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-display font-semibold text-sm mb-4 tracking-wide">Let's Connect</p>
            <a
              href="mailto:alex@example.com"
              className="text-blue-400 hover:text-blue-300 text-sm font-mono mb-5 block transition-colors"
            >
              alex@example.com
            </a>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-500 hover:text-blue-400 border border-white/5 hover:border-blue-500/25 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-700 text-sm font-body flex items-center gap-1.5">
            © {new Date().getFullYear()} Alex Morgan. Built with
            <FiHeart size={12} className="text-blue-500 mx-0.5" />
            and lots of coffee.
          </p>
          <p className="text-gray-700 text-xs font-mono">
            React · Tailwind · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

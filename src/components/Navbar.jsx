import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive('#' + entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500
          ${scrolled ? 'glass border-b border-white/5 py-3' : 'py-6'}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="section-padding flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-9 h-9 rounded-lg glass-blue flex items-center justify-center glow-blue-sm">
              <span className="text-sm font-display font-bold text-gradient">PG</span>
            </div>
            <span className="font-display font-bold text-white text-lg hidden sm:block tracking-tight">
              Pranav<span className="text-blue-400">.</span>
            </span>
          </motion.button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <button
                  onClick={() => handleNav(href)}
                  className={`relative px-4 py-2 text-sm font-body font-medium rounded-lg transition-all duration-300
                    ${active === href
                      ? 'text-blue-400'
                      : 'text-gray-400 hover:text-white'}`}
                >
                  {active === href && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg glass-blue"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <motion.a
            href="mailto:pranavgurram19@gmail.com"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-body font-medium transition-all duration-300 glow-blue-sm"
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.96 }}
          >
            Hire Me
          </motion.a>

          {/* Hamburger */}
          <motion.button
            className="md:hidden glass-blue rounded-lg p-2.5 text-blue-400"
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-30 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
            <motion.div
              className="absolute top-20 left-4 right-4 glass rounded-2xl p-6 border border-white/10"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25 }}
            >
              <ul className="flex flex-col gap-2">
                {navLinks.map(({ label, href }, i) => (
                  <motion.li
                    key={href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <button
                      onClick={() => handleNav(href)}
                      className={`w-full text-left px-4 py-3 rounded-xl font-body font-medium transition-all
                        ${active === href
                          ? 'text-blue-400 glass-blue'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'}`}
                    >
                      {label}
                    </button>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.07 }}
                >
                  <a
                    href="mailto:pranavgurram19@gmail.com"
                    className="block mt-2 px-4 py-3 rounded-xl bg-blue-600 text-white font-body font-medium text-center"
                  >
                    Hire Me
                  </a>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

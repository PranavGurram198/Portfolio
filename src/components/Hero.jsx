import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 + 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
};

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center section-padding pt-32 pb-20 max-w-7xl mx-auto">
      {/* Grid pattern background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            {/* Status badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-blue border border-blue-500/20 mb-8"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-blue-300 text-sm font-mono">Available for work</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
            >
              Hi, I'm{' '}
              <span className="text-gradient block">Pranav Gurram</span>
            </motion.h1>

            {/* Title */}
            <motion.div
              className="flex items-center gap-3 mb-6"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
            >
              <div className="h-px flex-1 max-w-[60px] bg-blue-500/40" />
              <p className="font-mono text-blue-400 text-sm tracking-widest uppercase">
                Full Stack Developer
              </p>
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-xl font-body"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
            >
              I craft immersive digital experiences — building scalable web apps
              with clean code, pixel-perfect design, and thoughtful engineering.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mb-12"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={4}
            >
              <motion.button
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                className="relative px-7 py-3.5 rounded-xl bg-blue-600 text-white font-body font-semibold text-sm overflow-hidden group"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10">Contact Me</span>
                <motion.span
                  className="absolute inset-0 bg-blue-500"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                onClick={() => document.querySelector('#experience').scrollIntoView({ behavior: 'smooth' })}
                className="px-7 py-3.5 rounded-xl glass border border-blue-500/20 text-blue-300 font-body font-semibold text-sm hover:border-blue-400/40 hover:text-white transition-all"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                View Projects
              </motion.button>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="flex items-center gap-4"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={5}
            >
              <span className="text-gray-600 text-sm font-mono">Follow me</span>
              <div className="h-px w-8 bg-gray-700" />
              {[
                { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
                { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                // { icon: FiTwitter, href: 'https://twitter.com', label: 'Twitter' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500/30 border border-white/5 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right: Visual */}
          <motion.div
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Decorative rings */}
            <div className="absolute w-[380px] h-[380px] rounded-full border border-blue-500/10 animate-spin-slow" />
            <div className="absolute w-[300px] h-[300px] rounded-full border border-blue-500/10" style={{ animationDirection: 'reverse' }} />

            {/* Avatar container */}
            <motion.div
              className="relative w-72 h-72 rounded-3xl overflow-hidden glass-blue glow-blue"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Placeholder avatar */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-blue-900/40 to-black flex items-center justify-center">
                <span className="font-display text-8xl font-bold text-gradient select-none">PG</span>
              </div>
              {/* Overlay shimmer */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>

            {/* Floating tech badges */}
            {[
              { label: 'React', emoji: '⚛️', pos: '-top-4 -right-4' },
              { label: 'Node.js', emoji: '🟢', pos: '-bottom-4 -left-4' },
              { label: 'MongoDB', emoji: '🍃', pos: 'top-1/4 -right-16' },
            ].map(({ label, emoji, pos }) => (
              <motion.div
                key={label}
                className={`absolute ${pos} glass-blue rounded-xl px-3 py-2 flex items-center gap-2 border border-blue-500/20`}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 2 }}
              >
                <span>{emoji}</span>
                <span className="text-xs font-mono text-blue-300">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-gray-600 text-xs font-mono tracking-widest">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FiArrowDown className="text-blue-500/50" size={18} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

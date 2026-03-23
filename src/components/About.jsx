import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiZap, FiDownload } from 'react-icons/fi';
import { useInView } from '../hooks/useInView';
import SectionHeader from './SectionHeader';

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '25+', label: 'Projects Built' },
  { value: '10+', label: 'Happy Clients' },
  { value: '5+', label: 'Technologies' },
];

const traits = [
  { icon: FiCode, label: 'Clean Code', desc: 'Readable, maintainable & scalable architecture' },
  { icon: FiLayers, label: 'Full Stack', desc: 'End-to-end development from DB to UI' },
  { icon: FiZap, label: 'Performance', desc: 'Optimized for speed and user experience' },
];

const About = () => {
  const [ref, inView] = useInView();

  return (
    <section id="about" className="py-28 section-padding max-w-7xl mx-auto" ref={ref}>
      <SectionHeader tag="Who I Am" title="About Me" subtitle="Passionate developer with a love for elegant solutions" inView={inView} />

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: image / visual */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative w-full max-w-sm mx-auto">
            {/* Main card */}
            <div className="glass rounded-3xl p-8 border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl" />
              {/* Avatar */}
              <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-600/30 to-blue-900/50 flex items-center justify-center mb-6 glow-blue-sm mx-auto">
                <span className="font-display text-4xl font-bold text-gradient">AM</span>
              </div>
              <h3 className="font-display text-xl font-bold text-white text-center mb-1">Alex Morgan</h3>
              <p className="text-blue-400 text-sm font-mono text-center mb-6">Full Stack Developer</p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                {stats.map(({ value, label }) => (
                  <div key={label} className="glass-blue rounded-xl p-3 text-center">
                    <p className="font-display text-2xl font-bold text-gradient">{value}</p>
                    <p className="text-gray-500 text-xs font-body mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative corner dots */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24 opacity-20"
              style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', backgroundSize: '8px 8px' }} />
          </div>
        </motion.div>

        {/* Right: text */}
        <div>
          <motion.p
            className="text-gray-300 text-lg leading-relaxed mb-6 font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I'm a passionate Full Stack Developer based in San Francisco, CA. I specialize in
            building modern web applications that blend stunning design with robust functionality.
          </motion.p>
          <motion.p
            className="text-gray-500 leading-relaxed mb-10 font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            With a deep passion for the MERN stack and a keen eye for design, I transform complex
            problems into elegant digital solutions. When I'm not coding, I'm exploring new
            technologies, contributing to open source, or building side projects.
          </motion.p>

          {/* Trait cards */}
          <div className="flex flex-col gap-3 mb-10">
            {traits.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={label}
                className="flex items-center gap-4 glass rounded-xl p-4 border border-white/5 group hover:border-blue-500/20 transition-all duration-300"
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                whileHover={{ x: 4 }}
              >
                <div className="w-10 h-10 rounded-lg glass-blue flex items-center justify-center flex-shrink-0">
                  <Icon className="text-blue-400" size={18} />
                </div>
                <div>
                  <p className="text-white font-display font-semibold text-sm">{label}</p>
                  <p className="text-gray-500 text-sm font-body">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Download CV */}
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-blue border border-blue-500/30 text-blue-300 font-body font-medium text-sm hover:text-white hover:border-blue-400 transition-all"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <FiDownload size={15} />
            Download Resume
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default About;

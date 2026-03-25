import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiChevronDown, FiExternalLink } from 'react-icons/fi';
import { useInView } from '../hooks/useInView';
import SectionHeader from './SectionHeader';

const experiences = [
  // {
  //   role: 'Senior Full Stack Developer',
  //   company: 'TechFlow Inc.',
  //   location: 'San Francisco, CA',
  //   period: 'Jan 2024 – Present',
  //   type: 'Full-time',
  //   description: 'Leading development of a high-traffic SaaS platform serving 500K+ users. Architected microservices migration reducing latency by 40%.',
  //   achievements: [
  //     'Reduced API response time by 40% through Redis caching and query optimization',
  //     'Led a team of 5 engineers shipping features end-to-end',
  //     'Implemented CI/CD pipelines cutting deployment time from 2 hours to 8 minutes',
  //     'Built real-time notification system handling 1M+ events/day using WebSockets',
  //   ],
  //   stack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
  //   color: 'from-blue-600/20 to-blue-900/10',
  // },
  {
    role: 'Software Developer Engineer',
    company: 'ND Softtech Solutions Pvt. Ltd.',
    location: 'Remote',
    period: 'Jun 2025 – Feb 2026',
    type: 'Full-time',
    description: 'Built and shipped multiple product features for an early-stage fintech startup. Owned the entire frontend architecture.',
    achievements: [
      'Built mobile-first React dashboard used by 50K+ active users monthly',
      'Integrated 3 payment gateways (Stripe, PayPal, Razorpay) from scratch',
      'Reduced bundle size by 35% through code splitting and lazy loading',
      'Contributed to backend APIs using Express.js and MongoDB',
    ],
    stack: ['React', 'TypeScript', 'Express', 'MongoDB', 'Stripe', 'Vercel'],
    color: 'from-indigo-600/20 to-indigo-900/10',
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Digital Creatives Agency',
    location: 'New York, NY',
    period: 'Jan 2022 – Jun 2022',
    type: 'Internship',
    description: 'Developed responsive landing pages and web apps for agency clients across various industries.',
    achievements: [
      'Delivered 8 client projects on time with high satisfaction ratings',
      'Built reusable component library used across 5+ projects',
      'Improved Lighthouse performance scores from avg 45 to 90+',
    ],
    stack: ['React', 'Tailwind CSS', 'JavaScript', 'Figma', 'WordPress'],
    color: 'from-cyan-600/20 to-cyan-900/10',
  },
];

const ExperienceCard = ({ exp, index, inView }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className={`glass rounded-2xl border border-white/5 overflow-hidden group hover:border-blue-500/20 transition-all duration-300`}
        whileHover={{ y: -3 }}
      >
        {/* Color bar */}
        <div className={`h-1 w-full bg-gradient-to-r ${exp.color.replace('/20', '').replace('/10', '')}`}
          style={{ background: 'linear-gradient(90deg, #3b82f6, #1d4ed8)' }} />

        <div className="p-6">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center flex-shrink-0 border border-blue-500/20`}>
                <FiBriefcase className="text-blue-400" size={20} />
              </div>
              <div>
                <h3 className="font-display text-white font-bold text-lg leading-tight">{exp.role}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-blue-400 font-body text-sm font-medium">{exp.company}</p>
                  <a href="#" className="text-gray-600 hover:text-blue-400 transition-colors">
                    <FiExternalLink size={13} />
                  </a>
                </div>
              </div>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-mono border
              ${exp.type === 'Full-time'
                ? 'bg-green-500/10 border-green-500/30 text-green-400'
                : 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400'}`}>
              {exp.type}
            </span>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500 font-body">
            <span className="flex items-center gap-1.5">
              <FiCalendar size={13} className="text-blue-500/60" />
              {exp.period}
            </span>
            <span className="flex items-center gap-1.5">
              <FiMapPin size={13} className="text-blue-500/60" />
              {exp.location}
            </span>
          </div>

          <p className="text-gray-400 text-sm font-body leading-relaxed mb-4">{exp.description}</p>

          {/* Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {exp.stack.map((tech) => (
              <span key={tech} className="px-2.5 py-1 rounded-lg glass-blue text-blue-300 text-xs font-mono border border-blue-500/10">
                {tech}
              </span>
            ))}
          </div>

          {/* Toggle achievements */}
          <button
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-body font-medium transition-colors"
            onClick={() => setExpanded(!expanded)}
          >
            <span>{expanded ? 'Hide' : 'Show'} Achievements</span>
            <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <FiChevronDown size={15} />
            </motion.span>
          </button>

          <AnimatePresence>
            {expanded && (
              <motion.ul
                className="mt-4 flex flex-col gap-2"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {exp.achievements.map((ach, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-gray-400 text-sm font-body"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                    {ach}
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  const [ref, inView] = useInView();

  return (
    <section id="experience" className="py-28 section-padding max-w-7xl mx-auto" ref={ref}>
      <SectionHeader tag="My Work" title="Experience" subtitle="Professional journey and key contributions" inView={inView} />

      <div className="flex flex-col gap-6">
        {experiences.map((exp, i) => (
          <ExperienceCard key={exp.company} exp={exp} index={i} inView={inView} />
        ))}
      </div>
    </section>
  );
};

export default Experience;

import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiCalendar, FiMapPin, FiAward } from 'react-icons/fi';
import { useInView } from '../hooks/useInView';
import SectionHeader from './SectionHeader';

const education = [
  {
    degree: 'M.Sc. Computer Science',
    institution: 'Christ College, Pune. (Savitribai Phule Pune University)',
    location: 'Pune, Maharashtra, India',
    period: '2021 – 2023',
    grade: 'GPA: 7.98',
    description: 'Specialized in Distributed Systems and Machine Learning. Thesis on scalable microservice architectures.',
    tags: ['Distributed Systems', 'ML', 'Cloud Computing'],
    highlight: true,
  },
  {
    degree: 'B.Sc. Computer Science',
    institution: 'Modern College of Arts, Science and Commerce, Ganeshkhind, Pune. (Savitribai Phule Pune University)',
    location: 'Pune, Maharashtra, India',
    period: '2016 – 2020',
    grade: '54.68%',
    description: 'Core focus on software engineering, algorithms, and data structures. Led the developer club.',
    tags: ['Algorithms', 'Data Structures', 'Web Dev'],
    highlight: false,
  },
  {
    degree: 'MERN Stack Web Development Certification',
    institution: 'ITPrenuer',
    location: 'Pune, Maharashtra, India',
    period: '2025',
    grade: 'Professional Certification',
    description: 'Professional-level certification in designing scalable, highly available cloud architectures on AWS.',
    tags: ['React', 'Node.js', 'MongoDB'],
    highlight: false,
  },
];

const Education = () => {
  const [ref, inView] = useInView();

  return (
    <section id="education" className="py-28 section-padding max-w-7xl mx-auto" ref={ref}>
      <SectionHeader tag="My Learning" title="Education" subtitle="Academic background and certifications" inView={inView} />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600/50 via-blue-500/20 to-transparent hidden md:block" />

        <div className="flex flex-col gap-8">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              className="relative md:pl-24"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Timeline dot */}
              <div className={`absolute left-5 top-8 w-6 h-6 rounded-full border-2 hidden md:flex items-center justify-center
                ${edu.highlight ? 'border-blue-500 bg-blue-600/30 glow-blue-sm' : 'border-gray-700 bg-surface'}`}>
                <div className={`w-2 h-2 rounded-full ${edu.highlight ? 'bg-blue-400' : 'bg-gray-600'}`} />
              </div>

              {/* Card */}
              <motion.div
                className={`glass rounded-2xl p-6 border transition-all duration-300 group cursor-default
                  ${edu.highlight
                    ? 'border-blue-500/25 hover:border-blue-500/40'
                    : 'border-white/5 hover:border-blue-500/20'}`}
                whileHover={{ y: -4 }}
              >
                {/* Top row */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0
                      ${edu.highlight ? 'bg-blue-600/20 glow-blue-sm' : 'bg-surface-2'}`}>
                      {i === 2 ? <FiAward className="text-blue-400" size={20} /> : <FiBookOpen className="text-blue-400" size={20} />}
                    </div>
                    <div>
                      <h3 className="font-display text-white font-bold text-lg leading-tight mb-1">{edu.degree}</h3>
                      <p className="text-blue-400 font-body text-sm">{edu.institution}</p>
                    </div>
                  </div>

                  {edu.highlight && (
                    <span className="px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-mono">
                      Latest
                    </span>
                  )}
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500 font-body">
                  <span className="flex items-center gap-1.5">
                    <FiCalendar size={13} className="text-blue-500/60" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiMapPin size={13} className="text-blue-500/60" />
                    {edu.location}
                  </span>
                  <span className="text-blue-400/70">{edu.grade}</span>
                </div>

                <p className="text-gray-500 text-sm font-body leading-relaxed mb-4">{edu.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {edu.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-lg glass-blue text-blue-300 text-xs font-mono border border-blue-500/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

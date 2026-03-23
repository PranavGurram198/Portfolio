import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import {
//   SiReact, SiNodedotjs, SiMongodb, SiTypescript, SiJavascript,
//   SiNextdotjs, SiTailwindcss, SiDocker, SiAmazonaws, SiPostgresql,
//   SiRedis, SiGit, SiFigma, SiGraphql, SiExpress, SiFirebase,
// } from 'react-icons/si';
// import { SiAmazonaws } from "react-icons/si"
import { useInView } from '../hooks/useInView';
import SectionHeader from './SectionHeader';
import {
  SiReact, SiNodedotjs, SiMongodb, SiTypescript, SiJavascript,
  SiNextdotjs, SiTailwindcss, SiDocker, SiPostgresql,
  SiRedis, SiGit, SiFigma, SiGraphql, SiExpress, SiFirebase,
} from 'react-icons/si';

const categories = ['All', 'Frontend', 'Backend', 'Database', 'DevOps', 'Tools'];

const skills = [
  { name: 'React', icon: SiReact, level: 95, color: '#61DAFB', category: 'Frontend' },
  { name: 'TypeScript', icon: SiTypescript, level: 88, color: '#3178C6', category: 'Frontend' },
  { name: 'JavaScript', icon: SiJavascript, level: 92, color: '#F7DF1E', category: 'Frontend' },
  { name: 'Next.js', icon: SiNextdotjs, level: 85, color: '#FFFFFF', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90, color: '#06B6D4', category: 'Frontend' },
  { name: 'Node.js', icon: SiNodedotjs, level: 90, color: '#339933', category: 'Backend' },
  { name: 'Express', icon: SiExpress, level: 87, color: '#FFFFFF', category: 'Backend' },
  { name: 'GraphQL', icon: SiGraphql, level: 75, color: '#E10098', category: 'Backend' },
  { name: 'MongoDB', icon: SiMongodb, level: 88, color: '#47A248', category: 'Database' },
  { name: 'PostgreSQL', icon: SiPostgresql, level: 80, color: '#4169E1', category: 'Database' },
  { name: 'Redis', icon: SiRedis, level: 72, color: '#DC382D', category: 'Database' },
  { name: 'Firebase', icon: SiFirebase, level: 78, color: '#FFCA28', category: 'Database' },
  { name: 'Docker', icon: SiDocker, level: 82, color: '#2496ED', category: 'DevOps' },
  // { name: 'AWS', icon: SiAmazonaws, level: 78, color: '#FF9900', category: 'DevOps' },
  { name: 'Git', icon: SiGit, level: 93, color: '#F05032', category: 'Tools' },
  { name: 'Figma', icon: SiFigma, level: 70, color: '#F24E1E', category: 'Tools' },
];

const SkillCard = ({ skill, index, inView }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="glass rounded-2xl p-5 border border-white/5 hover:border-blue-500/25 transition-all duration-300 group cursor-default"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      whileHover={{ y: -6, scale: 1.02 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        boxShadow: hovered ? `0 0 30px ${skill.color}15, 0 8px 32px rgba(0,0,0,0.4)` : undefined,
      }}
    >
      {/* Icon */}
      <div className="mb-4 flex items-center justify-between">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ background: `${skill.color}15`, border: `1px solid ${skill.color}25` }}
        >
          <skill.icon size={24} style={{ color: skill.color }} />
        </div>
        <span className="text-xs font-mono text-gray-600">{skill.level}%</span>
      </div>

      <p className="font-display font-semibold text-white text-sm mb-3">{skill.name}</p>

      {/* Progress bar */}
      <div className="h-1.5 bg-surface-2 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ delay: index * 0.06 + 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [ref, inView] = useInView();
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' ? skills : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-28 section-padding max-w-7xl mx-auto" ref={ref}>
      <SectionHeader tag="My Toolbox" title="Tech Skills" subtitle="Technologies I use to build great products" inView={inView} />

      {/* Category filters */}
      <motion.div
        className="flex flex-wrap justify-center gap-2 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3 }}
      >
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-sm font-body font-medium transition-all duration-300
              ${activeCategory === cat
                ? 'glass-blue text-blue-300 border border-blue-500/30 glow-blue-sm'
                : 'glass text-gray-500 border border-white/5 hover:text-gray-300'}`}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            {cat}
          </motion.button>
        ))}
      </motion.div>

      {/* Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
        layout
      >
        {filtered.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} index={i} inView={inView} />
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;

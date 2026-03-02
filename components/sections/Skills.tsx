'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaDocker, 
  FaGitAlt,
  FaFigma,
  FaDatabase,
  FaAws
} from 'react-icons/fa'
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiGraphql,
  SiJest
} from 'react-icons/si'

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: FaReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
      // { name: 'Python', icon: FaPython, color: '#3776AB' },
      // { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
      { name: 'REST APIs', icon: FaDatabase, color: '#FF6C37' },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Redis', icon: SiRedis, color: '#DC382D' },
      { name: 'SQL', icon: FaDatabase, color: '#F29111' },
    ],
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git', icon: FaGitAlt, color: '#F05032' },
      // { name: 'Docker', icon: FaDocker, color: '#2496ED' },
      { name: 'AWS', icon: FaAws, color: '#FF9900' },
      // { name: 'Jest', icon: SiJest, color: '#C21325' },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="text-primary-500 dark:text-primary-400 font-display text-sm md:text-base font-semibold uppercase tracking-wider"
            >
              My expertise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-4"
            >
              Skills & <span className="gradient-text">Technologies</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '100px' } : { width: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"
            />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="glass rounded-2xl p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-display font-semibold mb-6 text-center gradient-text">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary-500/5 transition-colors group cursor-pointer"
                      whileHover={{ x: 5 }}
                    >
                      <div className="p-2 glass rounded-lg group-hover:scale-110 transition-transform">
                        <skill.icon 
                          className="w-6 h-6" 
                          style={{ color: skill.color }}
                        />
                      </div>
                      <span className="font-medium text-sm md:text-base">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Tags */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              And more technologies I work with:
            </p>
            <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
              {[
                'JavaScript (ES6+)',
                'HTML5',
                'CSS3',
                'Sass/SCSS',
                'Redux',
                'Zustand',
                'Framer Motion',
                'Express.js',
                'FastAPI',
                'WebSockets',
                'CI/CD',
                'Agile/Scrum',
                'Responsive Design',
                'RESTful APIs',
                'Microservices',
                'Test-Driven Development',
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.03 }}
                  className="px-4 py-2 glass rounded-full text-sm font-medium hover:bg-primary-500/10 transition-colors cursor-default"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
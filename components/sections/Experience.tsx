'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiBriefcase } from 'react-icons/hi'

const experiences = [
  {
    title: 'Software Developer Engineer',
    company: 'ND Softtech Solutions Pvt Ltd',
    location: 'Pune',
    period: '2025 - 2026',
    type: 'Full-time',
    description: 'Developed and maintained multiple projects ranging from Blockchain web applications to Dashbaord Application.',
    responsibilities: [
      'Built 5+ production applications from concept to deployment',
      'Collaborated with designers to implement pixel-perfect UIs',
      'Integrated third-party APIs and payment gateways',
      'Improved application performance by 50% through optimization',
    ],
    technologies: ['React', 'Express.js', 'MongoDB', 'Node.js', 'Tailwind CSS'],
  },
  {
    title: 'Website Developer-Intern',
    company: 'BAOIAM Innovations Pvt Ltd',
    location: 'Remote',
    period: '2023 - 2024',
    type: 'Full-time',
    description: 'Developed and maintained client project ranging from e-commerce platforms to custom web applications.',
    responsibilities: [
      'Built 2+ production applications from concept to deployment',
      'Collaborated with designers to implement pixel-perfect UIs',
      'Integrated third-party APIs and payment gateways',
      'Improved application performance by 50% through optimization',
    ],
    technologies: ['React', 'Express.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
  },
  // {
  //   title: 'Junior Web Developer',
  //   company: 'Digital Agency',
  //   location: 'New York, NY',
  //   period: '2020 - 2021',
  //   type: 'Full-time',
  //   description: 'Contributed to various web development projects, focusing on frontend development and user experience.',
  //   responsibilities: [
  //     'Developed responsive websites using modern frameworks',
  //     'Collaborated with cross-functional teams in Agile environment',
  //     'Participated in daily standups and sprint planning',
  //     'Learned best practices in version control and deployment',
  //   ],
  //   technologies: ['JavaScript', 'React', 'CSS3', 'Git', 'WordPress'],
  // },
  // {
  //   title: 'Frontend Developer Intern',
  //   company: 'Innovation Labs',
  //   location: 'Boston, MA',
  //   period: '2019 - 2020',
  //   type: 'Internship',
  //   description: 'Gained hands-on experience in frontend development while working on real-world projects.',
  //   responsibilities: [
  //     'Assisted in building company website and internal tools',
  //     'Fixed bugs and implemented new features',
  //     'Participated in code reviews and team meetings',
  //     'Documented code and created technical specifications',
  //   ],
  //   technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery'],
  // },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Career journey
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-4"
            >
              Work <span className="gradient-text">Experience</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '100px' } : { width: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"
            />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500" />

            {/* Timeline items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={`${exp.company}-${exp.period}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative grid md:grid-cols-2 gap-8 items-start ${
                    index % 2 === 0 ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:col-start-2'} pl-20 md:pl-0`}>
                    <div className="glass rounded-2xl p-6 hover:shadow-xl transition-shadow">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 glass rounded-lg shrink-0">
                          <HiBriefcase className="w-6 h-6 text-primary-500" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="px-3 py-1 text-xs font-semibold bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded-full">
                              {exp.period}
                            </span>
                            <span className="px-3 py-1 text-xs font-semibold bg-accent-500/10 text-accent-600 dark:text-accent-400 rounded-full">
                              {exp.type}
                            </span>
                          </div>
                          <h3 className="text-xl font-display font-semibold mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                            {exp.company}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-500">
                            {exp.location}
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                        {exp.description}
                      </p>

                      <div className="space-y-2 mb-4">
                        {exp.responsibilities.map((responsibility) => (
                          <div
                            key={responsibility}
                            className="flex items-start gap-2 text-sm"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 mt-1.5 shrink-0" />
                            <span className="text-slate-600 dark:text-slate-400">
                              {responsibility}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 top-8 transform -translate-x-1/2">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                      className="w-4 h-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 glow"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
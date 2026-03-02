'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiAcademicCap } from 'react-icons/hi'

const education = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'Carmel Vidya Bhawan`s Christ College, Pune (Affilated to Savitribai Phule Pune University).',
    location: 'Pune, Maharashtra',
    period: '2021 - 2023',
    // description: 'Graduated with honors. Focused on software engineering, algorithms, and data structures. Completed capstone project on machine learning applications.',
    achievements: [
      'CGPA: 7.98 CGPA',
    ],
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Modern College of Arts, Science & Commerce, Ganeshkhind, Pune.',
    location: 'Pune, Maharashta',
    period: '2016 - 2020',
    // description: 'Graduated with honors. Focused on software engineering, algorithms, and data structures. Completed capstone project on machine learning applications.',
    achievements: [
      'Percentage: 55%'
    ],
  },
  {
    degree: 'High School',
    institution: 'S.S.P.M. Day School & Jr. College, Pune',
    location: 'Pune, Maharashta',
    period: '2016',
    achievements: [
      'Percentage: 55%'
    ],
  },
  {
    degree: 'Secondary School ',
    institution: 'Sundarbai Marathe Vidyalaya, Kharadi, Pune',
    location: 'Pune, Maharashtra',
    period: '2014',
    achievements: [
      'Percentage: 75%'
    ],
  },
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="py-20 md:py-32 relative">
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
              Academic background
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-4"
            >
              <span className="gradient-text">Education</span>
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
              {education.map((item, index) => (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative grid md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:col-start-2'} pl-20 md:pl-0`}>
                    <div className="glass rounded-2xl p-6 hover:shadow-xl transition-shadow">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 glass rounded-lg">
                          <HiAcademicCap className="w-6 h-6 text-primary-500" />
                        </div>
                        <div className="flex-1">
                          <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded-full mb-2">
                            {item.period}
                          </span>
                          <h3 className="text-xl font-display font-semibold mb-1">
                            {item.degree}
                          </h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            {item.institution}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-500">
                            {item.location}
                          </p>
                        </div>
                      </div>
                      
                      {/* <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                        {item.description}
                      </p> */}

                      <div className="space-y-2">
                        {item.achievements.map((achievement) => (
                          <div
                            key={achievement}
                            className="flex items-center gap-2 text-sm"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
                            <span className="text-slate-600 dark:text-slate-400">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
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

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-display font-semibold mb-6">
              Certifications & Courses
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                'AWS Certified Developer',
                'MERN Stack Developer Cerftification Course',
                // 'Google Cloud Professional',
                // 'MongoDB Certified Developer',
                // 'Docker & Kubernetes',
                // 'Advanced React Patterns',
              ].map((cert, index) => (
                <motion.span
                  key={cert}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                  className="px-4 py-2 glass rounded-full text-sm font-medium hover:bg-primary-500/10 transition-colors"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {cert}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
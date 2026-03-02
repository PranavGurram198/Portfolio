'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-20 md:py-32 relative">
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
              Get to know me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-4"
            >
              About <span className="gradient-text">Me</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '100px' } : { width: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"
            />
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Decorative gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl blur-3xl" />
                
                {/* Image container */}
                <div className="relative glass rounded-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
                    alt="Profile"
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-2xl md:text-3xl font-display font-semibold">
                Hi, I&apos;m a <span className="gradient-text">Software Developer</span> based in Pune
              </h3>
              
              <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>
                  I&apos;m a passionate software developer with a love for creating elegant solutions to complex problems. 
                  With expertise in modern web technologies, I specialize in building scalable, performant applications 
                  that deliver exceptional user experiences.
                </p>
                
                <p>
                  My journey in tech started with curiosity and has evolved into a career focused on continuous learning 
                  and innovation. I thrive in collaborative environments where I can contribute to meaningful projects 
                  and push the boundaries of what&apos;s possible.
                </p>
                
                <p>
                  When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects, 
                  or sharing knowledge with the developer community. I believe in writing clean, maintainable code and 
                  following best practices to deliver high-quality solutions.
                </p>
              </div>

              {/* Stats */}
              {/* <div className="grid grid-cols-3 gap-6 pt-6">
                {[
                  { number: '50+', label: 'Projects Completed' },
                  { number: '3+', label: 'Years Experience' },
                  { number: '100%', label: 'Client Satisfaction' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="text-center glass rounded-lg p-4"
                  >
                    <div className="text-2xl md:text-3xl font-display font-bold gradient-text">
                      {stat.number}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div> */}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
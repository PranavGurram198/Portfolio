'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import Image from 'next/image'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard. Built with modern technologies for optimal performance.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB'],
    github: 'https://github.com/yourusername/project',
    demo: 'https://project-demo.com',
  },
  {
    title: 'AI Task Manager',
    description: 'Smart task management application powered by AI for intelligent task prioritization and scheduling. Features real-time collaboration and analytics.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    tags: ['React', 'Node.js', 'OpenAI', 'PostgreSQL'],
    github: 'https://github.com/yourusername/project',
    demo: 'https://project-demo.com',
  },
  {
    title: 'Real-Time Analytics Dashboard',
    description: 'Interactive dashboard for visualizing complex data in real-time. Includes customizable widgets, export functionality, and advanced filtering.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['Next.js', 'D3.js', 'WebSocket', 'Redis'],
    github: 'https://github.com/yourusername/project',
    demo: 'https://project-demo.com',
  },
  {
    title: 'Social Media Platform',
    description: 'Modern social networking platform with real-time messaging, media sharing, and advanced privacy controls. Scalable architecture handling thousands of users.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    tags: ['React Native', 'GraphQL', 'AWS', 'MongoDB'],
    github: 'https://github.com/yourusername/project',
    demo: 'https://project-demo.com',
  },
  {
    title: 'Portfolio CMS',
    description: 'Headless CMS for developers to manage their portfolio content. Features drag-and-drop builder, SEO optimization, and API-first architecture.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    tags: ['Next.js', 'Sanity', 'Tailwind', 'Vercel'],
    github: 'https://github.com/yourusername/project',
    demo: 'https://project-demo.com',
  },
  {
    title: 'Fitness Tracking App',
    description: 'Comprehensive fitness application with workout tracking, nutrition planning, and progress analytics. Includes social features and challenges.',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop',
    tags: ['React Native', 'Firebase', 'Charts.js', 'Redux'],
    github: 'https://github.com/yourusername/project',
    demo: 'https://project-demo.com',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-20 md:py-32 relative">
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
              My work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-4"
            >
              Featured <span className="gradient-text">Projects</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '100px' } : { width: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"
            />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                whileHover={{ y: -8 }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay buttons */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub className="w-6 h-6 text-white" />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt className="w-5 h-5 text-white" />
                    </motion.a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 glass rounded-lg font-semibold hover:bg-primary-500/10 transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
              <FaGithub className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
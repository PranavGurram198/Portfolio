import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ tag, title, subtitle, inView }) => {
  return (
    <div className="mb-16 text-center">
      <motion.div
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-blue border border-blue-500/20 mb-5"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="text-blue-400 font-mono text-xs tracking-widest uppercase">{tag}</span>
      </motion.div>

      <motion.h2
        className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
        initial={{ opacity: 0, y: 25 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {title.split(' ').map((word, i) =>
          i === title.split(' ').length - 1
            ? <span key={i} className="text-gradient"> {word}</span>
            : <span key={i}>{word} </span>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          className="text-gray-500 text-lg max-w-xl mx-auto font-body"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;

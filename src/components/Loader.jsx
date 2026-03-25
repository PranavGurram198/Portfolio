import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-8">
        {/* Logo mark animation */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="w-20 h-20 rounded-2xl glass-blue flex items-center justify-center glow-blue"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          >
            <span className="text-3xl font-display font-bold text-gradient">PG</span>
          </motion.div>
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-blue-500/30"
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Loading bar */}
        <div className="w-48 h-[2px] bg-surface-2 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-blue-gradient rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        <motion.p
          className="text-gray-500 font-mono text-sm tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          INITIALIZING...
        </motion.p>
      </div>
    </div>
  );
};

export default Loader;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollTop}
          className="fixed bottom-8 left-8 z-50 w-12 h-12 rounded-xl glass-blue flex items-center justify-center glow-blue-sm group"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', damping: 15 }}
          aria-label="Scroll to top"
        >
          <FiArrowUp className="text-blue-400 text-lg group-hover:text-blue-300 transition-colors" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;

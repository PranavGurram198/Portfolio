import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiXCircle } from 'react-icons/fi';

const Toast = ({ toast }) => {
  return (
    <AnimatePresence>
      {toast.show && (
        <motion.div
          className="fixed bottom-8 right-8 z-50"
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: 'spring', damping: 20 }}
        >
          <div className={`flex items-center gap-3 px-6 py-4 rounded-2xl glass border backdrop-blur-xl
            ${toast.type === 'success'
              ? 'border-green-500/30 bg-green-500/10'
              : 'border-red-500/30 bg-red-500/10'}`}
          >
            {toast.type === 'success'
              ? <FiCheckCircle className="text-green-400 text-xl flex-shrink-0" />
              : <FiXCircle className="text-red-400 text-xl flex-shrink-0" />
            }
            <p className="text-white font-body text-sm">{toast.message}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;

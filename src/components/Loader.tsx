import React from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="w-16 h-16 border-4 border-t-accent-500 border-primary-500 rounded-full"
      />
      <motion.p
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="text-white font-medium"
      >
        Loading amazing things...
      </motion.p>
    </div>
  );
};

export default Loader;
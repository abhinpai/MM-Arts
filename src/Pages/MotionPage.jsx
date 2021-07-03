import { motion } from 'framer-motion';
import React from 'react';
import { pageVariants } from '../utils/Motions';

const MotionPage = ({ children }) => {
  return (
    <motion.main
      initial='exit'
      animate='enter'
      exit='exit'
      variants={pageVariants}
    >
      {children}
    </motion.main>
  );
};

export default MotionPage;

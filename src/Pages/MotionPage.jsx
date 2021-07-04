import { motion } from 'framer-motion';
import React from 'react';
import { pageVariants } from '../utils/Motions';
import useCheckIsMobile from '../utils/useCheckIsMobile';

const MotionPage = ({ children }) => {
  const isMobile = useCheckIsMobile();
  console.log(isMobile);
  return isMobile ? (
    <main>{children}</main>
  ) : (
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

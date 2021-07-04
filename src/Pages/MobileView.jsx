import React from 'react';
import About from './About';
import Banner from './Banner';
import Gallery from './Gallery';
import Offer from './Offer';
import Timings from './Timings';
import Logo from '../Assets/images/logo.svg';
import { motion } from 'framer-motion';
import { mobilePageVariants } from '../utils/Motions';

const MobileView = () => {
  return (
    <motion.div
      initial='initial'
      animate='enter'
      variants={mobilePageVariants}
    >
      <img src={Logo} alt='Logo' className='logo' />
      <Banner />
      <About />
      <Offer />
      <Gallery />
      <Timings />
    </motion.div>
  );
};

export default MobileView;

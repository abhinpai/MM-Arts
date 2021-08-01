import React from 'react';
import HeroImg from '../Assets/images/hero.png';
import { motion } from 'framer-motion';
import MotionPage from './MotionPage';

const Banner = () => {
  return (
    <MotionPage>
      <section className='container-ltr'>
        <div className='container-ltr__left'>
          <p className='intro-message'> MM Arts, Place where i teach your kids to be more creative and colorfull</p>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='button'
          >
            <a
              href='https://api.whatsapp.com/send?phone=+918600213560'
              target='_blank'
            >
              Contact Us
            </a>
          </motion.div>
        </div>
        <div className='container-ltr__right'>
          <img className='hero-img' src={HeroImg} alt='Talented Girl' />
        </div>
      </section>
    </MotionPage>
  );
};

export default Banner;

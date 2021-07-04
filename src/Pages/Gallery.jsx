import React, { useState } from 'react';
import ImageGallery from './ImageGallery';
import '../Styles/Gallery.scss';
import MotionPage from '../Pages/MotionPage';
import { wrap } from 'popmotion';
import { AnimatePresence, motion } from 'framer-motion';

export const images = [
  {
    image:
      'https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png',
    describe: 'Some event 1',
  },
  {
    image:
      'https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png',
    describe: 'Some event 2',
  },
  {
    image:
      'https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png',
    describe: 'Some event 3',
  },
];

const Gallery = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);

  return (
    <MotionPage>
      <section
        className='container-ltr gallery-mobile'
        style={{ alignItems: 'flex-start' }}
      >
        <div className='container-ltr__left'>
          <h1 className='heading'>
            Those Happy faces
            <span>Those Happy faces</span>
          </h1>
          <AnimatePresence>
            <motion.p
              key={images[imageIndex].describe}
              initial={{ opacity: 0 }}
              transition={{ duration: 2 }}
              animate={{ opacity: 1 }}
            >
              {images[imageIndex].describe}
            </motion.p>
          </AnimatePresence>
        </div>
        <div className='container-ltr__right'>
          <div className='imageSlides'>
            <ImageGallery
              images={images}
              page={page}
              direction={direction}
              setPage={setPage}
              imageIndex={imageIndex}
            />
          </div>
        </div>
      </section>
    </MotionPage>
  );
};

export default Gallery;

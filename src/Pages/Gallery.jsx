import React, { useState } from 'react';
import ImageGallery from './ImageGallery';
import '../Styles/Gallery.scss';
import MotionPage from '../Pages/MotionPage';
import { wrap } from 'popmotion';
import { AnimatePresence, motion } from 'framer-motion';

import img1 from '../Assets/images/1.jpeg';
import img2 from '../Assets/images/2.jpeg';
import img3 from '../Assets/images/3.jpeg';
import img4 from '../Assets/images/4.jpeg';
import img5 from '../Assets/images/5.jpeg';
import img6 from '../Assets/images/6.jpeg';
import img7 from '../Assets/images/7.jpeg';
import img8 from '../Assets/images/8.jpeg';
import img9 from '../Assets/images/9.jpeg';
import img10 from '../Assets/images/10.jpeg';
import img11 from '../Assets/images/11.jpeg';
import img12 from '../Assets/images/12.jpeg';
import img13 from '../Assets/images/13.jpeg';
import img14 from '../Assets/images/14.jpeg';
import img15 from '../Assets/images/15.jpeg';
import img16 from '../Assets/images/16.jpeg';
import img17 from '../Assets/images/17.jpeg';
import img18 from '../Assets/images/18.jpeg';
import img19 from '../Assets/images/19.jpeg';
import img20 from '../Assets/images/20.jpeg';
import img21 from '../Assets/images/21.jpeg';

export const images = [
  {
    image: img1,
    describe: 'The workshop of the welcome board',
  },
  {
    image: img2,
    describe: 'The cute tiny papper table lamp workshop',
  },
  {
    image: img3,
    describe: 'Father days special, Greeting card to my life super hero',
  },
  {
    image: img4,
    describe: 'Father days special, Greeting card to my life super hero',
  },
  {
    image: img5,
    describe: 'The cute greeting cards workshop',
  },
  {
    image: img6,
    describe: 'A crazy art by the old CD caset workshop',
  },
  {
    image: img7,
    describe: 'Save Tree, Save Mother Earth. The paper bag workshop',
  },
  {
    image: img8,
    describe: 'Shakalaka Boom Boom, A pencil top workshop',
  },
  {
    image: img9,
    describe: 'A cute abstract notes bookmark workshop',
  },
  {
    image: img10,
    describe: 'A cute abstract notes bookmark workshop',
  },
  {
    image: img11,
    describe: 'My life soldier, Mother Days Special. papper Bouquet workshop',
  },
  {
    image: img12,
    describe: 'Cute papper flower pot workshop',
  },
  {
    image: img13,
    describe: 'Orgimai of cute dog',
  },
  {
    image: img14,
    describe: 'The tiny cute pet face pencil/pen stand workshop',
  },
  {
    image: img15,
    describe: 'Animal faced bookmark workshop',
  },
  {
    image: img16,
    describe: 'The happy earth bookmark workshop',
  },
  {
    image: img17,
    describe: 'Cute papper flower pot workshop',
  },
  {
    image: img18,
    describe: 'Satarangi (Rainbow) greeting card',
  },
  {
    image: img19,
    describe: 'Mother day special, Pop-Up greeting card special',
  },
  {
    image: img20,
    describe: 'An beautiful flower with a tissue paper workshop',
  },
  {
    image: img21,
    describe: 'The paper sun flower workshop',
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

import { AnimatePresence, motion } from 'framer-motion';
import { wrap } from 'popmotion';
import React, { useState } from 'react';
import '../Styles/Gallery.scss';


const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const ImageGallery = ({ images, page, direction, setPage, imageIndex }) => {
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          className='gallery-img'
          key={page}
          src={images[imageIndex].image}
          custom={direction}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            x: { type: 'spring', stiffness: 200, damping: 30 },
            opacity: { duration: 0.5 },
          }}
          drag='x'
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <div className='next' onClick={() => paginate(1)}>
        {'‣'}
      </div>
      <div className='prev' onClick={() => paginate(-1)}>
        {'‣'}
      </div>
    </>
  );
};

export default ImageGallery;

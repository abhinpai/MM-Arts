import React from 'react';
import ImageGallery from './ImageGallery';
import '../Styles/Gallery.scss';
import MotionPage from '../Pages/MotionPage';

const Gallery = () => {
  return (
    <MotionPage>
      <section className='container-ltr gallery-mobile' style={{ alignItems: 'flex-start' }}>
        <div className='container-ltr__left'>
          <h1 className='heading'>
            Those Happy faces
            <span>Those Happy faces</span>
          </h1>
          <p>Explain something about the image</p>
        </div>
        <div className='container-ltr__right'>
          <div className='imageSlides'>
            <ImageGallery />
          </div>
        </div>
      </section>
    </MotionPage>
  );
};

export default Gallery;

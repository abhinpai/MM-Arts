import React from 'react';
import RocketGirl from '../Assets/images/flying-girl.png';
import MotionPage from './MotionPage';

const About = () => {
  return (
    <MotionPage>
      <section className='container-rtl ' style={{ alignItems: 'flex-start' }}>
        <div className='container-rtl__left'>
          <img className='rocket-girl-img' src={RocketGirl} alt='About us' />
        </div>
        <div
          className='container-rtl__right about-mobile'
          style={{ marginTop: '3rem' }}
        >
          <h1 className='heading'>
            About Us
            <span>About Us</span>
          </h1>
          <p>Namaskar to all beautiful people out there, I'm Dhanya Kamath.</p>
          <br />
          <p>
            I'm a self-taught enthusiastic teacher and a mentor. I love to bring
            life and color to the imagination. I have 5 years of experience in
            teaching and love to continue it though out my life.
          </p>
          <br />
          <p>
            MM Arts is the place where I help to curate your kid(s) dream and
            try to bring out his/her imagination into the reality
          </p>
        </div>
      </section>
    </MotionPage>
  );
};

export default About;

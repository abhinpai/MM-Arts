import React from 'react';
import RocketGirl from '../Assets/images/flying-girl.png';
import MotionPage from './MotionPage';

const About = () => {
  return (
    <MotionPage>
      <section className='container-rtl ' style={{ alignItems: 'flex-start' }}>
        <div className='container-rtl__left'>
          <img className="rocket-girl-img" src={RocketGirl} alt='About us' />
        </div>
        <div className='container-rtl__right about-mobile' style={{ marginTop: '3rem' }}>
          <h1 className='heading'>
            About Us
            <span>About Us</span>
          </h1>
          <p>
            We learn as we play, make friends, take care of self, learn to use
            our things and be compassionate towards others.
          </p>
          <br />
          <p>
            Our curriculum is designed to build self-confidence in children and
            to pick up social skills apart from learning to read and write.
          </p>
        </div>
      </section>
    </MotionPage>
  );
};

export default About;

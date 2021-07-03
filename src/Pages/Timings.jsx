import React from 'react';
import TimerImg from '../Assets/images/timer.png';
import MotionPage from './MotionPage';

const Timings = () => {
  return (
    <MotionPage>
      <section className='container-rtl' style={{ alignItems: 'flex-start' }}>
        <div className='container-rtl__left'>
          <img className="timer-img" src={TimerImg} alt='Timing' />
        </div>
        <div className='container-rtl__right'>
          <h1 className='heading'>
            Those Happy faces
            <span>Those Happy faces</span>
          </h1>
          <p className="timer-p">
            Monday - Friday <span>5 PM - 6 PM</span>
          </p>
          <p className="timer-p">
            Saturday<span>4 PM - 5 PM</span>
          </p>
          <p className="timer-p">
            Sunday <span>Holiday</span>
          </p>
        </div>
      </section>
    </MotionPage>
  );
};

export default Timings;

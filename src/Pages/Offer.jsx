import React from 'react';
import '../Styles/Offer.scss';
import PuzzelImg from '../Assets/images/puzzel.png';
import RocketImg from '../Assets/images/launch.png';
import TowerImg from '../Assets/images/tower.png';
import BulbImg from '../Assets/images/bulb.png';
import { motion } from 'framer-motion';
import MotionPage from './MotionPage';

const offers = [
  {
    img: PuzzelImg,
    description: 'Some better desc',
  },
  {
    img: TowerImg,
    description: 'Some better desc',
  },
  {
    img: RocketImg,
    description: 'Some better desc',
  },
  {
    img: BulbImg,
    description: 'Some better desc',
  },
];

const Offer = () => {
  return (
    <MotionPage>
      <section className='offer'>
        <h1 className='heading'>
          What We Offer
          <span>What We Offer</span>
        </h1>
        <div className='offer__list'>
          {offers.map((item, index) => (
            <div key={index} className='offer__list-item'>
              <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                src={item.img}
                alt=''
              />
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </MotionPage>
  );
};

export default Offer;

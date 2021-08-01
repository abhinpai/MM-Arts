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
    label: 'Fine Motor Skills',
    description: 'Some better desc',
  },
  {
    img: TowerImg,
    label: 'Gross Motor Skills',
    description: 'Some better desc',
  },
  {
    img: RocketImg,
    label: 'No Limit For Fun',
    description: 'There is not limit for enjoyment while learning',
  },
  {
    img: BulbImg,
    label: 'Innovative Ideas',
    description: 'Help to turn out the innovative ideas into the reality',
  },
];

const Offer = () => {
  return (
    <MotionPage>
      <section className='offer'>
        <h1 className='heading'>
          What i teach
          <span>What i teach</span>
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
              <p>{item.label}</p>
              <span>{item.description}</span>
            </div>
          ))}
        </div>
      </section>
    </MotionPage>
  );
};

export default Offer;

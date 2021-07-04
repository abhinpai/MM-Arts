import React from 'react';
import Logo from '../Assets/images/logo.svg';
import '../Styles/Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <Link to='/' className='header__left'>
        <img src={Logo} alt='MM Arts' />
      </Link>
      <div className='header__right'>
        <Link to='/about'>About Us</Link>
        <Link to='/offer'>What we offer</Link>
        <Link to='/gallery'>Gallery</Link>
        <Link to='/timings'>Timing</Link>
        {/* <Link to='/'>Enquiry</Link> */}
      </div>
    </header>
  );
};

export default Header;

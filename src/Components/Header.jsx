import React from 'react';
import Logo from '../Assets/images/logo.svg';
import '../Styles/Header.scss';
import { Link, useLocation } from 'react-router-dom';

const Links = [
  { path: '/about', label: 'About Us' },
  { path: '/offer', label: 'What we offer' },
  { path: '/timings', label: 'Gallery' },
  { path: '/gallery', label: 'Timing' },
];

const Header = () => {
  const location = useLocation();

  const getStyle = (path) => {
    const currentPath = location.pathname;
    if (currentPath === path) {
      return 'active-link';
    }
  };
  return (
    <header className='header'>
      <Link to='/' className='header__left'>
        <img src={Logo} alt='MM Arts' />
      </Link>
      <div className='header__right'>
        {Links.map((linkData) => (
          <Link
            to={linkData.path}
            key={linkData.path}
            className={getStyle(linkData.path)}
          >
            {linkData.label}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import styles from './header.m.css';

import Logo from '../Logo/Logo';
import PhoneNumber from '../PhoneNumber/PhoneNumber';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className='container flex__container'>
        <PhoneNumber modificator={'header'} />
        <Logo />
      </div>
    </header>
  );
};

export default Header;

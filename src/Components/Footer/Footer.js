import React from 'react';
import Contacts from './Contacts/Contacts';
import Questions from './Questions/Questions';
import Logo from '../Logo';

import styles from './footer.m.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='container flex__footer'>
        <Contacts />
        <Questions />
        <div className={styles.footer__logo}>
          <Logo modificator={'logo__footer'} objectSize={'footer__logo'} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

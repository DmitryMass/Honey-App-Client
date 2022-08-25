import React from 'react';

import styles from './logo.m.css';
import logoObj from '../../Assets/Icons/h2.svg';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <object className={styles.logo__obj} data={logoObj} type=''></object>
    </div>
  );
};

export default Logo;

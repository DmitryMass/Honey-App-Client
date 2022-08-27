import React from 'react';

import styles from './logo.m.css';
import logoObj from '../../Assets/Icons/h2.svg';

const Logo = ({ objectSize, modificator }) => {
  return (
    <div className={modificator}>
      <object
        className={`${styles.logo__obj} ${objectSize}`}
        data={logoObj}
        type=''
      ></object>
    </div>
  );
};

export default Logo;

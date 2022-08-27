import React from 'react';

import styles from './phone-number.m.css';
import phoneObj from '../../Assets/Icons/phone.svg';

const PhoneNumber = ({ modificator, flex }) => {
  return (
    <div className={`${styles.contact} contact__${modificator} flex__${flex} `}>
      <object data={phoneObj} type=''></object>
      <span className={styles.contact__number}>+380930032043</span>
    </div>
  );
};

export default PhoneNumber;

import React from 'react';

import styles from './phone-number.m.css';
import phoneObj from '../../Assets/Icons/phone.svg';

const PhoneNumber = ({ modificator }) => {
  return (
    <div
      className={`${styles.contact} contact__${modificator} flex__centered `}
    >
      <object data={phoneObj} type=''></object>
      <span className={styles.contact__number}>+380930032043</span>
    </div>
  );
};

export default PhoneNumber;

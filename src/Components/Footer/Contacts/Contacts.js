import React from 'react';
import ContactUs from '../../ContactUs/ContactUs';

import styles from './contacts.m.css';

const Contacts = () => {
  return (
    <div className={styles.contacts__wrapper}>
      <p>Зв'язатися з нами</p>
      <ContactUs />
    </div>
  );
};

export default Contacts;

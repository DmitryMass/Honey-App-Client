import React from 'react';
import ContactUs from '../../ContactUs/ContactUs';

import styles from './contacts.m.css';

const Contacts = () => {
  return (
    <div className={styles.contacts__wrapper}>
      <p className={styles.contacts__title}>Або повідомте нам</p>
      <ContactUs />
    </div>
  );
};

export default Contacts;

import React from 'react';
import emailLogo from '../../Assets/Icons/email.svg';
import PhoneNumber from '../PhoneNumber';
import styles from './contact-us.m.css';

const ContactUs = () => {
  return (
    <div>
      <div className={`${styles.email} flex__start`}>
        <object data={emailLogo} type='' />
        <a
          className={styles.email__link}
          href='mailto:yourhoneyparadise@gmail.com'
          target='blank'
        >
          Send message
        </a>
      </div>
      <PhoneNumber flex={'start'} />
    </div>
  );
};

export default ContactUs;

import React from 'react';

import styles from './title.m.css';

const Title = ({ children, modificator }) => {
  return (
    <h2 className={`${styles.title} title__${modificator}`}>{children}</h2>
  );
};

export default Title;

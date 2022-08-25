import React from 'react';
import styles from './button.m.css';

const Button = ({ type, modificator, children, handleClick }) => {
  return (
    <button
      className={`${styles.button} button__${modificator}`}
      type={type ? type : 'button'}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;

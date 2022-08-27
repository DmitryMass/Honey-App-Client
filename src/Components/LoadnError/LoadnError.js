import React from 'react';
import styles from './load-error.m.css';

const LoadnError = ({ error, success }) => {
  if (success) {
    return (
      <div className={styles.message__success}>
        Дякуємо. Очікуйте зворотній зв'язок.
      </div>
    );
  }
  if (error) {
    return (
      <div className={styles.message__error}>Помилка, спробуйте ще раз.</div>
    );
  }
};

export default LoadnError;

import React from 'react';
import Button from '../../Button/Button';
import styles from './honey-item.m.css';

const HoneyItem = ({ honey }) => {
  const { title, amount, price, img } = honey;
  return (
    <div className={styles.honey__box}>
      <div className={styles.honey__img}>
        <img src={img} alt='' />
      </div>
      <div className={styles.honey__body}>
        <h3 className={styles.honey__title}>{title}</h3>
        <p className={styles.honey__amount}>{amount}</p>
        <p className={styles.honey__price}>{price}</p>
        <Button modificator={'honey'}>Замовити</Button>
      </div>
    </div>
  );
};

export default HoneyItem;

import React from 'react';
import Button from '../Button/Button';
import PhoneNumber from '../PhoneNumber/PhoneNumber';
import styles from './main.m.css';

const Main = ({ handleClick }) => {
  return (
    <main className={styles.main}>
      <div className='container'>
        <h1 className={styles.main__title}>З вулика додому</h1>
        <Button modificator={'header'} handleClick={handleClick}>
          До меду
        </Button>
      </div>
      <PhoneNumber modificator={'main'} />
    </main>
  );
};

export default Main;

import React from 'react';
import { nanoid } from 'nanoid';

import HoneyItem from './HoneyItem/HoneyItem';
import { honeyList } from '../Constants/constants';
import Title from '../Title/Title';

import styles from './honey-list.m.css';

const HoneyList = ({ scrolls }) => {
  return (
    <section className={styles.honeyList} ref={scrolls}>
      <div className='container'>
        <Title>В наявності</Title>
        <div className='grid__container'>
          {honeyList.map((item) => {
            return <HoneyItem key={nanoid()} honey={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default HoneyList;

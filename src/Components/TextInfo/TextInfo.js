import React from 'react';

import styles from './text-info.m.css';

const TextInfo = () => {
  return (
    <aside className={styles.additional__info}>
      <div className='additional__container'>
        <p className={styles.additional__text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quisquam
          fugit labore nulla sit similique! Ullam libero fuga quis saepe quasi
          esse consequuntur quisquam a iste assumenda, deserunt suscipit
          debitis?
        </p>
      </div>
    </aside>
  );
};

export default TextInfo;

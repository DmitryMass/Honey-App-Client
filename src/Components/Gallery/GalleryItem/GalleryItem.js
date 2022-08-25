import React from 'react';

import styles from './gallery-item.m.css';

const GalleryItem = ({ picture }) => {
  const { img } = picture;
  return (
    <div className={styles.picture__wrapper}>
      <img src={img} alt='' />
    </div>
  );
};

export default GalleryItem;

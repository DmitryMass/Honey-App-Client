import React from 'react';
import Title from '../Title/Title';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, FreeMode } from 'swiper';

import { nanoid } from 'nanoid';
import styles from './gallery.m.css';
import { galleryPhotos } from '../Constants/constants';
import GalleryItem from './GalleryItem/GalleryItem';

const Gallery = () => {
  return (
    <section className={styles.gallery}>
      <div className='container'>
        <Title>Наша пасіка</Title>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          freeMode={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
          }}
          modules={[EffectCoverflow, Autoplay, FreeMode]}
          className='mySwiper'
        >
          {galleryPhotos.map((item) => {
            return (
              <SwiperSlide key={nanoid()}>
                <GalleryItem picture={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;

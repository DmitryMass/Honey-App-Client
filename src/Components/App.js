import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Header from '../Components/Header';
import Main from '../Components/Main';
import Footer from '../Components/Footer';
import bgcVideo from '../Assets/Video/honey-video.mp4';

import { useScrollRef } from './ScrollHook/scroll-hook';

import styles from './App.m.css';

const App = () => {
  const { ref, handleClick } = useScrollRef();
  return (
    <div className='app'>
      <div className={styles.main__wrapper}>
        <section className={styles.main__section}>
          <video className={styles.main__video} autoPlay loop muted>
            <source src={bgcVideo} type='video/mp4' />
          </video>
          <div className={styles.main__overlay} />
          <Header />
          <Main handleClick={handleClick} />
        </section>
        <Routes>
          <Route path='/' element={<Home scrolls={ref} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;

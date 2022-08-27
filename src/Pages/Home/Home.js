import React from 'react';
import Gallery from '../../Components/Gallery/Gallery';
import HoneyList from '../../Components/HoneyList/HoneyList';
import OrderForm from '../../Components/OrderForm/OrderForm';
import { useScrollRef } from '../../Components/ScrollHook/scroll-hook';
import TextInfo from '../../Components/TextInfo/TextInfo';
import styles from './home.m.css';

const Home = ({ scrolls }) => {
  const { ref, handleClick } = useScrollRef();

  return (
    <div className={styles.home}>
      <Gallery />
      <TextInfo />
      <HoneyList scrolls={scrolls} handleClick={handleClick} />
      <OrderForm scrolls={ref} />
    </div>
  );
};

export default Home;

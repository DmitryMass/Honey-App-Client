import React from 'react';
import Gallery from '../../Components/Gallery/Gallery';
import HoneyList from '../../Components/HoneyList/HoneyList';
import OrderForm from '../../Components/OrderForm/OrderForm';
import TextInfo from '../../Components/TextInfo/TextInfo';
import styles from './home.m.css';

const Home = ({ scrolls }) => {
  return (
    <div className={styles.home}>
      <Gallery />
      <TextInfo />
      <HoneyList scrolls={scrolls} />
      <OrderForm />
    </div>
  );
};

export default Home;

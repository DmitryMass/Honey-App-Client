import { useRef } from 'react';

export const useScrollRef = () => {
  const ref = useRef(null);

  const handleClick = () => {
    console.log('click');
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return {
    ref,
    handleClick,
  };
};

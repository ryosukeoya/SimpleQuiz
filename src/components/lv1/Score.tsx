import React from 'react';
import { useSelector } from 'react-redux';

const Score: React.VFC = () => {
  const currentNumberState = useSelector((state) => state.currentNumber);
  return <div style={{ marginTop: '100px' }}>正答率{(currentNumberState / 4) * 100}%</div>;
};

export default Score;

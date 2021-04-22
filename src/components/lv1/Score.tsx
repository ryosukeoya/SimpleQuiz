import React from 'react';
import { useSelector } from 'react-redux';

type Props = {
  scoreOpen: boolean;
};

const Score: React.VFC = ({ scoreOpen }: Props) => {
  if (!scoreOpen) {
    return null;
  }
  const currentNumberState = useSelector((state) => state.currentNumber);
  return <div style={{ marginTop: '100px' }}>正答率{(currentNumberState / 4) * 100}%</div>;
};

export default Score;

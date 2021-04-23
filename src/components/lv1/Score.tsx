import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { scoreClose } from '../../actions';

type Props = {
  setCategoryOpen: (param: boolean) => void;
};

const Score: React.VFC = ({ setCategoryOpen }: Props) => {
  const currentNumberState = useSelector((state) => state.currentNumber);
  const dispatch = useDispatch();

  return (
    <>
      <div style={{ color: 'black' }}>今回の結果は...</div>
      <br />
      <div style={{ color: 'red', fontSize: '1.9rem' }}>
        正答率{(currentNumberState / 4) * 100}%！
      </div>
      <Button
        onClick={() => {
          dispatch(scoreClose());
          setCategoryOpen(true);
        }}
      >
        カテゴリ選択へ
      </Button>
    </>
  );
};

export default Score;

const Button = styled.button`
  position: inline-block;
  padding: 11px;
  background-color: #1976d2;
  color: white;
  border-radius: 10px;
  margin-top: 10%;
  cursor: pointer;
`;

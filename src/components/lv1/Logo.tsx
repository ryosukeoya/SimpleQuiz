import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { questionClose, correctClear } from '../../actions';

type Props = {
  setQuizOpen: (param: boolean) => void;
  setSelectedQuizTitle: (param: string | null) => void;
  setCategoryOpen: (param: boolean) => void;
};

const Logo: React.VFC = ({ setQuizOpen, setSelectedQuizTitle, setCategoryOpen }: Props) => {
  const dispatch = useDispatch();
  return (
    <Style>
      <div
        onClick={() => {
          setQuizOpen(false);
          setSelectedQuizTitle(null);
          dispatch(questionClose());
          dispatch(correctClear());
          setCategoryOpen(true);
        }}
      >
        シンプルクイズ
      </div>
    </Style>
  );
};

export default Logo;

const Style = styled.header`
  margin-left: 50px;
  justify-content: center;
  font-size: 20px;
  font-weight: 500;
  font-family: Fancy;
  cursor: pointer;
`;

import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { questionClose } from '../../actions';

type Props = {
  setQuizOpen: Function;
  setSelectedQuizTitle: Function;
};

const Logo: React.VFC = ({ setQuizOpen, setSelectedQuizTitle }: Props) => {
  const dispatch = useDispatch();
  return (
    <Style>
      <div
        onClick={() => {
          setQuizOpen(false), setSelectedQuizTitle(null);
          dispatch(questionClose());
        }}
      >
        クイズの森
      </div>
    </Style>
  );
};

export default Logo;

const Style = styled.header`
  margin-left: 50px;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
`;

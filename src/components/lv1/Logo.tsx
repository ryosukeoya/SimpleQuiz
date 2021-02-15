import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { questionClose } from '../../actions';

interface Props {
  setQuizOpen: Function;
  setSelectedQuizTitle: Function;
}

const Logo: React.FC = ({ setQuizOpen, setSelectedQuizTitle }: Props) => {
  console.log(setSelectedQuizTitle);
  const dispatch = useDispatch();
  return (
    <Style>
      <div
        onClick={() => {
          setQuizOpen(false), setSelectedQuizTitle(null);
          dispatch(questionClose());
        }}
      >
        いろんなクイズ
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

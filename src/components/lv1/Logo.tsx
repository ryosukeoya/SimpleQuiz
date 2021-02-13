import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { questionClose } from '../../actions';

const Logo: React.FC = (props) => {
  const dispatch = useDispatch();
  return (
    <Style>
      <div
        onClick={() => {
          props.setQuizOpen(false), dispatch(questionClose());
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

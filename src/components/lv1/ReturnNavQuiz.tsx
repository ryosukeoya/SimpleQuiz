import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { questionClose } from '../../actions';

const ReturnNavQuiz: React.VFC = () => {
  const dispatch = useDispatch();

  const element = '< クイズ一覧へ';
  return (
    <div>
      <Style
        onClick={() => {
          dispatch(questionClose());
        }}
      >
        {element}
      </Style>
    </div>
  );
};

export default ReturnNavQuiz;

const Style = styled.div`
  color: #2c8fd1;
  text-decoration: underline;
  margin-top: 12px;
  cursor: pointer;
`;

import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { questionClose } from '../../actions';

interface Props {
  setQuestionNumber: Function;
}

const ReturnQuiz = ({ setQuestionNumber }: Props) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Style
        onClick={() => {
          setQuestionNumber(0);
          dispatch(questionClose());
        }}
      >
        クイズ一覧へ
      </Style>
    </div>
  );
};

export default ReturnQuiz;

const Style = styled.div`
  color: #2c8fd1;
  text-decoration: underline;
  margin-top: 8px;
  cursor: pointer;
`;

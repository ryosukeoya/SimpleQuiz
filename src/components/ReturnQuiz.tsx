import React from 'react';
import styled from 'styled-components';

interface Props {
  setQuestionNumber: Function;
  setQuestionOpen: Function;
}

const ReturnQuiz = ({ setQuestionNumber, setQuestionOpen }) => {
  return (
    <div>
      <Style
        onClick={() => {
          setQuestionNumber(0);
          setQuestionOpen(false);
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
`;

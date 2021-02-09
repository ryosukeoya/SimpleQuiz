import React from 'react';
import styled from 'styled-components';
import customMedia from '../../style/customMedia';

interface Props {
  onClose: () => void;
  getQuestion: () => string | null;
  nextQuestionNumber: Function;
}

const NextButton = ({ onClose, getQuestion, nextQuestionNumber }: Props) => {
  return (
    <Style
      onClick={() => {
        nextQuestionNumber(), onClose();
      }}
    >
      次の問題へ
    </Style>
  );
};

export default NextButton;

const Style = styled.div`
  position: inline-block;
  padding: 9px;
  background-color: #1976d2;
  color: white;
  border-radius: 10px;
  margin-top: 10px;
  cursor: pointer;
`;

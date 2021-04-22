import React from 'react';
import styled from 'styled-components';
import customMedia from '../../style/customMedia';

type Props = {
  setModalOpen: (param: boolean) => void;
  getQuestion: () => string | null;
  nextQuestionNumber: () => void;
};

const NextButton: React.VFC = ({ setModalOpen, getQuestion, nextQuestionNumber }: Props) => {
  return (
    <Style
      onClick={() => {
        nextQuestionNumber(), setModalOpen(false);
      }}
    >
      次の問題へ
    </Style>
  );
};

export default NextButton;

const Style = styled.div`
  position: inline-block;
  padding: 11px;
  background-color: #1976d2;
  color: white;
  border-radius: 10px;
  margin-top: 10%;
  cursor: pointer;
`;

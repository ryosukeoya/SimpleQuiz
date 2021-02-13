import React from 'react';
import styled from 'styled-components';

interface Props {
  questionOpen: boolean;
  selectedCategoryTitle: string;
}

const TitleQuiz = ({ questionOpen, selectedCategoryTitle }: Props) => {
  if (questionOpen) {
    return null;
  }
  return <Style>{selectedCategoryTitle}クイズ一覧</Style>;
};

export default TitleQuiz;

const Style = styled.div`
  font-size: 1.2rem;
  text-align: center;
  color: #2c8fd1;
  margin-top: 60px;
  margin-bottom: 10px;
`;

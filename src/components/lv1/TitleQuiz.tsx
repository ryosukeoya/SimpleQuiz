import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

interface Props {
  selectedCategoryTitle: string;
}

const TitleQuiz = ({ selectedCategoryTitle }: Props) => {
  const questionOpenState = useSelector((state) => state.questionOpenState);
  if (questionOpenState) {
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

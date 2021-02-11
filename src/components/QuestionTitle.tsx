import React from 'react';
import styled from 'styled-components';

const QuestionTitle = ({ selectedQuizTitle }) => {
  return <Style>{selectedQuizTitle}クイズ</Style>;
};

export default QuestionTitle;

const Style = styled.div`
  font-size: 1.2rem;
  color: #2c8fd1;
  margin-bottom: 5px;
`;

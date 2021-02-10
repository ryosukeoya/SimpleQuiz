import React from 'react';
import styled from 'styled-components';

interface Props {
  questionOpen: boolean;
}

const TitleQuiz = ({ questionOpen }: Props) => {
  if (questionOpen) {
    return null;
  }
  return <Style>Quiz一覧</Style>;
};

export default TitleQuiz;

const Style = styled.div`
  font-size: 1.3rem;
  text-align: center;
  color: #2c8fd1;
  margin-top: 60px;
  margin-bottom: 10px;
`;

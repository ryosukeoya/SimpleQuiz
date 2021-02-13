import React from 'react';
import styled from 'styled-components';

const Title = ({ quizOpen }) => {
  if (quizOpen) {
    return null;
  }
  return <Style>カテゴリ一覧</Style>;
};

export default Title;

const Style = styled.div`
  font-size: 1.3rem;
  text-align: center;
  color: #2c8fd1;
  margin-top: 60px;
  margin-bottom: 10px;
`;

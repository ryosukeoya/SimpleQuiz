import React from 'react';
import styled from 'styled-components';

interface Props {
  getQuestion: () => string;
}

const QuestionText: React.FC<Props> = ({ getQuestion }) => {
  return (
    <Style>
      <div>{getQuestion}</div>
    </Style>
  );
};
export default QuestionText;

const Style = styled.header`
  font-size: 20px;
  padding: 10px;
  margin-bottom: 5px;
  background-color: #fff;
  border: 0.7px solid rgba(82, 83, 85, 0.3);
`;

import React from 'react';
import datas from '../dataset';
import styled from 'styled-components';

interface Props {
  getQuestion: () => string | null;
  plusTitle: any;
  title: string;
  questionNumber: number;
  categoryTitle: string;
}

const QuestionText: React.FC = ({
  getQuestion,
  plusTitle,
  title,
  questionNumber,
  categoryTitle,
}: Props) => {
  return (
    <Style>
      {datas[categoryTitle][title][questionNumber].question}
      {plusTitle}
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

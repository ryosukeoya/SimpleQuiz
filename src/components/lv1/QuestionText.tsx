import React from 'react';
import datas from '../../dataset';
import styled from 'styled-components';

interface Props {
  getQuestion: () => string | null;
  plusTitle: any;
  questionNumber: number;
  selectedCategoryTitle: string;
  selectedQuizTitle: string;
}

const QuestionText: React.VFC = ({
  getQuestion,
  plusTitle,
  questionNumber,
  selectedCategoryTitle,
  selectedQuizTitle,
}: Props) => {
  console.log(datas[selectedCategoryTitle]);
  console.log(datas[selectedCategoryTitle][selectedQuizTitle]);
  return (
    <Style>
      {datas[selectedCategoryTitle][selectedQuizTitle][questionNumber].question}
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

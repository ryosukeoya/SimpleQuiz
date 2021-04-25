import React from 'react';
import datas from '../../dataset';
import styled from 'styled-components';

type Props = {
  getQuestion: () => string | null;
  questionNumber: number;
  selectedCategoryTitle: string;
  selectedQuizTitle: string;
};

const QuestionText: React.VFC<Props> = ({
  getQuestion,
  questionNumber,
  selectedCategoryTitle,
  selectedQuizTitle,
}: Props) => {
  return <Style>{datas[selectedCategoryTitle][selectedQuizTitle][questionNumber].question}</Style>;
};
export default QuestionText;

const Style = styled.header`
  font-size: 1.14rem;
  padding: 10px;
  margin-bottom: 5px;
  background-color: #fff;
  border: 0.7px solid rgba(82, 83, 85, 0.3);
`;

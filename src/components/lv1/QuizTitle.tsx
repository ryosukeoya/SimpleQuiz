import React from 'react';
import Style from '../../style/QuizTitleStyle';

type Props = {
  viewQuizTitleName: string;
};

const QuizTitle: React.VFC = ({ viewQuizTitleName }: Props) => {
  return <Style>{viewQuizTitleName}</Style>;
};

export default QuizTitle;

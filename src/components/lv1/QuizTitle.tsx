import React from 'react';
import BoxTitleStyle from '../../style/BoxTitleStyle';

type Props = {
  viewQuizTitleName: string;
};

const QuizTitle: React.VFC<Props> = ({ viewQuizTitleName }: Props) => {
  return <BoxTitleStyle>{viewQuizTitleName}</BoxTitleStyle>;
};

export default QuizTitle;

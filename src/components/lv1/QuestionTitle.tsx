import React from 'react';
import TitleStyle from '../../style/TitleStyle';

type Props = {
  selectedQuizTitle: string;
};

const QuestionTitle: React.VFC = ({ selectedQuizTitle }: Props) => {
  return (
    <TitleStyle color={'#1d4154'} fontSize={'1.2rem'} marginTop={'0px'}>
      {selectedQuizTitle}クイズ
    </TitleStyle>
  );
};

export default QuestionTitle;

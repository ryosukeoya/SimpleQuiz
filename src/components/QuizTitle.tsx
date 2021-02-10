import React, { useState } from 'react';
import Style from '../style/TitleStyle';

interface Props {
  quizTitleName: string;
}

const QuizTitle: React.FC = ({ quizTitleName }: Props) => {
  let plusTitle: String = '';
  if (quizTitleName === 'Computer') {
    plusTitle = ' Science';
  }
  return (
    <Style>
      {quizTitleName}
      {plusTitle}
    </Style>
  );
};

export default QuizTitle;

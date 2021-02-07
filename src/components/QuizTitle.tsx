import React, { useState } from 'react';
import Style from '../style/TitleStyle';

interface Props {
  titleName: string;
}

const QuizTitle: React.FC = ({ titleName }: Props) => {
  let plusTitle: String = '';
  if (titleName === 'Computer') {
    plusTitle = ' Science';
  }
  return (
    <Style>
      {titleName}
      {plusTitle}
    </Style>
  );
};

export default QuizTitle;

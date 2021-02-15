import React from 'react';
import Style from '../../style/TitleStyle';

const QuestionTitle: React.FC = ({ selectedQuizTitle }) => {
  return <Style>{selectedQuizTitle}クイズ</Style>;
};

export default QuestionTitle;

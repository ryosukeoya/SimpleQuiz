import React from 'react';
import QuestionAnswer from './QuestionAnswer';

interface Props {
  getAnswer: () => string;
}

const QuestionAnswers: React.FC<Props> = ({ getAnswer }) => {
  return <div>{getAnswer}</div>;
};
export default QuestionAnswers;

import React from 'react';
import finance from '../images/finance.jpg';
import QuestionStyle from '../style/QuestionStyle';
import TitleStyle from '../style/TitleStyle';
import ImageStyle from '../style/ImageStyle';

const Question2: React.FC = () => {
  return (
    <QuestionStyle>
      <ImageStyle src={finance} alt="computer"></ImageStyle>
      <TitleStyle>Finance</TitleStyle>
    </QuestionStyle>
  );
};
export default Question2;

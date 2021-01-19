import React from 'react';
import computer from '../images/computer.jpg';
import QuestionStyle from '../style/QuestionStyle';
import TitleStyle from '../style/TitleStyle';
import ImageStyle from '../style/ImageStyle';

const Question1: React.FC = () => {
  return (
    <QuestionStyle>
      <ImageStyle src={computer} alt="computer"></ImageStyle>
      <TitleStyle>Computer Science</TitleStyle>
    </QuestionStyle>
  );
};
export default Question1;

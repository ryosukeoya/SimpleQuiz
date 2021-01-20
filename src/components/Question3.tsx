import React from 'react';
import game2 from '../images/game2.jpg';
import QuestionStyle from '../style/QuestionStyle';
import TitleStyle from '../style/TitleStyle';
import ImageStyle from '../style/ImageStyle';

const Question3: React.FC = () => {
  return (
    <QuestionStyle>
      <ImageStyle src={game2} alt="finance"></ImageStyle>
      <TitleStyle>Game</TitleStyle>
    </QuestionStyle>
  );
};
export default Question3;

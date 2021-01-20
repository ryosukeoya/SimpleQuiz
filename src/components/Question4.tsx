import React from 'react';
import history from '../images/history.jpg';
import QuestionStyle from '../style/QuestionStyle';
import TitleStyle from '../style/TitleStyle';
import ImageStyle from '../style/ImageStyle';

const Question4: React.FC = () => {
  return (
    <QuestionStyle>
      <ImageStyle src={history} alt="history"></ImageStyle>
      <TitleStyle>History</TitleStyle>
    </QuestionStyle>
  );
};
export default Question4;

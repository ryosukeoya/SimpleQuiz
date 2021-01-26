import React, { useState } from 'react';
import computer from '../images/computer.jpg';
import QuestionStyle from '../style/QuestionStyle';
import TitleStyle from '../style/TitleStyle';
import ImageStyle from '../style/ImageStyle';

// type Props = {
//   rename: React.FC;
//   titleName: string;
// };

const Quiz: React.FC = (props) => {
  if (!props.quizOpen) {
    return null;
  }

  return (
    <>
      <div
        onClick={() => {
          props.quizStart(), props.rename(props.titleName);
        }}
      >
        <QuestionStyle>
          <ImageStyle src={props.image} alt="computer"></ImageStyle>
          <TitleStyle>{props.titleName}</TitleStyle>
        </QuestionStyle>
      </div>
    </>
  );
};
export default Quiz;

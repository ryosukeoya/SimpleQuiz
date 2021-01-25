import React from 'react';
import computer from '../images/computer.jpg';
import QuestionStyle from '../style/QuestionStyle';
import TitleStyle from '../style/TitleStyle';
import ImageStyle from '../style/ImageStyle';

// type Props = {
//   rename: React.FC;
//   titleName: string;
// };

const Quiz: React.FC = (props) => {
  const hello = () => {
    console.log('クリックしました');
  };

  if (!props.quizOpen) {
    return null;
  }

  return (
    <>
      <div onClick={() => props.quizStart()}>
        <QuestionStyle>
          <ImageStyle src={props.image} alt="computer"></ImageStyle>
          <TitleStyle>{props.titleName}</TitleStyle>
        </QuestionStyle>
      </div>
    </>
  );
};
export default Quiz;

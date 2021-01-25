import React from 'react';
import computer from '../images/computer.jpg';
import QuestionStyle from '../style/QuestionStyle';
import TitleStyle from '../style/TitleStyle';
import ImageStyle from '../style/ImageStyle';

// type Props = {
//   rename: React.FC;
//   titleName: string;
// };

const Question: React.FC = (props) => {
  const hello = () => {
    console.log('クリックしました');
  };

  return (
    <>
      <div onClick={() => props.rename(props.titleName)}>
        <QuestionStyle>
          <ImageStyle src={props.image} alt="computer"></ImageStyle>
          <TitleStyle>{props.titleName}</TitleStyle>
        </QuestionStyle>
      </div>
    </>
  );
};
export default Question;

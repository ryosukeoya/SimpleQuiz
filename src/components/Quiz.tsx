import React from 'react';
import QuizStyle from '../style/QuizStyle';
import TitleStyle from '../style/TitleStyle';
import ImageStyle from '../style/ImageStyle';

interface Props {
  titleName: string;
  image: any;
  quizOpen: boolean;
  quizStart: VoidFunction;
  rename: (name: string) => void;
}

const Quiz: React.FC = (props: Props) => {
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
        <QuizStyle>
          <ImageStyle src={props.image} alt="computer"></ImageStyle>
          <TitleStyle>{props.titleName}</TitleStyle>
        </QuizStyle>
      </div>
    </>
  );
};
export default Quiz;

import React from 'react';
import QuizImage from './QuizImage';
import QuizTitle from './QuizTitle';
import Style from '../style/QuizStyle';

interface Props {
  titleName: string;
  image: any;
  quizOpen: boolean;
  quizStart: VoidFunction;
  rename: (name: string) => void;
}

const Quiz: React.FC = ({ titleName, image, quizOpen, quizStart, rename }: Props) => {
  if (!quizOpen) {
    return null;
  }

  return (
    <>
      <div
        onClick={() => {
          quizStart(), rename(titleName);
        }}
      >
        <Style>
          <QuizImage image={image} titleName={titleName} />
          <QuizTitle titleName={titleName} />
        </Style>
      </div>
    </>
  );
};
export default Quiz;

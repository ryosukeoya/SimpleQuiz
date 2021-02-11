import React from 'react';
import QuizImage from './QuizImage';
import QuizTitle from './QuizTitle';
import Style from '../style/QuizStyle';

interface Props {
  quizTitleName: string;
  image: any;
  questionOpen: boolean;
  questionStart: VoidFunction;
  setSelectedQuizTitle: any;
}

const Quiz: React.FC = ({
  quizTitleName,
  image,
  questionOpen,
  questionStart,
  setSelectedQuizTitle,
}: Props) => {
  if (questionOpen) {
    return null;
  }
  console.log(quizTitleName);
  return (
    <>
      <div
        onClick={() => {
          questionStart(), setSelectedQuizTitle(quizTitleName);
        }}
      >
        <Style>
          <QuizImage image={image} quizTitleName={quizTitleName} />
          <QuizTitle quizTitleName={quizTitleName} />
        </Style>
      </div>
    </>
  );
};
export default Quiz;

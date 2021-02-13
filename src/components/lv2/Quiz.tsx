import React from 'react';
import QuizImage from '../lv1/QuizImage';
import QuizTitle from '../lv1/QuizTitle';
import Style from '../../style/QuizStyle';
import { useSelector, useDispatch } from 'react-redux';
import { questionOpen } from '../../actions';

interface Props {
  quizTitleName: string;
  image: any;
  setSelectedQuizTitle: any;
}

const Quiz: React.FC = ({ quizTitleName, image, setSelectedQuizTitle }: Props) => {
  const questionOpenState = useSelector((state) => state.questionOpenState);
  if (questionOpenState) {
    return null;
  }
  const dispatch = useDispatch();

  console.log(quizTitleName);
  return (
    <>
      <div
        onClick={() => {
          setSelectedQuizTitle(quizTitleName), dispatch(questionOpen());
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

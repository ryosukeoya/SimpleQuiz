import React from 'react';
import QuizImage from '../lv1/QuizImage';
import QuizTitle from '../lv1/QuizTitle';
import Style from '../../style/QuizStyle';
import { useSelector, useDispatch } from 'react-redux';
import { questionOpen } from '../../actions';

type Props = {
  quizTitleName: string;
  selectedCategoryTitle: string;
  image: any;
  setSelectedQuizTitle: any;
};

const Quiz: React.VFC<Props> = ({
  quizTitleName,
  selectedCategoryTitle,
  image,
  setSelectedQuizTitle,
}: Props) => {
  const questionOpenState = useSelector((state) => state.questionOpenState);
  if (questionOpenState) {
    return null;
  }
  const dispatch = useDispatch();
  let viewQuizTitleName = '';

  console.log(selectedCategoryTitle);
  console.log(quizTitleName);
  if (selectedCategoryTitle === 'Anime') {
    if (quizTitleName === 'Kimetu') {
      viewQuizTitleName = '鬼滅の刃';
    } else if (quizTitleName === 'Eva') {
      viewQuizTitleName = 'エヴァンゲリオン';
    } else if (quizTitleName === 'Re') {
      viewQuizTitleName = 'Re:ゼロから始める異世界生活';
    }
  } else if (selectedCategoryTitle === 'Game') {
    if (quizTitleName === 'FF10') {
      viewQuizTitleName = 'FF10';
    } else if (quizTitleName === 'メタルギア') {
      viewQuizTitleName = 'メタルギア';
    }
  } else if (selectedCategoryTitle === 'Engineer') {
    if (quizTitleName === 'FrontEnd') {
      viewQuizTitleName = 'フロントエンド';
    } else if (quizTitleName === 'BackEnd') {
      viewQuizTitleName = 'バックエンド';
    }
  }

  return (
    <>
      <div
        onClick={() => {
          setSelectedQuizTitle(quizTitleName), dispatch(questionOpen());
        }}
      >
        <Style>
          <QuizImage image={image} quizTitleName={quizTitleName} />
          <QuizTitle viewQuizTitleName={viewQuizTitleName} />
        </Style>
      </div>
    </>
  );
};
export default Quiz;

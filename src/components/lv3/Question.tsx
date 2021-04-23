import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { questionClose } from '../../actions';
import datas from '../../dataset';
import { QuestionText, QuestionTitle } from '../lv1/_index';
import QuestionAnswers from '../lv2/QuestionAnswers';

type Props = {
  text: string;
  selectedCategoryTitle: string;
  selectedQuizTitle: string;
  setQuizOpen: (param: boolean) => void;
  setCategoryOpen: (param: boolean) => void;
  setScoreOpen: (param: boolean) => void;
};

const Question: React.VFC<Props> = ({
  selectedCategoryTitle,
  selectedQuizTitle,
  setQuizOpen,
  setCategoryOpen,
  setScoreOpen,
}: Props) => {
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const dispatch = useDispatch();

  const questionOpenState = useSelector((state) => state.questionOpenState);
  if (!questionOpenState) {
    return null;
  }

  if (questionNumber >= 4) {
    return null;
  }

  const getQuestion = (): string | null => {
    return datas[selectedCategoryTitle][selectedQuizTitle][0].question;
  };

  const nextQuestionNumber = (): void => {
    if (questionNumber >= 3) {
      dispatch(questionClose());
      setQuizOpen(false);
      setCategoryOpen(false);
      setScoreOpen(true);
    } else {
      setQuestionNumber(questionNumber + 1);
    }
  };

  return (
    <>
      <Style>
        <QuestionTitle selectedQuizTitle={selectedQuizTitle} />
        <QuestionText
          getQuestion={() => getQuestion()}
          questionNumber={questionNumber}
          selectedCategoryTitle={selectedCategoryTitle}
          selectedQuizTitle={selectedQuizTitle}
        />
        <QuestionAnswers
          getQuestion={() => getQuestion()}
          nextQuestionNumber={() => nextQuestionNumber()}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
          selectedCategoryTitle={selectedCategoryTitle}
          selectedQuizTitle={selectedQuizTitle}
        />
      </Style>
    </>
  );
};
export default Question;

const Style = styled.div`
  margin-top: 10px;
`;

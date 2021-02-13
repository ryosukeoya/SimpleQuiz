import React, { useState } from 'react';
import QuestionText from '../lv1/QuestionText';
import QuestionAnswers from '../lv2/QuestionAnswers';
import ReturnQuiz from '../lv1/ReturnQuiz';
import QuestionTitle from '../lv1/QuestionTitle';

import datas from '../../dataset';
import styled from 'styled-components';

interface Props {
  questionOpen: boolean;
  setQuestionOpen: any;
  text: string;
  selectedCategoryTitle: string;
  selectedQuizTitle: string;
}

const Question: React.FC<Props> = ({
  questionOpen,
  setQuestionOpen,
  selectedCategoryTitle,
  selectedQuizTitle,
}: Props) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  if (!questionOpen) {
    return null;
  }
  if (questionNumber >= 4) {
    return null;
  }

  const getQuestion = (): string | null => {
    console.log(questionNumber);
    return datas[selectedCategoryTitle][selectedQuizTitle][0].question;
  };

  const nextQuestionNumber = () => {
    setQuestionNumber(questionNumber + 1);
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
          questionOpen={questionOpen}
          setQuestionOpen={setQuestionOpen}
          getQuestion={() => getQuestion()}
          nextQuestionNumber={() => nextQuestionNumber()}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
          selectedCategoryTitle={selectedCategoryTitle}
          selectedQuizTitle={selectedQuizTitle}
        />
        <ReturnQuiz setQuestionNumber={setQuestionNumber} setQuestionOpen={setQuestionOpen} />
      </Style>
    </>
  );
};
export default Question;

const Style = styled.div`
  margin-top: 60px;
`;

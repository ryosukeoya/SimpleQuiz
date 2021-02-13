import React, { useState } from 'react';
import QuestionText from '../lv1/QuestionText';
import QuestionAnswers from '../lv2/QuestionAnswers';
import ReturnQuiz from '../lv1/ReturnQuiz';
import QuestionTitle from '../lv1/QuestionTitle';
import datas from '../../dataset';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

interface Props {
  text: string;
  selectedCategoryTitle: string;
  selectedQuizTitle: string;
}

const Question: React.FC<Props> = ({ selectedCategoryTitle, selectedQuizTitle }: Props) => {
  const [questionNumber, setQuestionNumber] = useState(0);

  const questionOpenState = useSelector((state) => state.questionOpenState);
  if (!questionOpenState) {
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
          getQuestion={() => getQuestion()}
          nextQuestionNumber={() => nextQuestionNumber()}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
          selectedCategoryTitle={selectedCategoryTitle}
          selectedQuizTitle={selectedQuizTitle}
        />
        <ReturnQuiz setQuestionNumber={setQuestionNumber} />
      </Style>
    </>
  );
};
export default Question;

const Style = styled.div`
  margin-top: 60px;
`;

import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { questionClose } from '../../actions';
import datas from '../../dataset';
import { QuestionText, QuestionTitle, ReturnNavQuiz } from '../lv1/_index';
import QuestionAnswers from '../lv2/QuestionAnswers';
import customMedia from '../../style/customMedia';

type Props = {
  selectedCategoryTitle: string;
  selectedQuizTitle: string;
  setQuizOpen: (param: boolean) => void;
  setCategoryOpen: (param: boolean) => void;
  setSelectedQuizTitle: (param: string) => void;
};

const Question: React.VFC<Props> = ({
  selectedCategoryTitle,
  selectedQuizTitle,
  setQuizOpen,
  setCategoryOpen,
  setSelectedQuizTitle,
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
          selectedCategoryTitle={selectedCategoryTitle}
          selectedQuizTitle={selectedQuizTitle}
        />
        <ReturnNavQuiz
          setQuestionNumber={setQuestionNumber}
          setSelectedQuizTitle={setSelectedQuizTitle}
        />
      </Style>
    </>
  );
};
export default Question;

const Style = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin: 0 auto;
  max-width: 1000px;
  //スマホ
  ${customMedia.lessThan('mobile')`
 /* screen width is less than 599px (tablet) */

`} //タブレット
    ${customMedia.between('mobile', 'tablet')`
 /* screen width is between 599px (tablet) and 1024px (desktop) */
 width:80%;
`} //PC
    ${customMedia.greaterThan('tablet')`
 /* screen width is greater than 1024px (tablet) */
 width:75%;
`}
`;

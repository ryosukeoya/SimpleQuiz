import React, { useState } from 'react';
import QuestionText from './QuestionText';
import QuestionAnswers from './QuestionAnswers';
import datas from '../dataset';

interface Props {
  questionOpen: boolean;
  title: string;
  text: string;
  backTop: VoidFunction;
}

const Question: React.FC<Props> = ({ questionOpen, title, backTop }: Props) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  if (!questionOpen) {
    return null;
  }
  if (questionNumber >= 4) {
    return null;
  }

  const getQuestion = (): string | null => {
    console.log(questionNumber);
    return datas[title][0].question;
  };

  const nextQuestionNumber = () => {
    setQuestionNumber(questionNumber + 1);
  };

  return (
    <>
      <div>{title}</div>
      <QuestionText
        getQuestion={() => getQuestion()}
        title={title}
        questionNumber={questionNumber}
      />
      <QuestionAnswers
        title={title}
        datas={datas}
        backTop={backTop}
        getQuestion={() => getQuestion()}
        nextQuestionNumber={() => nextQuestionNumber()}
      />
    </>
  );
};
export default Question;

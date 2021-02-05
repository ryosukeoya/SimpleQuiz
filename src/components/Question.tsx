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

const Question: React.FC<Props> = ({ questionOpen, title, backTop }) => {
  if (!questionOpen) {
    return null;
  }

  const getQuestion = (): string => {
    if (title === 'Computer') {
      return datas.Computer[0].question;
    } else if (title === 'Finance') {
      return datas.Finance[0].question;
    } else if (title === 'Game') {
      return datas.Game[0].question;
    } else {
      return datas.History[0].question;
    }
  };

  return (
    <>
      <div>{title}</div>
      <QuestionText getQuestion={getQuestion()} />
      <QuestionAnswers
        title={title}
        datas={datas}
        backTop={backTop}
        getQuestion={() => getQuestion()}
      />
    </>
  );
};
export default Question;

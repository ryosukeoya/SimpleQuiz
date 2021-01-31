import React, { useState } from 'react';
import QuestionText from './QuestionText';
import QuestionAnswers from './QuestionAnswers';

interface Props {
  questionOpen: boolean;
  title: string;
  datas: string[];
  text: string;
  backTop: VoidFunction;
}

const Question: React.FC<Props> = ({ questionOpen, title, datas, backTop }) => {
  if (!questionOpen) {
    return null;
  }

  const getQuestion = (): string => {
    if (title === 'Computer Science') {
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
      <QuestionAnswers title={title} datas={datas} backTop={backTop} />
    </>
  );
};
export default Question;

import React from 'react';
import { textSpanContainsTextSpan } from 'typescript';

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

  const getQuestion = () => {
    console.log('getQuestion');
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

  const getTexts = () => {
    console.log('getTexts');
    if (title === 'Computer Science') {
      return datas.Computer[0].answers.map((data) => (
        <div key={data.toString()}>{data}</div>
      ));
    } else if (title === 'Finance') {
      return datas.Finance[0].answers.map((data) => (
        <div key={data.toString()}>{data}</div>
      ));
    } else if (title === 'Game') {
      return datas.Game[0].answers.map((data) => (
        <div key={data.toString()}>{data}</div>
      ));
    } else {
      return datas.History[0].answers.map((data) => (
        <div key={data.toString()}>{data}</div>
      ));
    }
  };

  return (
    <>
      <div>{title}</div>
      <div>{getQuestion()}</div>
      <div>{getTexts()}</div>
      <button>回答する</button> <br />
      <button onClick={backTop}>トップに戻る</button>
    </>
  );
};
export default Question;

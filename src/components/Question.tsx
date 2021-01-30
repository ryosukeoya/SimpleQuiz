import React, { useState } from 'react';
import QuestionText from './QuestionText';
import QuestionAnswers from './QuestionAnswers';
import QuestionAnswer from './QuestionAnswer';

interface Props {
  questionOpen: boolean;
  title: string;
  datas: string[];
  text: string;
  backTop: VoidFunction;
}

const Question: React.FC<Props> = ({ questionOpen, title, datas, backTop }) => {
  const [ansClicked, setAnsClicked] = useState(false);

  if (!questionOpen) {
    return null;
  }

  const clearAnswer = (): void => {
    setAnsClicked(false);
  };

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

  const getAnswer = (): string => {
    if (title === 'Computer Science') {
      return datas.Computer[0].answers.map((data: string) => (
        <QuestionAnswer
          key={data.toString()}
          data={data}
          ansClicked={ansClicked}
          setAnsClicked={setAnsClicked}
        />
      ));
    } else if (title === 'Finance') {
      return datas.Finance[0].answers.map((data: string) => (
        <QuestionAnswer
          key={data.toString()}
          data={data}
          ansClicked={ansClicked}
        />
      ));
    } else if (title === 'Game') {
      return datas.Game[0].answers.map((data: string) => (
        <QuestionAnswer
          key={data.toString()}
          data={data}
          ansClicked={ansClicked}
        />
      ));
    } else {
      return datas.History[0].answers.map((data: string) => (
        <QuestionAnswer
          key={data.toString()}
          data={data}
          ansClicked={ansClicked}
        />
      ));
    }
  };

  return (
    <>
      <div>{title}</div>
      <QuestionText getQuestion={getQuestion()} />
      <QuestionAnswers getAnswer={getAnswer()} />
      <button>回答する</button> <br />
      <button
        onClick={() => {
          backTop();
          clearAnswer();
        }}
      >
        トップに戻る
      </button>
    </>
  );
};
export default Question;

import React, { useState, useEffect } from 'react';
import QuestionAnswer from './QuestionAnswer';
import datas from '../dataset';
// import Modal from '../Modal';
import Modal from './modal/Modal';

interface Props {
  title: string;
  backTop: VoidFunction;
  getQuestion: any;
}

const QuestionAnswers: React.FC<Props> = ({ title, backTop, getQuestion }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectAnswer, setSelectAnswer] = useState('answer');
  const [selectIndex, setSelectIndex] = useState(null);

  const getAnswer = () => {
    if (title === 'Computer') {
      return datas.Computer[0].answers.map((data: string) => (
        <QuestionAnswer
          key={data.toString()}
          data={data}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setSelectAnswer={getSelectAnswer}
        />
      ));
    } else if (title === 'Finance') {
      return datas.Finance[0].answers.map((data: string) => (
        <QuestionAnswer
          key={data.toString()}
          data={data}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setSelectAnswer={getSelectAnswer}
        />
      ));
    } else if (title === 'Game') {
      return datas.Game[0].answers.map((data: string) => (
        <QuestionAnswer
          key={data.toString()}
          data={data}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setSelectAnswer={getSelectAnswer}
        />
      ));
    } else {
      return datas.History[0].answers.map((data: string) => (
        <QuestionAnswer
          key={data.toString()}
          data={data}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setSelectAnswer={getSelectAnswer}
        />
      ));
    }
  };

  const getSelectAnswer = (getData) => {
    setSelectAnswer(getData);
  };
  // useEffect(() => {
  //   console.log(selectAnswer);
  //   console.log(datas.Game[0].answers.indexOf(selectAnswer));
  //   const index = datas.Game[0].answers.indexOf(selectAnswer);
  //   setSelectIndex(index);
  // }, [selectAnswer]);

  //selectAnswerのstateが変わったら呼び出される（後、初回のrender時も）
  useEffect(() => {
    const index = datas[title][0].answers.indexOf(selectAnswer);
    setSelectIndex(index);
  }, [selectAnswer]);

  return (
    <>
      <div>{getAnswer()}</div>
      <button
        onClick={() => {
          backTop();
        }}
      >
        トップに戻る
      </button>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        selectAnswer={selectAnswer}
        title={title}
        selectIndex={selectIndex}
      />
    </>
  );
};
export default QuestionAnswers;

import React, { useState } from 'react';
import QuestionAnswer from './QuestionAnswer';
import datas from '../dataset';
import Modal from '../Modal';

interface Props {
  title: string;
  backTop: VoidFunction;
  getQuestion: any;
}

const QuestionAnswers: React.FC<Props> = ({ title, backTop, getQuestion }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectAnswer, setSelectAnswer] = useState('answer');

  const getAnswer = () => {
    if (title === 'Computer Science') {
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
        getQuestion={getQuestion}
      >
        modal画面
      </Modal>
    </>
  );
};
export default QuestionAnswers;

import React, { useState } from 'react';
import QuestionAnswer from './QuestionAnswer';
import Modal from '../Modal';

interface Props {
  title: string;
  datas: string[];
  backTop: VoidFunction;
}

const QuestionAnswers: React.FC<Props> = ({ title, datas, backTop }) => {
  const [isOpen, setIsOpen] = useState(false);

  const getAnswer = (): string => {
    if (title === 'Computer Science') {
      return datas.Computer[0].answers.map((data: string) => (
        <QuestionAnswer
          key={data.toString()}
          data={data}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      ));
    } else if (title === 'Finance') {
      return datas.Finance[0].answers.map((data: string) => (
        <QuestionAnswer
          key={data.toString()}
          data={data}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      ));
    } else if (title === 'Game') {
      return datas.Game[0].answers.map((data: string) => (
        <QuestionAnswer
          key={data.toString()}
          data={data}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      ));
    } else {
      return datas.History[0].answers.map((data: string) => (
        <QuestionAnswer
          key={data.toString()}
          data={data}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      ));
    }
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
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        modal画面
      </Modal>
    </>
  );
};
export default QuestionAnswers;

import React, { useState, useEffect } from 'react';
import QuestionAnswer from './QuestionAnswer';
import datas from '../dataset';
import Modal from './modal/Modal';

interface Props {
  title: string;
  backTop: VoidFunction;
  getQuestion: any;
}

const QuestionAnswers: React.FC<Props> = ({ title, backTop, getQuestion }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectAnswer, setSelectAnswer] = useState('answer');
  const [selectIndex, setSelectIndex] = useState(null);
  const [modalTitle, setModalTitle] = useState('title');

  //selectAnswerのstateが変わったら呼び出される（後、初回のrender時も）
  useEffect(() => {
    const index = datas[title][0].answers.indexOf(selectAnswer);
    setSelectIndex(index);
    getModalTitle();
  }, [selectAnswer]);

  const getSelectAnswer = (getData) => {
    setSelectAnswer(getData);
  };

  const getData = (title) => {
    return datas[title][0];
  };

  const getModalTitle = () => {
    if (selectAnswer === getData(title).correct) {
      setModalTitle('正解');
    } else {
      setModalTitle('不正解');
    }
  };

  return (
    <>
      {datas[title][0].answers.map((data: string) => (
        <QuestionAnswer
          key={data.toString()}
          data={data}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setSelectAnswer={getSelectAnswer}
          getModalTitle={getModalTitle}
        />
      ))}
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
        modalTitle={modalTitle}
        getData={getData}
      />
    </>
  );
};
export default QuestionAnswers;

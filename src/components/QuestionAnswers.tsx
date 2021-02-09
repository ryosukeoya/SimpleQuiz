import React, { useState, useEffect } from 'react';
import QuestionAnswer from './QuestionAnswer';
import datas from '../dataset';
import Modal from './modal/Modal';

interface Props {
  title: string;
  backTop: VoidFunction;
  getQuestion: () => string | null;
  nextQuestionNumber: Function;
  questionNumber: number;
  setQuestionNumber: any;
}

const QuestionAnswers: React.FC<Props> = ({
  title,
  backTop,
  getQuestion,
  nextQuestionNumber,
  questionNumber,
  setQuestionNumber,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectAnsName, setSelectAnsName] = useState('answer');
  const [selectAnsIndex, setSelectAnsIndex] = useState(null);
  const [modalTitle, setModalTitle] = useState('title');

  //selectAnswerのstateが変わったら呼び出される（後、初回のrender時も）
  useEffect(() => {
    const index = datas[title][questionNumber].answers.indexOf(selectAnsName);
    setSelectAnsIndex(index);
    getModalTitle();
  }, [selectAnsName]);

  //引数getData←data←datas[title][questionNumber].answers.map
  const getSelectAnswer = (getData) => {
    setSelectAnsName(getData);
  };

  const getData = (title) => {
    return datas[title][questionNumber];
  };

  const getModalTitle = () => {
    if (selectAnsName === getData(title).correct) {
      setModalTitle('正解！');
    } else {
      setModalTitle('不正解！');
    }
  };

  return (
    <>
      {datas[title][questionNumber].answers.map((data: string) => (
        <QuestionAnswer
          key={data.toString()}
          data={data}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setSelectAnsName={getSelectAnswer}
          getModalTitle={getModalTitle}
        />
      ))}
      <button
        onClick={() => {
          backTop();
          setQuestionNumber(0);
        }}
      >
        トップに戻る
      </button>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        selectAnsName={selectAnsName}
        title={title}
        selectAnsIndex={selectAnsIndex}
        modalTitle={modalTitle}
        getData={getData}
        getQuestion={getQuestion}
        nextQuestionNumber={nextQuestionNumber}
      />
    </>
  );
};
export default QuestionAnswers;

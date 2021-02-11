import React, { useState, useEffect } from 'react';
import QuestionAnswer from './QuestionAnswer';
import datas from '../dataset';
import Modal from './modal/Modal';

interface Props {
  questionOpen: boolean;
  setQuestionOpen: any;
  getQuestion: () => string | null;
  nextQuestionNumber: Function;
  questionNumber: number;
  setQuestionNumber: any;
  selectedCategoryTitle: string;
  selectedQuizTitle: string;
}

const QuestionAnswers: React.FC<Props> = ({
  questionOpen,
  setQuestionOpen,
  getQuestion,
  nextQuestionNumber,
  questionNumber,
  setQuestionNumber,
  selectedCategoryTitle,
  selectedQuizTitle,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectAnsName, setSelectAnsName] = useState('answer');
  const [selectAnsIndex, setSelectAnsIndex] = useState(null);
  const [modalTitle, setModalTitle] = useState('title');

  //selectAnswerのstateが変わったら呼び出される（後、初回のrender時も）
  useEffect(() => {
    const index = datas[selectedCategoryTitle][selectedQuizTitle][questionNumber].answers.indexOf(
      selectAnsName
    );
    setSelectAnsIndex(index);
    getModalTitle();
  }, [selectAnsName]);

  //引数getData←data←datas[title][questionNumber].answers.map
  const getSelectAnswer = (getQuizData) => {
    setSelectAnsName(getQuizData);
  };

  const getQuizData = () => {
    return datas[selectedCategoryTitle][selectedQuizTitle][questionNumber];
  };

  const getModalTitle = () => {
    if (selectAnsName === getQuizData().correct) {
      setModalTitle('正解！');
    } else {
      setModalTitle('不正解！');
    }
  };

  return (
    <>
      {datas[selectedCategoryTitle][selectedQuizTitle][questionNumber].answers.map(
        (data: string) => (
          <QuestionAnswer
            key={data.toString()}
            data={data}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setSelectAnsName={getSelectAnswer}
            getModalTitle={getModalTitle}
          />
        )
      )}
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        selectAnsName={selectAnsName}
        selectedCategoryTitle={selectedCategoryTitle}
        selectAnsIndex={selectAnsIndex}
        modalTitle={modalTitle}
        getQuizData={getQuizData}
        getQuestion={getQuestion}
        nextQuestionNumber={nextQuestionNumber}
      />
    </>
  );
};
export default QuestionAnswers;

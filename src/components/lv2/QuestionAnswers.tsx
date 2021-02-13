import React, { useState, useEffect } from 'react';
import QuestionAnswer from '../lv1/QuestionAnswer';
import datas from '../../dataset';
import Modal from '../modal/Modal';

interface Props {
  getQuestion: () => string | null;
  nextQuestionNumber: Function;
  questionNumber: number;
  setQuestionNumber: any;
  selectedCategoryTitle: string;
  selectedQuizTitle: string;
}

const QuestionAnswers: React.FC<Props> = ({
  getQuestion,
  nextQuestionNumber,
  questionNumber,
  setQuestionNumber,
  selectedCategoryTitle,
  selectedQuizTitle,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAnsName, setSelectedAnsName] = useState('answer');
  const [selectAnsIndex, setSelectAnsIndex] = useState(null);
  const [modalTitle, setModalTitle] = useState('title');

  //selectAnswerのstateが変わったら呼び出される（後、初回のrender時も）
  useEffect(() => {
    const index = datas[selectedCategoryTitle][selectedQuizTitle][questionNumber].answers.indexOf(
      selectedAnsName
    );
    setSelectAnsIndex(index);
    getModalTitle();
  }, [selectedAnsName]);

  //引数getData←data←datas[title][questionNumber].answers.map
  const getSelectAnswer = (getQuizData) => {
    setSelectedAnsName(getQuizData);
  };

  const getQuizData = () => {
    return datas[selectedCategoryTitle][selectedQuizTitle][questionNumber];
  };

  //selectedAnsName(state)が変わったら呼び出される(useEffect)
  const getModalTitle = () => {
    if (selectedAnsName === getQuizData().correct) {
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
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            setSelectedAnsName={getSelectAnswer}
            getModalTitle={getModalTitle}
          />
        )
      )}
      <Modal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        selectedAnsName={selectedAnsName}
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

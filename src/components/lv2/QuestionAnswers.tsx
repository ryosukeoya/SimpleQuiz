import React, { useState, useEffect } from 'react';
import Modal from '../modal/Modal';
import { useDispatch } from 'react-redux';
import { correctIncrement1 } from '../../actions';
import datas from '../../dataset';
import QuestionAnswer from '../lv1/QuestionAnswer';

type Props = {
  getQuestion: () => string | null;
  nextQuestionNumber: Function;
  questionNumber: number;
  setQuestionNumber: any;
  selectedCategoryTitle: string;
  selectedQuizTitle: string;
};

type quizData = {
  answers: string[];
  correct: string;
  explain: String[];
  question: string;
};

const QuestionAnswers: React.VFC<Props> = ({
  getQuestion,
  nextQuestionNumber,
  questionNumber,
  setQuestionNumber,
  selectedCategoryTitle,
  selectedQuizTitle,
  setCategoryOpen,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAnsName, setSelectedAnsName] = useState('answer');
  const [selectAnsIndex, setSelectAnsIndex] = useState(null);
  const [modalTitle, setModalTitle] = useState('title');
  const dispatch = useDispatch();

  //selectAnswerのstateが変わったら呼び出される（後、初回のrender時も）
  useEffect(() => {
    const index = datas[selectedCategoryTitle][selectedQuizTitle][questionNumber].answers.indexOf(
      selectedAnsName
    );
    setSelectAnsIndex(index);
    getModalTitle();
  }, [selectedAnsName]);

  //引数getData←data←datas[title][questionNumber].answers.map
  const getSelectAnswer = (getQuizData: string) => {
    setSelectedAnsName(getQuizData);
  };

  const getQuizData = (): quizData => {
    console.log(datas[selectedCategoryTitle][selectedQuizTitle][questionNumber]);
    return datas[selectedCategoryTitle][selectedQuizTitle][questionNumber];
  };

  //selectedAnsName(state)が変わったら呼び出される(useEffect)
  //正誤判定
  const getModalTitle = (): void => {
    if (selectedAnsName === getQuizData().correct) {
      setModalTitle('正解！');
      dispatch(correctIncrement1());
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

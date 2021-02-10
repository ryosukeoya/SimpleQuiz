import React, { useState } from 'react';
import datas from '../dataset';
import Question from './Question';
import Quiz from './Quiz';
import TitleQuiz from './TitleQuiz';
import ReturnCategory from './ReturnCategory';
import { Computer, Finance, Game, History } from '../images/CategoryImage';
import FF from '../images/FF.jpg';
import metalGear from '../images/metalGear.jpg';

interface Props {
  quizOpen: boolean;
  selectedCategoryTitle: string;
  setQuizOpen: any;
}

const Quizs = ({ quizOpen, selectedCategoryTitle, setQuizOpen }) => {
  const [selectedQuizTitle, setSelectedQuizTitle] = useState('title');
  const [questionOpen, setQuestionOpen] = useState(false);
  const [text, setText] = useState(null);

  if (!quizOpen) {
    return null;
  }

  const quizStart = (): void => {
    setQuestionOpen(false);
    setQuestionOpen(true);
  };
  const getImage = () => {
    if (selectedCategoryTitle === 'Computer') {
      const image = [Computer];
      return image;
    } else if (selectedCategoryTitle === 'Finance') {
      const image = [Finance];
      return image;
    } else if (selectedCategoryTitle === 'Game') {
      const image = [FF, metalGear];
      return image[i];
    } else if (selectedCategoryTitle === 'History') {
      const image = [History];
      return image;
    }
  };

  let i = -1;

  return (
    <>
      <TitleQuiz questionOpen={questionOpen} />
      {Object.keys(datas[selectedCategoryTitle]).map((data) => {
        i++;
        return (
          <Quiz
            key={data.toString()}
            quizTitleName={data}
            image={getImage()}
            questionOpen={questionOpen}
            quizStart={quizStart}
            setSelectedQuizTitle={setSelectedQuizTitle}
          />
        );
      })}
      <ReturnCategory
        questionOpen={questionOpen}
        setQuestionOpen={setQuestionOpen}
        setQuizOpen={setQuizOpen}
      />
      <Question
        questionOpen={questionOpen}
        setQuestionOpen={setQuestionOpen}
        text={text}
        selectedCategoryTitle={selectedCategoryTitle}
        selectedQuizTitle={selectedQuizTitle}
      />
    </>
  );
};

export default Quizs;

import React, { useState } from 'react';
import datas from '../../dataset';
import Question from './Question';
import Quiz from '../lv2/Quiz';
import TitleQuiz from '../lv1/TitleQuiz';
import ReturnCategory from '../lv1/ReturnCategory';
import { Computer, Anime, Finance, Game, History } from '../../images/_CategoryImages';
import { FF, metalGear, Eva, Re } from '../../images/_QuizImages';

interface Props {
  quizOpen: boolean;
  selectedCategoryTitle: string;
  setQuizOpen: any;
}

const Quizs = ({ quizOpen, selectedCategoryTitle, setQuizOpen }: Props) => {
  const [selectedQuizTitle, setSelectedQuizTitle] = useState('title');
  const [text, setText] = useState(null);

  if (!quizOpen) {
    return null;
  }

  //後でリファクタリング
  const getImage = () => {
    if (selectedCategoryTitle === 'Game') {
      const image = [FF, metalGear];
      return image[i];
    } else if (selectedCategoryTitle === 'Anime') {
      const image = [Eva, Re];
      return image[i];
    } else if (selectedCategoryTitle === 'Computer') {
      const image = [Computer];
      return image;
    } else if (selectedCategoryTitle === 'Finance') {
      const image = [Finance];
      return image;
    } else if (selectedCategoryTitle === 'History') {
      const image = [History];
      return image;
    }
  };

  let i = -1;

  return (
    <>
      <TitleQuiz selectedCategoryTitle={selectedCategoryTitle} />
      {Object.keys(datas[selectedCategoryTitle]).map((data) => {
        i++;
        return (
          <Quiz
            key={data.toString()}
            quizTitleName={data}
            image={getImage()}
            setSelectedQuizTitle={setSelectedQuizTitle}
          />
        );
      })}
      <ReturnCategory setQuizOpen={setQuizOpen} />
      <Question
        text={text}
        selectedCategoryTitle={selectedCategoryTitle}
        selectedQuizTitle={selectedQuizTitle}
      />
    </>
  );
};

export default Quizs;

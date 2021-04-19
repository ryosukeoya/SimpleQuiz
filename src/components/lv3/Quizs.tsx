import React, { useState } from 'react';
import datas from '../../dataset';
import Question from './Question';
import Header from '../lv3/Header';
import Quiz from '../lv2/Quiz';
import TitleQuiz from '../lv1/TitleQuiz';
import ReturnCategorys from '../lv1/ReturnCategorys';
import BreadcrumbList from '../lv1/BreadcrumbList';
import { Computer, Anime, Finance, Game, History } from '../../images/_CategoryImages';
import { FF, metalGear, Eva2, Re, kimetu } from '../../images/_QuizImages';

interface Props {
  quizOpen: boolean;
  selectedCategoryTitle: string;
  setQuizOpen: any;
}

const Quizs = ({ quizOpen, selectedCategoryTitle, setQuizOpen }: Props) => {
  const [selectedQuizTitle, setSelectedQuizTitle] = useState(null);
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
      const image = [kimetu, Eva2, Re];
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
      <Header setSelectedQuizTitle={setSelectedQuizTitle} setQuizOpen={setQuizOpen} />
      <BreadcrumbList
        selectedCategoryTitle={selectedCategoryTitle}
        selectedQuizTitle={selectedQuizTitle}
      />
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
      <ReturnCategorys setQuizOpen={setQuizOpen} />
      <Question
        text={text}
        selectedCategoryTitle={selectedCategoryTitle}
        selectedQuizTitle={selectedQuizTitle}
        setSelectedQuizTitle={setSelectedQuizTitle}
      />
    </>
  );
};

export default Quizs;

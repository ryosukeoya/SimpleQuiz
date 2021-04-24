import React, { useState } from 'react';
import datas from '../../dataset';
import { FF, metalGear, Eva2, Re, kimetu, FrontEnd, BackEnd } from '../../images/_QuizImages';
import { TitleQuiz, ReturnNavCategory, BreadcrumbList } from '../lv1/_index';
import { Quiz } from '../lv2/_index';
import Question from './Question';

type Props = {
  quizOpen: boolean;
  selectedCategoryTitle: string;
  setQuizOpen: (param: boolean) => void;
  setCategoryOpen: (param: boolean) => void;
  selectedQuizTitle: string;
  setSelectedQuizTitle: (param: string) => void;
};

const Quizs: React.VFC<Props> = ({
  quizOpen,
  selectedCategoryTitle,
  setQuizOpen,
  setCategoryOpen,
  selectedQuizTitle,
  setSelectedQuizTitle,
}: Props) => {
  if (!quizOpen) {
    return null;
  }

  const getImage = () => {
    if (selectedCategoryTitle === 'Game') {
      const image = [FF, metalGear];
      return image[i];
    } else if (selectedCategoryTitle === 'Anime') {
      const image = [kimetu, Eva2, Re];
      return image[i];
    } else if (selectedCategoryTitle === 'Engineer') {
      const image = [FrontEnd, BackEnd];
      return image[i];
    }
  };

  let i = -1;

  return (
    <>
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
            selectedCategoryTitle={selectedCategoryTitle}
            image={getImage()}
            setSelectedQuizTitle={setSelectedQuizTitle}
          />
        );
      })}
      <ReturnNavCategory setQuizOpen={setQuizOpen} />
      <Question
        selectedCategoryTitle={selectedCategoryTitle}
        selectedQuizTitle={selectedQuizTitle}
        setQuizOpen={setQuizOpen}
        setCategoryOpen={setCategoryOpen}
        quizOpen={quizOpen}
      />
    </>
  );
};

export default Quizs;

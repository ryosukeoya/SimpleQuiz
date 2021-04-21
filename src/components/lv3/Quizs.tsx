import React, { useState } from 'react';
import datas from '../../dataset';
import { FF, metalGear, Eva2, Re, kimetu, FrontEnd, BackEnd } from '../../images/_QuizImages';
import { TitleQuiz, ReturnNav, BreadcrumbList } from '../lv1/_index';
import { Quiz } from '../lv2/_index';
import Question from './Question';

type Props = {
  quizOpen: boolean;
  selectedCategoryTitle: string;
  setQuizOpen: (param: boolean) => void;
  setCategoryOpen: (param: boolean) => void;
  setScoreOpen: (param: boolean) => void;
  selectedQuizTitle: string;
  setSelectedQuizTitle: (param: string) => void;
};

const Quizs: React.VFC = ({
  quizOpen,
  selectedCategoryTitle,
  setQuizOpen,
  setCategoryOpen,
  setScoreOpen,
  selectedQuizTitle,
  setSelectedQuizTitle,
}: Props) => {
  // const [selectedQuizTitle, setSelectedQuizTitle] = useState('');
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
      <ReturnNav setQuizOpen={setQuizOpen} />
      <Question
        text={text}
        selectedCategoryTitle={selectedCategoryTitle}
        selectedQuizTitle={selectedQuizTitle}
        setSelectedQuizTitle={setSelectedQuizTitle}
        setQuizOpen={setQuizOpen}
        setCategoryOpen={setCategoryOpen}
        setScoreOpen={setScoreOpen}
      />
    </>
  );
};

export default Quizs;

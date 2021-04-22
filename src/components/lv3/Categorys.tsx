import React, { useState } from 'react';
import Category from '../lv2/Category';
import Quizs from './Quizs';
import datas from '../../dataset';
import Title from '../lv1/Title';
import { Anime2, Game, www } from '../../images/_CategoryImages';

type Props = {
  quizOpen: boolean;
  setQuizOpen: (param: boolean) => void;
  categoryOpen: boolean;
  setCategoryOpen: (param: boolean) => void;
  setScoreOpen: (param: boolean) => void;
  selectedQuizTitle: string;
  setSelectedQuizTitle: (param: string) => void;
};

const Categorys: React.VFC = ({
  quizOpen,
  setQuizOpen,
  categoryOpen,
  setCategoryOpen,
  setScoreOpen,
  selectedQuizTitle,
  setSelectedQuizTitle,
}: Props) => {
  if (!categoryOpen) {
    return null;
  }
  const [selectedCategoryTitle, setSelectCategoryTitle] = useState('title');

  //categoryName(data(datasをmapで展開))でstateのcategoryTitleを変更
  const setSlctCategoryTitle = (name: string): void => {
    setSelectCategoryTitle(name);
  };

  const image = [www, Anime2, Game];
  let i = -1;

  return (
    <>
      <Title quizOpen={quizOpen} />
      {Object.keys(datas).map((data) => {
        i++;
        return (
          <Category
            key={data.toString()}
            categoryName={data}
            image={image[i]}
            setSlctCategoryTitle={setSlctCategoryTitle}
            quizOpen={quizOpen}
            setQuizOpen={setQuizOpen}
            setCategoryOpen={setCategoryOpen}
          />
        );
      })}
      <Quizs
        selectedCategoryTitle={selectedCategoryTitle}
        quizOpen={quizOpen}
        setQuizOpen={setQuizOpen}
        setCategoryOpen={setCategoryOpen}
        setScoreOpen={setScoreOpen}
        selectedQuizTitle={selectedQuizTitle}
        setSelectedQuizTitle={setSelectedQuizTitle}
      />
    </>
  );
};

export default Categorys;

import React, { useState } from 'react';
import datas from '../../dataset';
import Quizs from './Quizs';
import Category from '../lv2/Category';
import CategorysTitle from '../lv1/CategorysTitle';
import { Anime2, Game, www } from '../../images/_CategoryImages';

type Props = {
  quizOpen: boolean;
  setQuizOpen: (param: boolean) => void;
  categoryOpen: boolean;
  setCategoryOpen: (param: boolean) => void;
  selectedQuizTitle: string;
  setSelectedQuizTitle: any;
};

const Categorys: React.VFC<Props> = ({
  quizOpen,
  setQuizOpen,
  categoryOpen,
  setCategoryOpen,
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
      <CategorysTitle quizOpen={quizOpen} />
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
        selectedQuizTitle={selectedQuizTitle}
        setSelectedQuizTitle={setSelectedQuizTitle}
      />
    </>
  );
};

export default Categorys;

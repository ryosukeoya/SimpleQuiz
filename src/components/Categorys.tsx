import React, { useState } from 'react';
import Category from './Category';
import Quizs from './Quizs';
import datas from '../dataset';
import Title from './Title';
import { Computer, Finance, Game, History } from '../images/CategoryImage';

interface Props {
  quizOpen: boolean;
  setQuizOpen: Function;
}

const Categorys: React.FC = ({ quizOpen, setQuizOpen }: Props) => {
  const [selectedCategoryTitle, setSelectCategoryTitle] = useState('title');

  //categoryNameでstateのcategoryTitleを変更
  const setSlctCategoryTitle = (name: string): void => {
    setSelectCategoryTitle(name);
  };

  const image = [Game, Computer, Finance, History];
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
          />
        );
      })}
      <Quizs
        selectedCategoryTitle={selectedCategoryTitle}
        quizOpen={quizOpen}
        setQuizOpen={setQuizOpen}
      />
    </>
  );
};

export default Categorys;

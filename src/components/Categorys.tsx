import React, { useState } from 'react';
import Category from './Category';
import Quizs from './Quizs';
import datas from '../dataset';
import Computer from '../images/computer.jpg';
import Finance from '../images/finance.jpg';
import Game from '../images/game2.jpg';
import History from '../images/history.jpg';
import Title from './Title';

const Categorys = () => {
  const [selectCategoryTitle, setSelectCategoryTitle] = useState('title');
  const [categoryClose, setCategoryClose] = useState(false);

  //categoryNameでstateのcategoryTitleを変更
  const setSlctCategoryTitle = (name: string): void => {
    setSelectCategoryTitle(name);
  };

  const image = [Computer, Finance, Game, History];
  let i = -1;

  return (
    <>
      <Title categoryClose={categoryClose} />
      {Object.keys(datas).map((data) => {
        i++;
        return (
          <Category
            key={data.toString()}
            categoryName={data}
            image={image[i]}
            setSlctCategoryTitle={setSlctCategoryTitle}
            categoryClose={categoryClose}
            setCategoryClose={setCategoryClose}
          />
        );
      })}
      <Quizs selectCategoryTitle={selectCategoryTitle} categoryClose={categoryClose} />
    </>
  );
};

export default Categorys;

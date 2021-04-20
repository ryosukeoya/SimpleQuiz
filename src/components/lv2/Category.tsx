import React, { useState } from 'react';
import CategoryImage from '../lv1/CategoryImage';
import CategoryTitle from '../lv1/CategoryTitle';
import Style from '../../style/QuizStyle';

type Props = {
  categoryName: string;
  image: any;
  quizOpen: boolean;
  quizStart: VoidFunction;
  setSlctCategoryTitle: (name: string) => void;
  setQuizOpen: any;
  setCategoryOpen: (param: boolean) => void;
};

const Category: React.VFC = ({
  categoryName,
  image,
  setSlctCategoryTitle,
  quizOpen,
  setQuizOpen,
  setCategoryOpen,
}: Props) => {
  if (quizOpen) {
    return null;
  }

  //   const changeText = (texta: string): void => {./
  //     setText(texta);
  //   };

  return (
    <>
      <div
        onClick={() => {
          setSlctCategoryTitle(categoryName), setQuizOpen(!quizOpen);
        }}
      >
        <Style>
          <CategoryImage image={image} categoryName={categoryName} />
          <CategoryTitle categoryName={categoryName} />
        </Style>
      </div>
    </>
  );
};
export default Category;

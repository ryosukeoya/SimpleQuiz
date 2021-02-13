import React, { useState } from 'react';
import CategoryImage from '../lv1/CategoryImage';
import CategoryTitle from '../lv1/CategoryTitle';
import Style from '../../style/QuizStyle';

interface Props {
  categoryName: string;
  image: any;
  quizOpen: boolean;
  quizStart: VoidFunction;
  setSlctCategoryTitle: (name: string) => void;
  setQuizOpen: any;
}

const Category: React.FC = ({
  categoryName,
  image,
  setSlctCategoryTitle,
  quizOpen,
  setQuizOpen,
}) => {
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

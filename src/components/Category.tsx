import React, { useState } from 'react';
import CategoryImage from './CategoryImage';
import CategoryTitle from './CategoryTitle';
import Style from '../style/QuizStyle';

interface Props {
  categoryName: string;
  image: any;
  quizOpen: boolean;
  quizStart: VoidFunction;
  setSlctCategoryTitle: (name: string) => void;
  setCategoryClose: any;
}

const Category: React.FC = ({
  categoryName,
  image,
  setSlctCategoryTitle,
  categoryClose,
  setCategoryClose,
}) => {
  if (categoryClose) {
    return null;
  }

  //   const changeText = (texta: string): void => {./
  //     setText(texta);
  //   };

  return (
    <>
      <div
        onClick={() => {
          setSlctCategoryTitle(categoryName), setCategoryClose(!categoryClose);
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

import React from 'react';
import CategoryImage from '../lv1/CategoryImage';
import CategoryTitle from '../lv1/CategoryTitle';
import BoxStyle from '../../style/BoxStyle';

type Props = {
  categoryName: string;
  image: any;
  quizOpen: boolean;
  setSlctCategoryTitle: (name: string) => void;
  setQuizOpen: any;
  setCategoryOpen: (param: boolean) => void;
};

const Category: React.VFC<Props> = ({
  categoryName,
  image,
  setSlctCategoryTitle,
  quizOpen,
  setQuizOpen,
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
        <BoxStyle>
          <CategoryImage image={image} categoryName={categoryName} />
          <CategoryTitle categoryName={categoryName} />
        </BoxStyle>
      </div>
    </>
  );
};
export default Category;

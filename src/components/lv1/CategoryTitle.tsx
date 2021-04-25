import React from 'react';
import TitleStyle from '../../style/QuizTitleStyle';

type Props = {
  categoryName: string;
};

const CategoryTitle: React.VFC<Props> = ({ categoryName }: Props) => {
  let Title: String = '';
  if (categoryName === 'Anime') {
    Title = 'アニメ';
  } else if (categoryName === 'Engineer') {
    Title = 'エンジニア';
  } else if (categoryName === 'Game') {
    Title = 'ゲーム';
  }

  return <TitleStyle>{Title}</TitleStyle>;
};

export default CategoryTitle;

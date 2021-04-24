import React, { useState } from 'react';
import Style from '../../style/QuizTitleStyle';

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

  return <Style>{Title}</Style>;
};

export default CategoryTitle;

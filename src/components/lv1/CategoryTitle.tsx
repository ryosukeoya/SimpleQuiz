import React, { useState } from 'react';
import Style from '../../style/QuizTitleStyle';

type Props = {
  categoryName: string;
};

const CategoryTitle: React.VFC<Props> = ({ categoryName }: Props) => {
  let Title: String = '';
  if (categoryName === 'Game') {
    Title = 'ゲーム';
  } else if (categoryName === 'Anime') {
    Title = 'アニメ';
  } else if (categoryName === 'Engineer') {
    Title = 'エンジニアクイズ';
  }
  return <Style>{Title}</Style>;
};

export default CategoryTitle;

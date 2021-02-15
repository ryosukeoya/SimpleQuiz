import React from 'react';
import { useSelector } from 'react-redux';
import Style from '../../style/TitleStyle';

interface Props {
  selectedCategoryTitle: string;
}

const TitleQuiz = ({ selectedCategoryTitle }: Props) => {
  const questionOpenState = useSelector((state) => state.questionOpenState);
  if (questionOpenState) {
    return null;
  }
  return <Style>{selectedCategoryTitle}クイズ一覧</Style>;
};

export default TitleQuiz;

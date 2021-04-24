import React from 'react';
import { useSelector } from 'react-redux';
import TitleStyle from '../../style/TitleStyle';

type Props = {
  selectedCategoryTitle: string;
};

const TitleQuiz: React.VFC<Props> = ({ selectedCategoryTitle }: Props) => {
  const questionOpenState = useSelector((state) => state.questionOpenState);
  if (questionOpenState) {
    return null;
  }
  return (
    <TitleStyle color={'#1d4154'} fontSize={'1.2rem'} marginTop={'0px'}>
      {selectedCategoryTitle}クイズ一覧
    </TitleStyle>
  );
};

export default TitleQuiz;

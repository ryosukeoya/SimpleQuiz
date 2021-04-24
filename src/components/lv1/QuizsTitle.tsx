import React from 'react';
import { useSelector } from 'react-redux';
import TitleStyle from '../../style/TitleStyle';

type Props = {
  selectedCategoryTitle: string;
};

const QuizsTitle: React.VFC<Props> = ({ selectedCategoryTitle }: Props) => {
  const questionOpenState = useSelector((state) => state.questionOpenState);
  if (questionOpenState) {
    return null;
  }
  let selectedQuizsTitleName: string = '';
  if (selectedCategoryTitle === 'Engineer') {
    selectedQuizsTitleName = 'エンジニア';
  } else if (selectedCategoryTitle === 'Anime') {
    selectedQuizsTitleName = 'アニメ';
  } else if (selectedCategoryTitle === 'Game') {
    selectedQuizsTitleName = 'ゲーム';
  }

  return (
    <TitleStyle color={'#1d4154'} fontSize={'1.2rem'} marginTop={'0px'}>
      {selectedQuizsTitleName}クイズ一覧
    </TitleStyle>
  );
};

export default QuizsTitle;

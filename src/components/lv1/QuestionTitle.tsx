import React from 'react';
import TitleStyle from '../../style/TitleStyle';

type Props = {
  selectedQuizTitle: string;
};

const QuestionTitle: React.VFC<Props> = ({ selectedQuizTitle }: Props) => {
  let selectedQuizTitleName: string = '';
  if (selectedQuizTitle === 'FrontEnd') {
    selectedQuizTitleName = 'フロントエンド';
  } else if (selectedQuizTitle === 'BackEnd') {
    selectedQuizTitleName = 'バックエンド';
  } else if (selectedQuizTitle === 'Kimetu') {
    selectedQuizTitleName = '鬼滅の刃';
  } else if (selectedQuizTitle === 'Eva') {
    selectedQuizTitleName = 'エヴァンゲリオン';
  } else if (selectedQuizTitle === 'FF10') {
    selectedQuizTitleName = 'FF10';
  }

  return (
    <TitleStyle color={'#1d4154'} fontSize={'1.2rem'} marginTop={'15px'}>
      {selectedQuizTitleName}クイズ
    </TitleStyle>
  );
};

export default QuestionTitle;

import React from 'react';
import TitleStyle from '../../style/TitleStyle';
import styled from 'styled-components';
import customMedia from '../../style/customMedia';

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
    <TitleStyle color={'#1d4154'} fontSize={'1.2rem'} marginTop={'17px'}>
      <Responsive>{selectedQuizTitleName}クイズ</Responsive>
    </TitleStyle>
  );
};

export default QuestionTitle;

const Responsive = styled.div`
  ${customMedia.lessThan('mobile')`
/* screen width is less than 599px (tablet) */
`}

  ${customMedia.between('mobile', 'tablet')`
/* screen width is between 599px (tablet) and 1024px (desktop) */
`}

${customMedia.greaterThan('tablet')`
/* screen width is greater than 1024px (tablet) */
  font-size:1.5rem
`}
`;

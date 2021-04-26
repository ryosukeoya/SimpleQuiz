import React from 'react';
import { useSelector } from 'react-redux';
import TitleStyle from '../../style/TitleStyle';
import styled from 'styled-components';
import customMedia from '../../style/customMedia';

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
    <TitleStyle color={'#1d4154'} fontSize={'1.2rem'} marginTop={'17px'}>
      <Responsive>{selectedQuizsTitleName}クイズ一覧</Responsive>
    </TitleStyle>
  );
};

export default QuizsTitle;

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

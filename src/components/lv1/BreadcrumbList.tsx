import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import customMedia from '../../style/customMedia';

type Props = {
  selectedCategoryTitle: string;
  selectedQuizTitle: string | null;
};

//パンくずリスト
const BreadcrumbList: React.VFC<Props> = ({ selectedCategoryTitle, selectedQuizTitle }: Props) => {
  const questionOpenState = useSelector((state) => state.questionOpenState);

  let listName: string = '';
  if (selectedCategoryTitle === 'Engineer') {
    if (selectedQuizTitle === 'FrontEnd') {
      listName = 'フロントエンド';
    } else if (selectedQuizTitle === 'BackEnd') {
      listName = 'バックエンド';
    }
  } else if (selectedCategoryTitle === 'Anime') {
    if (selectedQuizTitle === 'Kimetu') {
      listName = '鬼滅の刃';
    } else if (selectedQuizTitle === 'Eva') {
      listName = 'エヴァンゲリオン';
    }
  } else if (selectedCategoryTitle === 'Game') {
    if (selectedQuizTitle === 'FF10') {
      listName = 'FF10';
    }
  }

  if (questionOpenState) {
    return (
      <Style>
        Home{'>'}
        {selectedCategoryTitle}カテゴリ
        <UnderLine>{selectedQuizTitle === '' ? '' : `>${listName}クイズ`}</UnderLine>
      </Style>
    );
  } else {
    return (
      <Style>
        Home{'>'}
        <UnderLine>{selectedCategoryTitle}カテゴリ</UnderLine>
        {selectedQuizTitle === '' ? '' : ` > ${listName}クイズ`}
      </Style>
    );
  }
};

export default BreadcrumbList;

const Style = styled.div`
  font-size: 0.8rem;
  color: #4d4d4d;
  margin-top: 60px;
  margin-bottom: 10px;
  //スマホ
  ${customMedia.lessThan('mobile')`
    /* screen width is less than 599px (tablet) */

  `}

  //タブレット
  ${customMedia.between('mobile', 'tablet')`
    /* screen width is between 599px (tablet) and 1024px (desktop) */
  `}
  //PC
  ${customMedia.greaterThan('tablet')`
    /* screen width is greater than 1024px (tablet) */
    margin-top:72px;
  `}
`;

const UnderLine = styled.div`
  display: inline-block;
  text-decoration: underline rgb(180, 180, 180, 0.5);
`;

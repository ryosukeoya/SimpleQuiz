import React from 'react';
import styled from 'styled-components';

type Props = {
  selectedCategoryTitle: string;
  selectedQuizTitle: string | null;
};

//パンくずリスト
const BreadcrumbList: React.VFC<Props> = ({ selectedCategoryTitle, selectedQuizTitle }: Props) => {
  return (
    <Style>
      Home{'>'}
      {selectedCategoryTitle}カテゴリ
      {selectedQuizTitle === null ? '' : `>${selectedQuizTitle}クイズ`}
    </Style>
  );
};

export default BreadcrumbList;

const Style = styled.div`
  font-size: 0.8rem;
  color: #4d4d4d;
  margin-top: 60px;
  margin-bottom: 10px;
`;

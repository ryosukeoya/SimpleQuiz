import React from 'react';
import TitleStyle from '../../style/TitleStyle';
import styled from 'styled-components';
import customMedia from '../../style/customMedia';

type Props = {
  quizOpen: boolean;
};

const CategorysTitle: React.VFC<Props> = ({ quizOpen }: Props) => {
  if (quizOpen) {
    return null;
  }

  return (
    <>
      <TitleStyle color={'#2b546a'} fontSize={'1.3rem'} marginTop={'83px'}>
        <Responsive>カテゴリ一覧</Responsive>
      </TitleStyle>
    </>
  );
};

export default CategorysTitle;

const Responsive = styled.div`
  ${customMedia.lessThan('mobile')`
/* screen width is less than 599px (tablet) */
`}

  ${customMedia.between('mobile', 'tablet')`
/* screen width is between 599px (tablet) and 1024px (desktop) */
`}

${customMedia.greaterThan('tablet')`
/* screen width is greater than 1024px (tablet) */
  margin-top:100px;
  font-size:1.5rem
`}
`;

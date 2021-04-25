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
      <Responsive>
        <TitleStyle color={'#2b546a'} fontSize={'1.3rem'} marginTop={'83px'}>
          カテゴリ一覧
        </TitleStyle>
      </Responsive>
    </>
  );
};

export default CategorysTitle;

const Responsive = styled.div`
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
  margin-top:100px
`}
`;

import React from 'react';
import TitleStyle from '../../style/TitleStyle';

type Props = {
  quizOpen: boolean;
};

const Title: React.VFC = ({ quizOpen }: Props) => {
  if (quizOpen) {
    return null;
  }

  return (
    <TitleStyle color={'#2b546a'} fontSize={'1.3rem'} marginTop={'60px'}>
      カテゴリ一覧
    </TitleStyle>
  );
};

export default Title;

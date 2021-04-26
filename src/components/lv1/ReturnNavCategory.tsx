import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import customMedia from '../../style/customMedia';

type Props = {
  setQuizOpen: (param: boolean) => void;
};

const ReturnNavCategory: React.VFC<Props> = ({ setQuizOpen }: Props) => {
  const questionOpenState = useSelector((state) => state.questionOpenState);
  if (questionOpenState) {
    return null;
  }
  const element = '< カテゴリ一覧へ';

  return (
    <div>
      <Style
        onClick={() => {
          setQuizOpen(false);
        }}
      >
        {element}
      </Style>
    </div>
  );
};

export default ReturnNavCategory;

const Style = styled.div`
  color: #2c8fd1;
  text-decoration: underline;
  margin-top: 12px;
  cursor: pointer;
  //スマホ
  ${customMedia.lessThan('mobile')`
    /* screen width is less than 599px (tablet) */
  `}

  //タブレット
  ${customMedia.between('mobile', 'tablet')`
    /* screen width is between 599px (tablet) and 1024px (desktop) */
    width:70%;
    margin:0 auto;
  `}
  //PC
  ${customMedia.greaterThan('tablet')`
    /* screen width is greater than 1024px (tablet) */
    // margin: 1.6vh 4vw;
    width:70%;
    margin:0 auto;
  `}
`;

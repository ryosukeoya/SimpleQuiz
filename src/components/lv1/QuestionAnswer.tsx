import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import customMedia from '../../style/customMedia';

type Props = {
  data: string;
  setModalOpen: (param: boolean) => void;
  setSelectedAnsName: (param: string) => void;
  i: number;
};

const QuestionAnswer: React.VFC<Props> = ({ data, setModalOpen, setSelectedAnsName, i }: Props) => {
  const [blue, setBlue] = useState(false);

  let floatRight = '';
  if (i === 1) {
    floatRight = 'right';
  } else if (i === 3) {
    floatRight = 'right';
  }

  return (
    <Style
      floatRight={floatRight}
      onClick={() => {
        setBlue(!blue);
        setModalOpen(true);
        setSelectedAnsName(data);
      }}
      blue={blue}
    >
      {data}
    </Style>
  );
};

export default QuestionAnswer;

type Color = {
  blue?: boolean;
  floatRight?: string;
};

const Style = styled.button<Color>`
  float: ${(props) => props.floatRight};
  width: 100%;
  padding: 30px 0;
  margin-bottom: 5px;
  background-color: white;
  color: #1976d2;
  border: 0.7px solid rgba(82, 83, 85, 0.3);
  cursor: pointer;
  //stateのblue(引数のblue)がtrueだったら
  ${({ blue }) =>
    blue
      ? css`
          background-color: #1976d2;
          color: white;
        `
      : ''}

  //スマホ
  ${customMedia.lessThan('mobile')`
    /* screen width is less than 599px (tablet) */

  `}

  //タブレット
  ${customMedia.between('mobile', 'tablet')`
    /* screen width is between 599px (tablet) and 1024px (desktop) */
    height:120px;
    width:45%;
    padding:10px;
  `}
  //PC
  ${customMedia.greaterThan('tablet')`
    /* screen width is greater than 1024px (tablet) */
    height:120px;
    width:45%;
    padding:10px;
    // margin-right:8vw;

    margin-bottom:2vh
  `}
`;

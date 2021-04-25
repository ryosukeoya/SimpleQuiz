import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import customMedia from '../../style/customMedia';

type Props = {
  data: string;
  setModalOpen: (param: boolean) => void;
  setSelectedAnsName: (param: string) => void;
};

const QuestionAnswer: React.VFC<Props> = ({ data, setModalOpen, setSelectedAnsName }: Props) => {
  const [blue, setBlue] = useState(false);

  return (
    <Style
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
};

const Style = styled.button<Color>`
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
  `}
  //PC
  ${customMedia.greaterThan('tablet')`
    /* screen width is greater than 1024px (tablet) */
    height:120px;
    width:47%;
    padding:10px;
    margin-right:2vw;
    margin-bottom:2vh
  `}
`;

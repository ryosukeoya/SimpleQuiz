import React from 'react';
import styled from 'styled-components';
import customMedia from '../../style/customMedia';
import { useDispatch } from 'react-redux';
import { scoreOpen } from '../../actions';

type Props = {
  setModalOpen: (param: boolean) => void;
  nextQuestionNumber: () => void;
  questionNumber: number;
};

const NextButton: React.VFC<Props> = ({
  setModalOpen,
  nextQuestionNumber,
  questionNumber,
}: Props) => {
  const dispatch = useDispatch();
  const changeScoreOpenState = () => {
    if (questionNumber >= 3) {
      dispatch(scoreOpen());
    }
  };
  return (
    <Style
      onClick={() => {
        nextQuestionNumber(), setModalOpen(false), changeScoreOpenState();
      }}
    >
      次の問題へ
    </Style>
  );
};

export default NextButton;

const Style = styled.div`
  position: inline-block;
  padding: 11px;
  background-color: #1976d2;
  color: white;
  border-radius: 10px;
  margin-top: 10%;
  cursor: pointer;
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

  `}
`;

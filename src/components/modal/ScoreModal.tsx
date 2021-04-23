import React from 'react';
import styled from 'styled-components';
import customMedia from '../../style/customMedia';
import { CSSTransition } from 'react-transition-group';
import './Modal.css';
import Score from '../lv1/Score';
import { useSelector } from 'react-redux';

type Props = {
  setCategoryOpen: (param: boolean) => void;
};

const ScoreModal: React.VFC = ({ setCategoryOpen }: Props) => {
  console.log('a');
  const scoreOpenState = useSelector((state) => state.scoreOpenState);
  if (!scoreOpenState) {
    return null;
  }
  console.log('scoreModalが開いた！');
  return (
    <CSSTransition
      in={scoreOpenState}
      timeout={{ enter: 0, exit: 400 }}
      unmountOnExit
      classNames="overlay_styles2"
    >
      <OVERLAY_STYLES>
        <MODAL_STYLES className="modal_style2">
          <Score setCategoryOpen={setCategoryOpen} />
        </MODAL_STYLES>
      </OVERLAY_STYLES>
    </CSSTransition>
  );
};

export default ScoreModal;

const MODAL_STYLES = styled.div`
  position: fixed;
  background-color: #fff;
  padding: 50px;
  z-index: 1000;
  color: red;
  border-radius: 10px;
  /* transition-delay: 0.5s; */

  //スマホ
  ${customMedia.lessThan('mobile')`
    /* screen width is less than 599px (tablet) */
    height:50vh;
    width:80vw;
    padding: 5vw;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
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

const OVERLAY_STYLES = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

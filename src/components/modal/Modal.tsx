import React from 'react';
import ModalText from './ModalText';
import NextButton from './NextButton';
import ModalTitle from './ModalTitle';
import styled from 'styled-components';
import customMedia from '../../style/customMedia';
import { CSSTransition } from 'react-transition-group';
import './Modal.css';

interface Props {
  modalOpen: boolean;
  setModalOpen: Function;
  selectedAnsName: string;
  selectedCategoryTitle: string;
  selectAnsIndex: any;
  modalTitle: string;
  getQuizData: () => any;
  getQuestion: () => string | null;
  nextQuestionNumber: Function;
}
//Portals
const Modal: React.FC<Props> = ({
  modalOpen,
  setModalOpen,
  selectedCategoryTitle,
  selectAnsIndex,
  modalTitle,
  getQuizData,
  getQuestion,
  nextQuestionNumber,
}: Props) => {
  return (
    // modalアニメーション　modalOpen->trueなら呼ばれる
    <CSSTransition
      in={modalOpen}
      timeout={{ enter: 0, exit: 500 }}
      unmountOnExit
      classNames="overlay_styles"
    >
      <OVERLAY_STYLES>
        <MODAL_STYLES className="modal_style">
          <ModalTitle modalTitle={modalTitle} />
          <ModalText
            getQuizData={getQuizData}
            selectAnsIndex={selectAnsIndex}
            selectedCategoryTitle={selectedCategoryTitle}
          />
          <NextButton
            setModalOpen={setModalOpen}
            getQuestion={getQuestion}
            nextQuestionNumber={nextQuestionNumber}
          />
        </MODAL_STYLES>
      </OVERLAY_STYLES>
    </CSSTransition>
  );
};

export default Modal;

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

import React from 'react';
import Text from './ModalText';
import NextButton from './NextButton';
import ModalTitle from './ModalTitle';
import styled from 'styled-components';
import customMedia from '../../style/customMedia';
// import './Modal.css';

interface Props {
  open: boolean;
  onClose: () => void;
  selectAnswer: string;
  title: string;
  selectIndex: number;
  modalTitle: string;
  getData: (title: string) => any;
  getQuestion: () => string | null;
  nextQuestionNumber: Function;
}

const Modal: React.FC<Props> = ({
  open,
  onClose,
  selectAnswer,
  title,
  selectIndex,
  modalTitle,
  getData,
  getQuestion,
  nextQuestionNumber,
}: Props) => {
  if (!open) return null;

  return (
    <OVERLAY_STYLES className="overlay_styles" onClick={onClose}>
      <MODAL_STYLES className="modal_styles">
        <ModalTitle modalTitle={modalTitle} />
        <Text
          getData={getData}
          selectAnswer={selectAnswer}
          selectIndex={selectIndex}
          title={title}
        />
        <NextButton
          onClose={onClose}
          getQuestion={getQuestion}
          nextQuestionNumber={nextQuestionNumber}
        />
      </MODAL_STYLES>
    </OVERLAY_STYLES>
  );
};

export default Modal;

const MODAL_STYLES = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 50px;
  z-index: 1000;
  color: red;
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
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

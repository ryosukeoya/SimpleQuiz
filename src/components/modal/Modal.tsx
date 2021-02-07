import React from 'react';
import Text from './ModalText';
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
}

const Modal: React.FC<Props> = ({
  open,
  onClose,
  selectAnswer,
  title,
  selectIndex,
  modalTitle,
  getData,
}: Props) => {
  if (!open) return null;

  return (
    <OVERLAY_STYLES className="overlay_styles" onClick={onClose}>
      <MODAL_STYLES className="modal_styles">
        <div>{modalTitle}</div>
        <Text
          getData={getData}
          selectAnswer={selectAnswer}
          selectIndex={selectIndex}
          title={title}
        />
        <button onClick={onClose}>次の問題へ</button>
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
    width:90vw;
    padding: 0;
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
